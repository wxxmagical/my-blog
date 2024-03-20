<template>
  <div class="content">
    <div class="content_left">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- <article-list-item></article-list-item> -->
      <div class="articleDetail" v-html="articleDetail.content"></div>
    </div>
    <div class="content_right">
      <articleRecommend></articleRecommend>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import articleRecommend from "@/components/articleRecommend.vue";

export default {
  name: "Home",
  components: {
    articleRecommend,
  },
  data() {
    return {
      id: "",
      articleDetail: {},
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
          content:
            '<h2>英雄背景</h2><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;卡蜜尔是一名精英特工，为了皮尔特沃夫的权势阶层维护着城市的秩序。在责任心的驱使下，青钢影将自己的身体改造成了一台海克斯动力驱动的杀戮机器。当卡蜜尔追捕目标时，她就会变得冷静、无情，并且极其可怕地精确<sup>&nbsp;</sup>。</p><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;“精准与否，就是屠宰与手术的区别。”——卡蜜尔</p><p><br/></p><p data-we-empty-p="" style="text-align:center;"><br/></p><h2>玩法分析</h2><h3>&nbsp;&nbsp;&nbsp;&nbsp;基本玩法</h3><p data-we-empty-p="" style="line-height:2;">&nbsp; &nbsp; &nbsp;卡蜜尔是一个高机动性的战士，非常善于追捕和击杀单个目标。当她渴望战斗时，总能如愿以偿。在不死不休的双人舞中，她往往会是最后谢幕的那一位。</p><p style="line-height:2;">&nbsp; &nbsp; &nbsp; 使用卡蜜尔的玩家，必须像青钢影一样，发自心底地崇尚精准的重要性。她的每一项技能都需要精密地计算时间与方位，才能达到最佳效果。如果使用得当，己方玩家可以切入敌人的后排，将目标大卸八块，然后抽身而去</p><p data-we-empty-p="" style="text-align:center;"><br/></p><ul><li><p>强项</p></li></ul><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;卡蜜尔的机动性和决斗本领让她成为了理想的单人路英雄。在做出了贪欲九头蛇这类装备后，她的推线能力就会显现出来，尤其是精准礼仪让她拥有了两次重置普攻的机会。借助钩索，卡蜜尔可以四处游走，制造压力，并在敌人前来围捕她时轻松地逃离。</p><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;虽然她在团战时需要小心自己的走位，但是依靠战术横扫与海克斯最后通牒，卡蜜尔能够困住敌人，为自己队友的高爆发技能（例如维迦的能量爆裂，或是泽拉斯的奥术仪式）创造击杀的机会。</p><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;卡蜜尔可以用钩索切入战场，然后横扫敌人，再给他们上一堂极其痛苦的探戈教学，之后就是队友们赶来完成谢幕的时间了。</p><p data-we-empty-p="" style="text-align:center;"><br/></p><ul><li><p>弱项</p></li></ul><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;正如其他对操作要求非常严苛的英雄，卡蜜尔在不够熟练的玩家手中会显得非常无力。除了基本的玩法门槛之外，多数团战都需要己方玩家的切入方式更具创意，比如在合适的时机使用钩索（当敌人已经使用了控制技能后），从意想不到的角度发起进攻。</p><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;青钢影并不是一个非常理想的先手英雄，除非她能用自己的大招锁定一个落单的敌人，为队友的支援创造时间。</p><p><br/></p><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;由于卡蜜尔的护盾会根据她对手的伤害类型而变化，在团战中的效果就不如单挑时显著。所以，当一个发育良好的辅助或中单赶来支援时，锁定对方的脆皮ADC很有可能就是一个糟糕的选择。</p><p style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;对于青钢影来说，拥有AOE技能的英雄往往很难对付：她更善于闪避敌人的技能，而不是硬闯一大片高伤害的区域<sup>&nbsp;[1]<em></em></sup>。</p><h2>英雄台词</h2><p data-we-empty-p="" style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;有时候，伤疤是一个人最上等的华服。<br/></p><p data-we-empty-p="" style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;世界既不黑也不白，而是一道精致的灰。<br/></p><p data-we-empty-p="" style="line-height:2;">&nbsp;&nbsp;&nbsp;&nbsp;恐惧磨快了每一把刀刃。</p><p data-we-empty-p="" style="text-align:center;"><br/><br/></p><p><br/></p><p data-we-empty-p="" style="text-align:center;"><br/><br/></p>',
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
          content:
            "离群之刺·阿卡丽，是MOBA竞技网游《英雄联盟》中的英雄角色，定位为法师、刺客。\n阿卡丽离开了均衡教派，在慎的教义之外找到了自己战斗方式。现在的离群之刺不再是贴近后挥舞镰刀解决敌人，而是选择连跑带打的机动战术。她不断地改变身位，灵活出击，然后隐匿行踪，再度出手。\n在游戏中，阿卡丽能熟练挥舞十字镰刀，将刺客印记切入敌人的心脏。她是来去无影踪的战士，能使用暗影之力，潜行于烟雾，杀人于无形之中。",
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
          content:
            "残月之肃·厄斐琉斯，是MOBA竞技网游《英雄联盟》中的英雄角色，英雄定位为射手，于9.24版本上线。月亮高悬在巨神峰上，遥遥万里，却又不可思议地触手可及。在一次罕见的月合奇观中，孪生兄妹厄斐琉斯和拉露恩诞生了。月合之时，精神领域的月之镜像恰好与其实体重合。恰逢此时降生的兄妹俩也被巨神峰的皎月教派奉为天命之子。",
          introduction:
            "残月之肃·厄斐琉斯，是MOBA竞技网游《英雄联盟》中的英雄角色，英雄定位为射手，于9.24版本上线。月亮高悬在巨神峰上，遥遥万里，却又不可思议地触手可及。在一次罕见的月合奇观中，孪生兄妹厄斐琉斯和拉露恩诞生了。月合之时，精神领域的月之镜像恰好与其实体重合。恰逢此时降生的兄妹俩也被巨神峰的皎月教派奉为天命之子。", //文章简介
        },
      ],
    };
  },
  watch: {
    // 监控路由对象，每当路由发生变化时，这个函数就会被调用
    $route: function (to, from) {
      // 如果路由的查询字符串部分发生变化，执行相应操作
      if (to.query !== from.query) {
        console.log(to, "tooo");
        this.id = to.query.id;
        this.getDetail();
      }
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.articleList.map((item) => {
        if (item.id === this.id) {
          this.articleDetail = item;
          console.log(this.articleDetail, "ddddd");
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
.content {
  display: flex;
  width: 75vw;
  margin: 0 auto;
  .content_left {
    flex: 2;
    padding: 0 15px;
    margin-top: 20px;
    // border: 1px solid white;
  }
  .content_right {
    flex: 1;
    padding: 0 15px;
    margin-top: 20px;
    // border: 1px solid white;
  }
}
</style>
