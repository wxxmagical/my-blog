<template>
  <el-menu router default-active="2" class="el-menu-vertical-demo menu-list">
    <el-menu-item
      :index="item.router"
      v-for="(item, index) in menuList"
      :key="index"
    >
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "myMenu",
  props: {
    menuList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style>
</style>