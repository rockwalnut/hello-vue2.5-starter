<template>
  <div class="who">
    <!-- <head :overrideStyles="overrideStyles" :sub="sub" :title="title" :index="index"> </head> -->
    <header class="project__header action | ctn">
      <div class="project__header__inner">
           <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div> <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold slide__sub">{{ sub }}</h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="who">
      <div class="scroll-content" style="">

        <div class="project__content">
          <div class="project__body">
            <section class="project__description | ctn-content col-md-12 t" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text | col-12 mrg-2 p-0 | m-100 m-mr-0">
                <p class="title bold tb" v-bind:class="p.text">{{ p.title }}</p>
                <p class="sub bold tb first" v-bind:class="p.subClass">{{ p.sub }}</p>
                <p class="project__text">
                  <span class="sub bold tb" v-bind:class="p.text">{{ p.bold }}</span>
                  <span class="sub tb" v-bind:class="p.text">{{ p.regular }}</span>
                </p>
                <p class="sub tb" v-for="d in p.detail" :key="d">{{ d }}</p>
              </div>
            </section>

           <section class="project__description py-0 | ctn-content white c">
            <div class="project__text | col-12 m-o p-0 mrg-2 | m-100 m-mr-0">
              <a class="btn btn--cta" href="#"> About SCG</a>
            </div>
          </section>

          </div>
        </div>

        <div class="project__body pt-0">
           <section class="project__description py-0 m-0 | ctn white">
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
// import Vue from 'vue'
// import App from '@/App'

export default {
  name: 'Who',
  props: [ 'parentValue' ],
  data () {
    return {
      title: 'Who We Are',
      sub: 'Partnering with Startups',
      index: '01',
      offsetLeft: { title: '120', sub: '150' },
      slide__title: false,
      slide__sub: false,
      baseStyles: {
        // transform: 'translate3d(0px, 0px, 0px)'
        // color: 'blue'
      },
      overrideStyles: {
        // transform: 'translate3d(120px, 0px, 0px)'
        // color: 'red'
      },
      posts: [{
        id: 1,
        title: 'You Innovate, We Scale',
        sub: 'We are partnering with startups to transfrom industries together',
        bold: 'At Addventure',
        regular: 'we aim to accelerate and scale technologies, innovation, and companies with strategic fit and share our core values',
        detail: [],
        background: 'red',
        text: 'tw',
        subClass: 'tw mb-5c'
      },
      {
        id: 2,
        title: '',
        sub: 'More Than Just a Capital Partner',
        bold: '',
        regular: '',
        detail: [
          'AddVentures provides unrivaled access to a global network of SCG expertise and resources. We partner and invest in the best digital innovations in Industrial - B2B - Enterprise verticals.'
        ],
        background: 'white pt-5 pb-0',
        subClass: 'tb mb-2'
      },
      {
        id: 3,
        title: '',
        sub: 'Corporate Venture of SCG',
        bold: '',
        regular: '',
        detail: [
          'AddVentures is a subsidiary of SCG (The Siam Cement PLC),',
          'Southeast Asia’s leading Industrial conglomerate established in 1913.',
          'We believe open innovation is part of our roadmap to success in the next centennial.'
        ],
        background: 'white pt-5 pb-0',
        subClass: 'tb mb-2'
      }
      ],
      prev: {
        title: 'Contact',
        url: 'contact'
      },
      next: {
        title: 'What We Invest',
        url: 'whatweinvest'
      }
    }
  },
  // life cycle of component
  /* created () {},
  ready () {
    alert('i am ready')
    window.addEventListener('onload', this.leaving)
  }, */
  mounted: function () {
    // update file of #app
    /* var app = new Vue({
      el: '#app'
    })
    app.showed() */
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var scrollbarOptions = {
      renderByPixels: true,
      continuousScrolling: false
    }
    var v = 'who'
    var div = document.getElementById(v)
    // console.log(div)
    if (!div) {
    }
    scroll.init(div, scrollbarOptions)
  },

  methods: {
    /* updateValue: function (value) {
      this.$emit('input', value)
    } */
  },

  beforeMount () {
    // var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('who')

      if (!div) {
        return
      }
      const scrollbar = scroll.init(div)

      // console.log(scrollbar.offset.y)

      // hide
      if (scrollbar.offset.y > 1) {
        vm.$parent.triggerScrolled()
      } else {
        vm.$parent.defaultState()
      }

      /* if (scrollbar.offset.y > 90) {
        vm.$parent.triggerHidePitch()
      } else {
        vm.$parent.defaultState()
      } */

      // slide title
      if (scrollbar.scrollTop > 50) {
        vm.slide__title = 'slide__title__active'
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__title = 'slide__title__leave'
        vm.slide__sub = 'slide__sub__leave'
      }
    })
    // console.log(scrolled)
  },
  destroyed () {
    var vm = this
    vm.$parent.defaultState()
  }
}
</script>

<style scoped>
  /* alider class*/

 /* .slide__title__active {
    transform: translate3d(-256px, 0px, 0px);
    transition-duration: 1600ms;
  }

  .slide__sub__active {
    transform: translate3d(-446px, 0px, 0px);
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

  @media (max-width: 575.98px) {
    .slide__title__active {
        transform: translate3d(-15vw, 0px, 0px) !important;
      }
      .slide__sub__active {
        transform: translate3d(-20vw, 0px, 0px) !important;
      }
  } */

  /* .who .mb-5c
  {
    margin-bottom: 5rem !important;
  }

  .project__text p:not(:last-of-type) {
    margin-bottom: 0;
  } */

  .scrollarea {
    height: 100vh;
    display: block;
  }

  .btn.focus,
  .btn:focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .btn--cta {
    padding: none;
    color: #221f1f;
    background: #fff;
    border-radius: 0;
    border: 1px solid;
    width: 125px;
    height: 40px;
  }

  .project__content .btn--cta:hover {
    color: #f0f0f0;
    background: #ec1e23;
    border: 1px solid #ec1e23;
}

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {

    .who .fill {
  width: max-content
}
  .who .ctn-content.c
  {
    padding-top: 55px !important;
  }

}

@media (min-width: 992px) and (max-width: 1199.98px)
{

  .who .ctn-content.c  {
    padding-top: 45px !important;
}

    .who .fill {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
      }
      .project__title.t {
          position: relative;
          font-size: 11.666666666666666vw;
          font-weight: 600;
          line-height: 1.69;
          opacity: 1;
          text-transform: uppercase;
          letter-spacing: 1px;
      }

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

   .who .ctn-content.c  {
    padding-top: 45px !important;
}

        .who .fill {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
      }
      .project__title.t {
          position: relative;
          font-size: 11.666666666666666vw;
          font-weight: 600;
          line-height: 1.69;
          opacity: 1;
          text-transform: uppercase;
          letter-spacing: 1px;
      }
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

   .who .ctn-content.c  {
    padding-top: 45px !important;
}
      .who .fill {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
      }
      .project__title.t {
          position: relative;
          font-size: 11.666666666666666vw;
          font-weight: 600;
          line-height: 1.69;
          opacity: 1;
          text-transform: uppercase;
          letter-spacing: 1px;
      }
 }

/** for iphone serieds **/
 @media (max-width: 575.98px) {

      .who .fill {
  width: max-content
}

    .who .ctn-content {
padding-left: 6.933333333333334vw;
    padding-right: 8vw;
    padding-top: 46px !important;
    padding-bottom: 48px;
    display: block;
    flex-direction: unset;
  }

  .who .mb-5c {
    margin-bottom: 3rem!important;
  }
  .who .btn--cta  {
    padding: none;
    color: #221f1f;
    background: #fff;
    border-radius: 0;
    border: 1px solid;
    width: 125px;
    /* height: 40px; */
    /* width: 120px; */
    height: 45px;
    font-size: 22px;
    font-weight: bold;
    /* font-style: normal; */
    /* font-stretch: normal; */
    line-height: 45px;
    padding: 0;
  }
  .who .ctn
  {
    padding-left: 0;
    padding-right: 0;
  }

  }
</style>
