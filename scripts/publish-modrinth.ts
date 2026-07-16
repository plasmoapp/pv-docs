import { modrinthProject } from '../.vitepress/data/project.ts'
import { renderPage } from './platform.ts'

const API = 'https://api.modrinth.com/v2'
const USER_AGENT = 'plasmoapp/pv-docs (description sync)'

const dryRun = process.argv.includes('--dry-run')

const token = process.env.MODRINTH_TOKEN
if (!token && !dryRun) {
  console.error('MODRINTH_TOKEN is not set')
  process.exit(1)
}

const body = renderPage('modrinth')

const current = await fetch(`${API}/project/${modrinthProject}`, {
  headers: { 'User-Agent': USER_AGENT },
})
if (!current.ok) {
  console.error(`failed to fetch project: ${current.status} ${await current.text()}`)
  process.exit(1)
}

if ((await current.json()).body.trim() === body.trim()) {
  console.log('Modrinth description already up to date, nothing to do')
  process.exit(0)
}

if (dryRun) {
  console.log('Modrinth description differs, would update (dry run)')
  process.exit(0)
}

const res = await fetch(`${API}/project/${modrinthProject}`, {
  method: 'PATCH',
  headers: {
    Authorization: token!,
    'Content-Type': 'application/json',
    'User-Agent': USER_AGENT,
  },
  body: JSON.stringify({ body }),
})

if (!res.ok) {
  console.error(`failed to update project: ${res.status} ${await res.text()}`)
  process.exit(1)
}

console.log('Modrinth description updated')
