<template>
    <div>
        <div v-for="(item,index) in sortdataArr"  class="blocks"
        :style="{
            width: item.width+'px',
            height: item.height+'px',
            left:item.dataleft+'px',
            top:item.datatop+'px',
            backgroundImage: `url(${picUrl})`,
            backgroundPositionX: dataArr[index].backleft+'px',
            backgroundPositionY:dataArr[index].backtop+'px',
            opacity:index===dataArr.length-1?0:1
        }"
        :key="item.id"
        @click="handClick"
        :ref="index===(dataArr.length-1)?'empty':'block'
        "
        :data-correctX="item.dataleft"
        :data-correctY="item.datatop"
        >
        </div>
    </div>
</template>
 
<script>
export default {
  data () {
      return {
      }
  },
  props: {
      width: {
          type: Number,
          default: 500,
      },
      height: {
          type: Number,
          default: 500,
      },
      picUrl: {
       type: String,
       default: '1.png',
      },
      rowNum: {
       type: Number,
       default: 3
      },
      colNum: {
          type: Number,
          default: 3
      }
  },
  methods: {
      handClick(e){
          const clickDom=e.target;
          const emptyDom=this.$refs.empty[0]
          const flag=this.canChange(clickDom,emptyDom)
          if(!flag){
              return ;
          }
          const clickleft=clickDom.style.left;
          const clicktop=clickDom.style.top;
          const emptyleft=emptyDom.style.left;
          const emptytop=emptyDom.style.top;
          clickDom.style.left=emptyleft
          clickDom.style.top=emptytop
          emptyDom.style.left=clickleft
          emptyDom.style.top=clicktop
          const isSuccess= this.isSuccess();
          console.log(isSuccess)
          if(isSuccess){
              setTimeout(()=>{
                  const emptyDom=this.$refs.empty[0]
                  emptyDom.style.opacity=1
                  setTimeout(()=>{
                      const next= confirm("是否进行下一关");
                      if(next){
                          this.$emit('next', '我是父组件！')
                      }
                  },300)
 
              },300)
          }
      },
      isSuccess(){
          const blockarr=this.$refs.block;
         return  blockarr.every(dom=>{
             const {correctx,correcty}= dom.dataset
              const {left,top}=  dom.style
            if(parseInt(correctx)===parseInt(left)&&parseInt(correcty)===parseInt(top))
                return true;
            return false
          })
      },
      canChange(clickDom,emptyDom){
          const {top:clickTop,left:clickLeft,height,width}=clickDom.style;
          const {top:emptyTop,left:emptyLeft}=emptyDom.style;
          const xdis=Math.floor(Math.abs(parseFloat(clickLeft) -parseFloat(emptyLeft)))
          const ydis=Math.floor(Math.abs(parseFloat(clickTop)-parseFloat(emptyTop)))
          //计算是否可以互换
          //同行，列相邻，同列行相邻
          const flag =true;
          if((clickTop===emptyTop&&xdis===parseInt(width))
              ||(clickLeft==emptyLeft&&ydis===parseInt(height)) )
              return flag
          return false;
      }
  },
  computed: {
      dataArr() {
        const {width,height,rowNum,colNum}=this;
        const dataWidth=width/colNum;
        const dataHeight=width/rowNum;
        const dataArr=[];
        for (let i=0;i<this.rowNum;i++){
            for (let j=0;j<this.colNum;j++){
                dataArr.push({
                    width:dataWidth,
                    height:dataHeight,
                    dataleft:dataWidth*i,
                    datatop:dataHeight*j,
                    backleft:-dataWidth*i,
                    backtop:-dataHeight*j,
                    id:new Date().getTime()+Math.random()*100
                })
            }
        }
        return dataArr;
      },
      sortdataArr() {
        const sortArr=this.dataArr
        const length=sortArr.length;
        const lastDom=sortArr[length-1];
        const newArr=[...sortArr];
        newArr.length=length-1;
        newArr.sort(()=>Math.random()-0.5);
        newArr.push(lastDom);
        return newArr;
      }
  }
}
</script>
 
<style scoped>
    .blocks{
        border: 1px solid red;
        box-sizing: border-box;
        position: absolute;
        transition: all 0.3s;
    }
</style>
