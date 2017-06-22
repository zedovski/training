import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Login';
import Books from '@/components/Books';

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
      meta:{requiresAuth:true}
    }
  ]
})

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
        const authToken = window.localStorage.getItem('token');
        if(authToken){
            next();
        }
        else{
            next({name:'Login'});
        }
        
    }
    next();
})

export default router;