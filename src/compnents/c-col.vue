<template>
  <div :class="`c-col c-col-${span} c-col-offset-${offset}`"><slot></slot></div>
</template>

<script>
export default {
  name: "c-col",
  props:{
    span:{
      type:[Number,String],
      default:24
    },
    offset:{
      type:[Number,String],
      default: 0
    }
  },
}
</script>

<style lang="less" scoped>

.c-col{
  border: 2px solid red;
}
/* 循环出 .c-col-xx   24-1的所有宽度 */
.loop-span(@n) when (@n>0){
  .c-col-@{n} {
    width: round((@n/24),5)*100%;
  }
  .loop-span(@n - 1);
}
.loop-span(24);

.loop-offset(@n) when (@n<25){
  .c-col-offset-@{n}{
    margin-left: round((@n/24),5)*100%;
  }
  .loop-offset(@n + 1)
}
.loop-offset(1);

</style>