<template>
    <aside id="frame">
      <transition name="fade" mode="out-in">
        <div class="borders-container"  v-show="display">
          <div class="border border--t"></div>
          <div class="border border--r"></div>
          <div class="border border--b"></div>
          <div class="border border--l"></div>
        </div>
      </transition>
    </aside>
</template>

<script>
export default {
  name: 'Frame',
  props: ['display']
}
</script>

<style scoped>
.border {
  border: none !important;
  -webkit-transition: opacity 1600ms ease-in;
  transition: opacity 1600ms ease-in;
  background-color: #ec1e23;
}

    #frame {
        z-index: 3;
    }

/* .border--l,
.border--r {
    width: 6.3vw;
}

.border--b,
.border--t {
    height: 6.3vw;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* animate fade */
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 1600ms;
}

.fade-enter-active {
  transition-delay: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* large scale desktop */
@media (min-width: 1200px) {
    .border--b, .border--t {
    height: 20px;
  }

  .border--l, .border--r {
    top: 0;
    bottom: 0;
    width: 20px;
  }

  .border--t {
    top: 0;
    transform: translate3d(0, calc(-20px + 20px), 0);
  }

   .border--b {
    bottom: 0;
    transform: translate3d(0, calc(20px - 20px), 0);
  }

  .border--l {
    left: 0;
    transform: translate3d(calc(-20px + 20px), 0, 0);
}
  .border--r {
    right: 0;
    transform: translate3d(calc(20px - 20px), 0, 0);
}
}

    /* for iphone series*/
@media (max-width: 575.98px) {
    .border--t,
     .border--b {
        transform: translate3d(0, 0, 0);
    }

    .border--b, .border--t {
        height: 10px;
    }

    .border--r,
     .border--l {
    transform: translate3d(0, 0, 0);
}

.border--l, .border--r {
    width: 10px;
}

  }

</style>
