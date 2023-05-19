<template>
    <div class="c-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Button-group",
    mounted() {
        for (let dom of this.$el.children) {
            if (dom.nodeName.toLowerCase() != 'button') {
                console.warn(`警告：button-group组件中的子元素应该是c-button，但是你写的是 ${dom.nodeName.toLowerCase()}！`)
            }
        }
    }
}
</script>

<style scoped>
.c-button-group {
    display: inline-flex;
    vertical-align: middle;

    .c-button {
        border-radius: initial;

        &:first-child {
            border-top-left-radius: var(--button-border-radius);
            border-bottom-left-radius: var(--button-border-radius);
        }

        &:last-child {
            border-top-right-radius: var(--button-border-radius);
            border-bottom-right-radius: var(--button-border-radius);
        }

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>