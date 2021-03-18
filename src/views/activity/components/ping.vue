
<template>
  <div >
    <div :style="{width: gamePram.width+'px',height:gamePram.height+'px' }" class="mainDiv">
      <v-block v-bind="gamePram"  @next="nextGame"/>
    </div>
  </div>
</template>
 
<script>
import VBlock from './block'
 
export default {
  name: 'ping',
  components: {
    VBlock
  },
  data (){
    return {
      gamePram: {
        width:500,
        height:500,
        picUrl:require('@/assets/images/demo-teacher.jpeg'),
        rowNum:3,
        colNum:3,
      },
    }
  },
  methods:{
    nextGame() {
      this.gamePram.rowNum++;
      this.gamePram.colNum++;
      debugger
      if(this.gamePram.rowNum===10)
        this.gamePram.rowNum=3
      if(this.gamePram.colNum===10)
        this.gamePram.colNum=3
    }
  }
 
}
</script>
<style>
  .mainDiv{
    border: 1px solid #ccc;
    position: relative;
  }
</style>
