<template>
  <div class="article_list_item">
    <div class="item_box">
      <div class="img_box">
        <img class="article_img" :src="articleItem.img" alt="" />
        <div class="tag">{{ articleItem.type == "0" ? "文章" : "视频" }}</div>
      </div>
      <div class="introduction">
        <div class="article_title">
          <p class="title">{{ articleItem.title }}</p>
          <tag
            class="tag"
            v-for="(item, index) in articleItem.tagArray"
            :key="index"
            :color="item.color"
            :tagName="item.tagName"
          ></tag>
        </div>
        <div class="article_data">
          <div class="time">{{ articleItem.time }}</div>
          <span class="line">|</span>
          <div class="catalogue">{{ articleItem.catalogue }}</div>
          <span class="line">|</span>
          <div class="author">{{ articleItem.author }}</div>
          <span class="line">|</span>
          <div class="visits">{{ articleItem.visits }}</div>
        </div>
        <div class="article_introduction">
          {{ articleItem.introduction }}
        </div>
        <div class="article_bottom">
          <div class="article_tag">游戏</div>
          <div class="reading_whole">阅读全文»</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tag from "@/components/tag.vue";
export default {
  name: "article_list_item",
  components: {
    tag,
  },
  props: {
    articleItem: {
      typeof: Object,
      default: {
        tagArray: [],
      },
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.article_list_item {
  // width: 750px;
  // margin: 0;
  margin-bottom: 20px;
  .item_box {
    .img_box {
      position: relative;
      overflow: hidden;
      .tag {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        padding: 3px;
        // background-color: rgba(0,0,0,0.3);
        color: #ccc;
        z-index: 10;
      }
    }
    .article_img {
      width: 750px;
      height: 400px;
      object-fit: cover;
      cursor: pointer;
      vertical-align: bottom;
      transition: 1s;
    }
    .article_img:hover {
      transform: scale(1.1);
    }
    .introduction {
      padding: 20px;
      background: #fff;
      .article_title {
        display: flex;
        .title {
          font-size: 24px;
          cursor: pointer;
        }
        .tag {
          align-self: flex-end;
          margin-left: 10px;
          float: right;
        }
      }
      .article_data {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #aaa;
        margin-top: 10px;
        .line {
          margin: 0 10px;
        }
      }
      .article_introduction {
        margin-top: 10px;
        text-align: start;
        font-size: 14px;
        color: #333;
        line-height: 24px;
      }
      .article_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        .article_tag {
          font-size: 12px;
          padding: 3px 5px;
          background: none repeat scroll 0% 0% #bbb;
          color: #fff;
          cursor: pointer;
        }
        .reading_whole {
          color: #ff4d3a;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
