<template>
  <div id="cover" v-bind:class="display" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
     <!-- <div id="cover" v-bind:class="display"> -->
    <div class="cover__container col-md-12 mx-auto ct">
      <!-- <div  v-bind:class="left" class="c cover--l">
          <svg viewBox="0 0 316.22 375.79"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="173.44 375.79 0 375.79 142.78 0 316.22 0 173.44 375.79"/></g></g></svg>
        </div> -->
      <!-- <div v-bind:class="right" class="c cover--r">
          <svg viewBox="0 0 339.02 433.6"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="165.58 433.6 339.02 433.6 173.44 0 0 0 165.58 433.6"/></g></g></svg>
        </div> -->
    </div>

    <!-- <div class="cover__container col-md-12 mx-auto ct">
          <div v-bind:class="left" class="c cover--ll">
            <svg viewBox="0 0 316.22 375.79"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-2" points="173.44 375.79 0 375.79 142.78 0 316.22 0 173.44 375.79"/></g></g></svg>
          </div>
          <div v-bind:class="right" class="c cover--rr">
            <svg viewBox="0 0 339.02 433.6"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-2" points="165.58 433.6 339.02 433.6 173.44 0 0 0 165.58 433.6"/></g></g></svg>
          </div>
        </div> -->
  </div>
</template>

<script>
// import scrollbar from "smooth-scrollbar";

export default {
  name: 'Cover',
  props: ['left', 'right', 'display', 'image']
}
</script>

<style scoped>
  .cls-1 {
    fill: crimson;
    opacity: 0.5;
  }

  #cover::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(250, 248, 248, 0.5);
  }

  #cover.hide::before,
  #cover.hide::after {
    background-color: #fff !important;
    opacity: 0;
  }

  #cover {
    opacity: 1;
    /* background-image: url('/static/img/reed_vr-sessions_cover.jpg'); */
    width: 100vw;
    height: 100vh;
  }

  /* #cover.clip {
        position: relative;
        top: -4px;
        left: 121px;
    }

     #cover.full {
        top: -4px;
        left: 121px;
         position: relative;
    } */

  /* #cover.clip
    {
          /* clip-path: polygon(615px 217px, 784px  217px, 950px 651px, 781px 650px); *
            transition: all 1300ms ease-out;
    }

    #cover.full
    {
             clip-path: polygon(532px 0px, 1462px  0px, 1823px 1000px, 916px 1000px);
              transition: all 1300ms ease-out;
    } */

  /* #cover.clip {
        clip-path: polygon(615px 217px, 784px  217px, 950px 651px, 781px 650px);
        position: absolute;
    }

     #cover.full {
       clip-path: polygon(532px 0px, 1462px  0px, 1823px 1000px, 916px 1000px);
         position: absolute;
    }*/

  .cover__container {
    position: relative;
  }

  .cover--l .fade {
    animation: faded 1600ms linear;
    /* , Pulsate 4s linear infinite; */
  }

  .cover--l .enter {
    animation: faded 1600ms linear;
    /* , Pulsate 4s linear infinite; */
  }

  @keyframes rotrate {
    from {
      transform: rotate(0deg) translateX(150px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(150px) rotate(-360deg);
    }
  }

  @keyframes faded {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes enter {
    from {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 90.063em) {
    /* #cover.clip {
      clip-path: polygon(615px 217px, 784px 217px, 950px 651px, 781px 650px);
      position: absolute;
      top: -4px;
      left: 121px;
    } */
    #cover.full {
      top: -4px;
      left: 121px;
      position: absolute;
    }
    .cover--r.z {
      transform: scale(32) translateX(4.791666666666667vw);
    }
  }

  @media (min-width: 1200px) {
     #cover.clip {
      clip-path: polygon(615px 217px, 784px 217px, 950px 651px, 781px 650px);
      /* clip-path: polygon(42.708333333333336vw 24.11111111111111vh, 54.44444444444444vw  24.11111111111111vh, 65.97222222222221vw 72.33333333333333vh, 54.44444444444444vw 72.33333333333333vh); */
      transition: all 0.8s ease-out;
      top: 0;
      left: 0;
        display: block;
    }
    #cover.full {
      /* clip-path: polygon(532px 0px, 1762px 0px, 2123px 1000px, 916px 1000px); */

       clip-path: polygon(532px 0, 100vw 0, 130vw 100vh, 879px 100vh);
      transition: all 0.8s ease-out;
      top: 0;
      left: 0;
        display: block;
    }

    .cover--l {
      position: absolute;
      left: calc(50% + -92px);
      /* top: calc(50% + 520px); */
      top: calc(50% + 57.77777777777778vh);
      width: 318px;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .cover--r {
      position: absolute;
      left: calc(50% + 64px);
      /* top: calc(50% + 435px); */
      top: calc(50% + 48.333333333333336vh);
      width: 339px;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .v {
      /* transition-duration: 1600ms; */
      /* transition-delay: 50ms; */
      /* transform: translateX(-9999px); */
    }
    .c {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
    }
    .z {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
      transform: scale(10) translateX(4.791666666666667vw);
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {

     #cover.clip {
      clip-path: polygon(42.708333vw 286px, 54.444444vw 286px, 65.372222vw 581px, 53.72222vw 581px); transition: all 0.8s ease-out;
      top: 0;
      left: 0;
      display: block;
    }
    #cover.full {
      clip-path: polygon(32.708333vw 0, 100vw 0, 130vw 100vh, 65.72222vw 100vh); transition: all 0.8s ease-out;
      transition: all 0.8s ease-out;
      top: 0;
      left: 0;
          display: block;
    }

        .cover--r {
position: absolute;
    left: calc(50% + 41px);
    /* top: calc(50% + 435px); */
    top: calc(50% + 48.333333333333336vh);
    width: 230.6px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 1;
    }

  }

  /* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

            .cover--r {
  position: absolute;
    left: calc(50% + 41px);
    /* top: calc(50% + 435px); */
    top: calc(50% + 48.333333333333336vh);
    width: 230.6px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 1;
    }
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 768px) {

       #cover.clip {
      clip-path: polygon(40.708333vw 286px, 55.944444vw 286px, 70.572222vw 581px, 54.92222vw 581px);
      transition: all 0.8s ease-out;
      top: 0;
      left: 0;
      display: block;
    }
    #cover.full {
      clip-path: polygon(25.908333vw 0, 100vw 0, 130vw 100vh, 70.72222vw 100vh); transition: all 0.8s ease-out;
      transition: all 0.8s ease-out;
      top: 0;
      left: 0;
          display: block;
    }

       .cover--r {
position: absolute;
    left: calc(50% + 41px);
    /* top: calc(50% + 435px); */
    top: calc(50% + 48.333333333333336vh);
    width: 230.6px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 1;

    }
 }

  @media (max-width: 575.98px) {
    .cover--l {
      top: 31.334332833583208vh;
      position: absolute;
      /* -webkit-transform: translate(-50%, -50%); */
      /* transform: translate(-50%, -50%); */
      width: 42.666666666666664vw;
      left: 16.533333333333335vw;
    }
    .cover--r {
      top: 24.28785607196402vh;
      position: absolute;
      /* -webkit-transform: translate(-50%, -50%); */
      /* transform: translate(-50%, -50%); */
      width: 45.333333333333336vw;
      right: 16.8vw;
    }
    .v {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
      transform: translateX(-9999px);
    }
    .c {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
    }
    .z {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
      transform: translateX(125px) scale(4);
    }

    #cover.clip {
              clip-path: polygon(142px 162px, 229px 162px, 312px 379px, 226px 379px);
      /* clip-path: polygon(42.708333333333336vw 24.11111111111111vh, 54.44444444444444vw  24.11111111111111vh, 65.97222222222221vw 72.33333333333333vh, 54.44444444444444vw 72.33333333333333vh); */
      transition: all 0.8s ease-out;
      /* top: 0;
      right: -45%;
      bottom: 0;
      left: -47%; */
    }
    #cover.full {
      clip-path: polygon(81px 0, 370px 0, 600px 667px, 337px 668px);
      transition: all 0.8s ease-out;
      top: 0;
      /* left: -19%; */
    }

  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .cover--r {
      top: 28.287856vh;
      position: absolute;
      /* -webkit-transform: translate(-50%, -50%); */
      /* transform: translate(-50%, -50%); */
      width: 45.333333333333336vw;
      right: 16.8vw;
    }
    .cover--l {
      top: 34.334333vh;
      position: absolute;
      /* -webkit-transform: translate(-50%, -50%); */
      /* transform: translate(-50%, -50%); */
      width: 42.666666666666664vw;
      left: 16.533333333333335vw;
    }
  }
</style>
