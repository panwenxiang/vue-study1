<template>
  <div class="c-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "c-tabs",
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  }
}
</script>

<style scoped>

</style>