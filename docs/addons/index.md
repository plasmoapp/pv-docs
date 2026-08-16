<script setup lang="ts">
import { addonsByType } from '../../.vitepress/data/addons'

const hasPaper = addonsByType('paper').length > 0
const hasMod = addonsByType('mod').length > 0
</script>

# Add-ons list

::: tip
To know the difference between add-on types read: [Types of Add-ons](/docs/addons/types/)
:::

## Client

<AddonList type="client" />

## Universal

<AddonList type="universal" />

<div v-if="hasPaper">

## Paper

Only works on Paper and its forks.

<AddonList type="paper" />

</div>


<div v-if="hasMod">

## Mod

Only works on modded environments (Fabric/Forge/NeoForge).

<AddonList type="mod" />

</div>


## Add your add-on

Want your add-on in this list? Submit a pull request that adds it to
[`.vitepress/data/addons.ts`](https://github.com/plasmoapp/pv-docs/blob/main/.vitepress/data/addons.ts).
