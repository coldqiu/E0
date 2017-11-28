import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
// import HelloWorld from '@/components/HelloWorld';
// import App from '@/App';
import  goods from '@/components/goods/goods';
import  ratings from '@/components/ratings/ratings';
import  seller from '@/components/seller/seller';


Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Hello',
  //     component: HelloWorld
  //   }
  // ]

  routes: [
    {path: '/goods', name: 'goods', component: goods},
    {path: '/ratings', name: 'ratings', component: ratings},
    {path: '/seller', name: 'seller', component: seller},

  ],


});


//
// let app = Vue.extend(App);
// let router = new Router();
//
// router.map({
//   '/goods': {
//     component: goods
//   }
// });
//
// router.start(app, '#app');
