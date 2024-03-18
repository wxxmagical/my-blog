<template>
  <div class="drawBoard">
    <div class="drawTools">
      <div class="colorsBox">
        当前颜色：
        <div
          class="currentColor color"
          :style="{ background: currentColor }"
        ></div>
        <div
          class="color"
          v-for="(item, index) in colorArr"
          :key="index"
          :style="{ background: item }"
          @click="clickColor(item)"
        ></div>
      </div>
    </div>
    <div class="drawContent">
      <canvas
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
        @mousemove="handleMouseMove"
        id="myCanvas"
        width="1000"
        height="500"
      ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctx: undefined,
      colorArr: [
        "pink",
        "white",
        "black",
        "blue",
        "yellow",
        "orange",
        "green",
        "red",
        "darkRed",
        "Beige",
        "YellowGreen",
      ],
      currentColor: "black",
      originX: 0,
      originY: 0,
      positionX: 0,
      positionY: 0,
      startDrawLine: false,
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let dom = document.getElementById("myCanvas");
      this.ctx = dom.getContext("2d");
    },
    clickColor(color) {
      this.currentColor = color;
      this.ctx.beginPath();
    },
    handleMouseMove(e) {
      if (this.startDrawLine) {
        console.log("11111");
        this.positionX = e.offsetX;
        this.positionY = e.offsetY;
        this.drawLine(this.positionX, this.positionY);
      }
    },
    handleMouseUp(e) {
      this.startDrawLine = false;
    },
    handleMouseDown(e) {
      console.log(e, "eee");
      this.originX = e.offsetX;
      this.originY = e.offsetY;
      this.startDrawLine = true;
    },
    drawLine(x, y) {
      this.ctx.moveTo(this.originX, this.originY);
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.stroke();
      this.originX = x;
      this.originY = y;
    },
  },
};
</script>

<style scoped lang="less">
#myCanvas {
  border: 1px solid #000;
}
.colorsBox {
  display: flex;
  align-items: center;
  justify-content: center;
  .currentColor {
    margin-right: 40px !important;
  }
  .color {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    border: 1px solid #000;
  }
}
</style>