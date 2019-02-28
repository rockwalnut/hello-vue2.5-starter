import Vue from 'vue'
import Router from 'vue-router'

// component
import Contact from '@/components/Contact'

// import IndexSlide from '@/components/IndexSlide'
import Index from '@/components/Index'
import Who from '@/components/Who'
import What from '@/components/What'
import Where from '@/components/Where'
import How from '@/components/How'
import Why from '@/components/Why'

import Partner from '@/components/Partner'
import Insign from '@/components/Insign'
import Team from '@/components/Team'

import Desk from '@/components/Desk'
import Join from '@/components/Join'
import Menu from '@/components/Menu'
// import './style.css';

// Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whoweare',
      name: 'Who',
      components: {
        default: Who,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whatweinvest',
      name: 'What',
      components: {
        default: What,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whereweinvest',
      name: 'Where',
      components: {
        default: Where,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/howweinvest',
      name: 'How',
      components: {
        default: How,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whyworkwithus',
      name: 'Why',
      components: {
        default: Why,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/ourpartners',
      name: 'Partner',
      components: {
        default: Partner,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/insign',
      name: 'Insign',
      components: {
        default: Insign,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/theteam',
      name: 'Team',
      components: {
        default: Team,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/pitchdesk',
      name: 'Desk',
      component: Desk
    },
    {
      path: '/joinus',
      name: 'Join',
      component: Join
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    }
  ]
})
