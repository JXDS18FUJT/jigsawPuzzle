<template>
  <div
    id="jigsawPuzzle"
    :style="{width:`${image.naturalWidth}px`,height:`${image.naturalHeight}px`}"
  >
    <div class="grid12">
      <div
        v-for="(item,index) in grids"
        :key="index"
        @click="floatGrid(index);preventScroll"
        class="grids"
        :class="{'gridsHidden':!item.show}"
        :style="{backgroundImage:`url(${mainImge})`,
            backgroundPositionX: `${-parseInt(((item.index)%3))*(image.naturalWidth/row)}px`,
            backgroundPositionY: `${-parseInt((item.index/3))*(image.naturalHeight/col)}px`}"
      >
        <!-- <img :src="mainImge"> -->

      </div>
      <!-- <div></div> -->
      

    </div>
  </div>

</template>

<script>
export default {
  name: "jigsawPuzzle",
  data() {
    return {
        //图片
      mainImge: require("@/assets/images/meinv.jpg"),
      image: {
        naturalHeight: 400, //图片高度
        naturalWidth: 300, //图片宽度
      },
      row: 3, //横数
      col: 4, //纵数
      //宫格
      grids: [
        { index: 0, show: true },
        { index: 1, show: true },
        { index: 2, show: true },
        { index: 3, show: true },
        { index: 4, show: true },
        { index: 5, show: true },
        { index: 6, show: true },
        { index: 7, show: true },
        { index: 8, show: true },
        { index: 9, show: true },
        { index: 10, show: true },
        { index: 11, show: true },
      ],
    };
  },
  methods: {
    //获取图片高和宽带
    confusionImage(){
        let that =this
        that.grids.sort(() => Math.random() > .12);
    },
    preventScroll(e){
        e.preventDefault()

    },
    getImageWH() {
      let that = this;
      let image = new Image();
      image.src = that.mainImge;
      image.onload = function (e) {
        console.log("tag", e);
        that.image.naturalHeight = e.target.naturalHeight || e.target.height;
        that.image.naturalWidth = e.target.naturalWidth || e.target.width;
        //   console.log('tag', height,width)
      };
    },
    floatGrid(index) {
        this.$set(this.grids[index],'show',!this.grids[index].show)
      // this.$set(this.grids,index,this.grids[0])
    },
  },
  components: {},

  mounted() {
    this.getImageWH();
    this.confusionImage()
    //算法:
    //   先获取图片的大小或者比例
    // 按
  },
  computed: {
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="less"  scoped>
#jigsawPuzzle {
  width: 100vw;
  height: 80vh;
  background: lemonchiffon;
  margin: 0 auto;
}
.grid12 {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-flow: row wrap;
  align-content: space-between;
  .grids {
    width: 33%;
    height: 24.5%;

    color: white;
    background-position-x: 0px;
    background-position-y: 0px;
    background-repeat: no-repeat;

    // background-size: 33% 24.5%;
  }
  .gridsHidden {
    opacity: 0;
  }
}
</style>