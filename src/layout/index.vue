<script lang="ts" setup>
import { AppMain, Breadcrumb, Header, Sidebar } from './components'
</script>

<template>
  <div class="layout-container">
    <Header />
    <div class="main-container">
      <div class="main-container_left">
        <Sidebar />
      </div>
      <div class="main-container_right">
        <Breadcrumb />
        <AppMain class="app-main-container" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--v3-body-bg-color);
  flex-direction: column;

  .main-container {
    flex: 1;
    display: flex;

    &_left {
      width: var(--v3-sidebar-width) !important;
      height: 100%;
      transition: width 0.28s;
    }

    &_right {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .app-main-container {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
