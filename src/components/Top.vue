<template>
    <aside id="top">
      <transition name="fade" mode="out-in">
        <div class="borders-container"  v-show="display">
          <div class="border border--t"></div>
        </div>
      </transition>
    </aside>
</template>

<script>
export default {
  name: 'Top',
  props: ['display']
}
</script>

<style scoped>
.border {
  border: none !important;
  transition: opacity 1600ms ease-in;
  background-color: darkgray;
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
       height: 130px;
    background-color: transparent;
    z-index: 3;
  }

  .border--t {
    top: 0;
    transform: translate3d(0, calc(-20px + 20px), 0);
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
