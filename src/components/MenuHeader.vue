<template>
  <nav class="index-navbar-custom fixed-top">
    <div class="index-header-container">
      <div class="index-fixed-menu">
        <div class="navbar-header">
          <img src="../../static/img/logo.png" alt="">
        </div>
        <div v-if="isMobile" class="index-nav-menu">
          <a-dropdown class="index-drop-menu" v-model="visibleMobile">
            <a-icon type="menu-unfold" />
            <ul slot="overlay" class="index-menu-ul" placement="bottomCenter" @click="handleMenuClick">
               <li v-for="item in this.$store.state.menuList" :key="item.idName" @click="goto(item.index, item.idName)" >
                <a :class="[parseInt(currentIndex) === item.index ? 'active' : '']">{{ item.name }}</a>
              </li>
            </ul>
          </a-dropdown>
        </div>
        <ul class="index-nav-menu" v-else>
          <li v-for="item in this.$store.state.menuList" :key="item.idName" @click="goto(item.index, item.idName)" >
            <a :class="[parseInt(currentIndex) === item.index ? 'active' : '']">{{ item.name }}</a></li>
<!--          <li @click="goto(1, 'about')" :class="[currentIndex === 1 ? 'active' : '']">关于为昕</li>-->
<!--          <li @click="goto(2, 'technology')" :class="[currentIndex === 2 ? 'active' : '']">技术</li>-->
<!--          <li @click="goto(3, 'development')" :class="[currentIndex === 3 ? 'active' : '']">资讯</li>-->
<!--          <li @click="goto(4, 'portfolios')" :class="[currentIndex === 4 ? 'active' : '']">产品</li>-->
<!--          <li @click="goto(5, 'contact')" :class="[currentIndex === 5 ? 'active' : '']">联系我们</li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuHeader",
  props: {
    isJump: Boolean,
    isCollapsed: Boolean,
  },
  data() {
    return {
      visibleMobile: false
    };
  },
  computed: {
    currentIndex () {
      return this.$store.state.currentIndex
    },
    isMobile () {
      return this.$store.state.isMobile
    },
  },
  mounted() {
    let index = localStorage.getItem('index')
    let id = localStorage.getItem('elementId')
    if (!id) {
      id = 'home'
      index = 0
    }
    this.$store.commit('currentChange', { index, id })
    if (this.isJump) {
      window.scrollTo({top: 0})
    }
    this.getScreen()

    window.addEventListener('resize', this.getScreen, true)

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getScreen, true)
  },
  methods: {
    handleMenuClick(){
      this.visibleMobile = false
    },
    goto(index, id) {
      this.$store.commit('currentChange', { index, id })
      if (this.isJump) {
        this.$router.push('/home')
      }
    },
    getScreen(){
      let clientWidth =document.documentElement.clientWidth || document.body.clientHeight
      if (clientWidth < 768) { 
        this.$store.commit("isMobileChange", true)
        if (this.isCollapsed) {
          this.$parent.changeCollapsed(true)
        }
      } else { 
        this.$store.commit('isMobileChange', false)
        if (this.isCollapsed) {
          this.$parent.changeCollapsed(false)
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "index";
.index-drop-menu {
  font-size: 25px;
}
.index-menu-ul {
  background: #f2f2f2;
  li {
    padding: 5px 12px;
  }
}
</style>
