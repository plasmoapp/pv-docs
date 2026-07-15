<script setup lang="ts">
import type { AddonType } from '../../data/addons'
import { addonsByType, primaryLink } from '../../data/addons'
import AddonLinks from './AddonLinks.vue'

const props = defineProps<{
  // comma-separated list of add-on types, e.g. "universal,paper"
  types: string
}>()

const list = addonsByType(...(props.types.split(',').map((type) => type.trim()) as AddonType[]))
</script>

<template>
  <table class="addon-table">
    <thead>
      <tr>
        <th>Icon</th>
        <th>Add-on</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="addon in list" :key="addon.id">
        <td class="addon-icon-cell">
          <a :href="primaryLink(addon).url" target="_blank" rel="noreferrer">
            <img :src="addon.icon" :alt="addon.name" width="96" height="96" loading="lazy" />
          </a>
        </td>
        <td class="addon-name-cell">
          <div class="addon-title">
            <a class="addon-name" :href="primaryLink(addon).url" target="_blank" rel="noreferrer">{{ addon.name }}</a>
            <span v-if="addon.thirdParty" class="addon-badge">Third party</span>
          </div>
          <AddonLinks :addon="addon" />
        </td>
        <td>{{ addon.summary }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.addon-icon-cell {
  line-height: 0;
}

.addon-icon-cell img {
  width: 96px;
  height: 96px;
  max-width: none;
  border-radius: 8px;
}

/* wide enough to keep the link chips on one line */
.addon-name-cell {
  min-width: 240px;
}

.addon-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 8px;
}

.addon-name {
  font-weight: 600;
}

.addon-badge {
  border-radius: 4px;
  padding: 0 6px;
  background-color: var(--vp-c-default-soft);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.addon-name-cell :deep(.addon-links) {
  margin-top: 8px;
}
</style>
