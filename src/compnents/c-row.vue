<template>
  <div :class="`c-row gutter-${gutter}`" ref="row"><slot></slot></div>
</template>

<script>
export default {
  name: "c-row",
  props:{
    gutter:{
      type:[Number,String],
      default:0,
    }
  },
  mounted() {
    const gutter = Number(this.gutter)/2+'px'
    this.$refs.row.style.setProperty('--gutter',gutter)
  }
}
</script>

<style lang="less" scoped>
.c-row{
  width: 100%;
  display: flex;
  border: 2px solid sandybrown;
  --gutter:0;
}
.c-col{
  margin-left: var(--gutter);
  margin-right: var(--gutter);
}
.c-col:first-child{
  margin-left: 0;
}
.c-col:last-child{
  margin-right: 0;
}


</style>