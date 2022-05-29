import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserPostsView from '../views/UserPostsView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // '/' - home (user list)
    // '/:user-id' - user data, 3 post previews
    // '/:user-id/posts' - all post previews
    // '/:user-id/posts/:post-id/' - post data, comments
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/:userId',
      children: [
        {
          path: '',
          component: UserView
        },
        {
          path: 'posts',
          component: UserPostsView,
        },
        {
          path: ':postId',
          component: PostView
        }
      ]
    }
  ]
})

export default router
