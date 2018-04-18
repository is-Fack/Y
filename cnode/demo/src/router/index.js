import Vue from 'vue'
import Router from 'vue-router'
import detailss from '@/components/detailss'
import bodyer from '@/components/bodyer'
import filter from '@/components/filter/filters'
import getstart from '@/components/nav/getstart'
import api from '@/components/nav/api'
import signin from '@/components/nav/signin'
import signup from '@/components/nav/signup'
import about from '@/components/nav/about'
import users from '@/components/filter/users'
import topicss from '@/components/filter/topicss'
import Colle from '@/components/filter/Colle'
import edit from '@/components/filter/edit'
import unread from '@/components/naws/unread'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'//:url?',
      name: 'bodyer',
      component:bodyer
    },

    {
      path:'/detailss:id?',
      name: 'detailss',
      component:detailss,
    },
    {
      path:'/edit:id?',
      name: 'edit',
      component:edit,
    },
    {
      path:'/filters:url?',
      name: 'filters',
      component:filter
    },
    {
      path:'/getstart',
      name: 'getstart',
      component:getstart
    },
    {
      path:'/api',
      name: 'api',
      component:api
    },
    {
      path:'/signin',
      name: 'signin',
      component:signin
    },
    {
      path:'/signup',
      name: 'signup',
      component:signup
    },
    {
      path:'/about',
      name: 'about',
      component:about
    },
    {
      path:'/users:id?',
      name: 'users',
      component:users
    },
    {
      path:'/topicss',
      name: 'topicss',
      component:topicss
    },
    {
      path:'/Colle/:id?',
      name: 'Colle',
      component:Colle
    },
    {
      path:'/unread',
      name: 'unread',
      component:unread
    },

  ]
})
