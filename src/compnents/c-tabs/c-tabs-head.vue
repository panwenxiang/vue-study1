<template>
  <div class="c-tabs-head">
    <slot></slot>
    <div ref="line" class="tabsItemLine"></div>
  </div>
</template>

<script>
import eventBus from "../../eventBus";
export default {
  name: "c-tabs-head",
  mounted() {
    eventBus.on('tabClick',(name,tabDom)=>{
      let cTabsHeadLocation = this.$el.getBoundingClientRect()
      let clickItemLocation = tabDom.$el.getBoundingClientRect()
      console.log(666,clickItemLocation)
      this.$refs.line.style.width=clickItemLocation.width+'px'
      this.$refs.line.style.transform=`translateX(${clickItemLocation.left-cTabsHeadLocation.left}px)`
    })
  }
}
</script>

<style scoped>
.c-tabs-head{
  position: relative;
}
.tabsItemLine{
  background: #1890ff;
  height: 2px;
  width: 50px;
  transition: all 0.3s;
}
</style>