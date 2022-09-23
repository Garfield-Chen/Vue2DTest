<template>
  <van-overlay :show="show" :lock-scroll="false" :z-index="index">
    <div class="popup-wrap col-lg-3 col-md-3 col-sm-10 col-xs-10 text-center" 
    :style="{ width: width + 'rem' }" :class="[{ has_btns: minorButtonText || mainButtonText || showTips }]">
      <div class="pop_c">
        <div class="close" v-if="isClearIcon" @click="handleIconClear">
          <!-- <img src="@/assets/images/games/close.png" alt="" /> -->
        </div>
        <div class="title_l font-agency" v-if="title">
          {{ title }}
        </div>

        <div class="g_content">
          <div class="content_flex fishScroll" @scroll="scrollLoading($event)">
            <slot>
              
            </slot>
          </div>
        </div>

        <slot name="btns">
          <!-- <btn-between
            :minorBtnText="minorButtonText"
            :mainBtnText="mainButtonText"
            :mainBtnClass="mainBtnClass"
            :minorBtnClass="minorBtnClass"
            @main="handleMain"
            @minor="handleMinor"
          /> -->
        </slot>
      </div>
    </div>
  </van-overlay>
</template>
<script>
import { Overlay } from "vant";
export default {
  props: {
    showTips: {
      type: Boolean,
      default: false,
    },
    // 弹窗显示或隐藏
    show: {
      type: Boolean,
      default: false,
    },
    // 是否显示取消图标
    isClearIcon: {
      type: Boolean,
      default: true,
    },
    // 容器宽
    width: {
      type: [Number, String],
      default: 8.4,
    },
    // 层级
    index: {
      type: [Number, String],
      default: 1010,
    },
    // 标题字符串
    title: {
      type: String,
      default: "",
    },
    // 主要的按钮
    mainButtonText: {
      type: String,
      default: "",
    },
    // 主要的按钮类名
    mainBtnClass: {
      type: String,
      default: "btn_main",
    },
    // 次要的按钮
    minorButtonText: {
      type: String,
      default: "",
    },
    // 次要的按钮类名
    minorBtnClass: {
      type: String,
      default: "btn_minor",
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  model: {
    prop: "show",
    event: "clear",
  },
  components: {
    vanOverlay: Overlay,
    // BtnBetween: (resolve) => require(["./BtnBetween"], resolve),
  },
  computed: {
    
  },

  methods: {

    scrollLoading(e) {
      const dom = e.target;
      var scrollTop = dom.scrollTop; //滑入屏幕上方的高度
      var windowHeitht = dom.clientHeight; //能看到的页面的高度
      var scrollHeight = dom.scrollHeight; //监控的整个div的高度（包括现在看到的和上下隐藏起来看不到的）
      let total = scrollTop + windowHeitht;
      if (parseInt(total) >= parseInt(scrollHeight) - 10) {
      console.log(total,'====加载==2',scrollHeight)
       this.$emit("alert-scroll", true);
      }
    },

    // 点击取消图标
    handleIconClear() {
      // this.$emit('change', false)
      this.$emit("clear", false);
    },

    // // 点击了主要按钮
    // handleMain() {
    //   this.$emit("alert-main", false);
    // },

    // // 点击了次要按钮
    // handleMinor() {
    //   this.$emit("alert-minor", false);
    // },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrap{
  background: #2B1D62;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 40px;
}
.title_l{
  font-size: 30px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0px auto 26px;
  text-transform: uppercase;
}
.close {
    width: 28px;
    height: 28px;
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.g_content {
  display: flex;
  flex-direction: column;
  flex: 1;
  // height: 100%;
  max-height: 600px;
  overflow-y: auto;
  flex-wrap: wrap;
  
}
.content_flex {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: none;
}
.content_flex::-webkit-scrollbar {
  display: none;
}

.g_content_bg{
  margin: 20px 8px;
  .content_flex{
    background: #A5F6FF;
  }
}

@media (max-width:768px){
  .popup-wrap{
    width: 80% !important;
    max-height: 70% !important;
    overflow-y: auto !important;
    padding: 15px;
  }
  .title_l{
    max-width: 70%;
    min-height: 30px;
    font-size: 30px;
    line-height: 30px !important;
    margin: 0px auto 15px;
    align-items: flex-start;
    justify-content: center;
  }
  .close {
    width: 28px;
    height: 28px;
    right: 15px;
    top: 20px;
  }
}
</style>