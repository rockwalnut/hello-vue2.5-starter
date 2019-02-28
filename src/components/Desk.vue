<template>
  <div class="desk">

    <div class="top fixed col-12 white">
      <header id="header" class="">
        <!-- <h1 class="header__title" v-show="true">
            <img class="logo__sm" v-bind:src="logo" />
            <router-link to="/">
            </router-link>
          </h1> -->
        <div class="nav_wrapper">
          <nave></nave>
        </div>
      </header>
    </div>

    <div class="pt-130 project__inner scrollarea" data-scrollbar id="desk">
      <div class="scroll-content">

        <section class="project__description py-0 grey">
          <h3 class="hidden-visually">About</h3>
          <div class="project__description mb-0 pb-0 grey | row ctn t">

            <div class="project__text | m-100 m-mr-0 | ctn-content r mobile">
              <div class="box red">
                <p class="sub tw f-22">{{ about.detail }}</p>
                <p class="title tw bold">{{ about.sub }}</p>
              </div>
            </div>

            <div class="project__text | m-100 m-mr-0 | ctn-content l">
              <div class="title tr bold">
                <img class="bg__form" v-bind:src="about.image" v-bind:class="about.imageClass" />
                <span>{{ about.title }}</span>
              </div>
              <ul class="form">
                <li v-for="f in about.forms" :key="f.id">
                  <p class="sub tb bold">{{ f.title }}</p>
                  <input class="form-control flg" :v-model="f.name" :placeholder="f.placeholder">
                </li>
              </ul>
            </div>

            <div class="project__text | m-100 m-mr-0 | ctn-content r desktop">
              <div class="box red">
                <p class="sub tw f-22">{{ about.detail }}</p>
                <p class="title tw bold">{{ about.sub }}</p>
              </div>
            </div>

          </div>
        </section>

        <section class="project__description py-0 grey">
          <h3 class="hidden-visually">Pitch</h3>
          <div class="project__description mb-0 pb-0 grey | row ctn c">

            <div class="project__text col | m-100 m-mr-0 | ctn-content l">
              <div class="box red custom" v-bind:class="pitch.boxClass">
                <!-- <p class="sub tw f-22">{{ pitch.detail }}</p> -->
                <p class="title tw bold">{{ pitch.sub }}</p>
              </div>
            </div>

            <div class="project__text | m-100 m-mr-0 | ctn-content r">

              <p class="title tr bold"> <img class="bg__form" v-bind:src="pitch.image" v-bind:class="pitch.imageClass" /><span>{{ pitch.title }}</span></p>
            </div>

          </div>
        </section>

        <section class="project__description grey | py-0">
          <h3 class="hidden-visually">Pitch</h3>
          <div class="project__description row | ctn b">

            <div class="project__text col-md-12 | m-100 m-mr-0 | px-0m">
              <ul class="form">

                <li v-if="f.type == 'text'" v-for="f in pitch.forms" :key="f.id">
                  <p class="sub tb bold">{{ f.title }}</p>
                  <input class="form-control flg w-684" :v-model="f.name" :placeholder="f.placeholder">
                </li>

                <li :id="f.id" v-if="f.type == 'button-group-business'" v-for="f in pitch.forms" :key="f.id">
                  <p class="sub tb bold">{{ f.title }}</p>
                  <div :id="f.id" :v-model="f.name" class="btn-group jc" role="group" aria-label="">
                    <button @click.prevent="activeBusiness(b.id)" :class="{ active: b.id === selectBusiness }" :v-model="b.name" :value="b.id" v-for="b in f.buttons" :key="b.id" type="button" class="btn btn-default f-16" >{{ b.title }}</button>
                  </div>
                </li>

                <li :id="f.id" v-if="f.type == 'button-group-fund'" v-for="f in pitch.forms" :key="f.id">
                  <p class="sub tb bold">{{ f.title }}</p>
                  <div :id="f.id" :v-model="f.name" class="btn-group jc" role="group" aria-label="">
                    <button @click.prevent="activeFund(b.id)" :class="{ active: b.id === selectFund }" :v-model="b.name" :value="b.id" v-for="b in f.buttons" :key="b.id" type="button" class="btn btn-default f-16" >{{ b.title }}</button>
                  </div>
                </li>

                <li v-if="f.type == 'number'" v-for="f in pitch.forms" :key="f.id">
                  <div>
                  <p class="sub tb bold">{{ f.title }}</p>
                  <label>
                  <input class="form-control flg w-684" :v-model="f.name" :placeholder="f.placeholder" >
                  </label>
                  </div>
                </li>

                <li v-if="f.type == 'check'" v-for="f in pitch.forms" :key="f.id">
                  <p class="sub tb bold">{{ f.title }}</p>
                  <div :v-model="f.name" class="btn-group jc" role="group" aria-label="">
                    <button @click.prevent="activeRobot(b.id)" :class="{ active: b.id === selectRobot }"  :v-model="b.name" :value="b.id" v-for="b in f.buttons" :key="b.id" type="button" class="btn btn-default">{{ b.title }}</button>
                  </div>
                </li>

              </ul>
            </div>

          </div>

        </section>

        <section class="project__description grey row | py-0">
          <div class="project__text grey col footy">
            <div class="m-100 m-ml-0 | ctn al-c">
              <h3 class="sub bold tb">&copy; {{ foot }}</h3>
            </div>
          </div>
        </section>
        <section class="project__description row grey | py-0">
          <div class="project__text col | p-0 m-0">
            <button v-on:click="submit" type="button" class="btn btn-default btn-fill red title bold"><span class="bold">Submit</span><img class="arrow" v-bind:src="arrow" /></button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from 'smooth-scrollbar'
import axios from 'axios'
// import { isNullOrUndefined } from 'util'
// import Vue from 'vue'
export default {
  name: 'Desk',
  // define methods under the `methods` object
  methods: {
    submit: function (event) {
      // `this` inside methods points to the Vue instance
      console.info(this.baseUrl + this.url)
      // `event` is the native DOM event
      /* if (event) {
                    alert(event.target.tagName)
                  }
       axios
      .get(his.baseUrl + this.url)
      .then(response => (this.info = response)) */
      axios
        .get(this.baseUrl + this.url, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // .finally(() => this.loading = false)
    },
    activeRobot: function (val) {
      // alert(val)
      this.selectRobot = val
    },
    activeBusiness: function (val) {
      // alert(val)
      this.selectBusiness = val
    },
    activeFund: function (val) {
      // alert(val)
      this.selectFund = val
    }
  },
  // el: '#deck',
  data () {
    return {
      title: 'Pitch Deck',
      logo: './static/img/logo_sm.svg',
      foot: 'Copyright 2018 AddVentures',
      arrow: './static/img/sub.png',
      baseUrl: 'http://localhost:5000',
      url: '/api/hello',
      selectBusiness: null,
      selectFund: null,
      selectRobot: null,
      about: {
        title: 'About You',
        sub: 'Step 1',
        image: './static/img/you.png',
        imageClass: 'you',
        detail: 'Before submitting your pitch desk, please fill out the form below',
        forms: [{
          id: 1,
          name: 'fullname',
          title: 'Full Name *',
          placeholder: 'Full Name'
        },
        {
          id: 2,
          name: 'company',
          title: 'Company *',
          placeholder: 'Company'
        },
        {
          id: 3,
          name: 'email',
          title: 'Email *',
          placeholder: 'Email'
        },
        {
          id: 4,
          name: 'contact',
          title: 'Contact *',
          placeholder: 'Phone no.'
        }
        ]
      },
      pitch: {
        id: 99,
        title: 'Pitch Desk',
        sub: 'Step 2',
        image: './static/img/deck.png',
        imageClass: 'deck',
        boxClass: 'fl-l',
        detail: '',
        forms: [{
          id: 1,
          name: 'link',
          title: 'Attach your pitch desk link *',
          placeholder: 'http://',
          type: 'text'
        },
        {
          id: 2,
          name: 'business',
          title: 'Type of business',
          placeholder: '',
          type: 'button-group-business',
          buttonClass: 'w-161',
          buttons: [{
            id: 99,
            name: 'industrail',
            title: 'Industrail'
          },
          {
            id: 98,
            name: 'b2b',
            title: 'B2B'
          },
          {
            id: 97,
            name: 'enterprise',
            title: 'Enterprise'
          },
          {
            id: 96,
            name: 'others',
            title: 'Others'
          }
          ]
        },
        {
          id: 3,
          name: 'stage',
          title: 'Your most recent fund raising stage',
          placeholder: '',
          type: 'button-group-fund',
          buttons: [{
            id: 99,
            name: 'never',
            title: 'Never'
          },
          {
            id: 98,
            name: 'seed',
            title: 'Seed'
          },
          {
            id: 97,
            name: 'seriesa',
            title: 'Series A'
          },
          {
            id: 96,
            name: 'seriesb',
            title: 'Series B and above'
          }
          ]
        },
        {
          id: 4,
          name: 'amount_fund',
          title: 'Amount of most recent fundraising',
          placeholder: 'Amount',
          type: 'number'
        },
        {
          id: 5,
          name: 'robot',
          title: 'I &#39 m not a robot',
          placeholder: '',
          type: 'check',
          buttons: [{
            id: 99,
            name: 'notrobot',
            title: 'Yes'
          },
          {
            id: 98,
            name: 'robot',
            title: 'No'
          }
          ]
        }
        ]
      }
    }
  },
  mounted: function () {
    var vm = this
    vm.$parent.triggerPitchState()

    var scrollbarOptions = {
      renderByPixels: true,
      continuousScrolling: false
    }
    var v = 'desk'
    var div = document.getElementById(v)
    // console.log(div)
    if (!div) {
    }
    scroll.init(div, scrollbarOptions)
  },
  // life cycle of component
  created () {},
  beforeMount () {
    /* var el = document.getElementById('desk')
    if (!el) {
    }
    scroll.init(el) */
  },
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

  /* .desk .ctn.rr {
        transform: translateX(17%);
      }

      .desk .title.t-lg {
        font-size: 6vw !important;
        letter-spacing: 2px;
      }

      .desk .ll {
        transform: translateX(10%);
        z-index: 4;
      } */

      .masked
      {
            font-size: 16px;
    position: absolute;
    top: 13px;
    left: 13px;
    color: #000;
      }
label {
  position: relative;
  width: 100%;
}

      label:after {
          font-size: 30px;
  content: 'USD';
  right: 30px;
    height: 45px;
    line-height: 45px;
  position: absolute;
  top: 7px;
  color: #8d9399;
  z-index: 9;
}

        .btn.focus,
    .btn:focus {
      outline: 0;
      box-shadow: none;
    }

      .desk .btn-group .btn-default  {
    background-color: #fff;
}

  .desk .my-5c {
    margin-bottom: 12rem;
    margin-top: 12rem;
  }

  .desk .w-22 {
    width: 22vw;
    margin-left: 12vw;
    margin-bottom: 0 !important;
  }

  .desk .clearfix {
    height: 100px;
  }

  .desk .translate h3,
  .desk .translate p {
    margin-bottom: 20px;
  }

  .desk .translate p {
    margin-bottom: 70px;
  }

  /* .desk .ctn.c {
        padding-top: 130px;
        transform: translateY(-11.8%);
      } */

  .desk .jc {
    justify-content: space-between;
    display: flex;
  }

  .btn-group {
    margin-left: 0;
    margin-bottom: 15.5px;
  }

  .w-161 {
    width: 161px;
    height: 60px;
  }

  /**** input ***/

  .btn-fill {
    width: inherit;
    padding: 30px 400px 30px 400px;
    margin: 0;
    /* padding-right: 0; */
    /* padding-left: 0; */
    text-align: right;
    color: #f0f0f0f0;
    margin: 0 !important;
  }

  .btn {
    font-weight: normal;
    border-radius: 0;
    font-size: 1.8vw;
  }

  /* .btn-group {
        margin-left: 30px;
      } */

  .btn-group>.btn:hover,
  .btn-group>.btn:focus,
  .btn-group>.btn:visited,
  .btn-group>.btn:active {
    z-index: 1;
    color: #ec1e24;
    border: 1px solid #ec1e24;
  }

  .btn.active {
    z-index: 1;
    color: #ec1e24 !important;
    border: 1px solid #ec1e24 !important;
  }

  .form.ctn {
    margin-top: 10rem;
  }

  ul.form li {
    list-style: none;
  }

  .desk .title.lg {
    font-size: 10vh !important;
  }

  /* .flg {
        padding-left: 2rem;
        padding: 1rem 2rem 1rem 2rem;
        display: block;
        width: 48vw;
        /* padding: .375rem .75rem; *
        font-size: 2rem;
        /* line-height: 1.7; *
        color: #221f1f;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ffff;
        border-radius: 0.25rem;
        z-index: 4 !important;
        position: relative;
      } */

  /* .w-125 {
              width: 110%;
            } */

  /* .desk .pb-c {
        border-bottom: 450px solid #f0f0f0;
      }

      .desk .pt-c {
        border-top: 450px solid #ec1e24;
      }

      .desk .pt-d {
        border-top: 20vh solid #ec1e24;
      } */

  /*.desk .you {
        /* margin-top: 50px;
              margin-left: -50px; *
        transform: translate3d(0vw, 12vh, 0);
      }

      .desk .deck {
        transform: translate3d(13vw, 12vh, 0);
      }*/

  .desk .arrow {
    width: 58px;
    padding-top: 10px;
    margin-left: 56px;
  }

  /***/

  .desk .project__body .bg__form {
    position: absolute;
    width: 4vw;
    z-index: 2;
  }

  /* .desk .pb-6 {
        padding-bottom: 5vh;
      }

      .desk .sft {
        margin-top: -15.5%;
      } */

  /* .desk .ctn.r {
        padding-left: 9.1%;
        padding-right: 0;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

      .desk .ctn.l {
        padding-left: 0;
        padding-right: 9.1%;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

      .desk .ctn.b {
        padding-left: 15.1%;
        padding-right: 20.1%;
      } */

  .scrollarea {
    height: 100vh;
    display: block;
  }

  @media (min-width: 1200px) {

   .btn-group .btn.active {
    z-index: 1;
    color: #ec1e24;
    border: 1px solid #ec1e24;
  }

    .desk .flg {
      /* padding-left: 2rem; */
      padding: 9.5px 29px;
      display: block;
      width: 670px;
      /* padding: .375rem .75rem; */
      font-size: 24px;
      /* height: 41px; */
      line-height: 41px;
      /* line-height: 1.7; */
      color: #221f1f;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      border-radius: 0;
      z-index: 5 !important;
      position: relative;
      margin-bottom: 15.5px;
    }
    .w-684 {
      width: 684px !important;
    }
    .desk .ctn.t {
      padding-left: 140px;
      padding-right: 0;
      width: 100%;
      padding-top: 130px;
    }
    .desk .ctn.c {
      padding-right: 140px;
      padding-left: 0;
      width: 100%;
    }
    .desk .t .ctn-content.l {
      width: 810px;
      padding: 46px 0 0 0;
    }
    .desk .t .ctn-content.r {
      padding: 0;
      position: absolute;
      right: 0;
    }
    .desk .c .ctn-content.l {
      width: 692px;
      /* height: 430px; */
      padding: 0 0 0 0;
    }
    .desk .c .ctn-content.r {
      padding-top: 145px;
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: 0px;
      /* width: 810px; */
    }
    .desk .ctn-content.l .title,
    .desk .ctn-content.r .title {
      font-size: 100px;
      line-height: 169px;
      height: 169px;
    }
    .desk .ctn-content.l .sub,
    .desk .ctn.b .sub {
      height: 51px;
      font-size: 30px;
      line-height: 51px;
    }
    .desk .box.red {
      width: 692px;
      height: 430px;
      padding: 242px 119px 15px 250px;
      text-align: right;
    }
    .desk .box.red.custom {
      width: 692px;
      height: 430px;
      padding: 290px 38px 22px 496px;
      text-align: right;
      margin-top: -120px;
    }
    .desk .box.red-2 {
      width: 158px;
      height: 118px;
    }
    .desk .box.red .sub {
      /* height: 79px; */
      font-size: 26px;
      line-height: 1;
    }
    .desk .box.red .title {
      font-size: 70px;
      height: 118px;
      line-height: 118px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .desk .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .pt-130 {
      padding-top: 0;
    }
    .desk .ctn.b {
      padding-bottom: 60px;
      padding-top: 56px;
      padding-left: 518px;
      padding-right: 238px;
    }
    .desk .btn {
      height: 60px;
      font-size: 26px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 44px;
    }
    .desk .btn-group .btn-default {
      background-color: white;
    }
    .footy .sub {
      height: 37px;
      font-size: 22px;
      line-height: 37px;
      padding-bottom: 90px;
    }
    .desk .btn-fill {
      padding-top: 0;
      padding-left: 1006px;
      margin: 0;
      font-size: 70px;
      height: 120px;
      text-align: right;
      color: #f0f0f0f0;
      margin: 0 !important;
      line-height: 118px;
    }
    .btn-group>.btn:hover,
    .btn-group>.btn:visited,
    .btn-group>.btn:active {
      z-index: 1;
      color: #ec1e24;
      border: 1px solid #ec1e24;
      box-shadow: none;
    }
    .desk .you {
      width: 63.5px;
      top: 30px;
      position: relative;
      margin-right: 18.5px;
    }
    .desk .deck {
      width: 51.3px;
      top: 35px;
      position: relative;
      margin-right: 10px;
    }

  }

  @media (max-width: 575.98px) {

          label:after {
    font-size: 5.333333333333333vw;
    right: 20px;
    height: 35px;
    line-height: 35px;
}

    .desk .you {
      width: 63.5px;
      top: 40px;
      position: relative;
      margin-right: 10.5px;
    }
    .desk .deck {
      width: 51.3px;
      top: 55px;
      position: relative;
      margin-right: 10px;
    }
    .desk .ctn.t {
      margin-top: 90px;
    }
    .desk .top.fixed {
      display: block;
      position: absolute;
      /* height: 90px; */
      height: 13.493253373313344vh;
      z-index: 5;
    }
    .desk .desktop {
      display: none;
    }
    .desk .ctn.t {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      padding-top: 0;
    }
    .desk .t .ctn-content.r {
      padding: 0;
      position: relative;
    }
    .desk .scroll-content {
      border-left: solid 10px #ffff;
      border-right: solid 10px #ffff;
    }
    .desk .t .ctn-content.l {
      /* width: 810px; */
      padding: 10px 6.933333333333334vw 0 6.933333333333334vw;
    }
    .desk .box.red {
      width: 77.33333333333333vw;
      height: 29.985007496251875vh;
      padding: 9.745127436281859vh 5.2vw 36px 4.8vw;
      text-align: right;
      float: right;
    }
    .desk .box.red .sub {
      font-size: 5.333333333333333vw;
      line-height: 1.2;
      font-weight: normal;
    }
    .desk .ctn-content.l .title,
    .desk .ctn-content.r .title {
      font-size: 10.666666666666666vw;
      line-height: 10.044977511244378vh;
      height: 10.044977511244378vh;
      display: block;
      margin-bottom: 55px;
    }
    .desk .ctn-content.l .sub,
    .desk .ctn.b .sub {
      height: 41px;
      font-size: 6.4vw;
      line-height: 41px;
    }
    .desk .box.red.custom {
      /* width: 692px; */
      height: 48.7256371814093vh;
      padding: 0;
      text-align: right;
      margin-top: -14.24287856071964vh;
      padding: 35.98200899550225vh 35px 0 42.13333333333333vw;
    }
    .desk .flg {
      /* padding-left: 2rem; */
      padding: 6.5px 18px;
      display: block;
      /* width: 670px; */
      /* padding: .375rem .75rem; */
      font-size: 5.333333333333333vw;
      /* height: 41px; */
      line-height: 35px;
      /* line-height: 1.7; */
      color: #221f1f;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      border-radius: 0;
      z-index: 5 !important;
      position: relative;
      margin-bottom: 15.5px;
    }

    .desk .ctn.c {
      padding-right: 0;
      padding-left: 0;
      width: 100%;
    }
    .desk .project__description {
      flex-direction: initial !important;
    }
    .desk .c .ctn-content.l {
      padding: 0 0 0 0;
    }
    .desk .fl-l {
      float: left !important;
    }
    .desk .c .ctn-content.r {
      padding: 20px 0 0 0;
      text-align: right;
      padding: 10px 6.933333333333334vw 0 6.933333333333334vw;
    }
    .desk .ctn.b {
      padding: 10px 6.933333333333334vw 0 6.933333333333334vw;
    }
    .desk .px-0m {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .desk .ctn.b {
      width: 100%;
          padding-bottom: 105px;
    }

    .desk .jc {
    /* -webkit-box-pack: justify;
    -ms-flex-pack: justify; */
    justify-content: unset;
    /* display: -webkit-box;
    display: -ms-flexbox; */
    display: block;
}

.desk .btn  {
    height: 50px;
    font-size: 6.4vw;
    font-weight: normal;
    line-height: 41px;
}

.desk .btn-group .btn-default {
    background-color: #fff;
    width: 100%;
    margin-bottom: 18px;
}

.desk .btn-group.jc button:last-child {
  margin: 0;
}

.footy .ctn
{
  padding: 0;
  margin-bottom: 80px;
}

    .desk .btn-fill {
      padding-top: 0;
      padding-left: 0;
      margin: 0;
      font-size: 10.666666666666666vw;
      width: calc(100vw - 20px);
      height: 101px;
      text-align: right;
      color: #f0f0f0f0;
      margin: 0 !important;
      line-height: 67px;
      padding-bottom: 0;
          padding-right: 27px;
    }

    .desk .arrow {
    width: 35px;
    padding-top: 10px;
    margin-left: 18px;
}

  }

  /*
  *
  *
  *
  *
  */

@media (min-width: 992px) and (max-width: 1199.98px)
{

   .btn-group .btn.active {
    z-index: 1;
    color: #ec1e24;
    border: 1px solid #ec1e24;
  }

    .desk .flg {
      /* padding-left: 2rem; */
      padding: 9.5px 29px;
      display: block;
      width: 46.52777777777778vw;
      /* padding: .375rem .75rem; */
      font-size: 24px;
      /* height: 41px; */
      line-height: 41px;
      /* line-height: 1.7; */
      color: #221f1f;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      border-radius: 0;
      z-index: 5 !important;
      position: relative;
      margin-bottom: 15.5px;
    }
    .w-684 {
      width: 684px !important;
    }
    .desk .ctn.t {
      padding-left: 140px;
      padding-right: 0;
      width: 100%;
      padding-top: 130px;
    }
    .desk .ctn.c {
      padding-right: 140px;
      padding-left: 0;
      width: 100%;
    }
    .desk .t .ctn-content.l {
      width: 810px;
      padding: 46px 0 0 0;
    }
    .desk .t .ctn-content.r {
      padding: 0;
      position: absolute;
      right: 0;
    }
    .desk .c .ctn-content.l {
      width: 692px;
      /* height: 430px; */
      padding: 0 0 0 0;
    }
    .desk .c .ctn-content.r {
      padding-top: 145px;
    padding-left: 53vw;
    padding-right: 0px;
    padding-bottom: 0px;
    /* width: 810px; */
    text-align: right;
      /* width: 810px; */
    }
    .desk .ctn-content.l .title,
    .desk .ctn-content.r .title {
      font-size: 6.944444444444445vw;
      line-height: 169px;
      height: 169px;
    }
    .desk .ctn-content.l .sub,
    .desk .ctn.b .sub {
      height: 51px;
      font-size: 30px;
      line-height: 51px;
    }
    .desk .box.red {
         width: 48.05555555555556vw;
    height: 430px;
    padding: 212px 119px 15px 9.666667vw;
    text-align: right;
    }
    .desk .box.red.custom {
      width: 692px;
      height: 430px;
      padding: 290px 38px 22px 496px;
      text-align: right;
      margin-top: -120px;
    }
    .desk .box.red-2 {
      width: 158px;
      height: 118px;
    }
    .desk .box.red .sub {
      /* height: 79px; */
      font-size: 26px;
      line-height: 1;
    }
    .desk .box.red .title {
      font-size: 70px;
      height: 118px;
      line-height: 118px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .desk .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .pt-130 {
      padding-top: 0;
    }
    .desk .ctn.b {
      padding-bottom: 60px;
      padding-top: 56px;
      padding-left: 19.416667vw;
      padding-right: 238px;
    }
    .desk .btn {
      height: 60px;
      font-size: 26px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 44px;
    }
    .desk .btn-group .btn-default {
      background-color: white;
      margin-right: 5px;
    }
    .footy .sub {
      height: 37px;
      font-size: 22px;
      line-height: 37px;
      padding-bottom: 90px;
    }
    .desk .btn-fill {
 padding-top: 0;
    padding-left: 66.444444vw;
    margin: 0;
    font-size: 70px;
    height: 120px;
    text-align: right;
    color: #f0f0f0f0;
    margin: 0 !important;
    line-height: 118px;
    display: block;
    padding-right: 4vw;
    }
    .btn-group>.btn:hover,
    .btn-group>.btn:visited,
    .btn-group>.btn:active {
      z-index: 1;
      color: #ec1e24;
      border: 1px solid #ec1e24;
      box-shadow: none;
    }
    .desk .you {
      width: 63.5px;
      top: 30px;
      position: relative;
      margin-right: 18.5px;
    }
    .desk .deck {
      width: 51.3px;
      top: 35px;
      position: relative;
      margin-right: 10px;
    }

      .w-684  {
    width: 100% !important;
  }

  .w-161  {
    width: unset;
    height: 60px;
}

.btn {
    padding: 0 2.3rem;
}

.col-md-12 {

    max-width: 100%;
}
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
 .desktop
  {
    display: none;
  }

     .btn-group .btn.active {
    z-index: 1;
    color: #ec1e24;
    border: 1px solid #ec1e24;
  }

    .desk .flg {
      /* padding-left: 2rem; */
      padding: 9.5px 29px;
      display: block;
       width: 120%;
      /* padding: .375rem .75rem; */
      font-size: 24px;
      /* height: 41px; */
      line-height: 41px;
      /* line-height: 1.7; */
      color: #221f1f;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      border-radius: 0;
      z-index: 5 !important;
      position: relative;
      margin-bottom: 15.5px;
    }
    .w-684 {
      width: 684px !important;
    }
    .desk .ctn.t {
          padding-left: 0;
    padding-right: 0;
    width: 77vw;
    padding-top: 130px;
    }
    .desk .ctn.c {
      padding-right: 140px;
      padding-left: 0;
      width: 100%;
    }
    .desk .t .ctn-content.l {
     width: unset;
    padding: 0;
    padding-left: 14vw;
    padding-top: 57px;
    }
    .desk .t .ctn-content.r {
      padding: 0;
      /* position: absolute; */
      right: 0;
    }
    .desk .c .ctn-content.l {
      width: 692px;
      /* height: 430px; */
      padding: 0 0 0 0;
    }
    .desk .c .ctn-content.r {
padding-top: 53vw;
    padding-left: 22vw;
    padding-right: 0px;
    padding-bottom: 0px;
    /* width: 810px; */
    text-align: right;
    /* width: 810px; */
    }
    .desk .ctn-content.l .title,
    .desk .ctn-content.r .title {
      font-size: 10.944444vw;
      line-height: 1;
          margin-bottom: 50px;

    }
    .desk .ctn-content.l .sub,
    .desk .ctn.b .sub {
      height: 51px;
      font-size: 30px;
      line-height: 51px;
    }
    .desk .box.red {
         width: 100%;
    height: 430px;
    padding: 70px 119px 15px 16.666667vw;
    text-align: right;
    }
    .desk .box.red.custom {
    width: 100%;
    height: 430px;
    padding: unsett;
    text-align: right;
    margin-top: -120px;
    }
    .desk .box.red-2 {
      width: 158px;
      height: 118px;
    }
    .desk .box.red .sub {
      /* height: 79px; */
      font-size: 26px;
      line-height: 1;
    }
    .desk .box.red .title {
      font-size: 70px;
      height: 118px;
      line-height: 118px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .desk .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .pt-130 {
      padding-top: 0;
    }
    .desk .ctn.b {
      padding-bottom: 60px;
      padding-top: 56px;
      padding-left: 14vw;
      padding-right: 12.416667vw;;
    }
    .desk .btn {
      height: 60px;
      font-size: 26px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 44px;
    }
    .desk .btn-group .btn-default {
      background-color: white;
      margin-right: 5px;
    }
    .footy .sub {
      height: 37px;
      font-size: 22px;
      line-height: 37px;
      padding-bottom: 90px;
    }
    .desk .btn-fill {
 padding-top: 0;
    padding-left: 52.444444vw;
    margin: 0;
    font-size: 70px;
    height: 120px;
    text-align: right;
    color: #f0f0f0f0;
    margin: 0 !important;
    line-height: 118px;
    display: block;
    padding-right: 4vw;
    }
    .btn-group>.btn:hover,
    .btn-group>.btn:visited,
    .btn-group>.btn:active {
      z-index: 1;
      color: #ec1e24;
      border: 1px solid #ec1e24;
      box-shadow: none;
    }
    .desk .you {
      width: 63.5px;
      top: 30px;
      position: relative;
      margin-right: 18.5px;
    }
    .desk .deck {
      width: 51.3px;
      top: 35px;
      position: relative;
      margin-right: 10px;
    }

      .w-684  {
    width: 100% !important;
  }

  .w-161  {
    width: unset;
    height: 60px;
}

.btn {
    padding: 0 2.3rem;
}

.col-md-12 {

    max-width: 100%;
}

.f-16
{
  font-size: 24px !important;
}
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

  .desktop
  {
    display: none;
  }

     .btn-group .btn.active {
    z-index: 1;
    color: #ec1e24;
    border: 1px solid #ec1e24;
  }

    .desk .flg {
      /* padding-left: 2rem; */
      padding: 9.5px 29px;
      display: block;
       width: 120%;
      /* padding: .375rem .75rem; */
      font-size: 24px;
      /* height: 41px; */
      line-height: 41px;
      /* line-height: 1.7; */
      color: #221f1f;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      border-radius: 0;
      z-index: 5 !important;
      position: relative;
      margin-bottom: 15.5px;
    }
    .w-684 {
      width: 684px !important;
    }
    .desk .ctn.t {
          padding-left: 0;
    padding-right: 0;
    width: 77vw;
    padding-top: 130px;
    }
    .desk .ctn.c {
      padding-right: 140px;
      padding-left: 0;
      width: 100%;
    }
    .desk .t .ctn-content.l {
     width: unset;
    padding: 0;
    padding-left: 14vw;
    padding-top: 57px;
    }
    .desk .t .ctn-content.r {
      padding: 0;
      /* position: absolute; */
      right: 0;
    }
    .desk .c .ctn-content.l {
      width: 692px;
      /* height: 430px; */
      padding: 0 0 0 0;
    }
    .desk .c .ctn-content.r {
padding-top: 53vw;
    padding-left: 22vw;
    padding-right: 0px;
    padding-bottom: 0px;
    /* width: 810px; */
    text-align: right;
    /* width: 810px; */
    }
    .desk .ctn-content.l .title,
    .desk .ctn-content.r .title {
      font-size: 10.944444vw;
      line-height: 1;
          margin-bottom: 50px;

    }
    .desk .ctn-content.l .sub,
    .desk .ctn.b .sub {
      height: 51px;
      font-size: 30px;
      line-height: 51px;
    }
    .desk .box.red {
         width: 100%;
    height: 430px;
    padding: 70px 119px 15px 16.666667vw;
    text-align: right;
    }
    .desk .box.red.custom {
    width: 100%;
    height: 430px;
    padding: unsett;
    text-align: right;
    margin-top: -120px;
    }
    .desk .box.red-2 {
      width: 158px;
      height: 118px;
    }
    .desk .box.red .sub {
      /* height: 79px; */
      font-size: 26px;
      line-height: 1;
    }
    .desk .box.red .title {
      font-size: 70px;
      height: 118px;
      line-height: 118px;
    }
    /* .desk {
          height: 150vh;
          background-color: #f0f0f0;
        }

        .desk header
        {
          background-color: white;
        }*/
    .desk .top.fixed {
      display: block;
      position: absolute;
      height: 130px;
      z-index: 100;
    }
    .pt-130 {
      padding-top: 0;
    }
    .desk .ctn.b {
      padding-bottom: 60px;
      padding-top: 56px;
      padding-left: 14vw;
      padding-right: 12.416667vw;;
    }
    .desk .btn {
      height: 60px;
      font-size: 26px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 44px;
    }
    .desk .btn-group .btn-default {
      background-color: white;
      margin-right: 5px;
    }
    .footy .sub {
      height: 37px;
      font-size: 22px;
      line-height: 37px;
      padding-bottom: 90px;
    }
    .desk .btn-fill {
 padding-top: 0;
    padding-left: 52.444444vw;
    margin: 0;
    font-size: 70px;
    height: 120px;
    text-align: right;
    color: #f0f0f0f0;
    margin: 0 !important;
    line-height: 118px;
    display: block;
    padding-right: 4vw;
    }
    .btn-group>.btn:hover,
    .btn-group>.btn:visited,
    .btn-group>.btn:active {
      z-index: 1;
      color: #ec1e24;
      border: 1px solid #ec1e24;
      box-shadow: none;
    }
    .desk .you {
      width: 63.5px;
      top: 30px;
      position: relative;
      margin-right: 18.5px;
    }
    .desk .deck {
      width: 51.3px;
      top: 35px;
      position: relative;
      margin-right: 10px;
    }

      .w-684  {
    width: 100% !important;
  }

  .w-161  {
    width: unset;
    height: 60px;
}

.btn {
    padding: 0 2.3rem;
}

.col-md-12 {

    max-width: 100%;
}

.f-16
{
  font-size: 24px !important;
}
}

</style>
