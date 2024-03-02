<template>
  <div class="header">
    <div class="word_box">
      <p @click="jumpPage">旭霸王个人博客</p>
      <div class="quotations" @click="changeQuotations">
        {{ quotations[quotationsIndex] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {},
  data() {
    return {
      quotations: [
        "自然如此",
        "我们之所以觉得悬崖上的花朵美丽,那是因为我们会在悬崖停下脚步,而不是像那些毫不畏惧的花朵般,能向天空踏出一步。",
        "我曾踏足山巅,也曾进入低谷,二者都让我受益良多",
        "我们面前的山不一定真的难以逾越，甚至不一定真的是山。",
        "小小挫折，仅此而已",
      ],
      quotationsIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.changeQuotations();
    }, 20000);
  },
  methods: {
    jumpPage() {
      this.$router.push({
        path: "/home",
      });
    },
    changeQuotations() {
      console.log("调用=========");
      if (this.quotationsIndex >= this.quotations.length - 1) {
        this.quotationsIndex = 0;
      } else {
        this.quotationsIndex++;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  width: 100%;
  height: 75px;
  background-color: #2e3641;
  user-select: none;
  .word_box {
    width: 75%;
    height: 75px;
    margin: 0 auto;
    display: flex;
    align-items: baseline;
    p {
      cursor: pointer;
      color: #fff;
      font-size: 28px;
      text-align: left;
      line-height: 75px;
      transition: 0.5s;
    }
    p:hover {
      color: #ff4d3a;
    }
    .quotations {
      font-size: 16px;
      font-weight: normal;
      margin: 12px 15px;
      opacity: 0.7;
      color: #dfdfdf;
      cursor: pointer;
    }
  }
}
</style>
