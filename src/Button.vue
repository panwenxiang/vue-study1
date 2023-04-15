<template>
  <button class="c-button">hi hi</button>
</template>

<script>
export default {
  name: "c-button"
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
</style>