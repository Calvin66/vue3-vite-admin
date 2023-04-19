<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'toggle-click'): void
}>()

const toggleClick = () => {
  emit('toggle-click')
}
</script>

<template>
  <div class="hamburger-container">
    <div @click="toggleClick">
      <el-icon :size="20" class="icon">
        <Fold v-if="props.isActive" />
        <Expand v-else />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hamburger-container {
  // border-top: 1px solid #4e4f5a;
  width: 100%;
  height: 44px;
  text-align: center;
  color: #c1c6c8;
  line-height: 44px;
  cursor: pointer;
}

.icon {
  vertical-align: middle;
}
</style>
