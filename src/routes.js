export default [
  {
    path: '/',
    component: resolve => require(['./pages/home/home.vue'], resolve)
  },
  {
    path: '/question',
    component: resolve => require(['./pages/question'], resolve)
  }
]
