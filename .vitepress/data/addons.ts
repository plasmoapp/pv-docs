export type AddonType = 'client' | 'universal' | 'paper'

export type LinkType = 'modrinth' | 'github' | 'curseforge'

export interface AddonLink {
  type: LinkType
  url: string
  label?: string
}

export interface AddonNote {
  type: 'tip' | 'info' | 'warning' | 'danger'
  title?: string
  // HTML
  text: string
}

export interface Addon {
  // anchor id on the add-ons list page
  id: string
  name: string
  type: AddonType
  icon: string
  // one-liner for the landing page table
  summary: string
  // HTML paragraphs for the add-ons list page, defaults to [summary]
  description?: string[]
  // renders a "maintained by a third party" warning pointing at the github link
  thirdParty?: boolean
  notes?: AddonNote[]
  links: AddonLink[]
}

export const addonTypeLabels: Record<AddonType, string> = {
  client: 'Client',
  universal: 'Universal',
  paper: 'Paper',
}

export const linkLabels: Record<LinkType, string> = {
  modrinth: 'Modrinth',
  github: 'GitHub',
  curseforge: 'CurseForge',
}

export const addons: Addon[] = [
  {
    id: 'pv-addon-soundphysics',
    name: 'pv-addon-soundphysics',
    type: 'client',
    icon: '/addon_logo/sound_physics.png',
    summary: 'Adds compatibility with Sound Physics Remastered. Plasmo Voice is affected by sound physics',
    description: [
      'Adds compatibility with the <a href="https://modrinth.com/mod/sound-physics-remastered">Sound Physics Remastered</a> mod.',
      'With this add-on, Plasmo Voice will be affected by Sound Physics.',
    ],
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-soundphysics' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-soundphysics' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-soundphysics' },
    ],
  },
  {
    id: 'pv-addon-replaymod',
    name: 'pv-addon-replaymod',
    type: 'client',
    icon: '/addon_logo/replaymod.png',
    summary: 'Fork of Replay Voice Chat that works with Plasmo Voice and allows recording voice chat with ReplayMod',
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-replaymod' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-replaymod' },
    ],
  },
  {
    id: 'talking-heads',
    name: 'Talking Heads',
    type: 'client',
    icon: 'https://raw.githubusercontent.com/ZipeStudio/TalkingHeads/refs/heads/master/src/main/resources/icon/icon.png',
    summary: 'Scales player heads when they’re talking',
    thirdParty: true,
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/talkingheads' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/talkingheads' },
      { type: 'github', url: 'https://github.com/ZipeStudio/TalkingHeads' },
    ],
  },
  {
    id: 'pv-addon-groups',
    name: 'pv-addon-groups',
    type: 'universal',
    icon: '/addon_logo/groups.png',
    summary: 'Create group voice chat channels. Keep talking with players far away',
    notes: [
      {
        type: 'tip',
        title: 'Bungee and Velocity Support',
        text: 'Groups will work between servers if you install the add-on as a Bungee or Velocity plugin.',
      },
    ],
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-groups' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-groups' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-groups' },
    ],
  },
  {
    id: 'pv-addon-sculk',
    name: 'pv-addon-sculk',
    type: 'universal',
    icon: '/addon_logo/skulk.png',
    summary: 'With this add-on, warden and sculk sensors are triggered with proximity voice chat',
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-sculk' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-sculk' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-sculk' },
    ],
  },
  {
    id: 'pv-addon-broadcast',
    name: 'pv-addon-broadcast',
    type: 'universal',
    icon: '/addon_logo/broadcast.png',
    summary: 'Broadcast your voice to all players in the radius, world, server, or proxy',
    notes: [
      {
        type: 'tip',
        title: 'Bungee and Velocity Support',
        text: 'You’ll be able to set the broadcast scope to all servers on the proxy if you install the add-on as a Bungee or Velocity plugin.',
      },
    ],
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-broadcast' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-broadcast' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-broadcast' },
    ],
  },
  {
    id: 'pv-addon-spectator',
    name: 'pv-addon-spectator',
    type: 'universal',
    icon: '/addon_logo/spectator.png',
    summary: 'With this add-on, all players can hear spectators',
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-spectator' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-spectator' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-spectator' },
    ],
  },
  {
    id: 'pv-addon-whisper',
    name: 'pv-addon-whisper',
    type: 'universal',
    icon: '/addon_logo/whisper.png',
    summary: 'By default, the whisper distance is half the current proximity distance',
    description: [
      'By default, whisper is half of the current proximity distance. You can change the percentage in the config.',
    ],
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-whisper' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-whisper' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-whisper' },
    ],
  },
  {
    id: 'pv-addon-priority',
    name: 'pv-addon-priority',
    type: 'universal',
    icon: '/addon_logo/priority.png',
    summary: 'Voice activation with a greater and configurable distance',
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-priority' },
      { type: 'curseforge', url: 'https://www.curseforge.com/minecraft/mc-mods/pv-addon-priority' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-priority' },
    ],
  },
  {
    id: 'pv-addon-lavaplayer-lib',
    name: 'pv-addon-lavaplayer-lib',
    type: 'universal',
    icon: '/addon_logo/lava_player.png',
    summary: 'Add-on bundled with LavaPlayer fork library required for some Plasmo Voice add-ons',
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-lavaplayer-lib' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-lavaplayer-lib' },
    ],
  },
  {
    id: 'pv-addon-discs',
    name: 'pv-addon-discs',
    type: 'paper',
    icon: '/addon_logo/discs.png',
    summary:
      'Play audio from YouTube and other sources in Minecraft using music discs. Supports streaming and live streams (YouTube, Twitch)',
    description: [
      'Play audio from YouTube and other sources in Minecraft using music discs.',
      'The add-on can stream audio from various sources instead of saving audio files on the server. It even supports YouTube and Twitch live streams.',
    ],
    links: [
      { type: 'modrinth', url: 'https://modrinth.com/mod/pv-addon-discs' },
      { type: 'github', url: 'https://github.com/plasmoapp/pv-addon-discs' },
    ],
  },
]

export function addonsByType(...types: AddonType[]): Addon[] {
  return addons.filter((addon) => types.includes(addon.type))
}

export function primaryLink(addon: Addon): AddonLink {
  return addon.links[0]
}

export function githubLink(addon: Addon): AddonLink | undefined {
  return addon.links.find((link) => link.type === 'github')
}

export function linkLabel(link: AddonLink): string {
  return link.label ?? linkLabels[link.type]
}
