<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { constantRoutes } from '@/router'
import { getCssVariableValue } from '@/utils'

import Hamburger from '../Hamburger/index.vue'
import SidebarItem from './SidebarItem.vue'

const v3SidebarMenuBgColor = getCssVariableValue('--v3-sidebar-menu-bg-color')
const v3SidebarMenuTextColor = getCssVariableValue('--v3-sidebar-menu-text-color')
const v3SidebarMenuActiveTextColor = getCssVariableValue('--v3-sidebar-menu-active-text-color')

const route = useRoute()

const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta?.activeMenu) {
    return meta.activeMenu
  }
  return path
})

const isCollapse = computed(() => {
  return false
})
</script>

<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="v3SidebarMenuBgColor"
        :text-color="v3SidebarMenuTextColor"
        :active-text-color="v3SidebarMenuActiveTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in constantRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
    <Hamburger />
  </div>
</template>

<style lang="scss" scoped>
@mixin tip-line {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}

.sidebar-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  background: var(--v3-sidebar-menu-bg-color);
}

.el-scrollbar {
  flex: 1;

  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;

    .el-scrollbar__view {
      height: 100%;
    }
  }
  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}

.el-menu {
  border: none;
  width: 100% !important;
  height: 100%;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu .el-menu-item) {
  display: block;
  height: var(--v3-sidebar-menu-item-height);
  line-height: var(--v3-sidebar-menu-item-height);

  &.is-active,
  &:hover {
    background-color: var(--v3-sidebar-menu-hover-bg-color);
  }

  * {
    vertical-align: middle;
  }
}

:deep(.el-menu-item) {
  &.is-active {
    @include tip-line;
  }
}

.el-menu--collapse {
  :deep(.el-sub-menu) {
    &.is-active {
      .el-sub-menu__title {
        color: var(--v3-sidebar-menu-active-text-color) !important;

        @include tip-line;
      }
    }
  }
}
</style>
