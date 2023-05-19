import Vue from "vue";
import Button from "./compnents/Button.vue";
import Icon from "./compnents/Icon";
import ButtonGroup from "./compnents/Button-group.vue";
import Input from "./compnents/Input.vue";

Vue.component('c-input', Input)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-button', Button)
Vue.component('Icon', Icon)

new Vue({
    el: '#app',
    data() {
        return {
            text1: 666
        }
    }
})
