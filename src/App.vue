<template>
  <div 
    id="app" 
    class="row-column">
    <MHeader />
    <div class="row-column">
      <MainComponent />
      <USAMap />
    </div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import USAMap from './components/USAMap.vue'
import MHeader from './components/MHeader.vue'

import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'App',
  components: {
    MainComponent,
    USAMap,
    MHeader
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
