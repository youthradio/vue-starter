<template>
  <div class="row">
    <div class="col-12 col-md-12 mx-auto">
      <template v-if="!isLoading">
        {{ startData }}
      </template>
      <template v-else>
        Loading...
      </template>
      <div class="d-flex align-items-center pl-3 pb-2">
        <span
          class="icon-facebook-inverted share-icon m-1 pointer"
          @click="facebookThis"/>
        <span
          class="icon-twitter-inverted share-icon m-1 pointer"
          @click="tweetMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      startData: "HELLO"
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    tweetMessage () {
      const url = 'https://www.youthradio.org/'
      const tweet = `Tweet Something : ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    },
    facebookThis () {
      const url = 'https://www.youthradio.org/'
      const title = 'Facebook Something'
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`
      window.open(facebookUrl, '_blank')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';

</style>
