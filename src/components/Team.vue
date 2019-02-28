<template>
  <div class="team">
            <header class="project__header action | ctn">
      <div class="project__header__inner">
      <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div>
          <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
                  <!-- <router-link to="pitchdesk">
                 <button class="menu-btn pitch" aria-label="" href="javascript:void(0);">
                 <span class="menu-btn__text">Pitch Desk</span>
                </button>
          </router-link> -->
          </h3>
        </div>
      </div>
    </header>
    <div class="project__inner scrollarea" data-scrollbar id="team" ref="divx">
      <div class="scroll-content">
        <div class="project__content">
          <div class="project__body">
            <section class="project__description grey row | ctn-content t">
              <h3 class="hidden-visually">Blog</h3>
              <div class="project__text | col mrg-2 pl-0 pr-0 | m-100 m-mr-0">
                <p class="title bold tb">{{ post.title }}</p>
                <p class="sub bold tb">{{ post.sub }}</p>
              </div>
            </section>
            <section class="project__description grey row | ctn-content r">
              <h3 class="hidden-visually">Staff</h3>
              <div class="project__description  block" v-for="s in post.staffs" :key="s.id" v-bind:class="s.class">
                <div class="project__text  | m-100 m-mr-0  | down">
                  <p class="title sm tb bold text-uppercase" v-bind:class="s.fontClass">{{ s.name }}</p>
                  <p class="sub sm tb" v-bind:class="s.fontClass">{{ s.position }}</p>
                  <p class="title tr bold f-35">{{ s.title }}</p>
                </div>
              </div>
            </section>

            <section class="project__description white grey-m row | ctn-content l">
              <h3 class="hidden-visually">Staff</h3>
              <div class="project__description  block" v-for="s in post.blogs" :key="s.id" v-bind:class="s.class">
                <div class="project__text | m-100 m-mr-0  | down">
                  <p class="title sm tb bold text-uppercase" v-bind:class="s.fontClass">{{ s.name }}</p>
                  <p class="sub sm tb" v-bind:class="s.fontClass">{{ s.position }}</p>
                  <span class="title tr bold f-35" v-bind:class="s.fontClass">{{ s.title }}</span>
                </div>
              </div>
            </section>

            <!-- for mobile -->
             <!-- <section class="project__description grey row | ctn mobile">
              <h3 class="hidden-visually">Contact</h3>
              <div class="project__text | col-md-6 mrg-2 pl-0 pr-0 | m-100 m-mr-0">
                <p class="title bold tb text-uppercase">{{ contact.title }}</p>
                <p class="sub bold tb wine">{{ contact.sub }}</p>
                <p class="sub tb">{{ contact.detail }}</p>
                <p class="sub bold tb udl">{{ contact.mail }}</p>
                <P>
                  <span class="sub bold tb">{{ contact.more }} </span>
                  <router-link :to="contact.url" > <span class="sub bold tb udl ">{{ contact.site }} </span> </router-link>
                </P>
              </div>
            </section> -->

          </div>
        </div>

        <div class="project__body pt-0">
           <section class="project__description p-0 m-0 | ctn white">
            <buttom :next="next" :prev="prev"></buttom>
          </section>
        </div>
      </div>
      <!-- end scroll content -->
      <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
    </div>
  </div>
</template>

<script>
import scroll from 'smooth-scrollbar'
import moment from 'moment'
// import { log } from 'util'

export default {
  name: 'Team',
  data () {
    return {
      title: 'The Team',
      index: '08',
      subs: [],
      post: {
        title: 'We are AddVentures',
        sub: 'We are partnering with startups to transform industries together',
        staffs: this.getStaff(),
        blogs: this.getBlog()
      },
      contact: {
        title: 'Join Our Team',
        sub: 'We are looking for people who make perfect hamony together',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        mail: 'contact@addventures.co.th',
        more: 'More detail on',
        site: 'Addventures',
        url: 'www.scg.co.th'
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Insights',
        url: 'insign'
      },
      next: {
        title: 'Contact',
        url: 'contact'
      }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM')
    }
  },

  methods: {
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

    getStaff: function () {
      if (!this.isMobile()) {
        var desktopList = [
          {
            id: 1,
            title: '',
            name: 'Joshua Pas, PH.D.',
            position: 'Managing Director and Investment Commitee',
            class: 'red',
            fontClass: 'tw'
          },
          {
            id: 2,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 3,
            title: 'The Team',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tr'
          },
          {
            id: 4,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 5,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 6,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 7,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 8,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 9,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 10,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          }
        ]

        return desktopList
      } else {
        var mobileList = [
          {
            id: 1,
            title: '',
            name: 'Joshua Pas, PH.D.',
            position: 'Managing Director and Investment Commitee',
            class: 'red',
            fontClass: 'tw'
          },
          {
            id: 2,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 4,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 3,
            title: 'The Team',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tr'
          },

          {
            id: 5,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 6,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 7,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 8,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 10,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 9,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          }

        ]

        return mobileList
      }
    },

    getBlog: function () {
      if (!this.isMobile()) {
        var d = [
          {
            id: 1,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 2,
            title: 'Investment Committee',
            name: '',
            position: '',
            class: 'white custom',
            fontClass: 'tr'
          },
          {
            id: 3,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 4,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 5,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 6,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          }
        ]

        return d
      } else {
        var m = [

          {
            id: 2,
            title: 'Investment Committee',
            name: '',
            position: '',
            class: 'grey custom',
            fontClass: 'tr'
          },

          {
            id: 1,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },

          {
            id: 3,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 4,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 5,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 6,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          }
        ]

        return m
      }
    }

  },
  // life cycle of component
  created () {},
  mounted: function () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var v = 'team'
    var div = document.getElementById(v)
    // console.log(div)
    if (!div) {
    }
    scroll.init(div)
  },

  beforeMount () {
    // var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('team')
      if (!div) {
        return
      }
      const scrollbar = scroll.init(div)

      // hide
      if (scrollbar.scrollTop > 40) {
        vm.$parent.triggerScrolled()
      } else {
        vm.$parent.defaultState()
      }

      // slide title
      if (scrollbar.scrollTop > 50) {
        vm.slide__title = 'slide__title__active'
      } else {
        vm.slide__title = 'slide__title__leave'
      }

      // slide sub
      /* if (scrollbar.scrollTop > 55) {
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__sub = 'slide__sub__leave'
      } */
    })

    // console.log(scrolled)
  },
  beforeDestroy () {
    // window.removeEventListener('wheel', this.handleScroll)
  },
  destroyed () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()
  }
}
</script>

<style scoped>
/* .slide__title__active {
  transform: translate3d(-346px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-536px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__title__leave {
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__leave {
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 1600ms;
}

@media (max-width: 575.98px)
{
    .slide__title__active {
        transform: translate3d(-25vw, 0px, 0px) !important;
      }
      .slide__sub__active {
        transform: translate3d(-30vw, 0px, 0px) !important;
      }
} */

/***/

.team
.mobile
{
  display: none;
}

.team .title.sm
{
  font-size: 2.7vw;
  line-height: 1;
}

.team .title.ls-n
{
  letter-spacing: 2px;
  margin-left: -20px;
}

.team .sub.sm
{
  font-size: 1.5vw;
  line-height: 1;
}

/* .team .down
{
  transform: translateY(30%);
} */

.team .udl {
  border-bottom: 2px solid black;
  letter-spacing: 0.05em;
  width: min-content;
}

/* .team .block {
  margin-top: 0;
  margin-bottom: 0;
  padding: 40px;
  background-clip: padding-box;
  border: 10px solid transparent;
  width: 19.4vw !important;
  height: 19.4vw !important;
} */

/* .team .project__description.r {
  padding-left: 12.61%;
  padding-right: 20.1%;
}

.team .project__description.l {
  padding-right: 9.1%;
  padding-left: 25.1%;
} */

.team .block p {
  margin: 0;
  line-height: 5.1rem;
}
/*
.team  .block span {
  margin: 0;
  line-height: 6.5rem;
}*/
.team .ctn.block {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.scrollarea {
  height: 100vh;
  display: block;
}

/* .project__text p:not(:last-of-type) {
    margin-bottom: 1.5rem;
} */

/* large ascale */
@media (min-width: 1200px) {

.team .block {
    margin-top: 0;
    margin-bottom: 0;
    padding: 40px;
        margin-bottom: 14px;
    margin-right: 14px;
    /* background-clip: padding-box;
    border: 10px solid transparent; */
    /* width: 19.4vw !important; */
    /* height: 19.4vw !important; */
    width: 280px;
    height: 280px;
}

.team .ctn-content.r {
    padding-top: 0;
    padding-bottom: 74px;
        padding-right: 280px;
        justify-content: flex-start;
}

.team .ctn-content.l {
    padding-top: 66px;
    padding-bottom: 0;
        padding-left: 280px;
        justify-content: flex-end;
}

.team .ctn-content.t {
    padding-bottom: 79px;
}

.team .block.red {
   padding: 120px 0 39px 39px;
}

.team .block.grey
{
  padding-left: 14px;
    padding-right: 1px;
    padding-top: 210px;
}

.team .block.white.custom
{
 padding-top: 135px;
    padding-left: 0px;
    margin-left: -31px;
}

.team .block.red .title {
    font-size: 40px;
    line-height: 1;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 55px;
}

.team .block.red .sub {

 font-size: 20px;
  font-weight: normal;
  line-height: 1;
  text-transform: none;
}

.team .block.white .title
{
  line-height: 1;
}

.team .fill {
  width: max-content
}

}

@media (max-width: 575.98px) {
  .team .fill {
    width: max-content;
  }

    .team .ctn-content.t {
    flex-direction: unset;
    padding-top: 46px !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 25px;
    padding-right: 35px;
  }

 .team .ctn-content.r,
  .team .ctn-content.l {
     padding-left: 6.666666666666667vw;
    padding-right: 5.333333333333333vw;
    padding-top: 0;
    flex-direction: initial;
  }

.team .block.red {
    padding: 6.933333333333334vw 2px 3px 3vw;
}

.team .block.grey
{
      padding: 0 9px 0 4vw;
    /* vertical-align: -webkit-baseline-middle; */
    justify-content: flex-end;
}

.team .block {
    margin-top: 0;
    margin-bottom: 0;
    padding: 40px;
    margin-bottom: 1.4792899408284024vh;
    margin-right: 0;
    /* width: 19.4vw !important; */
    /* height: 19.4vw !important; */
    width: 40vw;
    height: 40vw;
}

.team .block.red .title  {

    font-size: 8vw;
    line-height: 8.6vw;
    height: 18.6vw;
    text-align: left;
}

.team .block.red .sub {
    font-size: 4.266666666666667vw;
    font-weight: normal;
    line-height: 1;
    text-transform: none;
    /* width: 35vw; */
}

.team .block .f-35 {
    line-height: 1.2;
    font-size: 9.333333333333334vw;
}

}

@media (min-width: 992px) and (max-width: 1199.98px)
{

  .team .block {
    margin-top: 0;
    margin-bottom: 0;
    padding: 40px;
        margin-bottom: 14px;
    margin-right: 14px;
    /* background-clip: padding-box;
    border: 10px solid transparent; */
    /* width: 19.4vw !important; */
    /* height: 19.4vw !important; */
    width: 280px;
    height: 280px;
}

.team .ctn-content.r {
    padding-top: 0;
    padding-bottom: 74px;
        padding-right: 5.52777777777778vw;
        padding-left: 5.52777777777778vw;
        justify-content: flex-start;
}

.team .ctn-content.l {
    padding-top: 66px;
    padding-bottom: 0;
        padding-left: 280px;
        justify-content: flex-end;
}

.team .ctn-content.t {
    padding-bottom: 79px;
     padding-right: 5.52777777777778vw;
        padding-left: 5.52777777777778vw;
}

.team .block.red {
   padding: 120px 0 39px 39px;
}

.team .block.grey
{
  padding-left: 14px;
    padding-right: 1px;
    padding-top: 210px;
}

.team .block.white.custom
{
 padding-top: 135px;
    padding-left: 0px;
    margin-left: -31px;
}

.team .block.red .title {
    font-size: 40px;
    line-height: 1;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 55px;
}

.team .block.red .sub {

 font-size: 20px;
  font-weight: normal;
  line-height: 1;
  text-transform: none;
}

.team .block.white .title
{
  line-height: 1;
}

.team .fill {
  width: max-content
}

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .ctn {
    padding-left: 7%;
    padding-right: 7%;
}

  .team .block {
    margin-top: 0;
    margin-bottom: 0;
    padding: 40px;
        margin-bottom: 14px;
    margin-right: 14px;
    /* background-clip: padding-box;
    border: 10px solid transparent; */
    /* width: 19.4vw !important; */
    /* height: 19.4vw !important; */
    width: 36.444444444444443vw;
    height: 36.444444444444443vw;
}

.team .ctn-content.r {
    padding-top: 0;
    padding-bottom: 74px;
        padding-right: 5.52777777777778vw;
        padding-left: 5.52777777777778vw;
        justify-content: flex-start;
}

.team .ctn-content.l {
    padding-top: 66px;
    padding-bottom: 0;
        padding-left: 10vw;
        justify-content: flex-end;
}

.team .ctn-content.t {
  display: block;
    padding-bottom: 79px;
     padding-right: 5.52777777777778vw;
        padding-left: 5.52777777777778vw;
}

.team .block.red {
   padding: 7vw 0 39px 39px;
}

.team .block.grey
{
  padding-left: 14px;
    padding-right: 1px;
    padding-top: 16vw;
}

.team .block.white.custom
{
 padding-top: 13vw;
    padding-left: 0px;
    margin-left: -31px;
}

.team .block.red .title {
    font-size: 40px;
    line-height: 1;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 55px;
}

.team .block.red .sub {

 font-size: 20px;
  font-weight: normal;
  line-height: 1;
  text-transform: none;
}

.team .block.white .title
{
  line-height: 1;
}

.team .fill {
  width: max-content
}
.project__description {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: inherit;
    padding-top: 55px;
    padding-bottom: 55px;
}
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

  .ctn {
    padding-left: 7%;
    padding-right: 7%;
}

  .team .block {
    margin-top: 0;
    margin-bottom: 0;
    padding: 40px;
        margin-bottom: 14px;
    margin-right: 14px;
    /* background-clip: padding-box;
    border: 10px solid transparent; */
    /* width: 19.4vw !important; */
    /* height: 19.4vw !important; */
    width: 36.444444444444443vw;
    height: 36.444444444444443vw;
}

.team .ctn-content.r {
    padding-top: 0;
    padding-bottom: 74px;
        padding-right: 5.52777777777778vw;
        padding-left: 5.52777777777778vw;
        justify-content: flex-start;
}

.team .ctn-content.l {
    padding-top: 66px;
    padding-bottom: 0;
        padding-left: 8vw;
        justify-content: flex-end;
}

.team .ctn-content.t {
  display: block;
    padding-bottom: 79px;
     padding-right: 5.52777777777778vw;
        padding-left: 5.52777777777778vw;
}

.team .block.red {
   padding: 7vw 0 39px 39px;
}

.team .block.grey
{
  padding-left: 14px;
    padding-right: 1px;
    padding-top: 16vw;
}

.team .block.white.custom
{
 padding-top: 13vw;
    padding-left: 0px;
    margin-left: -31px;
}

.team .block.red .title {
    font-size: 40px;
    line-height: 1;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 55px;
}

.team .block.red .sub {

 font-size: 20px;
  font-weight: normal;
  line-height: 1;
  text-transform: none;
}

.team .block.white .title
{
  line-height: 1;
}

.team .fill {
  width: max-content
}
.project__description {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: inherit;
    padding-top: 55px;
    padding-bottom: 55px;
}

 }
</style>
