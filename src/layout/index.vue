<script lang="ts" setup>
import { AppMain, Header, Sidebar, TagsView } from './components'
</script>

<template>
  <div class="layout-container">
    <Header />
    <div class="main-container">
      <div class="sidebar-container">
        <Sidebar />
      </div>
      <div class="app-main-container">
        <TagsView />
        <AppMain />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--v3-body-bg-color);

  .main-container {
    flex: 1;
    display: flex;
    overflow: hidden;

    .sidebar-container {
      width: var(--v3-sidebar-width) !important;
      height: 100%;
      font-size: 0;
      transition: width 0.28s;
    }

    .app-main-container {
      position: relative;
      overflow: hidden;
      width: 0;
      flex: 1;
    }
  }
}
</style>
