<template>
  <div class="statistics_column">
    <div class="statistics">
      <div class="statistics_title">文章推荐</div>
      <div class="statistics_content">
        <div
          @click="handleDetail(item)"
          class="content_item"
          v-for="item in articleList"
          :key="item.id"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statistics_column",
  props: {},
  data() {
    return {
      articleList: [
        {
          id: "1",
          title: "英雄联盟英雄介绍--青钢影", //文章标题
          type: "0", //0文章类型1为视频类型
          img: "https://wxxupload.oss-cn-beijing.aliyuncs.com/mmexport1648520635575.jpg", //文章封面
          tagArray: [
            {
              tagName: "置顶",
              color: "#337ab7",
            },
            {
              tagName: "热门",
              color: "#d9534f",
            },
          ], //tag数组
          time: "2022/3/29", //文章创建时间
          catalogue: "英雄联盟", //文章目录
          author: "旭霸王", //文章作者
          visits: "4730", //文章访问量
          introduction:
            "青钢影·卡蜜尔，是MOBA竞技网游《英雄联盟》中第134位登场的英雄角色。\n卡蜜尔是一位优雅的特工精英，也是一台精密的人形兵器。她游走于法律已然失效的边缘地带，小心地维护着皮尔特沃夫这台机器和其下的祖安，保证一切都能顺畅地运转。而她身藏一对钩索，还有一双巨大的腿刃，她一旦盯上敌人，敌人就难逃身首异处的下场。", //文章简介
        },
        {
          id: "2",
          title: "英雄联盟英雄介绍--阿卡丽", //文章标题
          img: "https://wxxupload.oss-cn-beijing.aliyuncs.com/mmexport1648533857234.jpg", //文章封面
          type: "0", //0文章类型1为视频类型
          tagArray: [
            {
              tagName: "HOT",
              type: "red",
            },
          ], //tag数组
          time: "2022/3/29", //文章创建时间
          catalogue: "英雄联盟", //文章目录
          author: "旭霸王", //文章作者
          visits: "4730", //文章访问量
          introduction:
            "离群之刺·阿卡丽，是MOBA竞技网游《英雄联盟》中的英雄角色，定位为法师、刺客。\n阿卡丽离开了均衡教派，在慎的教义之外找到了自己战斗方式。现在的离群之刺不再是贴近后挥舞镰刀解决敌人，而是选择连跑带打的机动战术。她不断地改变身位，灵活出击，然后隐匿行踪，再度出手。\n在游戏中，阿卡丽能熟练挥舞十字镰刀，将刺客印记切入敌人的心脏。她是来去无影踪的战士，能使用暗影之力，潜行于烟雾，杀人于无形之中。", //文章简介
        },
        {
          id: "3",
          title: "英雄联盟英雄介绍--厄斐琉斯", //文章标题
          type: "0", //0文章类型1为视频类型
          img: "https://wxxupload.oss-cn-beijing.aliyuncs.com/mmexport1648692448816.png", //文章封面
          tagArray: [
            {
              tagName: "HOT",
              type: "red",
            },
          ], //tag数组
          time: "2022/3/31", //文章创建时间
          catalogue: "英雄联盟", //文章目录
          author: "旭霸王", //文章作者
          visits: "4730", //文章访问量
          introduction:
            "残月之肃·厄斐琉斯，是MOBA竞技网游《英雄联盟》中的英雄角色，英雄定位为射手，于9.24版本上线。月亮高悬在巨神峰上，遥遥万里，却又不可思议地触手可及。在一次罕见的月合奇观中，孪生兄妹厄斐琉斯和拉露恩诞生了。月合之时，精神领域的月之镜像恰好与其实体重合。恰逢此时降生的兄妹俩也被巨神峰的皎月教派奉为天命之子。", //文章简介
        },
      ],
    };
  },
  methods: {
    handleDetail(item) {
      this.$router.push({
        path: "/articleDetail",
        query: { id: item.id },
      });
    },
  },
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
      cursor: pointer;
      font-size: 14px;
      padding: 10px 15px;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
