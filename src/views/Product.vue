<template>
  <div class="product">
    <MenuHeader :is-jump="true" />
    <div class="product-content">
      <a-menu
        v-bind:style="{width: collapsed ? 'auto' : '256px', marginTop: '30px'}"
        :default-selected-keys="current"
        @select="selectChange"
        mode="inline"
        :inline-collapsed="collapsed"
      >
        <a-menu-item v-for="menu in menuBar" :key="menu.id">
          <span>{{ menu.name }}</span>
        </a-menu-item>
      </a-menu>
      <div class="product-content-info">
        <h2 class="product-title">{{ title }}</h2>
        <div class="section-body" v-if="desc">
          <p>{{ desc }}</p>
          <div class="product-sect2" v-if="introduction && introduction.length > 0">
            <h3>功能介绍</h3>
            <div v-for="item in introduction" :key="item.title">
              <h4>{{ item.title }}</h4>
              <ul class="introduction">
                <li class="content" v-for="sub in item.subTitle" :key="sub">{{ sub }}</li>
              </ul>
            </div>
          </div>
          <div class="product-sect2" v-if="processList && processList.length > 0">
            <h3>设计流程</h3>
            <div>
              <ul class="timeline timeline-pro">
                <li v-for="item in processList" :key="item.name">
                  <div class="timeline-content timeline-content-pro">
                    <h3 class="h3">{{ item.name }}</h3>
                    <span>{{ item.desc }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-sect2" v-if="imgList && imgList.length > 0">
            <h3>功能展示</h3>
            <div class="product-sect3" v-for="g in imgList" :key="g.title">
              <p>{{ g.title }}</p>
              <img :src="g.img" alt="">
            </div>
          </div>
          <div class="product-sect2" v-if="introList && introList.length > 0">
            <h3>功能展示</h3>
            <div class="product-sect3" v-for="intro in introList" :key="intro.title">
              <h4>{{ intro.title }}</h4>
              <div class="intro-sect" v-for="(item, index) in intro.children" :key="item.subTitle">
                <p v-if="item.subTitle">{{ index + 1 }} . {{ item.subTitle }}</p>
                <p>{{ item.subDesc }}</p>
                <img v-for="img in item.imgList" :key="img" :src="img" alt="">
              </div>
            </div>
          </div>
          <div class="product-sect2" v-if="versionList && versionList.length > 0">
            <h3>新版本1.0.1功能展示</h3>
            <div class="product-sect3" v-for="intro in versionList" :key="intro.title">
              <h4>{{ intro.title }}</h4>
              <div class="intro-sect" v-for="(item, index) in intro.children" :key="item.subTitle">
                <p v-if="item.subTitle">{{ index + 1 }} . {{ item.subTitle }}</p>
                <p>{{ item.subDesc }}</p>
                <img v-for="img in item.imgList" :key="img" :src="img" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import MenuHeader from "../components/MenuHeader";

export default {
  name: "Product",
  components: { MenuHeader },
  data() {
    return {
      collapsed: false,
      current: [1],
      menuBar: [],
      productId: 1,
      title: '',
      desc: '',
      introduction: [],
      imgList: [],
      processList: [],
      introList: [],
      versionList: [],
    }
  },
  created() {
    this.queryMenu()

    this.productId = this.$route.query.id
    this.current = [parseInt(this.productId)]
    if (this.productId) {
      this.getProductDetail(parseInt(this.productId))
    }
  },
  methods: {
    queryMenu () {
      this.menuBar = this.$store.state.productList.map(p => ({id: p.id, name: p.title}))
    },
    selectChange ({ key }) {
      this.$router.push({ name: 'product', query: {id: key} })
      this.getProductDetail(key)
    },
    getProductDetail (id) {
      const productDetail = this.$store.state.productList.filter(p => p.id === id)[0]
      this.title = productDetail.title
      this.desc = productDetail.desc
      this.introduction = productDetail.introduction
      this.imgList = productDetail.imgList
      this.processList = productDetail.processList
      this.introList = productDetail.introList
      this.versionList = productDetail.versionList
    }
  }
};
</script>

<style scoped lang="less">
@import "../components/index";

.ant-menu-item-selected {
  color: #e98821;
}
.product {
  text-align: left;
}
.product-content {
  height: inherit;
  display: flex;
}
.product-content-info {
  flex: 1;
  padding: 0 30px;
  flex: 1;
  height: calc(100vh - 60px);
  overflow: scroll;
}
.product-title {
  font-size: 2.3125em;
  font-weight: 400;
}
.introduction {
  list-style: inherit;
  padding-left: 20px;
}
h1, h2, h3, #toctitle, .sidebarblock>.content>.title, h4, h5, h6 {
  font-family: "Open Sans","DejaVu Sans",sans-serif;
  font-weight: 300;
  font-style: normal;
  color: #e98821;
  text-rendering: optimizeLegibility;
  margin-top: 1em;
  margin-bottom: .5em;
  line-height: 1.0125em;
}
p, blockquote, dt, li.content, span.alt {
  font-size: 1.0625rem;
}
.product-sect2 {
  margin-top: 45px;
  text-align: left;
}
.product-sect2 h3 {
  font-size: 1.6875em;
  font-weight: 400;
}
.product-sect2 h4 {
  font-size: 1.4375em;
}
.product-sect2 img {
  margin-bottom: 20px;
  object-fit: cover;
  width: 80%;
}
.product-sect3 {
  margin-bottom: 45px;
}
.intro-sect {
  margin-top: 20px;
}
.product-sect3:last-of-type {
  padding-bottom: 60px;
}
.timeline-pro {
  max-height: none;
  margin-top: 20px;
}
.timeline-pro li:before {
  border-color: #e98821 !important;
}
.timeline-content-pro {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0;
  span {
    font-size: 14px;
  }
  h3 {
    font-size: 20px;
    background: #f2f2f2;
    padding: 20px;
    margin-bottom: 0;
    margin-right: 20px;
    border-top-left-radius: 40px;     /* 左上角 */
    border-top-right-radius: 5px;    /* 右上角 */
    border-bottom-left-radius: 5px;  /* 左下角 */
    border-bottom-right-radius: 40px; /* 右下角 */
    -webkit-border-top-left-radius: 40px;
    -webkit-border-top-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -webkit-border-bottom-right-radius: 40px;
  }
}
</style>
