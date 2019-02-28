<template>
  <div class="lines-container">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Axiom'
}
</script>

<style scoped>
/* line */

.lines-container {
  top: 0;
  right: -45%;
  bottom: 0;
  left: -47%;
  height: 100%;
  z-index: -99;
}

.line {
  width: 1px;
  height: 100%;
  background: #f0f0f0;
  transform: rotate(-201deg);
}

/* large scale desktop */
@media (min-width: 1200px) {

.lines-container {
      left: -47%;
}

}

@media (max-width: 575.98px) {
  .lines-container{
     top: 0;
  right: 0;
  bottom: 0;
  left: -0;
  height: 100%;
  z-index: -99;
  }

  .line {
    width: 1px;
    height: 100%;
    background: #f0f0f0;
    -webkit-transform: rotate(-201deg);
    transform: rotate(-201deg);
    margin-left: -78.93333333333334vw;
     margin-right: -89.933333vw;
    /* margin-left: auto; */
    /* margin-right: auto; */
  }
}
</style>
