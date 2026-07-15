<script setup lang="ts">
import type { Addon, LinkType } from '../../data/addons'
import { linkLabel } from '../../data/addons'
import { curseforgeIcon, githubIcon, modrinthIcon } from '../../data/icons'

defineProps<{
  addon: Addon
}>()

const icons: Record<LinkType, string> = {
  modrinth: modrinthIcon,
  curseforge: curseforgeIcon,
  github: githubIcon,
}
</script>

<template>
  <div class="addon-links">
    <a
      v-for="link in addon.links"
      :key="link.url"
      class="addon-link"
      :href="link.url"
      target="_blank"
      rel="noreferrer"
    >
      <span class="addon-link-icon" v-html="icons[link.type]" />
      <span>{{ linkLabel(link) }}</span>
    </a>
  </div>
</template>

<style scoped>
.addon-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.addon-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, background-color 0.25s;
}

.addon-link:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.addon-link-icon {
  display: flex;
  width: 14px;
  height: 14px;
}

.addon-link-icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
