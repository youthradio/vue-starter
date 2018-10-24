<template>
  <div
    id="app"
    class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 mx-auto">
        <MainComponent />
        <USAMap />
      </div>
    </div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import USAMap from './components/USAMap.vue'

import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'App',
  components: {
    MainComponent,
    USAMap
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
    const elementRoot = this.$el;
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const {
          height
        } = entry.contentRect;
        const elementHeight = 'elementHeight:' + height;
        // console.log(elementHeight);
        parent.postMessage(elementHeight, '*');
      }
    });
    resizeObserver.observe(elementRoot);
  },
  methods: {

  },
}
</script>

<style lang="scss">
@import "./styles/custom";
</style>
