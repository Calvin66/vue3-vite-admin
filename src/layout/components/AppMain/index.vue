<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const key = computed(() => {
  return route.path
})
</script>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  overflow: auto;
  width: 100%;
  height: calc(100% - var(--v3-tagsview-height));
  background-color: var(--v3-body-bg-color);
}
</style>
