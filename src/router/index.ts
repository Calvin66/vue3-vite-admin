import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

/**
 * title?: string
 * 设置该路由在侧边栏和面包屑中展示的名字
 */

/**
 * svgIcon?: string
 * 设置该路由的图标，记得将 svg 导入 @/icons/svg
 */

/**
 * elIcon?: string
 * 设置该路由的图标，直接使用 Element Plus 的 Icon（与 svgIcon 同时设置时，svgIcon 将优先生效）
 */

/**
 *  hidden?: boolean
 * 默认 false，设置 true 的时候该路由不会在侧边栏出现
 */

/**
 * roles?: string[]
 * 设置该路由进入的权限，支持多个权限叠加
 */

/**
 *  breadcrumb?: boolean
 * 默认 true，如果设置为 false，则不会在面包屑中显示
 */

/**
 *  affix?: boolean
 * 默认 false，如果设置为 true，它则会固定在 tags-view 中
 */

/**
 * alwaysShow?: boolean
 * 当一个路由下面的 children 声明的路由大于 1 个时，自动会变成嵌套的模式，
 * 只有一个时，会将那个子路由当做根路由显示在侧边栏，
 * 若想不管路由下面的 children 声明的个数都显示你的根路由，
 * 可以设置 alwaysShow: true，这样就会忽略之前定义的规则，一直显示根路由
 */

/**
 * activeMenu?: string
 * 示例: activeMenu: "/xxx/xxx"，
 * 当设置了该属性进入路由时，则会高亮 activeMenu 属性对应的侧边栏。
 * 该属性适合使用在有 hidden: true 属性的路由上
 */

/**
 * keepAlive?: boolean
 * 是否缓存该路由页面
 * 默认为 false，为 true 时代表需要缓存，此时该路由和该页面都需要设置一致的 Name
 */

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          svgIcon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/element-plus',
    name: 'Table',
    meta: {
      title: '表格',
      elIcon: 'Grid'
    },
    children: [
      {
        path: 'element-plus',
        component: () => import('@/views/table/element-plus/index.vue'),
        name: 'ElementPlus',
        meta: {
          title: 'Element Plus',
          keepAlive: true
        }
      },
      {
        path: 'vxe-table',
        component: () => import('@/views/table/vxe-table/index.vue'),
        name: 'VxeTable',
        meta: {
          title: 'Vxe Table',
          keepAlive: true
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
