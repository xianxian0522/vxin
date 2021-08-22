<template>
  <div class="news">
    <MenuHeader :is-jump="true" :isCollapsed='true' />
    <div class="news-menu">
      <a-menu
        v-bind:style="{width: collapsed ? 'auto' : '256px'}"
        :default-selected-keys="current"
        @select="selectChange"
        mode="inline"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <a-icon type="setting" style="font-size: 16px" />
          <span>为昕资讯</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="read" style="font-size: 16px" />
          <span>行业动态</span>
        </a-menu-item>
      </a-menu>
      <div class="news-menu-content">
        <h2>{{ title }}</h2>
        <ul >
          <li v-for="item in newsList" :key="item.title">
            <div class="news-flex">
              <h3 >{{ item.title }}</h3>
              <span>{{ item.time }}</span>
            </div>
            <p>{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHeader from "../components/MenuHeader";

export default {
  name: "Header",
  components: { MenuHeader },
  data() {
    return {
      collapsed: false,
      current: ["1"],
      title: "",
      newsList: []
    };
  },
  created() {
    const id = this.$route.query.id || "";
    this.changeCurrent(id)
  },
  methods: {
    selectChange({ key }) {
      this.changeCurrent(key)
      this.$router.push({ name: 'news', query: {id: this.current[0]} })
    },
    changeCurrent(value) {
      if (parseInt(value) === 2) {
        this.current = ["2"];
        this.title = this.$store.state.developmentList[1].title;
        this.newsList = this.$store.state.developmentList[1].children;
      } else {
        this.current = ["1"];
        this.title = this.$store.state.developmentList[0].title;
        this.newsList = this.$store.state.developmentList[0].children;
      }
    },
    changeCollapsed(value) {
      this.collapsed = value
    }
  },
};
</script>

<style scoped lang="less">
@import "../components/index";

.news-menu {
  height: inherit;
  display: flex;
}

.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  border: 0;
}

.news-menu-content {
  padding: 0 30px;
  flex: 1;
  height: calc(100vh - 60px);
  overflow: scroll;

  h2 {
    font-size: 30px;
    color: #e98821;
  }
}
.news-menu-content ul li {
  margin-top: 40px;
}
.news-flex {
  display: flex;
  align-items: center;
  margin-bottom: 0.9em;
  h3 {
    margin-bottom: 0;
    margin-right: 10px;
  }
}
.ant-menu-item-selected {
  color: #e98821;
}
</style>
