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
      data111:11,
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>