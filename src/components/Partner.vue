<template>
  <div class="partner">
    <header class="project__header action | ctn part">
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

              <!-- <router-link to="pitchdesk">
                 <button class="menu-btn pitch" aria-label="" href="javascript:void(0);">
                 <span class="menu-btn__text">Pitch Desk</span>
                </button>
          </router-link>--></h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="partner">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body white">
            <section class="project__description grey row | ctn-content first">
              <h3 class="hidden-visually">Partner</h3>
              <div class="project__text | mrg-2x col-md-6 ml-0 mr-0 pr-0 pl-0  | m-100 m-mr-0">
                <p class="title bold tb">{{ posts.title }}</p>
                <p class="sub bold tb">{{ posts.sub }}</p>
              </div>
            </section>

            <section class="project__description grey row | ctn top">
              <div class="col-md-4 block" v-for="r in posts.items" :key="r.id" v-bind:class="r.class">
                <div class="project__text | col-md-12 mr-0 ml-0 pr-0 pl-0 mrg-2c | m-100 m-mr-0">
                  <img class="bg__block l" v-show="r.image != null" v-bind:src="r.image" />
                  <div class="of-l">

                    <div v-show="r.type == 'redd'" class="red box | redd">
                      <p class="title bold" v-bind:class="r.titleClass">{{ r.title }}</p>
                    </div>

                    <!-- <hr class="white n" v-bind:class="r.lineClass" /> -->
                    <p class="sub shift bold tb">{{ r.sub }}</p>
                    <p class="sub shift tb">{{ r.content }}</p>
                  </div>
                </div>
              </div>

            </section>

            <section class="project__description row | ctn pb-0 bot">
              <h3 class="hidden-visually">Venture</h3>
              <div class="col-md-4 block  | mb-5" v-for="r in posts.ventures" :key="r.id" v-bind:class="r.class">
                <div class="project__text |  mrg-2c | m-100 m-mr-0">
                  <img class="bg__block r" v-show="r.image != null" v-bind:src="r.image" />
                  <div class="of-r" >
                    <div v-show="r.type == 'redd'" class="red box | redd">
                      <p class="title bold" v-bind:class="r.titleClass">{{ r.title }}</p>
                    </div>
                    <hr class="black n" v-bind:class="r.lineClass" />
                    <p class="sub shift tb bold">{{ r.sub }}</p>
                    <p class="sub shift tb bold">{{ r.content }}</p>
                  </div>
                </div>
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
export default {
  name: 'Who',
  data () {
    return {
      title: 'Our Partners',
      index: '06',
      subs: ['VC Funds', 'Startups'],
      posts: {
        title: 'Build.Partner.Grow',
        sub:
          'At AddVentures, we aim to build long-term and reliable partnerships',
        items: [
          {
            id: 1,
            title: 'CV Funds',
            sub: '',
            image: null,
            class: 'cv',
            titleClass: 'f-60',
            lineClass: 'show',
            type: 'redd'
          },
          {
            id: 2,
            title: '',
            sub: 'Vertex Ventures',
            content: 'Southeast Asia & India invests in high-growth startups.',
            image: './static/img/img3.jpg'
          },
          {
            id: 3,
            title: '',
            sub: 'Wavemaker',
            content: 'is invests in seed - stage and B2B startups.',
            image: './static/img/img3.jpg'
          }
        ],
        ventures: [
          {
            id: 0,
            title: 'All   Startups',
            sub: '',
            image: null,
            class: 'desktop',
            titleClass: ' f-60',
            lineClass: 'show black',
            type: 'redd',
            boxClass: 'desktop'
          },
          {
            id: 2,
            title: '',
            sub: 'HG Robotics',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 3,
            title: '',
            sub: 'Giztix',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 1,
            title: 'All   Startups',
            sub: '',
            image: null,
            class: 'mobile',
            titleClass: ' f-60',
            lineClass: 'show black',
            type: 'redd',
            boxClass: 'mobile'
          },
          {
            id: 4,
            title: '',
            sub: 'Getlink',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 5,
            title: '',
            sub: 'Bannia',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 6,
            title: '',
            sub: 'Builk',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 7,
            title: '',
            sub: 'Plug & Play',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          }
        ]
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Why Work With',
        url: 'whyworkwithus'
      },
      next: {
        title: 'Insights',
        url: 'insign'
      }
    }
  },
  // life cycle of component
  created () {},
  mounted: function () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var v = 'partner'
    var div = document.getElementById(v)
    // console.log(div)
    if (!div) {
    }
    scroll.init(div)
  },

  beforeMount () {
    // var scrolled
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('partner')
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
    transform: translate3d(-203px, 0px, 0px);
    transition-duration: 1600ms;
  }

  .slide__sub__active {
    transform: translate3d(-466px, 0px, 0px);
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
      transform: translate3d(-13vw, 0px, 0px) !important;
    }
    .slide__sub__active {
      transform: translate3d(-30vw, 0px, 0px) !important;
    }
  } */

/* .partner .block.red.t {
    height: 15.3vw;
    -webkit-transform: translateY(1.8%);
    transform: translateY(1.8%);
    transform: translateX(-1.8%);
    border-right: solid 2vw #f0f0f0;
    border-left: solid 1vw #f0f0f0;
  } */

.partner .block.red.b {
  height: 15.3vw;
  /* -webkit-transform: translateY(1.8%);
    transform: translateY(1.8%);
    transform: translateX(-1.8%); */
  border-right: solid 2vw white;
  border-left: solid 2vw white;
}

.project__text p:not(:last-of-type) {
  margin-bottom: 1.5rem;
}

/* .of-r {
    transform: translateX(6%);
  }

  .of-l {
    transform: translateX(-6%);
  } */

/* .partner .ctn {
    padding-left: 7.1% !important;
  } */

.partner hr {
  display: none;
}

.indent {
  padding-left: 70px;
}

.project__body .bg__block {
  width: 25vw;
  padding: 5px 10px 5px 5px;
}

/* .project__body .bg__block.l {
    padding: 5px 0 5px 40px;
  }*/

/* .project__body .bg__block.r {
   padding: 5px 40px 5px 0;
  }*/

.scrollarea {
  height: 100vh;
  display: block;
}

.project__text .title {
  line-height: 1;
}

@media (min-width: 1200px) {
  .partner .ctn {
    padding-left: 140px;
    padding-bottom: 110px;
  }
  .partner .block.red.evo {
    width: 350px;
    height: 180px;
    /* padding: 0; */
    padding: 45px 32px 30px 51px;
    /* transform: translateX(-1.8%);
      border: solid 40px #f0f0f0; */
  }
  /* .partner .block.red.b {
         width: 350px;
    height: 180px;
      padding: 45px 32px 30px 51px;
      /* -webkit-transform: translateX(-1.8%); */
  /* transform: translateX(-1.8%); */
  /* border: solid 40px white;
          border-left: 0;
      border-top: 0; */
  /* border-left: solid 0 #f0f0f0; *
  } */
  .partner .f-60 {
    font-size: 60px;
    line-height: 0.92;
  }
  /* .partner .of-r {
      -webkit-transform: translateX(6%);
      transform: translateX(6%);
      text-align: right;
  } */
  .project__body .bg__block {
    width: 350px;
    height: 280px;
    padding: 0;
    margin-bottom: 30px;
  }
  .partner .of-l p.sub {
    transform: translateX(-5%);
  }
  .partner .of-r p.sub {
    transform: translateX(-5%);
    text-align: right;
  }
  .partner .ctn.part {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .partner .ctn.top {
    padding-top: 0;
  }
  .partner .box.redd {
    width: 350px;
    height: 180px;
    padding: 36px 111px 56px 36px;
  }
  .partner .ctn-content.first {
    padding-left: 238px;
    padding-right: 238px;
    padding-top: 66.5px;
    padding-bottom: 55px;
  }

  .partner .fill {
  width: max-content

  }

  .partner .desktop
  {
    display: none;
  }

  .partner .mobile
  {
    display: block;
  }

}

@media (max-width: 575.98px) {
  .partner .fill {
    width: max-content;
  }

  .partner .ctn-content.first {
    flex-direction: unset;
    padding-top: 46px !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 25px;
    padding-right: 2px;
  }

    .partner .project__text .title {
    height: 8.995502248875562vh;
    line-height: 1;
    margin-bottom: 0;
  }

  .partner .box.redd  {
    padding: 26px 139px 39px 66px;
    width: 74.66666666666667vw;
    height: 22.488755622188904vh;
    margin-bottom: 0;
    padding-left: 39px;
}

.partner .col-md-4.block
{
  padding-left: 23px;
  padding-right: 0;
}

.project__body .bg__block {
padding: 0;
    margin-bottom: 30px;
    width: 80vw;
    height: 35.98200899550225vh;
    margin-top: 0;
}

.partner .of-l
{
  width: 54.13333333333333vw;
      margin-bottom: 25px;
}

  .partner .desktop
  {
    display: block;
  }

  .partner .mobile
  {
    display: none;
  }

  .partner .cv
  {
    margin-bottom: 27px;
  }

  .partner .title.f-60
  {
    font-size:  12vw
  }

  .partner .row.white
  {
    padding-top: 0;

  }

  .partner .top
{
  padding-bottom: 11.99400299850075vh;
  padding-top: 0;
}
  .partner .bot
  {
     margin-top: -10.494752623688155vh;
    padding-top: 0;

  }

}

@media (min-width: 992px) and (max-width: 1199.98px)
{

   .partner .ctn {
    padding-left: 8.333333333333334vw;;
    padding-bottom: 110px;
  }
  .partner .block.red.evo {
    width: 350px;
    height: 180px;
    /* padding: 0; */
    padding: 45px 32px 30px 51px;
    /* transform: translateX(-1.8%);
      border: solid 40px #f0f0f0; */
  }

  .partner .f-60 {
    font-size: 60px;
    line-height: 0.92;
  }

  .project__body .bg__block {
    width: 24.305555555555554vw;
    height: 19.444444444444443vw;
    padding: 0;
    margin-bottom: 30px;
  }
  .partner .of-l p.sub {
    transform: translateX(-5%);
  }
  .partner .of-r p.sub {
    transform: translateX(-5%);
    text-align: right;
  }
  .partner .ctn.part {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .partner .ctn.top {
    padding-top: 0;
  }
  .partner .box.redd {
    width: 24.305555555555554vw;
    height: 180px;
    padding: 36px 111px 56px 36px;
  }
  .partner .ctn-content.first {
    padding-left: 8.333333333333334vw;;
    padding-right: 8.333333333333334vw;;
    padding-top: 66.5px;
    padding-bottom: 55px;
  }

  .partner .fill {
  width: max-content

  }

  .partner .desktop
  {
    display: none;
  }

  .partner .mobile
  {
    display: block;
  }

    .partner .fill {
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

   .partner .ctn {
    padding-left: 8.333333333333334vw;;
    padding-bottom: 110px;
  }
  .partner .block.red.evo {
    width: 350px;
    height: 180px;
    /* padding: 0; */
    padding: 45px 32px 30px 51px;
    /* transform: translateX(-1.8%);
      border: solid 40px #f0f0f0; */
  }

  .partner .f-60 {
    font-size: 60px;
    line-height: 0.92;
  }

  .project__body .bg__block {
    width: 55.72222222222222vw;
    height: 45.444444444444443vw;
    padding: 0;
    margin-bottom: 30px;
  }
  .partner .of-l p.sub {
    transform: translateX(-5%);
  }
  .partner .of-r p.sub {
    transform: translateX(-5%);
    text-align: right;
  }
  .partner .ctn.part {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .partner .ctn.top {
    padding-top: 0;
  }
  .partner .box.redd {
    width: 55.72222222222222vw;
    height: 180px;
    padding: 36px 111px 56px 36px;
    margin-bottom: 30px
  }
  .partner .ctn-content.first {
    padding-left: 8.333333333333334vw;;
    padding-right: 8.333333333333334vw;;
    padding-top: 66.5px;
    padding-bottom: 55px;
  }

  .col-md-4.block
  {
        max-width: unset;
        margin-bottom: 20px;
  }

  .partner .fill {
  width: max-content

  }

  .partner .desktop
  {
    display: none;
  }

  .partner .mobile
  {
    display: block;
  }

    .partner .fill {
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

   .partner .ctn {
    padding-left: 8.333333333333334vw;;
    padding-bottom: 110px;
  }
  .partner .block.red.evo {
    width: 350px;
    height: 180px;
    /* padding: 0; */
    padding: 45px 32px 30px 51px;
    /* transform: translateX(-1.8%);
      border: solid 40px #f0f0f0; */
  }

  .partner .f-60 {
    font-size: 60px;
    line-height: 0.92;
  }

  .project__body .bg__block {
    width: 55.72222222222222vw;
    height: 45.444444444444443vw;
    padding: 0;
    margin-bottom: 30px;
  }
  .partner .of-l p.sub {
    transform: translateX(-5%);
  }
  .partner .of-r p.sub {
    transform: translateX(-5%);
    text-align: right;
  }
  .partner .ctn.part {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .partner .ctn.top {
    padding-top: 0;
  }
  .partner .box.redd {
    width: 55.72222222222222vw;
    height: 180px;
    padding: 36px 111px 56px 36px;
    margin-bottom: 30px
  }
  .partner .ctn-content.first {
    padding-left: 8.333333333333334vw;;
    padding-right: 8.333333333333334vw;;
    padding-top: 66.5px;
    padding-bottom: 55px;
  }

  .col-md-4.block
  {
        max-width: unset;
        margin-bottom: 20px;
  }

  .partner .fill {
  width: max-content

  }

  .partner .desktop
  {
    display: none;
  }

  .partner .mobile
  {
    display: block;
  }

    .partner .fill {
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
</style>
