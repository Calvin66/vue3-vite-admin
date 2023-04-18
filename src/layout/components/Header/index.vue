<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

import Screenfull from '@/components/Screenfull/index.vue'

const router = useRouter()
const logout = () => {
  router.push('/login')
}
</script>

<template>
  <div class="header-container">
    <div class="right-menu">
      <Screenfull class="right-menu__item" />
      <el-dropdown class="right-menu__item">
        <div class="right-menu__item-avatar">
          <el-avatar :icon="UserFilled" :size="30" />
          <span>Admin</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  overflow: hidden;
  height: var(--v3-navigationbar-height);
  background: #fff;

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    margin-right: 10px;
    height: 100%;
    color: #606266;

    &__item {
      padding: 0 10px;
      cursor: pointer;
    }

    &__avatar {
      display: flex;
      align-items: center;

      .el-avatar {
        margin-right: 10px;
      }

      span {
        font-size: 16px;
      }
    }
  }
}
</style>
