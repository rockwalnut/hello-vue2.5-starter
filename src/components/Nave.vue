<template>
  <div class="nav">
    <ul>
      <li v-for="n in items" :key="n.id">
        <router-link :to="n.url">
          <button v-bind:class="n.class" class="menu-btn" aria-label="" href="javascript:void(0);">
                     <img v-show="n.image != null" :src="n.image" class="bg" />
                     <span class="menu-btn__text">{{ n.title }}</span>
                    </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nave',
  props: ['items']
}
</script>

<style lang="css" scoped>
/* remove reboot*/

.cls-1 {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
}

.nav {
  display: block;
  position: fixed;
      z-index: 3 !important;
}

.nav ul li {
  display: inline;
  margin-right: 55px;
}

button:focus {
  outline: none;
}

.menu-btn {
  top: 0;
  font-size: 22px;
}

/*top button*/

a:hover {
  text-decoration: none;
}

.menu-btn {
  color: #2f3c47;
  padding: 0;
  height: 44px;
  z-index: 2;
  position: relative;
  right: unset;
}

.menu-btn.pitch {
  background-color: #ec1e23;
  color: #f7f7f7;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
}

.menu-btn.close {
  color: #f7f7f7;
  opacity: 1;
  text-shadow: none;
}

  .nav {
    display: block;
    position: fixed;
    z-index: 3 !important;
    right: 81px;
    top: 52px;
  }

/*.menu-btn.pitch:hover {
          background-color: #ec1e23;
          color: #2f3c47;
        }*/

.menu-btn.pitch:before,
.menu-btn.pitch:after,
.menu-btn.close:before,
.menu-btn.close:after {
  background: transparent;
}

/*.menu-btn :hover
                  {
                    border-bottom: solid 2px #2f3c47;
                  }*/

/* Top and Bottom borders go out */

button:before,
button:after {
  position: absolute;
  left: 0px;
  width: 100%;
  height: 2px;
  background: #2f3c47;
  content: "";
  opacity: 0;
  transition: all 0.3s;
}

button:before {
  top: 0px;
  transform: translateY(10px);
}

button:after {
  bottom: 0px;
  transform: translateY(-10px);
}

button:hover:after {
  opacity: 1;
  transform: translateY(0px);
}

button:hover:before {
  opacity: 0;
  transform: translateY(0px);
}

.menu-btn:hover {
  transform: translateY(0px);
}

/* .pickdeck {
              right: calc(5vw + 144px);
            }

            .career {
              right: calc(5vw + 60px);
            }

            .menu {
              right: calc(5vw - 12px);
            } */

/* // Extra large devices (large desktops, 1200px and up) */

@media (min-width: 1200px) {
  .menu-btn.pitch {
    padding-left: 20px;
    padding-right: 20px;
  }
  .nav {
    display: block;
    position: fixed;
    z-index: 99 !important;
    right: 81px;
    top: 52px;
  }
  .nav ul li:last-child {
    margin-right: 0;
  }
  img {
    width: 16px;
    margin-right: 21px;
    top: 2px;
    position: relative;
  }
}

@media (max-width: 575.98px) {
  img {
    width: 16px;
    margin-right: 10px;
    top: 2px;
    position: relative;
  }
  .menu-btn.pitch {
    position: fixed;
    top: 471px;
    left: 133px;
    display: none;
  }
  .menu-btn.close {
    position: fixed;
        top: 3.9197301349325337vh;
    right: 37px;
    width: max-content;
  }
  .menu-btn.join {
    display: none;
  }
  .menu-btn.menu {
    position: fixed;
    top: 3.9197301349325337vh;
    right: 37px;
  }

}

@media (min-width: 992px) and (max-width: 1199.98px)
{
    img {
    width: 16px;
    margin-right: 21px;
    top: 2px;
    position: relative;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  img {
    width: 16px;
    margin-right: 21px;
    top: 2px;
    position: relative;
  }
 }

 /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  img {
    width: 16px;
    margin-right: 21px;
    top: 2px;
    position: relative;
  }
 }
</style>
