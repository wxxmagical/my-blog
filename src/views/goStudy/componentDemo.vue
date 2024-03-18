<template>
  <div class="container">
    <myMenu :menuList="menuList"></myMenu>
    <div class="content">
      <router-view class="child-router"></router-view>
    </div>
  </div>
</template>

<script>
import myMenu from "@/components/myMenu.vue";

export default {
  components: {
    myMenu,
  },
  data() {
    return {
      menuList: [
        {
          title: "日历组件",
          router: "/goStudy/componentDemo/calendar",
        },
        {
          title: "时间轴组件",
          router: "/goStudy/componentDemo/time",
        },
        {
          title: "画板",
          router: "/goStudy/componentDemo/drawBoard",
        },
      ],
    };
  },
};
</script>

<style scpoed lang="less">
.preCode {
  background: #282c34;
  color: #abb2bf;
}
.container {
  height: 100%;
  display: flex;
  .menu-list {
    height: 100%;
  }
  .content {
    flex: 1;
    // background: pink;
  }
}
</style>