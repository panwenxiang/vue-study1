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
import CTabs from "./compnents/c-tabs/c-tabs.vue";
import CTabsHead from "./compnents/c-tabs/c-tabs-head.vue";
import CTabsBody from "./compnents/c-tabs/c-tabs-body.vue";
import CTabsItem from "./compnents/c-tabs/c-tabs-item.vue";
import CTabsPane from "./compnents/c-tabs/c-tabs-pane.vue";

Vue.component('c-select-option', CSelectOption)
Vue.component('c-select', CSelect)
Vue.component('c-input', CInput)
Vue.component('c-button-group', CButtonGroup)
Vue.component('c-button', CButton)
Vue.component('c-icon', CIcon)
Vue.component('c-row',CRow)
Vue.component('c-col',CCol)
Vue.component('c-tabs',CTabs)
Vue.component('c-tabs-head',CTabsHead)
Vue.component('c-tabs-body',CTabsBody)
Vue.component('c-tabs-item',CTabsItem)
Vue.component('c-tabs-pane',CTabsPane)


new Vue({
    el: '#app',
    data() {
        return {
            text1: 666,
            select: 'v111',
            selectA: '',
            input:'v222',
            selectTab:'sports'
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
