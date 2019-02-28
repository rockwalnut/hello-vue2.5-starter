<template>
  <div class="Fraction Container">
    <div class="timeline-paging">
      <div class="first" >{{ index }}</div>
      <div ><img :src="sep" class="sep" ></div>
      <div class="second">09</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fraction',
  data () {
    return {
      sep: './static/img/sep.svg'
    }
  },
  props: ['index']
}
</script>

<style scoped>
  /* large ascale */

  div
  {
      color: #221f1f;
  }

  .timeline-paging .first {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
      line-height: 51px;
    text-align: center;
    height: 51px;
    display: inline-block;
}

.timeline-paging {
    position: absolute;
    /* font-family: Conv_AkzidGroCFFMdEx,Conv_AkzidGroCFFEx; */
top: -60px;
    width: 50px;
    height: 103px;
     font-size: 30px;
  font-weight: bold;
  line-height: 1;
}

.timeline-paging .second {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25px;
        line-height: 51px;
    text-align: center;
    height: 51px;
    display: inline-block;
}

.timeline-paging .sep {
    position: absolute;
 left: 30%;
    top: 38%;
    width: 23px;
}

  @media (min-width: 1200px) {

  }

@media (min-width: 575px) and (max-width: 1199.98px)
  {
    .timeline-paging{
    position: absolute;
    /* font-family: Conv_AkzidGroCFFMdEx,Conv_AkzidGroCFFEx; */
    top: -60px;
    width: 50px;
    height: 103px;
    font-size: 2.5vw;
    font-weight: bold;
    line-height: 1;
}
  }

  @media (max-width: 575.98px) {

    /* .timeline-paging {
    position: absolute;
} */

    .timeline-paging .first {
  position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    line-height: 31px;
    text-align: center;
    height: 31px;
    font-size: 18px;
    display: inline-block;
    }

    .timeline-paging .second  {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    line-height: 31px;
    text-align: center;
    height: 31px;
    font-size: 18px;
    display: inline-block;
    }

    .timeline-paging {
position: absolute;
    /* font-family: Conv_AkzidGroCFFMdEx,Conv_AkzidGroCFFEx; */
    top: -7.746626686656672vh;
    width: 8.266666666666667vw;
    height: 9.295352323838081vh;
    /* font-size: 30px; */
    /* font-weight: bold; */
    /* line-height: 1; */
    left: 0;
}

.timeline-paging .sep {
    position: absolute;
    left: 30%;
    top: 38%;
    width: 14px;
}

.Fraction
{
      height: 0;
}

  }
</style>
