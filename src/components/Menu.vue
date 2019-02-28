<template>
  <div class="menu">

    <div class="top fixed col-12 red">
      <header id="header" class="">
        <!-- <h1 class="header__title" v-show="true">
          <img class="logo__sm" v-bind:src="logo" />
          <router-link to="/">
          </router-link>
        </h1> -->
        <div class="nav_wrapper">
          <nave flex="menu"></nave>
        </div>
      </header>
    </div>

    <div class="project__inner red scrollarea" data-scrollbar id="menu">

      <div class="scroll-content">

        <section class="project__description py-0 red">
          <h3 class="hidden-visually">Menu</h3>
          <div class="project__text | col-md-12 mx-auto pt-130  | m-100 m-mr-0">
            <ol class="page">
              <li v-for="l in list" :key="l.id">
                <p>
                  <span class="sub site index f-16 bold"> {{ l.index }} </span>
                  <router-link :to="l.url"> <span class="site bold tw f-28"> {{ l.title }} </span> </router-link>
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section class="project__description red row mt-0 pt-0 pb-0 mb-0  mx-0 px-0 | ctn mobile">
          <div class="project__text | pt-0 mx-0 | footy ctn c">
            <div class="page | m-100 m-ml-0">
              <h3 class="sub"> {{ last }}</h3>
              <h3 class="bold sub">&copy; {{ foot }}</h3>
            </div>
          </div>
        </section>

        <section class="project__description red row mt-0 pt-0 pb-0 mb-0  mx-0 px-0 | ctn meetme">
          <div class="project__text | pt-0 mx-0 | footy ctn c">
            <div class="page | m-100 m-ml-0">
              <footer id="footer_wrapper">
                <ul class="">
                  <li class="social-list__text">
                    <span class="sub bold f-18"> Meet me on </span>
                  </li>
                  <li class="social-list__item">
                    <svg class="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_Medium</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-9" d="M0,0V28H28V0ZM23.33,9.42h-1c-.27,0-1,.29-1,.54v9c0,.25.7.45,1,.45h1v2H16.66v-2H18V10.09h-.23L14.56,21.41H12.08L8.91,10.09H8.67v9.32H10v2H4.67v-2h.74c.29,0,.6-.2.6-.45V10a.64.64,0,0,0-.6-.54H4.67v-2h6.91l2.26,8h.06l2.27-8h7.16Z"/></g></g></svg>
                    <a href="https://medium.com/" target="_blank">Medium</a>
                  </li>
                  <li class="social-list__item">
                    <svg class="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_LinkIedn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-9" d="M0,0V28H28V0ZM9.64,21.44H6.31v-10H9.64ZM8,10.13H8A1.72,1.72,0,1,1,8,6.7a1.72,1.72,0,1,1,0,3.43ZM21.64,21.44H18.31V16.12c0-1.34-.48-2.25-1.69-2.25a1.81,1.81,0,0,0-1.7,1.21,2.2,2.2,0,0,0-.12.81v5.55H11.48s0-9,0-10h3.33V12.9a3.31,3.31,0,0,1,3-1.64c2.19,0,3.84,1.42,3.84,4.48Z"/></g></g></svg>
                    <a href="https://twitter.com/" target="_blank">Linkedin</a>
                  </li>
                  <li class="social-list__item">
                    <svg class="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_Facebook</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-9" d="M28,0H0V28H13.94V16.68H11.65V12.87h2.29V9.76c0-.57-.12-4.39,4.8-4.38h3.47v4H19.66a1.1,1.1,0,0,0-1,.91v2.61h3.57c-.14,2-.44,3.82-.44,3.82H18.63V28H28Z"/></g></g></svg>
                    <a href="https://www.facebook.com//" target="_blank">Facebook</a>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
// import scroll from 'smooth-scrollbar'
// import { isNullOrUndefined } from 'util'
// import Vue from 'vue'
export default {
  name: 'Menu',
  // el: '#deck',
  data () {
    return {
      title: '',
      foot: 'Copyright 2018 AddVentures',
      logo: './static/img/logow.png',
      last: 'We are partnering with startups to transform industries together',
      list: [{
        id: 1,
        index: '01',
        title: 'Who we are',
        url: 'whoweare'
      },
      {
        id: 2,
        index: '02',
        title: 'What we invest',
        url: 'whatweinvest'
      },
      {
        id: 3,
        index: '03',
        title: 'Where we invest',
        url: 'whereweinvest'
      },
      {
        id: 5,
        index: '04',
        title: 'How we invest',
        url: 'howweinvest'
      },
      {
        id: 6,
        index: '05',
        title: 'Why work with us',
        url: 'whyworkwithus'
      },
      {
        id: 7,
        index: '06',
        title: 'Our partners',
        url: 'ourpartners'
      },
      {
        id: 8,
        index: '07',
        title: 'Insights',
        url: 'insign'
      },
      {
        id: 9,
        index: '08',
        title: 'The team',
        url: 'theteam'
      },
      {
        id: 10,
        index: '09',
        title: 'Contact',
        url: 'contact'
      },
      {
        id: 11,
        index: '10',
        title: 'Join us',
        url: 'joinus'
      }
      ]
    }
  },
  mounted: function () {
    var vm = this
    vm.$parent.triggerMenuState()
    // console.log('i was mounthed')
  },
  // life cycle of component
  created () {},
  /* beforeMount () {
    window.addEventListener('wheel', function (event) {
      var el = document.getElementById('menu')
      // const s =
      scroll.get(el)
    })
  }, */
  destroyed () {
    var vm = this
    vm.$parent.defaultState()
  }
}
</script>

<style scoped>
  /* .hoverCSS3 {
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    font-size: 30px;
  }

  .hoverCSS3:after {
    content: "";
    position: absolute;
    background-color: #f0f0f0;
    height: 3px;
    width: 0;
    top: 100%;
    left: 0;
    display: inline-block;
    opacity: 0;
    -webkit-transition: opacity 0.4s ease-out, width 0.4s ease-out;
    -moz-transition: opacity 0.4s ease-out, width 0.4s ease-out;
    -o-transition: opacity 0.4s ease-out, width 0.4s ease-out;
    transition: opacity 0.4s ease-out, width 0.4s ease-out;
  }

  .hoverCSS3:before {
    /* content: "*";
            width: 22px;
            height: 22px;
            display: inline;
            float: right;
            margin-left: 8px;
            margin-top: 8px; *
    -webkit-transition: -webkit-transform 0.4s ease-out;
    -moz-transition: transform 0.4s ease-out;
    -o-transition: transform 0.4s ease-out;
    transition: transform 0.4s ease-out, -ms-transform 0.4s ease-out;
  }

  .hoverCSS3:hover:before {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    /* IE 9 *
    -webkit-transform: rotate(180deg);
    /* Opera, Chrome, and Safari *
  }

  .hoverCSS3:hover:after {
    opacity: 1;
    width: 100%;
  } */

  /***/

/*
   .project .header .cls-1 {
    isolation: isolate;
  }

   .project .header .cls-2 {
    fill: #ffffff;
  }

   .project .header .cls-3 {
    fill: #ffffff;
  }

   .project .header .cls-4 {
    fill: #ffffff;
  }

   .project .header .cls-5 {
    fill: #e5e6e6;
    opacity: 0.8;
    mix-blend-mode: multiply;
  }

  .project .header .cls-6 {
    fill: #ffffff;
  }*/

  .project .cls-9 {
  fill: #fff;
  }

  .meetme
  {
    display: none;
  }

   .project .header .cls-1 {
    fill: #ffffff;
  }

  .project__body {
    border-left: solid 0 #ffff;
    border-right: solid 0 #ffff;
  }

  a:hover {
    color: unset;
    text-decoration: none;
  }

  .ocp-5 {
    opacity: 0.5;
  }

  .index {
    margin-right: 70px;
  }

  .menu .sm {
    font-size: 1.66vw;
  }

  /* .menu .page {
    margin-left: 50%;
    transform: translateX(-25%);
  }

  .menu .feet
  {
      transform: translateX(40%);
  } */

  .scrollarea {
    height: 100vh;
    display: block;
  }

  @media (min-width: 1200px) {
    .header__title {
      top: 53px;
      left: 80px;
      z-index: 2 !important;
      width: 176px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .menu .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .menu .site {
      height: 57px;
      line-height: 57px;
      font-size: 34px;
    }
    .menu .site.index {
      height: 41px;
      font-size: 24px;
      line-height: 41px;
      margin-right: 35px;
    }
    .pt-130 {
      padding-top: 130px;
      padding-left: 39.5%;
      padding-bottom: 18px;
    }
    .menu .logo__sm {
      width: 180px;
      height: 50.8px;
    }
    .menu .footy .sub {
      font-size: 20px;
      line-height: 1.25;
      opacity: 0.5;
    }
    .menu .ctn .c {
      padding-left: 630px;
      padding-bottom: 35px;
      padding-left: 44%;
      /* padding-left: 39.5%; */
      padding-right: 0;
    }
  }

  @media (max-width: 575.98px) {
    .menu .mobile {
      display: none;
    }
    .menu .col-md-12 {
      padding-top: 87px;
      padding-left: 20vw;
    }
    .menu .f-28 {
      height: 6.952662721893492vh;
      font-size: 7.466666666666667vw;
      line-height: 6.952662721893492vh;
    }
    .menu .f-16 {
      height: 5.4733727810650885vh;
      font-size: 5.866666666666666vw;
      line-height: 5.4733727810650885vh;
      margin-right: 8.8vw;
    }
    .menu ul li.social-list__item {
      position: relative;
      width: 9.066666666666666vw;
      height: 9.066666666666666vw;
      display: inline-block;
      margin-bottom: 0;
      margin-right: 3.4023668639053257vh;
    }
    .ctn {
      padding-left: 14.933333333333334vw;
      padding-right: 14.933333333333334vw;
    }
    .menu ul {
      padding-left: 18vw;
    }
    .f-18 {
      height: 31px;
      font-size: 4.8vw;
      line-height: 31px;
    }
    .menu .footy {
      margin-top: 20px;
    }

    .meetme
    {
      display: block;
    }
  }

@media (min-width: 992px) and (max-width: 1199.98px)
{
      .header__title {
      top: 53px;
      left: 80px;
      z-index: 2 !important;
      width: 176px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .menu .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .menu .site {
      height: 57px;
      line-height: 57px;
      font-size: 34px;
    }
    .menu .site.index {
      height: 41px;
      font-size: 24px;
      line-height: 41px;
      margin-right: 35px;
    }
    .pt-130 {
      padding-top: 130px;
      padding-left: 37.277778vw;
      padding-bottom: 18px;
    }
    .menu .logo__sm {
      width: 180px;
      height: 50.8px;
    }
    .menu .footy .sub {
      font-size: 20px;
      line-height: 1.25;
      opacity: 0.5;
    }
    .menu .ctn .c {
      padding-left: 39.277778vw;
      padding-bottom: 35px;
      padding-left: 42vw;
      /* padding-left: 39.5%; */
      padding-right: 0;
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .header__title {
      top: 53px;
      left: 80px;
      z-index: 2 !important;
      width: 176px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .menu .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .menu .site {
      height: 57px;
      line-height: 57px;
      font-size: 34px;
    }
    .menu .site.index {
      height: 41px;
      font-size: 24px;
      line-height: 41px;
      margin-right: 35px;
    }
    .pt-130 {
      padding-top: 130px;
      padding-left: 36.277778vw;
      padding-bottom: 18px;
    }
    .menu .logo__sm {
      width: 180px;
      height: 50.8px;
    }
    .menu .footy .sub {
      font-size: 20px;
      line-height: 1.25;
      opacity: 0.5;
    }
    .menu .ctn .c {
      padding-left: 39.277778vw;
      padding-bottom: 35px;
      padding-left: 28vw;
      /* padding-left: 39.5%; */
      padding-right: 0;
    }
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
       .header__title {
      top: 53px;
      left: 80px;
      z-index: 2 !important;
      width: 176px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .menu .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .menu .site {
      height: 57px;
      line-height: 57px;
      font-size: 34px;
    }
    .menu .site.index {
      height: 41px;
      font-size: 24px;
      line-height: 41px;
      margin-right: 35px;
    }
    .pt-130 {
          padding-top: 23.277778vw;
    padding-left: 31.277778vw;
    padding-bottom: 18px;
    }
    .menu .logo__sm {
      width: 180px;
      height: 50.8px;
    }
    .menu .footy .sub {
      font-size: 20px;
      line-height: 1.25;
      opacity: 0.5;
    }
    .menu .ctn .c {
      padding-left: 39.277778vw;
      padding-bottom: 35px;
      padding-left: 27vw;
      /* padding-left: 39.5%; */
      padding-right: 0;
    }
 }
</style>
