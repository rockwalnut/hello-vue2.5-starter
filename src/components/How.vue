<template>
  <div class="how">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
          <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div>  <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
                         <!-- <router-link to="pitchdesk">
                 <button class="menu-btn pitch" aria-label="" href="javascript:void(0);">
                 <span class="menu-btn__text">Pitch Desk</span>
                </button>
          </router-link> -->
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="how">

      <div class="project__content">
        <div class="project__body row white">
          <section class="project__description col-md-7 red | ctn-content stage" v-for="p in pres" :key="p.id" v-bind:class="p.background">
            <h3 class="hidden-visually">Project</h3>
            <div class="project__text | mrg-2 | m-100 m-mr-0">
              <p class="title bold">{{ p.titleTop }}</p>
              <p class="title bold">{{ p.titleBot }}</p>
              <!-- <p class="sub">{{ p.sub }}</p> -->
            </div>
          </section>
        <!--  <section class="project__description col white | ctn-content" v-for="p in posts" :key="p.id" v-bind:class="p.background">
            <div class="project__text | mrg-5 | m-100 m-mr-0">
              <p class="title bold tb">{{ p.title }}</p>
            </div>
          </section> -->
          <section class="project__description col-12 tr white pb-0 | ctn-content invest">
            <ul class="">
              <li v-bind:class="v.class" v-for="v in invests" :key="v.id">
                <!-- <span class="sub tb fixed">{{ v.sub }}</span> -->
                <p class="tile"><span class="title lg bold fixed mx-auto f-50">{{ v.title }}</span><span class="title lg bold f-80"> {{ v.series }}</span></p>
                <img class="bg mobile" v-bind:class="v.imageClass" v-bind:src="v.image" />
              </li>
            </ul>
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
</template>

<script>
import scroll from 'smooth-scrollbar'
// import PartnerVue from './Partner.vue'
export default {
  name: 'How',
  data () {
    return {
      title: 'How We Invest',

      index: '04',
      subs: ['Stages of Startups'],
      slide__title: false,
      slide__sub: false,
      pres: [
        {
          id: 99,
          titleTop: 'Stages',
          titleBot: 'of startups',
          sub: 'Post seed startups and invest in beyond',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      invests: this.getInvest(),
      prev: {
        title: 'Where We Invest',
        url: 'whereweinvest'
      },
      next: {
        title: 'Why Work With Us',
        url: 'whyworkwithus'
      }
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

    getInvest: function () {
      if (!this.isMobile()) {
        var desktop = [
          {
            id: 1,
            title: 'Growth',
            sub: 'Post Seed',
            image: './static/img/growth.png',
            class: 'indent-4 tb',
            imageClass: 'growth'
          },
          {
            id: 2,
            title: 'Series',
            series: 'B',
            sub: 'Accessories',
            image: './static/img/seriesb.png',
            imageClass: 'seriesb',
            class: 'indent-3 tr'
          },
          {
            id: 3,
            title: 'Series',
            series: 'A',
            sub: 'Accessories',
            image: './static/img/seriesa.png',
            imageClass: 'seriesa',
            class: 'indent-2 tr'
          },
          {
            id: 4,
            title: 'Seed',
            sub: 'Accessories',
            image: './static/img/seed.png',
            imageClass: 'seed',
            class: 'indent-1 tb'
          }
        ]

        return desktop
      } else {
        var mobile = [
          {
            id: 4,
            title: 'Seed',
            sub: 'Accessories',
            image: './static/img/seed.png',
            imageClass: 'seed',
            class: 'indent-1 tb'
          },
          {
            id: 3,
            title: 'Series',
            series: 'A',
            sub: 'Accessories',
            image: './static/img/seriesa.png',
            imageClass: 'seriesa',
            class: 'indent-2 tr'
          },
          {
            id: 2,
            title: 'Series',
            series: 'B',
            sub: 'Accessories',
            image: './static/img/seriesb.png',
            imageClass: 'seriesb',
            class: 'indent-3 tr'
          },
          {
            id: 1,
            title: 'Growth',
            sub: 'Post Seed',
            image: './static/img/growth.png',
            class: 'indent-4 tb',
            imageClass: 'growth'
          }

        ]

        return mobile
      }
    }
  },
  mounted: function () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var v = 'how'
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
      var div = document.getElementById('how')

      if (!div) {
        return
      }

      const scrollbar = scroll.init(div)

      // hide
      if (scrollbar.offset.y > 40) {
        vm.$parent.triggerScrolled()
      } else {
        vm.$parent.defaultState()
      }
      // slide sub
      if (scrollbar.scrollTop > 55) {
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__sub = 'slide__sub__leave'
      }

      // if (event.deltaY < 0) {
      //   scrolled++
      // }
      // if (event.deltaY > 0) {
      //   scrolled--
      // }

      // console.log(scrolled)
    })
  },
  destroyed () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()
  }
}
</script>

<style scoped>
/* alider class*/

/* .slide__title__active {
    transform: translate3d(-170px, 0px, 0px);
    transition-duration: 1600ms;
  }

  .slide__sub__active {
    transform: translate3d(-496px, 0px, 0px);
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

  /* mobile *
  @media (max-width: 575.98px)
  {
    .slide__title__active {
      transform: translate3d(-9vw, 0px, 0px) !important;
    }
    .slide__sub__active {
      transform: translate3d(-30vw, 0px, 0px) !important;
    }
  } */

/***/

.how .lg {
  font-size: 3.47vw;
}

/* .how .project__body .bg {
  position: absolute;
  left: 15%;
  width: 11vw;
  z-index: 2;
  bottom: -2px;
} */

.how .project__description ul li span {
  margin-bottom: 8vh;
  /* display: block;
      transform: translateX(20%); */
}

/* for new */

.project__body ul li {
  position: relative;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  width: 17vw;
}

/* ul li.indent-1 {
  transform: translateX(0);
}

ul li.indent-2 {
  transform: translateX(16.9vw);
}

ul li.indent-3 {
  transform: translateX(33.8vw);
}

ul li.indent-4 {
  transform: translateX(50.7vw);
  border-right: none !important;
} */

/*.project__text
  {
    color: #2f3c47;
    font-size: 2.1rem;
    line-height: 1.62;
  }*/

.scrollarea {
  height: 100vh;
  display: block;
}

@media (min-width: 1200px) {
  .project__content .title {
    font-size: 70px;
    line-height: 1;
    letter-spacing: normal;
  }
  .how .ctn-content.stage {
    width: 800px;
    height: 350px;
  }
  .how .ctn-content.invest {
    padding-top: 24px;
    /* -webkit-transform: translateY(-55px); */
    /* transform: translateY(21px); */
    background: transparent;
    /* padding-left: 296px !important; */
  }
  .how .project__body .bg {
    position: absolute;
    left: 22%;
    /* width: 11vw; */
    height: 63px;
    z-index: 2;
    bottom: -2px;
  }
  /* .how .project__body .bg.seed {
                 bottom: -0.45rem;
        } */
  .how .f-60 {
    font-size: 60px;
    line-height: 1.69;
  }
  .how .f-50 {
    font-size: 50px;
    line-height: 1.69;
  }
  .how .f-80 {
    font-size: 80px;
    line-height: 1.69;
  }
  .how .project__description ul li p.tile {
    margin-bottom: 0;
    /* text-align: center; */
    /* display: block; */
    /* -webkit-transform: translateX(20%); */
    transform: translateY(-52%);
  }
  .project__body ul li {
    position: relative;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    /* width: 240px; */
    width: calc(16vw + 1rem);
    height: 120px;
  }
  ul li.indent-4 {
    -webkit-transform: translateX(50.7vw);
    transform: translateX(49.34vw);
    border-right: none !important;
  }
  ul li.indent-2 {
    -webkit-transform: translateX(16.9vw);
    transform: translateX(16.45vw);
  }
  ul li.indent-3 {
    -webkit-transform: translateX(33.8vw);
    transform: translateX(32.895vw);
  }

  .how .fill {
  width: max-content
}
}
/* end desktop*/

 @media (max-width: 575.98px) {
     .how .fill {
  width: max-content
 }

  .how .ctn-content.stage
 {
       width: 74.66666666666667vw;
    /* height: 200px; */
    padding-left: 25px;
 }

   .how .ctn-content.invest
 {
   padding-right: 40px;
    padding-left: 48px;
    padding-top: 5px;
 }

 .how .project__text .title {
    line-height: 1;
 }

 .project__body ul li {
    position: relative;
    border: none;
    width: 100%;
        padding: 2vh 0 0 0;
}

.how .project__body .bg {
    position: relative;
     /* left: 0; */
    width: 70%;
    z-index: 2;
     /* bottom: 0; */
}

.how .tile .title {
    font-size: 10.666666666666666vw;
}

.how .tile .title.f-80  {
    font-size: 14.666666666666666vw;
}

  ul li.indent-2 {
     text-align: right;
  }
  ul li.indent-3 {
      text-align: right;
  }

    .bg.seriesa,
  .bg.seriesb
  {
       margin-left: 30.6666666666666665vw;
  }

  .bg.seed
  {
       margin-left: -7.6666666666666665vw;
    margin-top: -5vw;
  }

  .how .pb-0, .py-0 {
     padding-bottom: 70!important;
  }

}

@media (min-width: 992px) and (max-width: 1199.98px)
{

  .project__content .title {
    font-size: 70px;
    line-height: 1;
    letter-spacing: normal;
  }
  .how .ctn-content.stage {
    width: 800px;
    height: 350px;
  }
  .how .ctn-content.invest {
    padding-top: 24px;
    /* -webkit-transform: translateY(-55px); */
    /* transform: translateY(21px); */
    background: transparent;
    /* padding-left: 296px !important; */
  }
  .how .project__body .bg {
    position: absolute;
    left: 0;
    /* width: 11vw; */
    height: 63px;
    z-index: 2;
    bottom: -2px;
  }
  /* .how .project__body .bg.seed {
                 bottom: -0.45rem;
        } */
  .how .f-60 {
    font-size: 60px;
    line-height: 1.69;
  }
  .how .f-50 {
    font-size: 3.4722222222222223vw;
    line-height: 1.69;
  }
  .how .f-80 {
    font-size: 5.555555555555555vw;
    line-height: 1.69;
  }
  .how .project__description ul li p.tile {
    margin-bottom: 0;
    /* text-align: center; */
    /* display: block; */
    /* -webkit-transform: translateX(20%); */
    transform: translateY(-52%);
  }
  .project__body ul li {
    position: relative;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    /* width: 240px; */
    width: calc(16vw + 1rem);
    height: 120px;
  }
  ul li.indent-4 {
    -webkit-transform: translateX(50.7vw);
    transform: translateX(49.34vw);
    border-right: none !important;
  }
  ul li.indent-2 {
    -webkit-transform: translateX(16.9vw);
    transform: translateX(16.45vw);
  }
  ul li.indent-3 {
    -webkit-transform: translateX(33.8vw);
    transform: translateX(32.895vw);
  }

  .how .fill {
  width: max-content
}

    .how .fill {
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
.ctn-content {
    padding-left: 10.52777777777778vw;
    padding-right: 10.52777777777778vw;
    padding-top: 66.5px;
    padding-bottom: 45px;
}
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

        .how .fill {
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
       .how .fill {
  width: max-content
 }

   .project__content .title {
    font-size: 70px;
    line-height: 1;
    letter-spacing: normal;
  }
  .how .ctn-content.stage {
    width: 800px;
    height: 350px;
  }
  .how .ctn-content.invest {
    padding-top: 24px;
    /* -webkit-transform: translateY(-55px); */
    /* transform: translateY(21px); */
    background: transparent;
    /* padding-left: 296px !important; */
  }
  .how .project__body .bg {
    position: absolute;
    left: 0;
    /* width: 11vw; */
    height: 63px;
    z-index: 2;
    bottom: -3px;
  }
  /* .how .project__body .bg.seed {
                 bottom: -0.45rem;
        } */
  .how .f-60 {
    font-size: 60px;
    line-height: 1.69;
  }
  .how .f-50 {
    font-size: 3.4722222222222223vw;
    line-height: 1.69;
  }
  .how .f-80 {
    font-size: 5.555555555555555vw;
    line-height: 1.69;
  }
  .how .project__description ul li p.tile {
    margin-bottom: 0;
    /* text-align: center; */
    /* display: block; */
    /* -webkit-transform: translateX(20%); */
    transform: translateY(-52%);
  }
  .project__body ul li {
    position: relative;
    border-right: 0;
    border-bottom: 3px solid black;
    /* width: 240px; */
    width: calc(16vw + 1rem);
    height: 120px;
  }
  ul li.indent-4 {
    -webkit-transform: translateX(50.7vw);
    transform: translateX(49.34vw);
    border-right: none !important;
  }
  ul li.indent-2 {
    -webkit-transform: translateX(16.9vw);
    transform: translateX(16.45vw);
  }
  ul li.indent-3 {
    -webkit-transform: translateX(33.8vw);
    transform: translateX(32.895vw);
  }

  .how .fill {
  width: max-content
}

    .how .fill {
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
.ctn-content {
    padding-left: 10.52777777777778vw;
    padding-right: 10.52777777777778vw;
    padding-top: 66.5px;
    padding-bottom: 45px;
}

 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

      .how .fill {
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

        .project__content .title {
    font-size: 70px;
    line-height: 1;
    letter-spacing: normal;
  }
  .how .ctn-content.stage {
    width: 800px;
    height: 350px;
  }
  .how .ctn-content.invest {
    padding-top: 24px;
    /* -webkit-transform: translateY(-55px); */
    /* transform: translateY(21px); */
    background: transparent;
    /* padding-left: 296px !important; */
  }
  .how .project__body .bg {
    position: absolute;
    left: 0;
    /* width: 11vw; */
    height: 63px;
    z-index: 2;
    bottom: -2px;
  }
  /* .how .project__body .bg.seed {
                 bottom: -0.45rem;
        } */
  .how .f-60 {
    font-size: 60px;
    line-height: 1.69;
  }
  .how .f-50 {
    font-size: 3.4722222222222223vw;
    line-height: 1.69;
  }
  .how .f-80 {
    font-size: 5.555555555555555vw;
    line-height: 1.69;
  }
  .how .project__description ul li p.tile {
    margin-bottom: 0;
    /* text-align: center; */
    /* display: block; */
    /* -webkit-transform: translateX(20%); */
    transform: translateY(-52%);
  }
  .project__body ul li {
    position: relative;
    border-right: 0;
    border-bottom: 3px solid black;
    /* width: 240px; */
    width: calc(16vw + 1rem);
    height: 120px;
  }
  ul li.indent-4 {
    -webkit-transform: translateX(50.7vw);
    transform: translateX(49.34vw);
    border-right: none !important;
  }
  ul li.indent-2 {
    -webkit-transform: translateX(16.9vw);
    transform: translateX(16.45vw);
  }
  ul li.indent-3 {
    -webkit-transform: translateX(33.8vw);
    transform: translateX(32.895vw);
  }

  .how .fill {
  width: max-content
}

    .how .fill {
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
.ctn-content {
    padding-left: 10.52777777777778vw;
    padding-right: 10.52777777777778vw;
    padding-top: 66.5px;
    padding-bottom: 45px;
}

 }
</style>
