<template>
  <div class="c-tabs-item" @click="click">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "c-tabs-item",
  props:{
    name:{
      require:true,
      type:String,
    }
  },
  inject:['eventBus'],
  methods:{
    click(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style scoped>

</style>