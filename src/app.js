import Vue from "vue";
import Button from "./Button";
import Icon from "./compnents/Icon";

Vue.component('c-button', Button)
Vue.component('Icon', Icon)

new Vue({
    el:'#app',
})
