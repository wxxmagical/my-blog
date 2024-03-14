<template>
  <div class="statistics_column">
    <div class="statistics">
      <div class="statistics_title">旭霸王个人博客统计</div>
      <div class="statistics_content">
        <div class="content_item">分类：5个</div>
        <div class="content_item">文章：2篇</div>
        <div class="content_item">运行：3天</div>
        <div class="content_item">评论：7个</div>
        <div class="content_item">浏览：4730</div>
      </div>
    </div>
    <div class="statistics_catalogue">
      <div class="statistics_title">分类</div>
      <div class="statistics_content">
        <div class="content_item">首页</div>
        <div class="content_item">工作经历</div>
        <div class="content_item">游戏人生</div>
        <div class="content_item">英雄联盟</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statistics_column",
  props: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.statistics_column {
  // border: 1px solid black;
  // /deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  //   color: #555;
  //   font-weight: bold;
  // }
  // /deep/ :root {
  //   --el-color-primary: #555 !important;
  // }
  text-align: start;
  .statistics {
    background-color: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    // margin-bottom: 20px;
  }
  .statistics_catalogue {
    background-color: #fff;
    margin-top: 20px;
  }
  .statistics_title {
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #ff4d3a;
    padding: 15px;
  }
  .statistics_title:before {
    content: "\f0e8";
  }

  .statistics_content {
    .content_item {
      font-size: 14px;
      padding: 10px 15px;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
