import { defineConfig } from 'vitepress'
import { curseforgeIcon, modrinthIcon } from './data/icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Plasmo Voice",
  description: "Proximity Voice Chat Mod for Minecraft",

  head: [
    ['link', { rel: "icon", href: "/favicon.svg"}],
  ],

  markdown: {
    theme: "github-dark"
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' }
    ],

    logo: '/logo.svg',

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: 'Overview', link: '/docs/' },
          { text: 'New in Plasmo Voice 2xx', link: '/docs/new-in-2xx/' },
        ],
      },
      {
        text: 'Server',
        items: [
          { text: 'Installing on a Server', link: '/docs/server/installing/' },
          { text: 'Not Installed on Server', link: '/docs/server/not-installed/' },
          { text: 'Advanced Theory', link: '/docs/server/advanced/' },
          { text: 'Installing on a Proxy', link: '/docs/server/proxy/' },
          { text: 'DDoS Protection Setup', link: '/docs/server/udp-proxy/' },
          { text: 'Commands and Permissions', link: '/docs/server/commands/' },
          { text: 'Placeholder API', link: '/docs/server/papi/' },
          { text: 'Minestom', link: '/docs/server/minestom/' },
        ]
      },
      {
        text: 'Client',
        items: [
          { text: 'Microphone Not Available', link: '/docs/client/microphone-not-available/' },
        ]
      },
      {
        text: 'Add-ons',
        items: [
          { text: 'Add-ons List', link: '/docs/addons/' },
          { text: 'Types of Add-ons', link: '/docs/addons/types/' },
        ]
      },
      {
        text: 'API',
      //   collapsed: true,
        items: [
          { text: 'Getting Started', link: '/docs/api/' },
          { text: 'Events', link: '/docs/api/events' },
          { text: 'Activations', link: '/docs/api/activations' },
          { text: 'Source Lines', link: '/docs/api/source-lines' },
          { text: 'Sources', link: '/docs/api/sources' },
          { text: 'Encoding & Encryption', link: '/docs/api/encoding-and-encryption' },
          { text: 'Languages', link: '/docs/api/languages' },
          { text: 'Dokka', link: 'https://dokka.plasmovoice.com' }
      //     { text: 'Encoding and Decoding', link: '/addon-types.html' },
      //     { text: 'Encryption and Decryption', link: '/addons.html' },
      //     { text: 'Sending Packets', link: '/addon-types.html' },
      //     { text: 'Universal Add-on Features', link: '/addon-types.html' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/plasmoapp/plasmo-voice' },
      { icon: 'discord', link: 'https://discord.com/invite/uueEqzwCJJ'},
      {
        icon: { svg: modrinthIcon },
        link: 'https://modrinth.com/mod/plasmo-voice'
      },
      {
        icon: { svg: curseforgeIcon },
        link: 'https://www.curseforge.com/minecraft/mc-mods/plasmo-voice'
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
            <path d="M108.8135992 26.06720125c-26.468266 0-48.00213212 21.53066613-48.00213212 47.99733213 0 26.38653268 21.53386613 47.85426547 48.00213213 47.85426547 26.38639937 0 47.8530655-21.4677328 47.8530655-47.85426547 0-26.466666-21.46666613-47.99733213-47.85306547-47.99733213"/>
            <path d="M23.333335 153.93333178V26.0666679h23.46666576v127.8666639z"/>
          </svg>`
        },
        link: 'https://www.patreon.com/plasmomc'
      }
    ]
  }
})
