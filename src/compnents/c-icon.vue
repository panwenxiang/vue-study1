<template>
    <svg v-if="iconName" class="icon" aria-hidden="true">
        <use :xlink:href="`#${iconName}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'c-icon',
    props: ['iconName']
}
</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    margin: 0 2px;
    display: inline-block;
    vertical-align: middle;
}
</style>