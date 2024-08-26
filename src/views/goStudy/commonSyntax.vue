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
      tableArr: [
        {
          id: 1,
          name: "数组扁平化处理",
        },
      ],
      contentArr: [
        {
          id: 1,
          content: "asdhfasdf",
        },
      ],
      menuList: [
        {
          title: "数组扁平化处理",
          router: "/goStudy/commonSyntax/handleData",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
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
  }
}
</style>