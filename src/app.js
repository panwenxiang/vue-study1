import Vue from "vue";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(Antd);


import CButton from "./compnents/c-button.vue";
import CIcon from "./compnents/c-icon";
import CButtonGroup from "./compnents/c-button-group.vue";
import CInput from "./compnents/c-input.vue";
import CSelect from "./compnents/c-select.vue";
import CSelectOption from "./compnents/c-select-option.vue";
import CRow from "./compnents/c-row.vue";
import CCol from "./compnents/c-col.vue";

Vue.component('c-select-option', CSelectOption)
Vue.component('c-select', CSelect)
Vue.component('c-input', CInput)
Vue.component('c-button-group', CButtonGroup)
Vue.component('c-button', CButton)
Vue.component('c-icon', CIcon)
Vue.component('c-row',CRow)
Vue.component('c-col',CCol)


new Vue({
    el: '#app',
    data() {
        return {
            text1: 666,
            select: 'v111',
            selectA: '',
            input:'v222'
        }
    },
    methods: {
        change(data) {
            console.log("选择改变了：", data)
        },
    },
    watch:{
        input(value){
            this.select=value
        }
    }
})
