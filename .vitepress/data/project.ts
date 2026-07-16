export interface NavLink {
  label: string
  url: string
}

// wide banner for platform descriptions; the docs site uses /logo512.png instead
export const logo = 'https://imgur.com/3ccgCRz.png'

export const badges = [
  '[![Latest release](https://img.shields.io/github/release/plasmoapp/plasmo-voice.svg)](https://github.com/plasmoapp/plasmo-voice/releases/latest)',
  '[![Discord](http://img.shields.io/discord/833693644501286993?label=Discord&style=flat&logo=discord)](https://discord.gg/uueEqzwCJJ)',
]

// nav row at the top of every platform description
export const navLinks: NavLink[] = [
  { label: 'Modrinth', url: 'https://modrinth.com/mod/plasmo-voice' },
  { label: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/plasmo-voice' },
  { label: 'GitHub', url: 'https://github.com/plasmoapp/plasmo-voice' },
  { label: 'Documentation', url: 'https://plasmovoice.com' },
  { label: 'Addons', url: 'https://plasmovoice.com/docs/addons/' },
  { label: 'Discord', url: 'https://discord.com/invite/uueEqzwCJJ' },
  { label: 'Patreon', url: 'https://www.patreon.com/plasmomc' },
]
