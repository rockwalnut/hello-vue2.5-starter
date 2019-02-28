<template>
    <ul class="ptich">
      <li>
        <router-link :to="url">
          <button  v-bind:style="{ zIndex: zindex }" v-bind:class="cssClass" class="menu-btn" aria-label="" href="javascript:void(0);">
                     <span class="menu-btn__text">{{ title }}</span>
                    </button>
        </router-link>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'Pitch',
  props: ['zindex'],
  data () {
    return {
      title: 'Pitch Desk',
      url: 'pitchdesk',
      cssClass: 'mobile pitch'
    }
  }
}
</script>

<style>

@media (max-width: 575.98px)
{

   .ptich .menu-btn.pitch {
      top: calc(50.973013493253376vh + 45px) !important;
       right: 35% !important;
       cursor: pointer;
        background-color: #ec1e23;
        color: #f7f7f7;
        padding-left: 20px;
        padding-right: 20px;
        /* padding-top: 10px; */
        /* padding-bottom: 10px; */
        position: fixed;
        padding-top: 2px;
        /* font-size: 5.866666666666666vw; */
        font-size: 22px;
        /* width: 110px; */
        height: 45px;

        transition-duration: 1600ms;
    }

}
</style>
