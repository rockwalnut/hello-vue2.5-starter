<template>
  <div class="insign">
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
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
                <!-- <router-link to="pitchdesk">
                 <button class="menu-btn mobile pitch" aria-label="" href="javascript:void(0);">
                 <span class="menu-btn__text">Pitch Desk</span>
                </button>
          </router-link> -->
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="insign">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body white">

            <div class="container">
            <section class="project__description grey row |  ctn-content blog | pb-73 | t">
              <h3 class="hidden-visually">Blog</h3>
              <div class="project__text | col-md-6 mrg-2 ml-0 mr-0 pr-0 pl-0 | m-100 m-mr-0">
                <p class="title bold tb">{{ post.title }}</p>
                <p class="sub bold tb">{{ post.sub }}</p>
              </div>
            </section>

            <!-- grey top -->
            <div class="bg grey fixed-top"> </div>
            <section class="project__description t white row | py-0 ctn-content blog | grey-m | b">
              <h3 class="hidden-visually">Venture</h3>
              <div class="project__description | col-md-12 | pt-0 py-0m px-0m" v-for="r in post.blogs" :key="r.id" v-bind:class="r.class">

                <div class="project__text | col-md-6 | m-100 m-mr-0 | py-0m">
                  <img class="bg__block" v-bind:src="r.image" />
                  <div class="date">
                    <p class="title tb bold t-lg month">{{ r.date | moment }}</p>
                    <p class="title tr bold t-lg day">{{ r.date.getDate() }}</p>
                  </div>
                </div>

                <div class="project__text | col-md ml-5 | m-100 m-mr-0 | py-0m">
                  <p class="sub tb bold lg">{{ r.title }}</p>
                  <p class="sub tb sm">{{ r.author }}</p>
                  <!-- <p class="sub tb sm">View 320K</p> -->
                  <!-- <hr class="separate"> -->
                  <div class="href">
                    <router-link to="">
                      <span class="read sub tb bold readmore"> Read more </span>
                      <img class="arrow" v-bind:src="arrow" />
                    </router-link>
                  </div>
                   <hr class="separate" v-show="!r.isLast">
                </div>

              </div>
            </section>

            <!-- <section class="project__description white row | ctn-content"> -->
            <div class="project__description | b blog | col-md-12 " v-for="r in post.blogs_b" :key="r.id" v-bind:class="r.class">

              <div class="project__text | col-md-5 | m-100 m-mr-0">
                <img class="bg__block" v-bind:src="r.image" />
                <div class="date">
                  <p class="title tb bold t-lg month">{{ r.date | moment }}</p>
                  <p class="title tr bold t-lg day">{{ r.date.getDate() }}</p>
                </div>
              </div>

              <div class="project__text | col-md ml-3 | m-100 m-mr-0">
                <p class="sub tb bold lg">{{ r.title }}</p>
                <p class="sub tb sm">{{ r.author }}</p>
                <!-- <p class="sub tb sm">View 320K</p> -->
                <!-- <hr class="separate"> -->
                <div class="href">
                  <router-link to="">
                    <span class="read sub tb bold readmore"> Read more </span>
                    <img class="arrow" v-bind:src="arrow" />
                  </router-link>
                </div>
             <hr class="separate" v-show="!r.isLast">
              </div>

            </div>
            <!-- </section> --> </div>

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
import moment from 'moment'

export default {
  name: 'Insign',
  data () {
    return {
      title: 'Insights',
      index: '07',
      subs: ['Be in the know with AddVenture'],
      arrow: './static/img/next.png',
      post: {
        title: 'Insights',
        sub: 'Be in the know with AddVentures',
        blogs: [
          {
            id: 1,
            title:
              'AddVentures reveals the global trend focuses on B2B startups, Plus giving three success factors for startups',
            author: 'Addventures by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 2,
            title:
              'AddVentures reveals the global trend focuses on B2B startups, Plus giving three success factors for startups',
            author: 'Addventures by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 3,
            title:
              'AddVentures reveals the global trend focuses on B2B startups, Plus giving three success factors for startups',
            author: 'Addventures by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 4,
            title:
              'AddVentures reveals the global trend focuses on B2B startups, Plus giving three success factors for startups',
            author: 'Addventures by SCG',
            image: './static/img/img3.jpg',
            date: new Date(),
            isLast: true
          }
        ]
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Our Partners',
        url: 'ourpartners'
      },
      next: {
        title: 'The Team',
        url: 'theteam'
      }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM')
    }
  },

  created () {},
  beforeMount () {
    // var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('insign')

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
  },
  // life cycle of component
  mounted: function () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var v = 'insign'
    var div = document.getElementById(v)
    // console.log(div)
    if (!div) {
    }
    scroll.init(div)
  }

}
</script>

<style scoped>
/* .slide__title__active {
      transform: translate3d(-440px, 0px, 0px);
      transition-duration: 1600ms;
    }

    .slide__sub__active {
      transform: translate3d(-430px, 0px, 0px);
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
              transform: translate3d(-31vw, 0px, 0px) !important;
            }
            .slide__sub__active {
              transform: translate3d(-22vw, 0px, 0px) !important;
            }
      } */

/***/

/* .insign .date {
  padding-top: 20px;
  transform: translateX(30%);
} */

.insign .date .day {
  font-size: 5.5vw !important;
  line-height: 0.4;
}

.insign .date .month {
  font-size: 3.45vw !important;
  line-height: 1.3;
}

.insign .mb-5c {
  margin-bottom: 10rem;
}

.insign .sm {
  font-size: 1.3vw;
}

/* .insign .project__description {
    padding-bottom: 0 !important;
    padding-top: 67px;
  } */

/* .insign .project__description.t {
    padding-bottom: 30vh !important;
    padding-top: 0;
  } */

/* .insign .project__description.b {
    transform: translateY(-70%);
  } */

/* .project__text p:not(:last-of-type) {
        margin-bottom: 1.5rem;
    } */

hr.separate {
  background-color: #0f0f0f;
  margin-top: 20px;
  margin-bottom: 20px;
}

.insign .arrow {
  width: 10vh;
  padding-top: 10px;
  margin-left: 50px;
  position: absolute;
}

.insign .project__body .bg__block {
  width: 34vw;
  z-index: 2;
  padding: 10px 10px 5px 5px;
}

.insign .project__text .date {
  left: -50px;
  position: absolute;
  top: 0;
}

/* for new */

.block p {
  margin: 0;
  line-height: 5.1rem;
}

.scrollarea {
  height: 100vh;
  display: block;
}

@media (min-width: 1200px) {

.container {
    max-width: 1440px;
}

  .insign .project__body .bg__block {
    width: 31.25vw;
    height: 280px;
    z-index: 2;
    padding: 0;
  }
  .insign .project__text .sub {
    font-size: 32px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    width: 561px;
  }
  .insign .project__text .sub.sm {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.94;
    letter-spacing: normal;
    margin-bottom: 58px;
    margin-top: 23px;
  }
  .insign .project__text .sub.readmore {
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.68;
  }
  .insign .date .day {
    font-size: 80px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.88;
  }
  .insign .date .month {
    font-size: 50px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
  }
  .insign .arrow {
    width: 55px;
    padding-top: 3px;
    margin-left: 36px;
  }
  .insign .b.block {
    padding-bottom: 0 !important;
    padding-top: 60px;
  }
  .insign .fixed-top {
    position: absolute;
    top: 0;
    height: 800px;
    z-index: 2;
  }
  .insign .ctn-content.blog {
    z-index: 9;
    background: transparent;
    padding-bottom: 41px;
  }
  .insign .fill {
    width: max-content;
  }
  .pb-73 {
    padding-bottom: 73px !important;
  }

  hr.separate  {
    display: none;
}
}

@media (max-width: 575.98px) {

  .insign .date .day {
  font-size: 16vw !important;
  line-height: 1;
}

.insign .date .month {
  font-size: 9.333333333333334vw !important;
  line-height: 1;
}

  .insign .project__text .date  {
    left: -5.2vw;
    position: absolute;
    top: 2vh;
}

  .container {
    width: 100%;
     padding-right: 0;
     padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}

  .insign .fill {
    width: max-content;
  }
  .project__info {
    padding-left: 0;
    width: max-content;
  }
  .insign .ctn-content.blog {
    flex-direction: unset;
    padding-top: 46px;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 25px;
    padding-right: 2px;
  }
  .insign .ctn-content.blog.b {
    padding-top: 0;
    padding-bottom: 70px !important;
  }

  .insign .project__body .bg__block {
    width: 80vw;
    height: 28.035982008995504vh;
    z-index: 2;
    padding: 0;
  }
  .insign .py-0m {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .insign .px-0m {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .insign .project__text .sub.lg {
    font-size: 8vw;
    line-height: 1.25;
  }
  .insign .ml-5 {
    margin-left: 0 !important;
  }
  .insign .project__text .sub.sm {
    font-size: 5.333333333333333vw;
    line-height: 1.94;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .insign .arrow[data-v-33d714dc] {
    width: 35.2px;
    padding-top: 1.0666666666666667vw;
    margin-left: 15px;
    position: absolute;
  }

  .insign .project__text .sub.readmore {
    font-size: 5.866666666666666vw;
}

hr.separate  {
    background-color: #0f0f0f;
    margin-top: 26px;
    margin-bottom: 26px;
    width: auto;
    margin-right: 26px;
}
}

@media (min-width: 992px) and (max-width: 1199.98px)
{

  .col-md
  {
    display: block;
  }

  .insign .project__text .date  {
    left: -3.4722222222222223vw;
    position: absolute;
    top: 0;
}

.container {
    max-width: 1440px;
}

  .insign .project__body .bg__block {
   width: 34.25vw;
    height: auto;
    z-index: 2;
    padding: 0;
  }
  .insign .project__text .sub {
   font-size: 2.922222vw;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    width: 43.722222vw;
  }
  .insign .project__text .sub.sm {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.94;
    letter-spacing: normal;
    margin-bottom: 20px;
    margin-top: 23px;
  }
  .insign .project__text .sub.readmore {
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.68;
  }
  .insign .date .day {
    font-size: 80px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.88;
  }
  .insign .date .month {
    font-size: 50px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
  }
  .insign .arrow {
    width: 55px;
    padding-top: 3px;
    margin-left: 36px;
  }
  .insign .b.block {
    padding-bottom: 0 !important;
    padding-top: 60px;
  }
  .insign .fixed-top {
    position: absolute;
    top: 0;
    height: 800px;
    z-index: 2;
  }
  .insign .ctn-content.blog {
    z-index: 9;
    background: transparent;
    padding-bottom: 41px;
  }
  .insign .fill {
    width: max-content;
  }
  .pb-73 {
    padding-bottom: 73px !important;
  }

  hr.separate  {
    display: none;
}
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

  .col-md-12
  {
    display: block;

  }

  .col-md
  {
    display: block;
      margin-left: 10px !important;
  }

  .insign .project__text .date  {
    left: -3.4722222222222223vw;
    position: absolute;
    top: 45px;
}

.container {
    max-width: 1440px;
}

  .insign .project__body .bg__block {
   width: 60.25vw;
    height: auto;
    z-index: 2;
    padding: 0;
  }
  .insign .project__text .sub {
   font-size: 3.922222vw;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    width: 100%;
  }
  .insign .project__text .sub.sm {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.94;
    letter-spacing: normal;
    margin-bottom: 20px;
    margin-top: 23px;
  }
  .insign .project__text .sub.readmore {
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.68;
  }
  .insign .date .day {
    font-size: 80px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.88;
  }
  .insign .date .month {
    font-size: 50px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
  }
  .insign .arrow {
    width: 55px;
    padding-top: 3px;
    margin-left: 36px;
  }
  .insign .b.block {
    padding-bottom: 0 !important;
    padding-top: 60px;
  }
  .insign .fixed-top {
    position: absolute;
    top: 0;
    height: 800px;
    z-index: 2;
  }
  .insign .ctn-content.blog {
    z-index: 9;
    background: transparent;
    padding-bottom: 41px;
  }
  .insign .fill {
    width: max-content;
  }
  .pb-73 {
    padding-bottom: 73px !important;
  }

  hr.separate  {
    display: none;
}
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

   .col-md-12
  {
    display: block;

  }

  .col-md
  {
    display: block;
      margin-left: 10px !important;
  }

  .insign .project__text .date  {
    left: -3.4722222222222223vw;
    position: absolute;
    top: 45px;
}

.container {
    max-width: 1440px;
}

  .insign .project__body .bg__block {
   width: 60.25vw;
    height: auto;
    z-index: 2;
    padding: 0;
  }
  .insign .project__text .sub {
   font-size: 3.922222vw;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    width: 100%;
  }
  .insign .project__text .sub.sm {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.94;
    letter-spacing: normal;
    margin-bottom: 20px;
    margin-top: 23px;
  }
  .insign .project__text .sub.readmore {
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.68;
  }
  .insign .date .day {
    font-size: 80px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.88;
  }
  .insign .date .month {
    font-size: 50px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
  }
  .insign .arrow {
    width: 55px;
    padding-top: 3px;
    margin-left: 36px;
  }
  .insign .b.block {
    padding-bottom: 0 !important;
    padding-top: 60px;
  }
  .insign .fixed-top {
    position: absolute;
    top: 0;
    height: 800px;
    z-index: 2;
  }
  .insign .ctn-content.blog {
    z-index: 9;
    background: transparent;
    padding-bottom: 41px;
  }
  .insign .fill {
    width: max-content;
  }
  .pb-73 {
    padding-bottom: 73px !important;
  }

  hr.separate  {
    display: none;
}
 }
</style>
