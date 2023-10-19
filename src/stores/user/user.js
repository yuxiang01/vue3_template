import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    menus: [
      {
        text: '系统总览',
        url: '/show',
        icon: 'Reading',
        submenu: [
          {
            text: '系统纵览',
            url: '/show',
            icon: 'DataAnalysis'
          }
        ]
      },
      {
        text: '经营管理',
        url: '/main/manage',
        icon: 'Guide',
        submenu: [
          {
            text: '订单管理',
            url: '/manage/order',
            icon: 'List'
          },
          {
            text: '供应商管理',
            url: '/manage/provider',
            icon: 'Avatar'
          }
        ]
      },
      {
        text: '系统管理',
        url: '/system',
        icon: 'Setting',
        submenu: [
          {
            text: '用户管理',
            url: '/system/user',
            icon: 'User'
          },
          {
            text: '字典管理',
            url: '/system/dictionary',
            icon: 'MessageBox'
          },
        ]
      }
    ]
  }),
  actions: {}
})

export default useUserStore
