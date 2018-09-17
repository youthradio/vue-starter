<template>
  <div
    id="app"
    class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <MainComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  },
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./styles/custom";

</style>
