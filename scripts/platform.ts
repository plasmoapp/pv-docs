import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  addonsByType,
  githubLink,
  primaryLink,
  type Addon,
  type AddonType,
} from '../.vitepress/data/addons.ts'
import { badges, logo, navLinks } from '../.vitepress/data/project.ts'

const SITE = 'https://plasmovoice.com'

// the same body index.md includes
const DESCRIPTION = resolve(dirname(fileURLToPath(import.meta.url)), '../parts/description.md')

// both platforms render markdown tables with sized <img>, so add-on tables only differ in which link they prefer
export type Platform = 'modrinth' | 'curseforge'

export const platforms: Platform[] = ['modrinth', 'curseforge']

// add-ons that aren't published on a platform fall back to their primary link
function platformLink(addon: Addon, platform: Platform): string {
  const link = addon.links.find((link) => link.type === platform)

  return (link ?? primaryLink(addon)).url
}

function addonIcon(addon: Addon): string {
  const src = addon.icon.startsWith('/') ? `${SITE}${addon.icon}` : addon.icon

  return `<img src="${src}" width="96" alt="${addon.name}">`
}

// platforms can't render the badge or the warning block, so it goes inline
function addonSummary(addon: Addon): string {
  const summary = addon.summary.replace(/\.$/, '')

  if (!addon.thirdParty) {
    return summary
  }

  const github = githubLink(addon)
  const report = github ? `[${addon.name} GitHub](${github.url})` : `${addon.name} GitHub`

  return `${summary}. Third-party add-on. Issues should be reported on the ${report}`
}

export function renderAddons(platform: Platform, ...types: AddonType[]): string {
  const rows = addonsByType(...types).map((addon) => {
    const url = platformLink(addon, platform)

    return `| [${addonIcon(addon)}](${url}) | [${addon.name}](${url}) | ${addonSummary(addon)} |`
  })

  return ['| Icon | Add-on | Description |', '| --- | --- | --- |', ...rows].join('\n')
}

// curseforge drops align and mangles the margins around a <div>, so it gets a flat header
export function renderHeader(platform: Platform): string {
  if (platform === 'curseforge') {
    const nav = navLinks.map((link) => `[${link.label}](${link.url})`).join(' | ')

    return [badges.join('\n'), `![Plasmo Voice Logo](${logo})`, nav].join('\n\n')
  }

  const nav = navLinks
    .map((link) => `    <a href="${link.url}">${link.label}</a>`)
    .join('\n    <span> | </span>\n')

  const centered = [
    '<div align="center">',
    `  <img src="${logo}" alt="Plasmo Voice Logo">`,
    '  <div>',
    nav,
    '  </div>',
    '</div>',
  ].join('\n')

  return [badges.join('\n'), centered].join('\n\n')
}

function renderBody(platform: Platform): string {
  const types = (value: string) => value.split(',').map((type) => type.trim()) as AddonType[]

  return readFileSync(DESCRIPTION, 'utf8')
    .replace(/<AddonTable\s+types="([^"]+)"\s*\/>/g, (_, value) =>
      renderAddons(platform, ...types(value)),
    )
    // the docs site serves these, the platforms need them absolute
    .replace(/\]\((\/[^)]+)\)/g, `](${SITE}$1)`)
    .replace(/src="(\/[^"]+)"/g, `src="${SITE}$1"`)
    .trim()
}

export function renderPage(platform: Platform): string {
  return `${[renderHeader(platform), renderBody(platform)].join('\n\n')}\n`
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const platform = process.argv[2] as Platform

  if (!platforms.includes(platform)) {
    console.error(`usage: platform.ts <${platforms.join('|')}>`)
    process.exit(1)
  }

  process.stdout.write(renderPage(platform))
}
