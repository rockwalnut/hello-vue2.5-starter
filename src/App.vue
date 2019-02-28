<template>
  <div class="project">
    <header id="header" class="ctn noselect">
      <h1 class="header__title" v-show="showLogo">
        <img class="logo__sm" v-bind:src="logo" />
        <router-link to="/">
        </router-link>
      </h1>
      <nave :items="navs"></nave>
      <framed :display="showFrame"> </framed>
      <top :display="!showFrame"> </top>
    </header>

    <div class="container cove">
      <cover :left="coverLeft" :right="coverRight" :display="coverDisplay" :image="page().image"> </cover>
      <left :left="coverLeft" :right="coverRight"> </left>
    </div>
    <!-- header -->
    <main id="content" role="main" class="main">
      <div class="content__wrapper">
        <div id="inner-nav" v-show="showPaging">
          <ul class="inner-nav__list">
            <li class="inner-nav__item">
              <router-link :to="page().prev" class="">
                <button class="inner-nav__btn inner-nav__btn--prev" aria-label="Backward" style="background-color: transparent;">
                                  <!-- <svg class="icon icon--arrow icon--arrow--left" viewBox="0 0 38 38">Backward
                                    <path class="st0" d="M10.3,19c0-0.6,0.2-1.3,0.7-1.7L23.4,4.4c1-1,2.5-1,3.5-0.1s1,2.5,0.1,3.5L16.3,19L27,30.1c1,1,0.9,2.6-0.1,3.5c-1,1-2.6,0.9-3.5-0.1L11,20.7C10.5,20.3,10.3,19.6,10.3,19z"></path>
                                  </svg> -->
                                <!-- <img class="bg" v-bind:src="prev"/> -->
                                <svg xmlns="http://www.w3.org/2000/svg"  class="icon icon--arrow icon--arrow--left"  viewBox="0 0 25.8 45.82"><title>Cover_Previous</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="25.8 2.84 5.66 22.85 25.67 43 22.83 45.82 0 22.83 22.98 0 25.8 2.84"/></g></g></svg>
                                </button>
              </router-link>
            </li>
            <li class="inner-nav__item">
              <router-link :to="page().next" class="">
                <button class="inner-nav__btn inner-nav__btn--next swiper-button-disabled" aria-label="Forward" style="background-color: transparent;">
                                   <!-- <svg class="icon icon--arrow icon--arrow--right" viewBox="0 0 38 38">Forward
                                    <path class="st0" d="M27.7,19c0,0.6-0.2,1.3-0.7,1.7L14.6,33.6c-1,1-2.5,1-3.5,0.1s-1-2.5-0.1-3.5L21.7,19L11,7.9c-1-1-0.9-2.6,0.1-3.5c1-1,2.6-0.9,3.5,0.1L27,17.3C27.5,17.7,27.7,18.4,27.7,19z"></path>
                                    </svg> -->
                                                 <!-- <img class="bg" v-bind:src="next"/> -->
                                  <svg class="icon icon--arrow icon--arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.8 45.82"><title>Cover_Next</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="0 42.98 20.14 22.96 0.13 2.82 2.97 0 25.8 22.98 2.82 45.82 0 42.98"/></g></g></svg>
                                 </button>
              </router-link>
            </li>
          </ul>
        </div>

        <div id="projects-container" class="slider | noselect swiper-container-horizontal" aria-hidden="true">
          <ul class="projects__slider | slider__wrapper" style="transform: translate3d(-2173px, 0px, 0px); transition-duration: 0ms;">
            <li class="projects__slider__item | slider__item slider__item--active" style="width: 795px;">
              <a class="is--long" data-i="04" href="javascript: void(0);" style="transform: matrix(1, 0, 0, 1, -154.907, 0);"></a>
            </li>
          </ul>
        </div>

        <div class="content__inner container" v-bind:class="fixContent == true ? 'top' : 'behind' ">
          <article class="project">
            <transition name="slide-fade">
              <router-view></router-view>
              <!-- route view here !!! -->
            </transition>
          </article>
        </div>b

      </div>
    </main>
    <!-- content -->

    <footer id="footer_wrapper" v-show="!hiddenSocial">
      <ul class="social-list">
        <li class="social-list__item">
          <svg class="vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.54 74.5"><title>MeetMeOn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M11.34,66.71H3.1l-1-.06-.76-.05v.05l.47.11.56.12c.26.05.5.11.72.17l8.24,2.27v1.27L3.1,72.88c-.27.07-.68.16-1.23.25l-.52.09v.07l.78-.05,1,0h8.24V74.5H0V72.29l7.43-2A10.82,10.82,0,0,1,8.83,70c.58-.08,1-.13,1.16-.14v0c-.19,0-.59-.06-1.18-.13a8.5,8.5,0,0,1-1.38-.25L0,67.46V65.25H11.34Z"/><path class="cls-1" d="M3.4,57.54a5.51,5.51,0,0,1,3.13-.7H7.4v4.72a4.2,4.2,0,0,0,2.22-.48,1.56,1.56,0,0,0,.71-1.43,1.25,1.25,0,0,0-.53-1,2.25,2.25,0,0,0-1.41-.41V56.84a3.22,3.22,0,0,1,2.29.79,2.65,2.65,0,0,1,.86,2.06,2.94,2.94,0,0,1-1.08,2.49A5.74,5.74,0,0,1,7,63a5.89,5.89,0,0,1-3.45-.81,2.83,2.83,0,0,1-1.12-2.47A2.51,2.51,0,0,1,3.4,57.54ZM4.28,61a3.89,3.89,0,0,0,1.89.51V58.26c-1.68,0-2.52.49-2.52,1.46A1.47,1.47,0,0,0,4.28,61Z"/><path class="cls-1" d="M3.4,49.46a5.51,5.51,0,0,1,3.13-.7H7.4v4.72A4.3,4.3,0,0,0,9.62,53a1.57,1.57,0,0,0,.71-1.43,1.25,1.25,0,0,0-.53-1,2.25,2.25,0,0,0-1.41-.41V48.76a3.26,3.26,0,0,1,2.29.78,2.68,2.68,0,0,1,.86,2.06,2.94,2.94,0,0,1-1.08,2.5A5.81,5.81,0,0,1,7,54.92a5.89,5.89,0,0,1-3.45-.81,2.83,2.83,0,0,1-1.12-2.47A2.51,2.51,0,0,1,3.4,49.46ZM4.28,53a3.89,3.89,0,0,0,1.89.51V50.18c-1.68,0-2.52.49-2.52,1.46A1.48,1.48,0,0,0,4.28,53Z"/><path class="cls-1" d="M3.85,44v1.15H9.54a.8.8,0,0,0,.58-.2.74.74,0,0,0,.21-.57V44h.94a1.24,1.24,0,0,1,.17.43,2.48,2.48,0,0,1,.06.54,1.31,1.31,0,0,1-.57,1.18,2.66,2.66,0,0,1-1.43.37H3.85v.75H2.63v-.75L.22,46.24V45.18H2.63V44Z"/><path class="cls-1" d="M5.08,28.57h6.26v1.36H5.17A1.83,1.83,0,0,0,4,30.22a1,1,0,0,0-.34.83,1.25,1.25,0,0,0,.64,1.05A3.15,3.15,0,0,0,6,32.53h5.31v1.36H5.17a1.76,1.76,0,0,0-1.18.3,1.08,1.08,0,0,0-.34.84,1.27,1.27,0,0,0,.64,1.06A3.07,3.07,0,0,0,6,36.52h5.31v1.37H2.63v-1l1-.19v-.09a2.15,2.15,0,0,1-1.22-2,1.81,1.81,0,0,1,1.28-1.86,2.52,2.52,0,0,1-1-.91,2.37,2.37,0,0,1-.33-1.21C2.43,29.25,3.31,28.57,5.08,28.57Z"/><path class="cls-1" d="M3.4,20.9a5.42,5.42,0,0,1,3.13-.7H7.4v4.71a4.2,4.2,0,0,0,2.22-.48A1.56,1.56,0,0,0,10.33,23,1.25,1.25,0,0,0,9.8,22a2.25,2.25,0,0,0-1.41-.4V20.2a3.26,3.26,0,0,1,2.29.78A2.66,2.66,0,0,1,11.54,23a2.91,2.91,0,0,1-1.08,2.49A5.74,5.74,0,0,1,7,26.35a5.89,5.89,0,0,1-3.45-.81,2.83,2.83,0,0,1-1.12-2.46A2.5,2.5,0,0,1,3.4,20.9Zm.88,3.48a3.89,3.89,0,0,0,1.89.51V21.62c-1.68,0-2.52.48-2.52,1.46A1.46,1.46,0,0,0,4.28,24.38Z"/><path class="cls-1" d="M7,7.74q4.54,0,4.54,3.11T7,14q-4.57,0-4.57-3.14T7,7.74Zm-.32,4.82h.61c2,0,3-.57,3-1.71s-1-1.69-3-1.69H6.68a4.8,4.8,0,0,0-2.26.42,1.38,1.38,0,0,0-.77,1.27Q3.65,12.56,6.68,12.56Z"/><path class="cls-1" d="M3.05.56a3,3,0,0,1,2-.56h6.26V1.35H5.17A1.7,1.7,0,0,0,4,1.67a1.21,1.21,0,0,0-.34.92,1.4,1.4,0,0,0,.64,1.14A2.92,2.92,0,0,0,6,4.19h5.31V5.56H2.63v-1l1-.2V4.25A2.25,2.25,0,0,1,2.43,2.16,2,2,0,0,1,3.05.56Z"/></g></g></svg>
        </li>
        <li class="social-list__item">
          <svg class="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_Medium</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,0V28H28V0ZM23.33,9.42h-1c-.27,0-1,.29-1,.54v9c0,.25.7.45,1,.45h1v2H16.66v-2H18V10.09h-.23L14.56,21.41H12.08L8.91,10.09H8.67v9.32H10v2H4.67v-2h.74c.29,0,.6-.2.6-.45V10a.64.64,0,0,0-.6-.54H4.67v-2h6.91l2.26,8h.06l2.27-8h7.16Z"/></g></g></svg>
          <a href="https://medium.com/" target="_blank">Medium</a>
        </li>
        <li class="social-list__item">
          <svg class="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_LinkIedn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,0V28H28V0ZM9.64,21.44H6.31v-10H9.64ZM8,10.13H8A1.72,1.72,0,1,1,8,6.7a1.72,1.72,0,1,1,0,3.43ZM21.64,21.44H18.31V16.12c0-1.34-.48-2.25-1.69-2.25a1.81,1.81,0,0,0-1.7,1.21,2.2,2.2,0,0,0-.12.81v5.55H11.48s0-9,0-10h3.33V12.9a3.31,3.31,0,0,1,3-1.64c2.19,0,3.84,1.42,3.84,4.48Z"/></g></g></svg>
          <a href="https://twitter.com/" target="_blank">Linkedin</a>
        </li>
        <li class="social-list__item">
          <svg class="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_Facebook</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M28,0H0V28H13.94V16.68H11.65V12.87h2.29V9.76c0-.57-.12-4.39,4.8-4.38h3.47v4H19.66a1.1,1.1,0,0,0-1,.91v2.61h3.57c-.14,2-.44,3.82-.44,3.82H18.63V28H28Z"/></g></g></svg>
          <a href="https://www.facebook.com//" target="_blank">Facebook</a>
        </li>
      </ul>
    </footer>

    <canvas id="stage" width="1828" height="1332" style="touch-action: none; cursor: inherit;"></canvas>
    <!-- <svg class="down mx-a" viewBox="0 0 26.67 39.88"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M13.33,39.88A13.35,13.35,0,0,1,0,26.54V13.33a13.34,13.34,0,0,1,26.67,0V26.54A13.36,13.36,0,0,1,13.33,39.88ZM13.33,2A11.34,11.34,0,0,0,2,13.33V26.54a11.34,11.34,0,1,0,22.67,0V13.33A11.35,11.35,0,0,0,13.33,2Z"/><circle class="cls-1" cx="13.33" cy="10.83" r="2.92"/></g></g></svg> -->
    <div class="pitch middle" v-show="!hideCenterPitch">
      <pitch :zindex="scrollZIndex"> </pitch>
    </div>

    <div class="down mx-a">
      <div class='mouse-container'>
        <div id="mice">
          <a href="#scroll">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <div><span class="unu"></span> <span class="doi"></span></div>
          </a>
        </div>
      </div>
    </div>
    <axiom> </axiom>
    <!-- <mouse> </mouse> -->
  </div>
  <!-- wrapper -->
</template>

<script>
// import your components here
import scroll from 'smooth-scrollbar'
// import { isNullOrUndefined } from 'util'
// import Vue from 'vue'

export default {
  name: 'App',
  data () {
    return {
      // show: false,
      // scroll: false,
      el: false,

      // display state
      showLogo: true,
      showFrame: true,
      fixContent: false,
      coverLeft: 'c',
      coverRight: 'c',
      hideScrollDown: false,
      hideCenterPitch: false,
      hiddenSocial: false,
      coverDisplay: false,
      showPaging: true,
      scrollZIndex: 3,
      logo: './static/img/logo.svg',
      prev: './static/img/back.png',
      next: './static/img/go.png',
      navs: [{
        id: 1,
        title: 'Join us',
        url: 'joinus',
        class: 'join'
      },
      {
        id: 2,
        title: 'Menu',
        url: 'menu',
        class: 'menu'
      },
      {
        id: 3,
        title: 'Pitch Deck',
        url: 'pitchdesk',
        class: 'mobile pitch'
      }
      ]

    }
  },
  ready () {
    //  window.addEventListener('onload', this.leaving)
    // alert('i was ready')
  },
  mounted: function () {
    // alert('i was mounth')

    var vm = this
    var scrollbarOptions = {
      renderByPixels: false,
      continuousScrolling: false
    }

    var v = vm.page().scroll
    var div = document.getElementById(v)
    // console.log(div)
    if (!div) {
      return
    }

    // const scrollbar =
    scroll.init(div, scrollbarOptions)
  },

  // before
  beforeMount () {

    // console.log(scrolled)
  },
  // define methods under the `methods` object
  beforeDestroy () {
    // window.removeEventListener('scroll', this.handleScroll)
  },
  // define methods under the `methods` object
  methods: {

    defaultState: function () {
      var vm = this

      vm.showLogo = true
      vm.showFrame = true
      vm.fixContent = false

      vm.coverDisplay = 'clip'

      // vm.coverLeft = 'c'
      vm.coverLeft = 'enter'
      vm.coverRight = 'c'
      vm.hideScrollDown = false
      vm.hideCenterPitch = false
      vm.showPaging = true
      vm.scrollZIndex = 3
      vm.logo = './static/img/logo.svg'

      vm.navs = [{
        id: 1,
        title: 'Join us',
        url: 'joinus',
        class: 'join'
      },
      {
        id: 2,
        title: 'Menu',
        url: 'menu',
        class: 'menu'
      },
      {
        id: 3,
        title: 'Pitch Desk',
        url: 'pitchdesk',
        class: 'mobile pitch'
      }
      ]
    },

    triggerScrolled: function () {
      var vm = this

      // vm.showLogo = true
      vm.showFrame = false
      // vm.coverLeft = 'v'
      vm.coverLeft = 'fade'
      vm.coverRight = 'z'
      vm.hideScrollDown = true
      vm.showPaging = false
      vm.scrollZIndex = 0
      vm.coverDisplay = 'full'
    },

    triggerHidePitch: function () {
      var vm = this
      vm.hideCenterPitch = true
    },

    triggerMenuState: function () {
      var vm = this
      vm.hideScrollDown = true
      vm.showPaging = false
      vm.showLogo = true
      vm.hideCenterPitch = true
      vm.navs = [{
        id: 1,
        title: 'Close',
        url: '/',
        class: 'close',
        image: './static/img/close.svg'
      }]
      vm.logo = './static/img/logow.svg'
    },

    triggerPitchState: function () {
      var vm = this
      vm.hideScrollDown = true
      vm.showPaging = false
      vm.showLogo = true
      vm.hideCenterPitch = true
      vm.showFrame = false
    },

    triggerIndexState: function () {
      var vm = this
      vm.showLogo = false
    },

    mobileState: function () {
      var vm = this
      vm.hiddenSocial = true
      vm.hideCenterPitch = false
    },

    isMobile: function () {
      if (navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true
      } else {
        return false
      }
    },

    page: function () {
      // add new page here
      var pages = {
        default: {
          next: 'whoweare',
          prev: '/',
          scroll: null,
          type: 'home',
          image: './static/img/reed_le-voyagist_cover.jpg'
        },
        index: {
          next: 'whoweare',
          prev: '/',
          scroll: null,
          type: 'home',
          image: './static/img/reed_le-voyagist_cover.jpg'
        },
        whoweare: {
          next: 'whatweinvest',
          prev: '/',
          scroll: 'who',
          type: 'home',
          image: './static/img/reed_le-voyagist_cover.jpg'
        },
        whatweinvest: {
          next: 'whereweinvest',
          prev: 'whoweare',
          scroll: 'what',
          type: 'page',
          image: './static/img/what.jpg'
        },
        whereweinvest: {
          next: 'howweinvest',
          prev: 'whatweinvest',
          scroll: 'where',
          type: 'page',
          image: './static/img/where.jpg'
        },
        howweinvest: {
          next: 'whyworkwithus',
          prev: 'whereweinvest',
          scroll: 'how',
          type: 'page',
          image: './static/img/how.jpg'
        },
        whyworkwithus: {
          next: 'ourpartners',
          prev: 'howweinvest',
          scroll: 'why',
          type: 'page',
          image: './static/img/why.jpg'
        },
        ourpartners: {
          next: 'insign',
          prev: 'whyworkwithus',
          scroll: 'partner',
          type: 'page',
          image: './static/img/partner.jpg'
        },
        insign: {
          next: 'theteam',
          prev: 'ourpartners',
          scroll: 'insign',
          type: 'page',
          image: './static/img/insign.jpg'
        },
        theteam: {
          next: 'contact',
          prev: 'insign',
          scroll: 'team',
          type: 'page',
          image: './static/img/team.jpg'
        },
        contact: {
          next: '',
          prev: 'theteam',
          scroll: 'contact',
          type: 'page',
          image: './static/img/contact.jpg'
        },
        pitchdesk: {
          next: 'pitchdesk',
          prev: 'pitchdesk',
          scroll: 'desk',
          home: true,
          type: 'nave'
        },
        joinus: {
          next: 'joinus',
          prev: 'joinus',
          scroll: 'join',
          home: true,
          type: 'nave'
        },
        menu: {
          next: 'menu',
          prev: 'menu',
          scroll: 'menu',
          home: true,
          type: 'menu'
        }
      }

      if (this.$route.path.substring(1, this.$route.path.length)) {
        return pages[this.$route.path.substring(1, this.$route.path.length)]
      } else {
        // default
        return pages['default']
      }
    }
  }
}
</script>

<style scoped>
  /* Enter and leave animations can use different */

/* mice panel */
#mice { margin: 0 auto; padding-bottom: 8em;  padding-top: 5.5em; text-align: center; width: 20px; height: 9px; }

#mice span
{
display: block;
    width: 10px;
    height: 10px;
    /* -webkit-transform: rotate(45deg); */
    transform: rotate(45deg);
    border-right: 2px solid #343a40;
    border-bottom: 2px solid #343a40;
    margin: 5px 0 3px 8px;
}

.unu
{
  margin-top: 6px;
}

.unu, .doi, .trei
{
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
}

.unu
{
  -webkit-animation-delay: .1s;
  -moz-animation-delay: .1s;
  -webkit-animation-direction: alternate;
}

.doi
{
  -webkit-animation-delay: .2s;
  -moz-animation-delay: .2s;
  -webkit-animation-direction: alternate;
}

.trei
{
  -webkit-animation-delay: .3s;
  -moz-animation-delay: .3s;
  -webkit-animation-direction: alternate;
}

.mouse
{
    height: 40px;
    width: 27px;
    border-radius: 15px;
    transform: none;
    border: 2px solid#343a40;
    top: 170px;
}

.wheel
{
height: 5px;
    width: 5px;
    display: block;
    margin: 7px 9px;
    border-radius: 3px;
    background: #343a40;
    position: relative;
}

.wheel
{
  -webkit-animation: mouse-wheel 1.2s ease infinite;
  -moz-animation: mouse-wheel 1.2s ease infinite;
}

/*
@-webkit-keyframes mouse-wheel
{
   0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
}

@-moz-keyframes mouse-wheel
{
  0% { top: 1px; }
  50% { top: 2px; }
  100% { top: 3px;}
}

@-webkit-keyframes mouse-scroll {

  0%   { opacity: 0;}
  50%  { opacity: .5;}
  100% { opacity: 1;}
}
@-moz-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@-o-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}*/

/*****************/

  /* durations and timing functions.              */

  .container.cove
  {
    max-width: 100%;
    max-height: 900px;
    padding: 0;
    margin: auto;
  }

  .slide-fade-enter-active {
    transition: all 1.3s ease;
  }

  .slide-fade-leave-active {
    /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
    transition: all 1.8s reverse;
  }

  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */

  {
    transform: translateX(10px);
    opacity: 0;
  }

  .project .social-list {
    bottom: 60px;
  }

  .project .inner-nav__btn {
    display: block;
  }

  .project .cls-1 {
    fill: #2f3c47;
  }

  .project .mx-a {
    margin-left: calc(50% - 23px);
  }

  .project .bg {
    width: 24px;
  }

  .down {
    bottom: 60px;
    /* left: auto; */
    position: fixed;
    /* top: 00px; */
    width: 5vh;
    z-index: 1;
  }

  .project .header__title {
    top: 53px;
    left: 81px;
    z-index: 99 !important;
    width: 176px;
  }

  nav {
    z-index: 3;
  }

  .top {
    z-index: 1;
  }

  .behide {
    z-index: 2;
  }

  .down:hover {
    cursor: pointer;
  }

   .pitch.middle {
      display: none;
    }

  /*
    @-webkit-keyframes scroll-inner {
      from {
        margin-top: 15%;
      }
      to {
        margin-top: 50%;
      }
    }

    @keyframes scroll-inner {
      from {
        margin-top: 15%;
      }
      to {
        margin-top: 50%;
      }
    }

    @-webkit-keyframes scroll-mouse {
      from {
        margin-top: 0;
      }
      to {
        margin-top: 15px;
      }
    }

    @keyframes scroll-mouse {
      from {
        margin-top: 0;
      }
      to {
        margin-top: 15px;
      }
    }*/

  div.mouse-container {
    position: relative;
    display: block;
    /* height: 80px; */
  }

  /* div.mouse {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 27px;
    height: 40px;
    border: solid 2px #495057;
    border-radius: 25px;
  } */

  /*div.mouse:hover {
      -webkit-animation: scroll-mouse 1.5s;
      animation: scroll-mouse 1.5s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }*/

  div.mouse span.scroll-down {
    display: block;
    width: 7px;
    height: 7px;
    background: #495057;
    border-radius: 50%;
    margin: 25% auto auto auto;
  }

  div.mouse:hover span.scroll-down {
    -webkit-animation: scroll-inner 1s;
    animation: scroll-inner 1s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
  }

  /* mouse animation */

  .vertical {
    width: 40%;
    position: absolute;
    top: -50px;
    left: 8px;
  }

  /* remove reboot*/

  button:focus {
    outline: none;
  }

  /* arrow nav */

  .project .inner-nav__btn .icon--arrow {
    width: 44px;
    height: 44px;
    fill: #495057;
  }

  .project .inner-nav__list {
    z-index: 3;
    bottom: 60px;
    width: -42px;
    position: fixed;
  }

  .project .icon {
    fill: #495057;
    width: 24px;
    height: 24px;
    left: 0;
    top: 10px;
  }

  .project .social-list__item .square {
    fill: #495057;
    width: 30px;
    height: 30px;
    left: 0;
    top: 0;
  }

@media (min-width: 1200px) {
    .project .social-list {
      bottom: 67px;
    }
    /* .down .mouse-container:before {
          content: "Scroll";
          color: #2f3c47;
          font-size: 18px;
          font-weight: bold;
        left: 5px;
        letter-spacing: 0.5px;
        position: relative;
      } */
    .project .down {
      bottom: 40px;
    }
    .project .inner-nav__btn .icon--arrow {
      width: 40px;
      height: 40px;
    }
    .pitch.middle {
      display: none;
    }
  }

  /* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .project .inner-nav__list {
    z-index: 3;
    bottom: 51px;
    width: -42px;
    position: fixed;
    display: inline-flex;
}

     .header__title .logo__sm
    {
      width: 25vw;
      display: none;
    }

    .social-list {
    left: calc(5vw - 0px);
  }
}

  /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

  .project .inner-nav__list {
    z-index: 3;
    bottom: 51px;
    width: -42px;
    position: fixed;
    display: inline-flex;
}

   .header__title .logo__sm
    {
      width: 25vw;
      display: none;
    }

      .social-list {
    left: calc(5vw - 0px);
  }
}

  @media (max-width: 575.98px) {

      .wheel  {
    height: 5px;
    width: 5px;
    display: block;
    margin: 7px 6px;
    border-radius: 3px;
    background: #343a40;
    position: relative;
}

#mice span {
    display: block;
    width: 10px;
    height: 10px;
    /* -webkit-transform: rotate(45deg); */
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-right: 2px solid #343a40;
    border-bottom: 2px solid #343a40;
    margin: 5px 0 3px 6px;
}

    .project .header__title {
      top: 31px;
      left: 36px;
    }
    div.mouse {
      width: 21px;
      height: 30px;
    }
    div.mouse span.scroll-down {
      width: 5px;
      height: 5px;
    }
    .down {
      bottom: 25px;
    }
    .project .inner-nav__btn .icon--arrow {
      width: 18px;
      height: 18px;
    }
    .project .inner-nav__list {
      display: flex !important;
      justify-content: center;
      bottom: 0;
      right: -20px;
      /* width: 96px; */
    }
    .project .inner-nav__btn {
      position: relative;
      width: 40px;
      height: 40px;
    }
    .social-list {
      display: none;
    }
  }
</style>
