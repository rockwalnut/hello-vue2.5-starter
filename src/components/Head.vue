<template>
    <header class="project__header action | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" v-bind:style="[baseStyles, overrideStyles]" class="project__title | ml-0 | m-mr-0 t tb slide__title" :data-i="index">{{ title }}</h2>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">{{ sub }}</h3>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Head',
  props: ['baseStyles', 'overrideStyles', 'sub', 'title', 'index'],
  created () { alert(this.props['sub']) }
}
</script>

<style scoped>

</style>
