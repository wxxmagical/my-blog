<template>
  <div class="header_tabs">
    <div class="tab_box">
      <div
        :class="{
          tabs_item_son: item.children,
          tabs_item: !item.children,
          tabs_item_current: currentPath.indexOf(item.path) > -1,
        }"
        v-for="(item, index) in tabList"
        :key="index"
        @click="jumpPage(item.path, item.children)"
        @mouseover="onMouseover(item.id)"
        @mouseleave="onMouseleave(item.id)"
      >
        {{ item.title }}
        <div class="caret" v-if="item.children"></div>
        <div
          class="children_box"
          v-show="item.children && currentTab == item.id"
        >
          <div
            :class="{
              children_item: true,
              children_item_current: currentPath.indexOf(sitem.path) > -1,
            }"
            @click="jumpPage(sitem.path)"
            v-for="(sitem, sindex) in item.children"
            :key="sindex"
          >
            {{ sitem.title }}
          </div>
        </div>
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
      tabList: [
        {
          id: "1",
          title: "首页",
          path: "/home",
        },
        {
          id: "2",
          title: "工作经历",
          path: "/workExperience",
        },
        {
          id: "3",
          title: "游戏人生",
          path: "/gameLife",
          children: [
            {
              pid: "3",
              id: "3_1",
              title: "艾尔登法环",
              path: "/gameLife/eldenRing",
            },
            {
              pid: "3",
              id: "3_2",
              title: "英雄联盟",
              path: "/gameLife/leagueOfLegends",
            },
            {
              pid: "3",
              id: "3_3",
              title: "战地Ⅴ",
              path: "/gameLife/battlefield",
            },
          ],
        },
        {
          id: "4",
          title: "自我提升",
          path: "/goStudy",
          children: [
            {
              pid: "4",
              id: "4_1",
              title: "组件demo",
              path: "/goStudy/componentDemo",
            },
            {
              pid: "4",
              id: "4_2",
              title: "常见JS语法",
              path: "/goStudy/commonSyntax",
            },
          ],
        },
      ],
      idArray: [],
      currentPath: "",
      currentTab: "",
    };
  },

  watch: {
    $route(val, old) {
      // 当前路由
      console.log(val);
      this.currentPath = val.path;
      // 上一个路由
      console.log(old);
    },
  },
  mounted() {},
  methods: {
    onMouseleave() {
      this.currentTab = "";
    },
    onMouseover(id) {
      this.currentTab = id;
    },
    jumpPage(path, children) {
      console.log("aaa=========");
      if (children) {
        return;
      }
      this.$router.push({
        path: path,
      });
      this.currentTab = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header_tabs {
  width: 100%;
  background-color: #fff;
  user-select: none;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  .tab_box {
    width: 75%;
    height: 34px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .tabs_item,
    .tabs_item_son {
      position: relative;
      display: flex;
      align-items: baseline;
      cursor: pointer;
      padding: 10px 15px;
      font-size: 14px;
      line-height: 14px;
      color: #777;
      .caret {
        width: 0px;
        height: 0px;
        margin-left: 2px;
        border-top: 4px solid #000;
        border-left: 4px solid rgba(0, 0, 0, 0);
        border-right: 4px solid rgba(0, 0, 0, 0);
        border-bottom: 4px solid rgba(0, 0, 0, 0);
      }
      .caret_icon {
        color: #000;
      }
    }
    .tabs_item_current {
      color: #000;
      background-color: #e7e7e7;
    }
    .tabs_item:hover {
      color: #000;
      // background-color:#e7e7e7
    }
    .tabs_item_son:hover {
      color: #000;
      background-color: #e7e7e7;
    }
    .children_box {
      position: absolute;
      top: 34px;
      left: 0px;
      border: 1px solid #ccc;
      border-top-color: rgba(0, 0, 0, 0);
      border-radius: 3px;
      background-color: #fff;
      width: 150px;
      padding: 5px 0;
      z-index: 99;
      .children_item {
        text-align: start;
        height: 25px;
        padding: 10px 0 7px 20px;
      }
      .children_item:hover {
        background: #000;
        color: #fff;
      }
      .children_item_current {
        background: #666;
        color: #fff;
      }
    }
  }
}
</style>
