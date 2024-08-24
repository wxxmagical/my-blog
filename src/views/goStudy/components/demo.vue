<template>
  <div>
    防抖和节流
    <div class="moveBox" @mousemove="handleMove"></div>
    <input type="text" v-model="testWord2" @input="handleInput()" />

    <div id="pargent" @click="handleClick">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script>
var t = null;
var t2 = null;
// import { debounce } from "@/utils";
export default {
  data() {
    return {
      testWord: "请输入",
      testWord2: "请输入",
    };
  },
  methods: {
    handleInput(val) {
      //   debounce(this.test, 500);
      if (t !== null) {
        clearTimeout(t);
      }
      t = setTimeout(() => {
        console.log(val.target.value, "3");
      }, 500);
    },
    handleMove(val) {
      //   debounce(this.test, 500);
      if (t2 !== null) {
        return;
      }
      t2 = setTimeout(() => {
        console.log(val, 44);
        t2 = null;
        console.log(t2, "t22");
      }, 1000);
    },
    handleClick(event) {
      console.log(event.currentTarget, event.target, "click");
    },
  },
};
</script>

<style lang="less">
#pargent {
  border: 1px solid red;
  div {
    padding: 20px;
    border: 1px solid black;
    border-radius: 2px;
  }
}
.moveBox {
  border: 1px solid red;
  width: 500px;
  height: 500px;
}
</style>