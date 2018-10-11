<template>
  <div
    id="app"
    class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <MainComponent />
      </div>
    </div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'App',
  components: {
    MainComponent
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  mounted() {
    const elementRoot = document.querySelector('html');
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
