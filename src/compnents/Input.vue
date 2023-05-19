<template>
    <div class="c-input">
        <input :value="value" @input="input" :disabled="disabled" :readonly="readonly">
    </div>
</template>

<script>
export default {
    name: "c-input",
    props: {
        value: '',
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {
        input(e) {
            console.log(661, e, e.target.value)
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="less" scoped>
@height: 32px;
@disabled-color: #aaa;

.c-input {
  > input {
    height: @height;
    padding: 0 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #999;
    display: inline-block;

    &:hover {
      border-color: #666;
    }

    &:focus {
      outline: none;
      border-color: #333;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    &[disabled], &[readonly] {
      color: @disabled-color;
      border-color: @disabled-color;
    }
  }
}
</style>