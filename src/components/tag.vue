<template>
  <div :style="{ background: color }" class="tag">{{ tagName }}</div>
</template>

<script>
export default {
  name: "article_list_item",
  props: {
    tagName: {
      typeof: String,
      default: "",
    },
    color: {
      typeof: String,
      default: "",
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tag {
  font-size: 12px;
  padding: 2px 5px;
  font-weight: normal;
  // margin-left: 5px;
  color: #fff;
  border-radius: 3px;
}
</style>
