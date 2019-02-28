<template>
  <div class="follow">
    <div id="follower">
      <div id="circle__outer"></div>
      <div id="circle__inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mouse',

  // life cycle of component
  created () {
    // use of static js
    // let pixiscript = document.createElement('script')
    // pixiscript.setAttribute('src', './static/js/mouse.js')
    // document.body.appendChild(pixiscript)
  }
}
</script>

<style scoped>
#follower {
  position: absolute;
  top: 50%;
  left: 50%;
}

#follower #circle__outer {
  position: absolute;
  -webkit-animation: pulse 1600ms infinite;
  /* Chrome, Safari, Opera */
  animation: pulse 1s infinite;
  background: #f0f0f0;
  border-radius: 50%;
  height: 0em;
  width: 0em;
  margin-top: 0em;
  margin-left: 0em;
}

#follower #circle__inner {
  position: absolute;
  /*-webkit-animation: pulse 4s infinite;*/
  /* Chrome, Safari, Opera */
  /*animation: pulse 6600ms infinite;*/
  background: #495057;
  border-radius: 50%;
  /* height: 0em;
    width: 0em;
    margin-top: 0em;
    margin-left: 0em;*/
  height: 1em;
  width: 1em;
  margin-top: -0.5em;
  margin-left: -0.5em;
}

@-moz-keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}

@-webkit-keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}

@-o-keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}
</style>
