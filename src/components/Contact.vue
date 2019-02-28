<template>
  <div class="contact">
            <header class="project__header action | ctn">
      <div class="project__header__inner">
        <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto" data-i="9">
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

    <div class="project__inner scrollarea" data-scrollbar id="contact">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body row grey | off-white">
            <section class="project__description col-md-8 red | ctn-content t">
              <h3 class="hidden-visually">Contact</h3>
              <div class="project__text | m-100 m-mr-0">
                <p class="title bold tw">{{ post.title }}</p>
                <p class="sub bold tw">{{ post.sub }}</p>
              </div>
            </section>

          </div>

          <div class="project__body row grey off-white">
            <section class="project__description col-md-6 grey off-white  | ctn-content l">
              <div class="project__text | m-100 m-mr-0 addr">
                <p class="sub bold tb f-32">{{ addr.title }}</p>
                <p class="sub tb py-0 my-0 ">{{ addr.sub }}</p>
                  <p class="sub tb ">{{ addr.locate }}</p>
              </div>
            </section>

            <section class="project__description col-md-6 grey off-white | ctn-content r">
              <h3 class="hidden-visually">CV</h3>
              <div class="project__text cv | m-100 m-mr-0">
                <p class="sub bold tr al-r ">{{ cv.title }}</p>
                <router-link to="">
                  <p class="sub bold tb udl al-r ">{{ cv.sub }}</p>
                </router-link>
              </div>
            </section>
          </div>

        <div class="project__body row grey">
            <section class="project__description col-12 grey off-white | ctn-content m">
              <h3 class="hidden-visually">Map</h3>
              <div class="project__text map fill">
                <ggmap> </ggmap>
              </div>
            </section>

          </div>

        <div class="project__body pt-0">
            <section class="project__description p-0 m-0 | ctn grey off-white">
            <buttom :next="next" :prev="prev"></buttom>
          </section>
        </div>
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
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      index: '09',
      subs: ['We are AddVentures'],
      post: {
        title: 'Contact us',
        sub: 'We are partnering with startups to transform industries together'
      },
      cv: {
        title: 'Please contact us or submit your CV to',
        sub: 'contact@addventures.co.th'
      },
      addr: {
        title: 'Our office',
        sub:
          'The Siam Cement PCL. (Headquarter)',
        locate: '1 Siam Cement Road, Bangsue Bangkok 10800 Thailand'
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Our Team',
        url: 'theteam'
      },
      next: {
        title: 'Who we are',
        url: 'whoweare'
      }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM')
    }
  },
  // life cycle of component
  created () {},
  mounted: function () {
    var vm = this
    // alert(vm.show)
    vm.$parent.defaultState()

    var v = 'contact'
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
      var div = document.getElementById('contact')

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
  transform: translate3d(-436px, 0px, 0px);
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
        transform: translate3d(-26vw, 0px, 0px) !important;
      }
      .slide__sub__active {
        transform: translate3d(-30vw, 0px, 0px) !important;
      }
  } */

/***/

.contact .udl {
  border-bottom: 2px solid black;
  letter-spacing: 0.05em;
  width: min-content;
}

.contact .addr .sub.sm {
  font-size: 1.6vw;
}

.scrollarea {
  height: 100vh;
  display: block;
}

/* .project__text p:not(:last-of-type) {
  margin-bottom: 1.5rem;
} */

@media (min-width: 1200px) {

  .contact .ctn-content.t {
    width: 800px;
    height: 350px;
  }
  .contact .ctn-content.m {
     padding-top: 60px;
    width: 866px;
    height: 320px;
    padding-left: 287px;
    padding-right: 287px;
    padding-bottom: 0;
}

  .contact .ctn-content.l
  {
    padding-right: 88px;
    padding-top: 50px;
        padding-bottom: 0;
  }

 .contact .ctn-content.r
  {
        padding-right: 238px;
    padding-left: 0px;

    justify-content: flex-end;
    padding-bottom: 0;
  }

  .contact .f-32
  {
      font-size: 26px;
  line-height: 1.35;
  }

  .contact .al-r
  {
    margin-left: auto;
    margin-right: 0;
  }

.contact .fill {
  width: max-content
}

.contact .m .fill {
  width: -webkit-fill-available;
}

}

/* for mobiles */

@media (max-width: 575.98px) {

.contact .vue-map-container {
    position: relative;
    height: 300px !important;
}

  .contact .fill {
    width: max-content;
  }

.contact .m .fill {
  width: -webkit-fill-available;
}
      .contact .ctn-content.t {
    flex-direction: unset;
    padding-top: 46px !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 25px;
    padding-right: 14px;
      width: 74.66666666666667vw;

  }

        .contact .ctn-content.l  {
    /* flex-direction: unset;
    padding-top: 46px !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 25px;
    padding-right: 13.333333333333334vw;
    padding-bottom: 0;
    padding-top: 45px;

  }

         .contact .ctn-content.r {
    /* flex-direction: unset;
    padding-top: 46px !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 15px;
    padding-right: 13.333333333333334vw;
      padding-bottom: 0;
        padding-top: 45px;

  }

          .contact .ctn-content.m {
    /* flex-direction: unset;
    padding-top: 46px !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 7.466666666666667vw;
    padding-right: 7.466666666666667vw;
      padding-bottom: 35px;
        padding-top: 35px;

  }

  .off-white
  {
    background-color: white;
  }

  .contact .addr .sub.f-32 {
    font-size: 8vw;
    line-height: 1.35;
  }

  .contact .addr .sub
  {
    font-size: 5.333333333333333vw;
    line-height: 1.35;
  }

  .contact .udl {
   float: right;
}

}

@media (min-width: 992px) and (max-width: 1199.98px)
{

    .contact .fill {
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

        .contact .ctn-content.t {
    width: 55.55555555555556vw;
    height: 350px;
  }
  .contact .ctn-content.m {
     padding-top: 60px;
    width: 866px;
    height: 320px;
    padding-left: 12.6vw;
    padding-right: 12.6vw;
    padding-bottom: 0;
}

  .contact .ctn-content.l
  {
        padding-right: 5.902777777777778vw;
    padding-left: 5.902777777777778vw;
    padding-top: 50px;
    padding-bottom: 0;
  }

 .contact .ctn-content.r
  {
        padding-right: 6.52777777777778vw;
    padding-left: 0px;

    justify-content: flex-end;
    padding-bottom: 0;
  }

  .contact .f-32
  {
      font-size: 26px;
  line-height: 1.35;
  }

  .contact .al-r
  {
    margin-left: auto;
    margin-right: 0;
  }

.contact .fill {
  width: max-content
}

.contact .m .fill {
  width: -webkit-fill-available;
}

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

  .contact .project__text {
    font-size: 2.1rem;
    line-height: 1.62;
    padding-bottom: 70px;
}

        .contact .fill {
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

      .contact .fill {
  width: max-content
}

.contact .m .fill {
  width: -webkit-fill-available;
}

.project__content .sub {
    font-size: 26px;
    text-align: left;
    line-height: 1.35;
    letter-spacing: normal;
}

.ctn-content {
    padding-left: 6.52777777777778vw;
    padding-right: 6.52777777777778vw;
    padding-top: 66.5px;
    padding-bottom: 0;
}
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

  .contact .project__text {
    font-size: 2.1rem;
    line-height: 1.62;
    padding-bottom: 70px;
}

      .contact .fill {
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

      .contact .fill {
  width: max-content
}

.contact .m .fill {
  width: -webkit-fill-available;
}

.project__content .sub {
    font-size: 26px;
    text-align: left;
    line-height: 1.35;
    letter-spacing: normal;
}

.ctn-content {
    padding-left: 6.52777777777778vw;
    padding-right: 6.52777777777778vw;
    padding-top: 66.5px;
    padding-bottom: 0;
}
 }
</style>
