<template>
  <div class="what">
    <header class="project__header action | ctn">
      <div class="project__header__inner">    <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
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

    <div class="project__inner scrollarea" data-scrollbar id="what">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body white">
            <section class="project__description col-md-7 mobile | ctn-content jf" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <h3 class="hidden-visually">Project</h3>

              <div class="project__text | col-12 mrg-2 | m-100 m-mr-0">
                <p class="title bold">{{ p.title }}</p>
                <p class="sub bold">{{ p.sub }}</p>
                <!-- <p class="project__text">
                  <span class="sub bold">{{ p.bold }}</span>
                  <span class="sub">{{ p.regular }}</span>
                </p> -->
                <!-- <p class="sub tb" v-for="d in p.detail" :key="d">{{ d }}</p> -->
              </div>
            </section>

            <!-- loop with invests -->
            <section class="inv t">
              <div class="container">
              <div class="pb-0 row | ctn-content pb-48" v-for="i in invests" :key="i.id">
                <div class="col-md-6 | col-xs-12 | m-0 p-0 ne" v-bind:class="{ right: i.id%2 == 0 }">
                  <img class="project__image" :src="i.image">
                </div>
                <div class="col ne" v-bind:class="i.containnerClass">
                  <h1 class="tr title large mb-6c" v-bind:class="i.titleAlign">
                  <img class="bg" :src="i.imageIcon" v-show="i.left" v-bind:class="i.imageClass" />
                  <span>{{ i.title }}</span>
                  <img class="bg" :src="i.imageIcon" v-show="!i.left" v-bind:class="i.imageClass" /></h1>
                  <span class="sub bold ne tb">{{ i.sub }}</span>
                  <ul v-bind:class="i.contentAlign">
                    <li class="tb sub ne" v-for="l in i.lists" :key="l.list"> {{ l }}</li>
                  </ul>
                </div>
              </div>
              </div>
            </section>
          </div>
        </div>

        <div class="project__body">
          <section class="project__description py-0 | ctn white">
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
  name: 'What',
  data () {
    return {
      title: 'What We Invest',
      index: '02',
      subs: ['Industrail', 'B2B', 'Enterprise'],
      slide__title: false,
      slide__sub: false,
      posts: [
        {
          id: 1,
          title: 'What we invest in',
          sub:
            'Industrial - B2B - Enterprise are the areas that we will bring significant value to startups and our investment partners.',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      invests: [
        {
          id: 1,
          title: 'Industrail',
          lists: [
            'Smart Manufacturing',
            'Robotics',
            'Automation',
            'Energy  Technology'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/industrail.svg',
          imageClass: 'bg indust',
          titleAlign: 'ind',
          float: 'left red',
          containnerClass: 'down',
          left: true
        },
        {
          id: 2,
          title: 'B2B',
          sub: 'Marketplace platform for',
          lists: [
            'Construction products',
            'Chemicals',
            'Packaging',
            'Logistics and Industrial supply',
            'Logistics'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/b2b.svg',
          imageClass: 'bg b2b',
          float: 'right white',
          contentAlign: 'al-r rtl',
          titleAlign: 'b2b',
          containnerClass: 'left al-r',
          left: false
        },
        {
          id: 3,
          title: 'Enterprise',
          lists: [
            'E-commerce enablement',
            'Predictive analytics',
            'Omni channel',
            'Construction efficiency management',
            'Software - as - a Service (SaaS)',
            'Artificial Intelligent (AI)',
            'AR / VR',
            'Blockchain'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/enterprise.svg',
          imageClass: 'bg enterprise',
          float: 'left red',
          titleAlign: 'ent',
          containnerClass: 'down',
          left: false
        }
      ],
      prev: {
        title: 'Who We Are',
        url: 'whoweare'
      },
      next: {
        title: 'Where We Invest',
        url: 'whereweinvest'
      }
    }
  },
  // life cycle of component
  mounted: function () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var v = 'what'
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
      var div = document.getElementById('what')

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
      if (scrollbar.scrollTop > 55) {
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__sub = 'slide__sub__leave'
      }
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
/* alider class*/

/* .slide__title__active {
      transform: translate3d(-170px, 0px, 0px);
      transition-duration: 1600ms;
    }

    .slide__sub__active {
      transform: translate3d(-410px, 0px, 0px);
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
          transform: translate3d(-10vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-20vw, 0px, 0px) !important;
        }
    } */

/***/

/* .mt-ne-1 {
  transform: translateY(-10%);
} */

.what .trs-l {
  margin-left: 0 !important;
}

.what .down {
  margin-top: 60px;
}

.what .mb-6c {
  margin-bottom: 6.5vh;
}

.rtl {
  direction: rtl;
}

.what .center {
  margin-left: 50%;
  transform: translateX(-50%);
}

.what .indust {
  top: 20px;
}

.what .b2b {
  top: 20px;
  right: 80px;
}

.enterprise {
  top: 40px;
  left: 300px;
}

.what .pb-6 {
  padding-bottom: 5vh;
  padding-top: 7rem !important;
}

.what .right {
  left: 50%;
  transform: translateX(0);
}

.what .left {
  left: -50%;
  transform: translateX(0);
  padding-right: 9.1%;
}

.what .project__body ul {
  list-style-type: none;
}

.what .project__text {
  margin-bottom: 70px;
}

.scrollarea {
  height: 100vh;
  display: block;
}

.what .project__image {
  /*top: -180px;*/
  width: 34.72vw;
  position: relative;
}

.what .container
{
    max-width: 1440px;

}

@media (min-width: 1200px) {
  .what .project__body ul > li:before {
    content: "–";
    /* en dash */
    position: absolute;
    margin-left: -1.1em;
    margin-right: -1.1em;
  }
  .what .project__body .bg {
width: 60px;
    z-index: 2;
    position: relative;
    top: 38px;
    left: 0;
  }
  .project__content .title.large {
    font-size: 100px;
    line-height: 0.69;
    letter-spacing: normal;
  }
  .what .indust {
    top: 40px;
  }
  .what .b2b {
    top: 20px;
    right: 80px;
  }
  .enterprise {
    top: 40px;
    left: 150px;
  }
  .what .project__image {
    /* top: -180px; */
    /* width: 34.72vw; */
    position: relative;
    width: 474px;
    height: 356px;
  }
  .ctn-content.jf {
    position: absolute;
        height: 500px;
    padding-right: 130px;
    padding-bottom: 71px;
    top: 0;
  }
  /* .mt-ne-1 {
    transform: translateY(-14%);
  } */
  .what .project__body .bg.indust {
    top: 38px;
  }

    .what .project__body .bg.b2b {
    /* width: 78px !important; */
    top: 31px;
    right: 139px;
         margin-left: 60px;
  }
  .what .project__body .bg.enterprise {
    top: 40px;
    width: 70px !important;
    left: 0;
  }

  .what .down {
    margin-top: 60px;
       margin-left: 0;
  }
  .ctn-content {
    padding-left: 238px;
    padding-right: 0;
    padding-top: 66.5px;
    padding-bottom: 45px;
  }
  .what .right {
    left: 50%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    padding-left: 16px !important;
  }
  .what .pb-6 {
    margin-bottom: 120px;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0 !important;
  }

  .what .pt-5c {
    padding-top: 120px;
  }
  .what .project__body .title.ent {
    transform: translateX(0%);
        margin-left: -195px;
  }
  .what .project__body .title.ind {
    transform: translateX(0%);
  }
  .what .ft {
    margin-top: -150px !important;
  }
  .what .inv
  {
    padding-top: 330px;
  }

  .what .fill {
  width: max-content
}
}

 @media (max-width: 575.98px) {

     .what .fill {
  width: max-content
     }

   .what .ctn-content.red
   {
      width: 74.66666666666667vw;;
      padding-left: 6.933333333333334vw;
    padding-right: 8vw;
    padding-top: 46px !important;
    padding-bottom: 48px;
   }

   .what .mrg-2
   {
     margin: 0;
     padding: 0;
   }

.what .project__text {
    margin-bottom: 0;
}

  /* .what .ctn
  {
    padding-left: 0;
    padding-right: 0;
  } */

  .what .t .ctn-content
  {
    padding: 0 27px 0 27px;
  }

  .what .project__image[data-v-495b54f4] {
    /* top: -180px; */
    /* width: 34.72vw; */
    position: relative;
    width: 80vw;
    height: 33.733133433283356vh;
  }

  .what .inv {
    padding-top: 34.2275862068966vh;

}

.ctn-content.jf {
    position: absolute;
    top: 0;
}

.what .project__body .bg {
    width: 58px;
    z-index: 2;
}

.what .down {
    margin-top: 0;

    padding-left: 0px;
    padding-right: 0px;
}

  .what .indust {
         top: 11.99400299850075vh;
    position: absolute;
    left: 0;
}

.what .mb-6c {
    margin-bottom: 4.5vh;
}

.what .title.ind
{
  font-size: 18.666666666666668vw;
  text-align: right;
    line-height: 17.691154422788607vh;
    height: 17.691154422788607vh;
    letter-spacing: normal;
}

.what .title.b2b {
  position: initial;
    font-size: 18.666666666666668vw;
  text-align: left !important;
    line-height: 17.691154422788607vh;
    height: 17.691154422788607vh;
    letter-spacing: normal;
}

.what .title.ent {
  position: initial;
    font-size: 18.666666666666668vw;
    line-height: 17.691154422788607vh;
    height: 17.691154422788607vh;
    letter-spacing: normal;
    text-align: right;
}

.what .project__body ul > li:before {
    content: "\2013";
    position: absolute;
    margin-left: -1.1em;
    margin-right: -1.1em;
}

.what .sub.ne
{
  margin-left: 23px;
}

.what .pb-48
{
  padding-bottom: 48px !important;
}

.what .right  {
    left: 0;
    transform: translateX(0);
}

.what .left {
    left: 0;
    transform: translateX(0);
    padding-right: 0;
        padding-left: 0;
}

.what .b2b {
    top: 6.746626686656672vh;
     right: 0;
    position: relative;
}

.what .enterprise {
    top: 14.992503748125937vh;
    left: 0;
    position: absolute;
}

.what .rtl {
    direction: ltr;
}

.what .al-r {
    text-align: left;
}

}

/*********** new for fesponsive **************/

@media (min-width: 992px) and (max-width: 1199.98px)
{

    .what .project__body ul > li:before {
    content: "–";
    /* en dash */
    position: absolute;
    margin-left: -1.1em;
    margin-right: -1.1em;
  }
  .what .project__body .bg {
width: 60px;
    z-index: 2;
    position: relative;
    top: 38px;
    left: 0;
  }
  .project__content .title.large {
    font-size: 100px;
    line-height: 0.69;
    letter-spacing: normal;
  }
  .what .indust {
    top: 40px;
  }
  .what .b2b {
    top: 20px;
    right: 0;
  }
  .enterprise {
    top: 40px;
    left: 0;
  }
  .what .project__image {
    /* top: -180px; */
    /* width: 34.72vw; */
    position: relative;
    width: 474px;
    height: 356px;
  }
  .ctn-content.jf {
    position: absolute;
        height: auto;
    padding-right: 8.583333333333334vw;
    padding-bottom: 71px;
    top: 0;
    max-width: 80%;
  }

.what .inv {
    padding-top: 300px;
}

  /* .mt-ne-1 {
    transform: translateY(-14%);
  } */
  .what .project__body .bg.indust {
    top: -28px;
  }

    .what .project__body .bg.b2b {
    /* width: 78px !important; */
    top: 31px;
    right: 139px;
         margin-left: 60px;
  }
  .what .project__body .bg.enterprise {
    top: 40px;
    width: 70px !important;
    left: 400px;
  }

  .what .down {
       margin-top: 60px;
    margin-left: 0;
    text-align: right;
    direction: rtl;
    padding-right: 9.1%

  }
  .ctn-content {
    padding-left: 9.583333333333334vw;
    padding-right: 0;
    padding-top: 66.5px;
    padding-bottom: 45px;
  }
  .what .right {
    left: 0%;
    transform: translateX(0);
    padding-left: 0 !important;
  }

  .what .left[data-v-495b54f4] {
    left: 0%;
    transform: translateX(0);
    padding-right: 9.1%;
}
  .what .pb-6 {
    margin-bottom: 120px;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0 !important;
  }

  .what .pt-5c {
    padding-top: 120px;
  }
  .what .project__body .title.ent {
    transform: translateX(0%);
        margin-left: -195px;
  }
  .what .project__body .title.ind {
    transform: translateX(0%);
  }
  .what .ft {
    margin-top: -150px !important;
  }
  .what .inv
  {
    padding-top: 250px;
  }

  .what .fill {
  width: max-content
}

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

  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 100%;
    max-width: 100%;
}

   .what .ctn-content.c  {
    padding-top: 45px !important;
}

        .what .fill {
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

          .what .project__body ul > li:before {
    content: "–";
    /* en dash */
    position: absolute;
    margin-left: -1.1em;
    margin-right: -1.1em;
  }
  .what .project__body .bg {
width: 60px;
    z-index: 2;
    position: relative;
    top: 38px;
    left: 0;
  }
  .project__content .title.large {
    font-size: 100px;
    line-height: 0.69;
    letter-spacing: normal;
  }
  .what .indust {
    top: 40px;
  }
  .what .b2b {
    top: 20px;
    right: 0;
  }
  .enterprise {
    top: 40px;
    left: 0;
  }
  .what .project__image {
    /* top: -180px; */
    /* width: 34.72vw; */
    position: relative;
    width: 474px;
    height: 356px;
  }
  .ctn-content.jf {
    position: absolute;
        height: 500px;
    padding-right: 8.583333333333334vw;
    padding-bottom: 71px;
    top: 0;
    max-width: 80%;
  }

.what .inv {
    padding-top: 300px;
}

  /* .mt-ne-1 {
    transform: translateY(-14%);
  } */
  .what .project__body .bg.indust {
    top: -28px;
  }

    .what .project__body .bg.b2b {
    /* width: 78px !important; */
    top: 31px;
    right: 139px;
         margin-left: 60px;
  }
  .what .project__body .bg.enterprise {
    top: 40px;
    width: 70px !important;
    left: 400px;
  }

  .what .down {
       margin-top: 60px;
    margin-left: 0;
    text-align: right;
    direction: rtl;
    padding-right: 9.1%

  }
  .ctn-content {
    padding-left: 9.583333333333334vw;
    padding-right: 0;
    padding-top: 66.5px;
    padding-bottom: 45px;
  }
  .what .right {
    left: 0%;
    transform: translateX(0);
    padding-left: 0 !important;
  }

  .what .left[data-v-495b54f4] {
    left: 0%;
    transform: translateX(0);
    padding-right: 9.1%;
}
  .what .pb-6 {
    margin-bottom: 120px;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0 !important;
  }

  .what .pt-5c {
    padding-top: 120px;
  }
  .what .project__body .title.ent {
    transform: translateX(0%);
        margin-left: -195px;
  }
  .what .project__body .title.ind {
    transform: translateX(0%);
  }
  .what .ft {
    margin-top: -150px !important;
  }
  .what .inv
  {
    padding-top: 330px;
  }

  .what .fill {
  width: max-content
}

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

  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 100%;
    max-width: 100%;
}

   .what .ctn-content.c  {
    padding-top: 45px !important;
}
      .what .fill {
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

          .what .project__body ul > li:before {
    content: "–";
    /* en dash */
    position: absolute;
    margin-left: -1.1em;
    margin-right: -1.1em;
  }
  .what .project__body .bg {
width: 60px;
    z-index: 2;
    position: relative;
    top: 38px;
    left: 0;
  }
  .project__content .title.large {
    font-size: 100px;
    line-height: 0.69;
    letter-spacing: normal;
  }
  .what .indust {
    top: 40px;
  }
  .what .b2b {
    top: 20px;
    right: 0;
  }
  .enterprise {
    top: 40px;
    left: 0;
  }
  .what .project__image {
    /* top: -180px; */
    /* width: 34.72vw; */
    position: relative;
    width: 474px;
    height: 356px;
  }
  .ctn-content.jf {
    position: absolute;
        height: auto;
    padding-right: 8.583333333333334vw;
    padding-bottom: 71px;
    top: 0;
    /* max-width: 80%; */
  }

.what .inv {
    padding-top: 300px;
}

  /* .mt-ne-1 {
    transform: translateY(-14%);
  } */
  .what .project__body .bg.indust {
    top: -28px;
  }

    .what .project__body .bg.b2b {
    /* width: 78px !important; */
    top: 31px;
    right: 139px;
         margin-left: 60px;
  }
  .what .project__body .bg.enterprise {
    top: 40px;
    width: 70px !important;
    left: 400px;
  }

  .what .down {
       margin-top: 60px;
    margin-left: 0;
    text-align: right;
    direction: rtl;
    padding-right: 9.1%

  }
  .ctn-content {
    padding-left: 9.583333333333334vw;
    padding-right: 0;
    padding-top: 66.5px;
    padding-bottom: 45px;
  }
  .what .right {
    left: 0%;
    transform: translateX(0);
    padding-left: 0 !important;
  }

  .what .left[data-v-495b54f4] {
    left: 0%;
        margin-top: 50px;
    transform: translateX(0);
    padding-right: 9.1%;
}
  .what .pb-6 {
    margin-bottom: 120px;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0 !important;
  }

  .what .pt-5c {
    padding-top: 120px;
  }
  .what .project__body .title.ent {
    transform: translateX(0%);
        margin-left: -195px;
  }
  .what .project__body .title.ind {
    transform: translateX(0%);
  }
  .what .ft {
    margin-top: -150px !important;
  }
  .what .inv
  {
    padding-top: 230px;
  }

  .what .fill {
  width: max-content
}

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
</style>
