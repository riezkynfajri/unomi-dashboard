import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AddScope from '../views/AddScope.vue';
import ProfileList from '../views/ProfileList.vue';
import EditScope from '../views/EditScope.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/add-scope',
      name: 'add-scope',
      component: AddScope
    },
    {
      path: '/edit-scope/:id',
      name: 'edit-scope',
      component: EditScope
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: ProfileList
    }
  ]
});

export default router;
