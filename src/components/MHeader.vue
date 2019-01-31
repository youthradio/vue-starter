<template>
  <div :class="['top-header row', activeMenu ? 'navigation-open':'']">
    <header class="main-header">
      <div class="header-container">
        <div>
          <div class="logo">
            <a href="https://yr.media">
              <svg xmlns="http://www.w3.org/2000/svg">
                <path
                  class="svg-logo"
                  fill="white"
                  fill-rule="evenodd"
                  d="M37.17 0h-1.7c-1.09 0-2.03.6-2.5 1.5-.1.16-.2.46-.31.61-.32.42-.94.74-1.84.74-1.04 0-1.65-.5-1.88-1.12-.44-1-1.44-1.7-2.6-1.7h-1.7a2.83 2.83 0 0 0-2.84 2.81v5.99c0 .83-.82 1.84-1.67 1.84h-.1c-.89-.08-1.52-1.15-1.64-2.13l-.02-.08A2.84 2.84 0 0 0 15.57 6h-1.71a2.83 2.83 0 0 0-2.83 2.82V20.3c-.07 1.07-.86 2.18-1.83 2.18-1 0-1.83-1.2-1.83-2.3V8.83A2.83 2.83 0 0 0 4.54 6H2.83A2.83 2.83 0 0 0 0 8.83V23.6a2.83 2.83 0 0 0 2.83 2.82h1.7a2.83 2.83 0 0 0 2.56-1.6c.1-.2.14-.38.28-.55a1.87 1.87 0 0 1 1.03-.61c.26-.06.52-.1.78-.1 1.04 0 1.84 1 1.84 1.54v13.21c0 3.28 7.38 1.92 7.38-5.27v-19.4c0-1.05.82-1.91 1.64-1.99h.09c.85 0 1.66.99 1.67 1.96v5.78a2.83 2.83 0 0 0 2.83 2.82h1.71a2.83 2.83 0 0 0 2.83-2.82V6.11c0-1.38.66-2.18 1.63-2.18 1 0 1.8 1.16 1.83 2.24v4.24c0 1.56 1.36 1.69 2.82 1.69a4.1 4.1 0 0 0 3.18-1.53A5.09 5.09 0 0 0 40 6.72v-3.9A2.83 2.83 0 0 0 37.17 0"/>
            </svg>                    </a>
          </div>
          <button
            class="hamburger"
            @click="toggleMenu()">
            <span/>
            <span/>
            <span/>
            <span/>
          </button>
        </div>
        <div>
          <a
            href="https://yr.media/join-us/"
            class="icon-join-us"/>
          <button
            class="icon-search"
            @click="toggleSeach()"/>
        </div>
      </div>
      <div :class="['search-container', searchContainer? 'active':'']">
        <div class="search-input">
          <form action="https://yr.media/search">
            <input
              type="text"
              name="s">
            <button>Go</button>
          </form>
        </div>
        <button class="icon-close"/>
      </div>
    </header>
    <nav class="main-navigation">
      <ul
        id="menu-main-menu"
        class="main-menu"><li
          id="menu-item-35699"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35699"><a href="https://yr.media/category/news/">News</a></li>
        <li
          id="menu-item-35695"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35695"><a href="https://yr.media/category/arts-culture/">Arts + Culture</a></li>
        <li
          id="menu-item-36929"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-36929"><a href="https://yr.media/category/identity/">Identity</a></li>
        <li
          id="menu-item-35698"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35698"><a href="https://yr.media/category/tech/">Tech</a></li>
        <li
          id="menu-item-35697"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35697"><a href="https://yr.media/category/health/">Health</a></li>
        <li
          id="menu-item-36719"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36719"><a href="https://yr.media/tag/opinion/">Opinion</a></li>
      </ul>
      <footer>
        <div>

          <ul class="social-menu">
            <li><a
              href="https://www.youtube.com/user/youthradio"
              target="_blank"><span class="icon-youtube"/></a></li>
            <li><a
              href="https://www.facebook.com/yrmediapage"
              target="_blank"><span class="icon-facebook"/></a></li>
            <li><a
              href="https://twitter.com/itsYRmedia"
              target="_blank"><span class="icon-twitter"/></a></li>
            <li><a
              href="https://www.instagram.com/yr.media"
              target="_blank"><span class="icon-instagram"/></a></li>
          </ul>

          <ul
            id="menu-media-categories-menu"
            class="media-menu"><li
              id="menu-item-36510"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36510"><a href="https://yr.media/podcasts/adult-ish/">Podcasts</a></li>
            <li
              id="menu-item-35702"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35702"><a href="https://yr.media/category/video/">Video</a></li>
            <li
              id="menu-item-36509"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-36509"><a href="https://yr.media/category/interactive/">Interactive</a></li>
            <li
              id="menu-item-38608"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38608"><a
                target="_blank"
                href="https://adp.fm/">ADP.FM Stream</a></li>
        </ul>            </div>
        <div>
          <ul
            id="menu-footer-menu"
            class="pages-menu"><li
              id="menu-item-38723"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-38723"><a href="https://yr.media/join-us/">Join Us</a></li>
            <li
              id="menu-item-36521"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36521"><a href="https://yr.media/about-yr/">About YR</a></li>
            <li
              id="menu-item-38684"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-38684"><a href="https://yr.media/partners/">Our Partners</a></li>
            <li
              id="menu-item-35671"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35671"><a href="https://yr.media/supporters/">Our Supporters</a></li>
            <li
              id="menu-item-35672"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35672"><a href="https://yr.media/donate/">Donate</a></li>
            <li
              id="menu-item-42578"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42578"><a href="https://yr.media/career-opportunities/">Career Opportunities</a></li>
            <li
              id="menu-item-43302"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-43302"><a href="https://yr.media/contact/">Contact Us</a></li>
        </ul>            </div>
      </footer>
    </nav>
  </div>
</template>

<script>
import CommonUtils from '../mixins/CommonUtils'

export default {
  name: 'MHeader',
  mixins: [
    CommonUtils,
  ],
  data() {
    return {
      activeMenu: false,
      searchContainer: false,
    }
  },
  computed: {
  },
  methods: {
    toggleMenu(){
      this.activeMenu = !this.activeMenu;
    },
    toggleSeach(){
      this.searchContainer = !this.searchContainer;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/header/style';

</style>
