<template>
  <div :class="`c-select ${selectListShow?'c-select-open':''}`">
    <div class="c-selected" @click="click">
      <span>{{ selectLabel }}</span>
      <c-icon icon-name="i-arrow-down"/>
    </div>
    <transition name="select-list">
      <div class="select-list" v-show="selectListShow">
        <slot></slot>
      </div>
    </transition>


  </div>
</template>

<script>
export default {
  name: "c-select",
  props: {
    defaultValue: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectListShow: false,
      selectLabel: '',
      // selectValue: ''
    }
  },
  methods: {
    click() {
      this.selectListShow = !this.selectListShow
    },
    clickItem(value, label) {
      this.selectLabel = label
      this.$emit('input',value)
      this.click()
    },

    /**默认值去匹配子选项，显示文本，value是子项的value值**/
    matchItem(value) {
      const matched = this.$slots.default.find(item => item.componentOptions&&item.componentOptions.tag === "c-select-option"&& item.componentOptions.propsData.value === value)
      if(matched) {
        this.selectLabel = matched.componentOptions.children[0].text
        // this.selectValue = matched.componentOptions.propsData.value
      }else{
        this.selectLabel = value
      }
    }
  },

  mounted() {
    //检查select组件种只能放c-button-group组件，抛出警告
    this.$slots.default.forEach(item => {
      if( item.tag!=undefined && !item.tag.includes("c-select-option") )
        console.warn(`c-select组件中只能是c-select-option，您应该删除：${ item.componentOptions ? item.componentOptions.tag : item.tag}标签`)
    })

    //默认选项
    this.matchItem(this.value === "" ? this.defaultValue : this.value)
  },

  watch: {
    // selectValue() {
    //   this.$emit('input',this.selectValue)
    // },
    value(){
      this.matchItem(this.value)
    }
  }
}


</script>

<style lang="less" scoped>
@color: #1890ff;
.c-select {
  cursor: pointer;
  width: fit-content;
  position: relative;


  .c-selected {
    height: 32px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #aaa;
    padding-left: 6px;
    padding-right: 6px;
    width: 100%;
    color: black;
    font-size: 14px;
    justify-content: space-between;
    background: white;

    &:hover {
      border-color: @color;
    }

    svg {
      transition: all 0.3s;
    }
  }

  .select-list-enter-active, .select-list-leave-active {
    transition: all 0.1s ease;
    transform-origin: 0 0;
  }

  .select-list-enter, .select-list-leave-to {
    transform: scaleY(0.8);
    opacity: 0;
  }


  .select-list {
    position: absolute;
    top: 32px;
    left: 0;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
    width: 100%;
    padding: 4px 0;
    z-index: 1;
  }
}

.c-select-open {
  .c-selected {
    border-color: @color;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, .2);

    svg {
      transform: rotateZ(180deg);
    }
  }
}
</style>