<template>
  <div class="home">
    <MenuHeader ref='menuRef'/>
    <div id="home" class="index-header" ref='home'>
      <div class="index-header-content">
        <a-carousel autoplay effect="fade" arrows>
          <div
            slot="prevArrow"
            class="custom-slick-arrow"
            style="left: 10px; zIndex: 1"
          >
            <img src="../../static/img/leftArrow.png" alt="">
          </div>
          <div slot="nextArrow" class="custom-slick-arrow" style="right: 37px">
            <img src="../../static/img/rightArrow.png" alt="">
          </div>
          <div class="bg-img">
            <img src="../../static/img/bannerjupiter.png" alt="">
            <h2 class="index-header-title index-title1"></h2>
          </div>
          <div class="bg-img">
            <img src="../../static/img/venusbanner.png" alt="">
            <h2 class="index-header-title index-title2"></h2>
          </div>
          <div class="bg-img">
            <img src="../../static/img/homeBackground3.png" alt="">
            <h2 class="index-header-title index-title3">从「昕」定义未来</h2>
          </div>
        </a-carousel>
      </div>
    </div>
    <!-- 关于我们 -->
    <div id="about" class="index-about-me" ref="about">
      <div class="index-header-container">
        <div class="row">
          <div class="col-about">
            <img class="img-fluid img-about" src="../../static/img/chanpindingyi.jpg" alt="">
          </div>
          <div class="col-about">
            <h2>Hello！国产EDA</h2>
            <p class="p-about">
              上海为昕科技有限公司成立于2019年，面向电子系统研发全流程，提供EDA软件及数据解决方案。基于人工智能、图像识别、知识图谱等新技术，致力于国产EDA软件的创新与突破。以“产品+服务+数据”的新模式，全面提升电子研发工程效率，优化工作流程并降低研发成本。
              我们深耕EDA行业近20年，积累了丰富的技术、经验及市场资源，充分融合新技术，直面行业痛点，快速实现国产化突破。同时，打破传统EDA产品单一化思维，整合产业链数据资源，构建开放、协同的系统级EDA数据中台，让电子研发工程变得更高效、更智能。</p>
            <div @click="goto(5, 'contact')" class="btn-solid-lg">联系我们</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 技术 -->
    <div id="technology" class="index-services" ref="technology">
      <div class="index-header-container">
        <h2 class="section-title">EDA+ 新技术</h2>
        <div class="row">
          <div v-for="item in serviceList" :key="item.title" class="col-about-2" style="margin-bottom: 30px;">
            <div class="service-item">
              <div class="icon">
                <img :src="item.img" alt="">
              </div>
              <div class="service-content">
                <h3><a href="javascript:;">{{ item.title }}</a></h3>
                <p>{{ item.subTitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发展历程 -->
    <div id="development" class="index-development" ref="development">
      <div class="index-header-container">
        <div class="row">
          <div class="col-about col-development" v-for="development in developmentList" :key="development.id">
            <div class="col-development-content">
              <ul class="timeline timeline2">
                <li>
                  <div><img :src="development.src" alt=""></div>
                  <h2 class="timeline-title" @click="toNews(development.id)">
                    {{ development.title }}
<!--                    <router-link :to="{name: 'news', query: {id: development.id}}"></router-link>-->
                  </h2>
                </li>
              </ul>
              <ul class="timeline">
                <li v-for="item in development.children" :key="item.title">
                  <div class="timeline-content timeline-flex">
                    <h3 class="h3">{{ item.title }}</h3>
                    <span>{{ item.time }}</span>
<!--                    <p>{{ item.desc }}</p>-->
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 作品 -->
    <div id="product">
      <div class="index-development index-portfolios" ref="product">
        <div class="index-header-container">
          <h2 class="section-title">产品规划</h2>
          <div class="portfolios-row row" style="height: 521px;opacity: 1;">
            <div @click="toProduct(item.id)" class="portfolios-col" v-for="item in productList" :key="item.title">
              <p>{{ item.title }}</p>
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="counter-section index-development">
        <div class="index-header-container">
          <div class="row">
            <div class="counter-col" v-for="item in counterList" :key="item.desc">
              <div class="counter-content">
                <div class="icon-foot">
                  <img :src="item.img" alt="">
                </div>
                <div class="counter-text">{{ item.count }}</div>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!--联系我们-->
    <div id="contact" class="index-development index-contact" ref="contact">
      <div class="index-header-container">
        <div class="row contact-row">
          <div class="col-about">
            <MapComponent />
          </div>
          <div class="col-about">
            <div>
              <h2 class="h2 contact-h2">联系我们</h2>
              <div class="contact-footer">
                <div v-for="item in aboutList" :key="item.desc" class="contact-address">
                  <img :src="item.img" alt="">
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="index-footer index-development">
      <div class="index-header-container">
        <div class="row">
          <div class="footer-col">
            <img class="footer-col-img" src="../../static/img/weixin.jpg" alt="">
            <ul>
              <li v-for="item in this.$store.state.menuList" :key="item.idName" @click="goto(item.index, item.idName)" >
                {{ item.name }}
<!--                <img src="../../static/img/baidu.png" alt="">-->
              </li>
<!--              <li @click="goto(1, 'about')" >-->
<!--                关于为昕-->
<!--&lt;!&ndash;                <img src="../../static/img/footemail.png" alt="">&ndash;&gt;-->
<!--              </li>-->
<!--              <li @click="goto(2, 'technology')" >-->
<!--                技术-->
<!--&lt;!&ndash;                <img src="../../static/img/taobao.png" alt="">&ndash;&gt;-->
<!--              </li>-->
<!--              <li @click="goto(3, 'development')">-->
<!--                资讯-->
<!--&lt;!&ndash;                <img src="../../static/img/money.png" alt="">&ndash;&gt;-->
<!--              </li>-->
<!--              <li @click="goto(4, 'portfolios')">-->
<!--                产品-->
<!--&lt;!&ndash;                <img src="../../static/img/link.png" alt="">&ndash;&gt;-->
<!--              </li>-->
<!--              <li @click="goto(5, 'contact')">联系我们</li>-->
            </ul>
            <p>Copyright ©️ 2020 SHANGHAI VXIN TECHNOLOGY CO. LTD.
              <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">沪ICP备20006157号-1</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div class="back-to-top" @click="goto(0, 'home')"><img src="../../static/img/backTop.png" alt=""></div>
  </div>
</template>

<script>
import MenuHeader from "../components/MenuHeader.vue";
import MapComponent from "../components/MapComponent";

export default {
  name: "Home",
  components: {
    MenuHeader,
    MapComponent,
  },
  data() {
    return {
      serviceList: [
        { img: require('../../static/img/ai4.png'), title: '人工智能+图像识别', subTitle: '基于人工智能的软件架构，通过OCR图像引擎提高资料提取、识别和编辑能力。' },
        { img: require('../../static/img/yun4.png'), title: '云协作+工作流', subTitle: '面向电子系统工程全流程，通过数据整合、分享和写作，创建更高效的工作流。' },
        { img: require('../../static/img/cloud platform4.png'), title: '开发接口+云平台', subTitle: '行业知识模块化，通过开放性接口，利用公/私有云平台实现资源共享和流通。' },
        { img: require('../../static/img/Compatibility1.png'), title: '订阅模式+兼容性', subTitle: '从一次性许可转向订阅模式，满足更灵活的用户需求，提高开放型和兼容性。' },
      ],
      developmentList: this.$store.state.developmentList,
      productList: this.$store.state.productList,
      counterList: [
        { img: require('../../static/img/Resource Exchange4.png'), count: '75%', desc: 'Resource Exchange' },
        { img: require('../../static/img/Efficiency Improve5.png'), count: '45%', desc: 'Efficiency Improve' },
        { img: require('../../static/img/Cost Reduction4.png'), count: '65%', desc: 'Cost Reduction' },
        { img: require('../../static/img/Process Reduction5.png'), count: '50%', desc: 'Process Reduction' },
      ],
      aboutList: [
        { img: require('../../static/img/site1.png'), desc: '上海市浦东南路1500号' },
        { img: require('../../static/img/mail1.png'), desc: 'info@vxintech.com' },
        { img: require('../../static/img/phone1.png'), desc: '400-009-0858' }
      ],
    };
  },
  methods: {
    toProduct(id) {
      this.$router.push({
        name: 'product',
        query: { id }
      })
      this.$store.commit('currentChange', { index: 4, id: 'product', isScroll: false  })
    },
    toNews(id) {
      this.$router.push({
        name: 'news',
        query: { id }
      })
      this.$store.commit('currentChange', { index: 3, id: 'development', isScroll: false  })
    },
    goto(index, id) {
      this.$store.commit('currentChange', { index, id })
    },
    debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    //判断滚动方向
    handleScroll(){
      const _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let index = 0
      let id = 'home'
      const menus = this.$store.state.menuList
      for (let i = 0; i < menus.length; i++) {
        let obj = document.getElementById(menus[i].idName);
        if (!obj) {
          return
        }
        obj.min = obj.offsetTop + 0;
        obj.max = obj.offsetTop + obj.offsetHeight || 100;
        if ((Math.ceil(_scrollTop) + 80) <= obj.max && (Math.ceil(_scrollTop) + 80) >= obj.min) {
          index = i
          id = menus[i].idName
        }
        if (Math.ceil(_scrollTop) >= 3243 && document.documentElement.clientWidth >= 778) {
          index = 5
          id = 'contact'
        }
      }
      this.$store.commit('currentChange', { index, id, isScroll: false })
      if (this.$refs.menuRef) {
        this.$refs.menuRef.handleMenuClick()
      }
    },
  },
  mounted() {
    //监听鼠标滚动事件
    window.addEventListener('mousewheel',this.debounce(this.handleScroll, 10), true) || window.addEventListener('DOMMouseScroll', this.debounce(this.handleScroll, 10), true)
  },
  beforeDestroy() {
    window.removeEventListener('mousewheel', this.debounce(this.handleScroll, 10), true)
    window.removeEventListener('DOMMouseScroll', this.debounce(this.handleScroll, 10), true)
  }
};
</script>

<style scoped>
@import "../components/index.less";
.ant-carousel >>> .slick-slide {
  text-align: center;
  position: relative;
  width: 100%;
  height: 616px;
  overflow: hidden;
}
.bg-img img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  position:absolute;
}
.ant-carousel >>> .slick-dots {
  text-align: right;
  height: 30px;
  padding: 0 20px;
}
.ant-carousel >>> .slick-dots li button {
  margin-left:10px;
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:#ffffff;
  opacity: 1;
}
.ant-carousel >>> .slick-dots li.slick-active button {
  background-color: #e98821;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.7;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.index-header-title {
  /*color: #ffffff;*/
  font-size: 80px;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 85px;

  /*  后面追加  */
  position: absolute;
  margin: auto; /*水平居中*/
  top: 50%; /*偏移*/
}
/* 不同h2 颜色不同 */
.index-title1 {
  color: #ffffff;
  right: 33%;
  transform: translate(52%, -50%);
}
.index-title2 {
  color: #e98821;
  left: 50%;
  transform: translate(-50%, -50%);
}
.index-title3 {
  color: #ffffff;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* .index-header {
  padding-top: 50px;
} */

</style>
