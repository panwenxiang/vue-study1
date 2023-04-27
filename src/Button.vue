<template>
    <button class="c-button" :class="iconPosition?iconPosition:''">
        <Icon :iconName="name"></Icon>
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "c-button",
  props:{
    name:'',
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        console.log(66)
        console.log(value==='left'||value==='right')
        return value==='left'||value==='right'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.c-button{
  padding: 0 1em;
  height: var(--button-height);
  background: var(--button-bg);
  border-radius: var(--button-border-radius);
  color: var(--button-color);
  border: 1px solid var(--button-border-color);
  display: flex;
  align-items: center;
  &:active{
    background: var(--button-active-bg);
  }
  &:hover{
    border-color: var(--button-border-color-hover);
    cursor: pointer;
  }
  &:active{
    background: var(--button-active-color);
  }
}
.right>.icon{
  order: 2;
}
</style>