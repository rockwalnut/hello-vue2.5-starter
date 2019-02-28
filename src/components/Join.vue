<template>
  <div class="join">

    <div class="top fixed col-12 white">
      <header id="header" class="">
        <!-- <h1 class="header__title" v-show="true">
          <img class="logo__sm" v-bind:src="logo" />
          <router-link to="/">
          </router-link>
        </h1> -->
         <div class="nav_wrapper">
          <nave flex=""></nave>
        </div>
      </header>
    </div>

    <div class="project__inner scrollarea" data-scrollbar id="join">

      <div class="scroll-content">

            <section class="project__description white col | ctn c">
              <h3 class="hidden-visually">Join</h3>
              <div class="project__text | m-100 m-mr-0">
                <p class="title bold tb">{{ title }}</p>
                <p class="sub bold tb mb-45">{{ sub }}</p>
                <p class="cv bold tr">{{ cv }}</p>
                <router-link to=""> <p class="email bold tb udl">{{ email }}</p> </router-link>
              </div>
            </section>

            <section class="project__description white row mt-0 pt-0 pb-0 mb-0  mx-0 px-0 | ctn">
              <div class="project__text | pt-0 mx-auto | footy">
                <div class="page | m-100 m-ml-0">
                  <h3 class="bold sub tb">&copy; {{ foot }}</h3>
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
  name: 'Join',
  // el: '#deck',
  data () {
    return {
      title: 'Join our team',

      logo: './static/img/logo_sm.svg',
      sub:
        'We are looking for energetic and passionate people to join our team and growth together.',
      foot: 'Copyright 2018 AddVentures',
      cv: 'Please contact us or submit your CV to',
      email: 'contact@addventures.co.th'
    }
  },
  mounted: function () {
    var vm = this
    vm.$parent.triggerPitchState()
    // console.log('i was mounthed')
  },
  // life cycle of component
  created () {},

  destroyed () {
    var vm = this
    vm.$parent.defaultState()
    // var el = document.getElementById('deck')
    // const s = scroll.get(el)
    // s.destroy()
  }
}
</script>

<style scoped>
/***/
.project__text p:not(:last-of-type) {
    margin-bottom: 0;
}

.join .clearfix
{
  height: 100px;
}

.join .py-5c
{
  padding-bottom: 5rem;
  padding-top: 12rem;
}

.join .mb-5c
{
  margin-bottom: 5rem !important;
}

.join .ctn.c
{
  padding-left: 8.1%;
  padding-bottom: 25rem;
}

.udl {
  border-bottom: 2px solid black;
  letter-spacing: 0.05em;
  width: min-content;
}

@media (min-width: 1200px) {
  /* .desk {
        height: 150vh;
        background-color: #f0f0f0;
      }

      .desk header
      {
        background-color: white;
      }*/

.scrollarea {
  height: 100vh;
  display: block;
}

  .footy
  {
    bottom: 0;
        margin-bottom: 58px;
  }

  .join .top.fixed {
    display: block;
    position: absolute;
    height: 130px;
    z-index: 100;
  }

  .pt-130 {

    padding-top: 130px;
    padding-left: 567px;
    padding-bottom: 18px;
  }

  .join .ctn.c {
    /* padding-left: 8.1%; */
    padding-bottom: 328px;
    padding-top: 131px;
    padding-left: 9.722222222222221vw;
    padding-right: 54.86111111111111vw;
}

.join .ctn.c .title
{
  height: 118px;
  font-size: 70px;
  line-height: 118px;
}

.join .ctn.c .sub
{
height: 79px;
  font-size: 26px;
  line-height: 1;
}

.join .ctn.c .cv
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

.join .ctn.c .email
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

  .join .footy .sub
  {
  font-size: 20px;
line-height: 1.25;
  }

 /* .menu .logo__sm
  {
    width: 180px;
  height: 50.8px;
  object-fit: contain;
  }

  .menu .footy .sub
  {
  font-size: 20px;
line-height: 1.25;
opacity: 0.5;
  }

  .menu .ctn .c
  {
        padding-left: 630px;
    padding-bottom: 35px;
  }*/

}

@media (max-width: 575.98px) {

      .join .ctn.c{
    flex-direction: unset;
    padding-top: 18.49112426035503vh !important;
    /* width: 87.46666666666667vw; */
    /* height: 200px; */
    padding-left: 35px;
    padding-right: 14.933333333333334vw;
        padding-bottom: 36.98224852071006vh;

  }

  .join .ctn.c .cv {

    font-size: 5.333333333333333vw;
    line-height: 1.2;
}

.join .ctn.c .email {
    font-size: 5.333333333333333vw;
    line-height: 1.2;
}

.join .mb-45
{
      margin-bottom: 45px !important;
}
}

@media (min-width: 992px) and (max-width: 1199.98px)
{
  .scrollarea {
  height: 100vh;
  display: block;
}

  .footy
  {
    bottom: 0;
        margin-bottom: 58px;
  }

  .join .top.fixed {
    display: block;
    position: absolute;
    height: 130px;
    z-index: 100;
  }

  .pt-130 {

    padding-top: 130px;
    padding-left: 567px;
    padding-bottom: 18px;
  }

  .join .ctn.c {
    /* padding-left: 8.1%; */
    padding-bottom: 328px;
    padding-top: 131px;
    padding-left: 9.722222222222221vw;
    padding-right: 34.86111111111111vw;
}

.join .ctn.c .title
{
  height: 118px;
  font-size: 70px;
  line-height: 118px;
}

.join .ctn.c .sub
{
height: 79px;
  font-size: 26px;
  line-height: 1;
}

.join .ctn.c .cv
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

.join .ctn.c .email
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

  .join .footy .sub
  {
  font-size: 20px;
line-height: 1.25;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
.scrollarea {
  height: 100vh;
  display: block;
}

  .footy
  {
    bottom: 0;
        margin-bottom: 58px;
  }

  .join .top.fixed {
    display: block;
    position: absolute;
    height: 130px;
    z-index: 100;
  }

  .pt-130 {

    padding-top: 130px;
    padding-left: 567px;
    padding-bottom: 18px;
  }

  .join .ctn.c {
    /* padding-left: 8.1%; */
    padding-bottom: 328px;
    padding-top: 131px;
    padding-left: 9.722222222222221vw;
    padding-right: 30.861111vw
}

.join .ctn.c .title
{
  height: 118px;
  font-size: 70px;
  line-height: 118px;
}

.join .ctn.c .sub
{
height: 79px;
  font-size: 26px;
  line-height: 1;
}

.join .ctn.c .cv
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

.join .ctn.c .email
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

  .join .footy .sub
  {
  font-size: 20px;
line-height: 1.25;
  }
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
.scrollarea {
  height: 100vh;
  display: block;
}

  .footy
  {
    bottom: 0;
        margin-bottom: 58px;
  }

  .join .top.fixed {
    display: block;
    position: absolute;
    height: 130px;
    z-index: 100;
  }

  .pt-130 {

    padding-top: 130px;
    padding-left: 567px;
    padding-bottom: 18px;
  }

  .join .ctn.c {
    /* padding-left: 8.1%; */
    padding-bottom: 328px;
    padding-top: 131px;
    padding-left: 9.722222222222221vw;
    padding-right: 34.86111111111111vw;
}

.join .ctn.c .title
{
  height: 118px;
  font-size: 70px;
  line-height: 118px;
}

.join .ctn.c .sub
{
height: 79px;
  font-size: 26px;
  line-height: 1;
}

.join .ctn.c .cv
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

.join .ctn.c .email
{
  height: 54px;
  font-size: 32px;
  line-height: 54px;
}

  .join .footy .sub
  {
  font-size: 20px;
line-height: 1.25;
  }
}
</style>
