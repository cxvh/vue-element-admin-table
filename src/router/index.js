import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/table',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 未登录
 */
export const asyncRoutes = [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    // 重定向到 create
    // redirect: '/tests/index',
    // component: () => import('@/views/tests/index'),
    // hidden: true, // 左侧菜单是否显示，默认 false 显示,true 不显示
    meta: { title: 'Table', icon: 'table', roles: ['admin'] },
    children: [
      {
        path: '/table/index',
        component: () => import('@/views/table/index'),
        meta: { title: '列表', icon: 'edit', roles: ['editor'] }
      },
      {
        path: '/table/add',
        component: () => import('@/views/table/addItem'),
        // roles 是权限的意思 ['admin'] 只有 admin 管理员 才能访问
        // meta: { title: '上传图书', icon: 'edit', roles: ['admin'] }
        // src/main 引用的 src/permission 里面路由守卫添加权限白名单 /tests/index
        meta: { title: '添加', icon: 'edit', roles: ['admin'] }
      },
      {
        path: '/table/edit/:id',
        component: () => import('@/views/table/editItem')
        // roles 是权限的意思 ['admin'] 只有 admin 管理员 才能访问
        // meta: { title: '上传图书', icon: 'edit', roles: ['admin'] }
        // src/main 引用的 src/permission 里面路由守卫添加权限白名单 /tests/index // 不让 编辑出现在左侧导航上面
      }
    ]
  },
  {
    path: '/tests',
    component: Layout,
    // 重定向到 create
    // redirect: '/tests/index',
    // component: () => import('@/views/tests/index'),
    // hidden: true, // 左侧菜单是否显示，默认 false 显示,true 不显示
    meta: { title: '图书管理', icon: 'documentation', roles: ['admin'] },
    children: [
      {
        path: '/tests/index',
        component: () => import('@/views/tests/index'),
        meta: { title: '图书首页', icon: 'edit', roles: ['editor'] }
      },
      {
        path: '/tests/create',
        component: () => import('@/views/tests/create'),
        // roles 是权限的意思 ['admin'] 只有 admin 管理员 才能访问
        // meta: { title: '上传图书', icon: 'edit', roles: ['admin'] }
        // src/main 引用的 src/permission 里面路由守卫添加权限白名单 /tests/index
        meta: { title: '上传图书', icon: 'edit', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
