<template>
  <div class="title">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" class="project__title | mlg-2 | m-mr-0 t black" data-i="1">{{ title }}</h2>
        <div v-bind:class="slide__sub" class="project__info | col-8 mlg-3 | m-ml-0 m-100 black">
          <h3 class="project__intro">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
export default {
  name: 'Flip',
  props: ['title', 'subs'],
  data () {
    return {
      slide__title: false,
      slide__sub: false
    }
  },
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('scrollbar')
      const scrollbar = Scrollbar.init(div)

      // slide title
      if (scrollbar.scrollTop > 50) {
        vm.slide__title = 'slide__title__active'
      } else {
        vm.slide__title = 'slide__title__leave'
      }

      // slide sub
      if (scrollbar.scrollTop > 55) {
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__sub = 'slide__sub__leave'
      }

      if (event.deltaY < 0) {
        scrolled++
      }
      if (event.deltaY > 0) {
        scrolled--
      }

      console.log(scrolled)
    })
  }
}
</script>

<style scoped>
/* alider class*/

.slide__title__active {
  transform: translate3d(-296px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-476px, 0px, 0px);
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

/***/

.red {
  background-color: #f0f0f0;
}

.t {
  position: relative;
  font-size: 8vw;
  font-weight: bold;
  line-height: 1;
  opacity: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.white {
  background-color: #ffff;
}

.index {
  z-index: unset;
}

.bold {
  font-weight: bold;
}

.black {
  color: #2f3c47;
}

/*.project__text
  {
    color: #2f3c47;
    font-size: 2.1rem;
    line-height: 1.62;
  }*/

.scrollarea {
  height: 100vh;
  display: block;
}

.project__header__inner {
  top: -6.75vw;
}

.project__body {
  border-left: solid 15px #ffff;
  border-right: solid 15px #ffff;
}

project__title::before {
  content: "0" attr(data-i);
  position: absolute;
  top: 0;
  left: -80px;
  font-size: 3.4rem;
}

.project__description {
  padding-bottom: 30px;
}

.project__description .title,
.project__description .sub {
  font-size: 5.5rem;
}

.project__description .sub {
  font-size: 3.1rem;
}
</style>
