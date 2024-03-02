<template>
  <header-top></header-top>
  <header-tabs id="tabs" :class="{ is_fixed: isFixed }"></header-tabs>
  <router-view />
</template>

<script>
import headerTop from "@/components/header.vue";
import headerTabs from "@/components/headerTabs.vue";

export default {
  name: "App",
  components: {
    headerTop,
    headerTabs,
  },
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
    };
  },
  mounted() {
    console.log("app=========");
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#tabs").offsetTop;
    });
  },
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
