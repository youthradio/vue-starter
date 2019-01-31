<template>
  <div class="row">
    <template v-if="!isLoading">
      {{ startData }}
      <div class="d-flex align-items-center">
        <span
          class="icon-facebook-inverted share-icon m-1 pointer"
          @click="facebookThis"/>
        <span
          class="icon-twitter-inverted share-icon m-1 pointer"
          @click="tweetMessage"/>
      </div>
    </template>
    <template v-else>
      Loading...
    </template>
  </div>
</template>

<script>
import CommonUtils from '../mixins/CommonUtils'

export default {
  name: 'MainComponent',
  mixins: [
    CommonUtils,
  ],
  data() {
    return {
      startData: "HELLO"
    }
  },
  computed: {

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
