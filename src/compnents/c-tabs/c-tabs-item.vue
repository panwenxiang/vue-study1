<template>
  <div class="c-tabs-item" :class="active?'active':''" @click="click">
    <slot></slot>
  </div>
</template>

<script>
import eventBus from '../../eventBus'

export default {
  name: "c-tabs-item",
  props:{
    name:{
      require:true,
      type:String,
    }
  },
  data(){
    return {
      active:false
    }
  },
  inject:['eventBus'],
  created() {
    eventBus.on('tabClick',(name)=>{
      console.log('tab被点击',name)
      this.active = name==this.name
    })
    // this.eventBus.$on('update:selected',(name,one,tow)=>{
    //   console.log('选中了：',name,one,tow)
    // })
  },
  methods:{
    click(){
      eventBus.emit('tabClick',this.name,this)
      // this.eventBus.$emit('update:selected',this.name,1)
    }
  }
}
</script>

<style scoped lang="less">
.c-tabs-item{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  padding: 6px 12px;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:last-child{
    margin-right: 0;
  }
}
.c-tabs-item.active{
  color:#1890ff;
}
</style>