<script setup lang="ts">
import type { AddonType } from '../../data/addons'
import { addonsByType, githubLink, primaryLink } from '../../data/addons'
import AddonLinks from './AddonLinks.vue'

const props = defineProps<{
  type: AddonType
}>()

const list = addonsByType(props.type)
</script>

<template>
  <div class="addon-list">
    <div v-for="addon in list" :key="addon.id" :id="addon.id" class="addon">
      <a class="addon-icon" :href="primaryLink(addon).url" target="_blank" rel="noreferrer">
        <img :src="addon.icon" :alt="addon.name" width="96" height="96" loading="lazy" />
      </a>

      <div class="addon-body">
        <h3 class="addon-name">
          {{ addon.name }}
          <a class="header-anchor" :href="`#${addon.id}`" :aria-label="`Permalink to &quot;${addon.name}&quot;`" />
        </h3>

        <p v-for="(paragraph, index) in addon.description ?? [addon.summary]" :key="index" v-html="paragraph" />

        <div v-if="addon.thirdParty && githubLink(addon)" class="warning custom-block">
          <p class="custom-block-title">Third party add-on.</p>
          <p>
            This add-on is maintained by a third party, so if you encounter any issues, please report them on the
            <a :href="githubLink(addon)!.url" target="_blank" rel="noreferrer">{{ addon.name }} GitHub</a>.
          </p>
        </div>

        <div v-for="(note, index) in addon.notes" :key="index" class="custom-block" :class="note.type">
          <p v-if="note.title" class="custom-block-title">{{ note.title }}</p>
          <p v-html="note.text" />
        </div>

        <AddonLinks :addon="addon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.addon-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;
}

.addon {
  display: flex;
  gap: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  /* offset the sticky nav when jumping to an anchor */
  scroll-margin-top: calc(var(--vp-nav-height) + 24px);
}

.addon-icon {
  flex-shrink: 0;
  line-height: 0;
}

.addon-icon img {
  width: 96px;
  height: 96px;
  border-radius: 8px;
}

.addon-body {
  min-width: 0;
}

.addon-name {
  margin: 0 0 8px;
  border-top: none;
  padding-top: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
}

/* direct children only, so custom blocks keep their default spacing */
.addon-body > p {
  margin: 8px 0;
  line-height: 24px;
}

.addon-body :deep(.addon-links) {
  margin-top: 16px;
}

@media (max-width: 640px) {
  .addon {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
