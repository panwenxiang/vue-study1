<template>
    <button class="c-button" :class="iconPosition?iconPosition:''">
        <Icon :iconName="name" :class="loading?'loading':''"></Icon>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "c-button",
    props: {
        name: '',
        loading: false,
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                console.log(value === 'left' || value === 'right')
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>
<style lang="less" scoped>
.c-button {
  padding: 0 1em;
  height: var(--button-height);
  background: var(--button-bg);
  border-radius: var(--button-border-radius);
  color: var(--button-color);
  border: 1px solid var(--button-border-color);
  display: inline-flex;
  vertical-align: middle;
  align-items: center;

  &:active {
    background: var(--button-active-bg);
  }

  &:hover {
    border-color: var(--button-border-color-hover);
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background: var(--button-active-color);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    animation: spin 1s infinite linear;
  }
}

.right > .icon {
  order: 2;
}
</style>