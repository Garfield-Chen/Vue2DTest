<template>
  <ul class="btns" :class="{ not_main: !mainBtnText }" v-if="minorBtnText || mainBtnText">
    <li v-if="minorBtnText">
      <button class="btn left" :class="[language === 'en-us' ? 'btn-en' : '',minorBtnClass]" @click="handleMinor">
        {{ minorBtnText }}
      </button>
    </li>
    <li v-if="mainBtnText">
      <button class="btn right" :class="[language === 'en-us' ? 'btn-en' : '',mainBtnClass]" @click="handleMain">
        {{ mainBtnText }}
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name:'Buttons',
  // 红色=>取消、拒绝 btn_cancel  
  // 绿色=>授权 btn_shou
  // 蓝色=>同意 btn_main
  // 橙色=>转赠、赎回 btn_minor
  props: {
    // 主要的按钮
    mainBtnText: {
      type: String,
      default: "",
    },
    // 主要的按钮类名
    mainBtnClass: {
      type: String,
      default: "btn_main",
    },
    // 次要的按钮
    minorBtnText: {
      type: String,
      default: "",
    },
    // 次要的按钮类名
    minorBtnClass: {
      type: String,
      default: "btn_minor",
    },
  },
  data(){
    return{
      language: window.localStorage.getItem("language"),
    }
  },
  methods: {
    // 点击了主要按钮
    handleMain() {
      this.$emit("main", false);
    },

    // 点击了次要按钮
    handleMinor() {
      this.$emit("minor", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.btns{
  height: 60px;
  // padding-top: 5px;
  display: flex;
  justify-content: center;
  // align-items: center;
}
.left{
  margin-right: 27px;
}
.not_main .left {
  margin-right: 0;
}
.btn-en{
  line-height: 1;
}
</style>