<template>
    <div class="c-select-option" @click="click">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "c-select-option",
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click() {
            this.$parent.clickItem(this.value, this.$slots.default[0].text)
        }
    }
}
</script>

<style lang="less" scoped>
.c-select-option {
    color: #aaa;
    font-size: 14px;
    height: 32px;
    display: flex;
    align-items: center;
    padding-left: 6px;
    padding-right: 6px;

    &:hover {
        background: #e6f7ff;
    }
}
</style>