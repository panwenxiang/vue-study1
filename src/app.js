import Vue from "vue";
import CButton from "./compnents/c-button.vue";
import CIcon from "./compnents/c-icon";
import CButtonGroup from "./compnents/c-button-group.vue";
import CInput from "./compnents/c-input.vue";
import CSelect from "./compnents/c-select.vue";
import CSelectOption from "./compnents/c-select-option.vue";

Vue.component('c-select-option', CSelectOption)
Vue.component('c-select', CSelect)
Vue.component('c-input', CInput)
Vue.component('c-button-group', CButtonGroup)
Vue.component('c-button', CButton)
Vue.component('c-icon', CIcon)

new Vue({
    el: '#app',
    data() {
        return {
            text1: 666
        }
    }
})
