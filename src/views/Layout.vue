<template>
  <div class="layout">
    <!-- <Header @headerNavFun="headerNavFun()" @toastTextFun="toastTextFun()" 
    :connectWallet="this.$store.state.connectWallet" 
    :account="this.$store.state.accounts"
    :menuList="menuList"
    /> -->
    <div class="sum_main">
      <router-view class="warp"></router-view>
    </div>
    <div class="footerPosition">
      <!-- <Footer/> -->
    </div>
    
    <!-- FOOTER END color-white-->
    <a href="#" id="toTop" class="color-red">
        <i class="fa fa-angle-up fsize-14" aria-hidden="true"></i>
	  </a>
    <Page-loading :msg="msg"></Page-loading>
    <Page-loading :msg="$store.state.msg"></Page-loading>
  </div>
</template>

<script>
import '@/assets/js/flexmenu.min.js'

export default {
  data() {
    return {
      msg:'',
      menuList:[
        // {index:1, name: "Home", path: "https://sumgames.io/" },
      ]
    };
  },
  components: {
    Header: (resolve) => require(["@/components/menu"], resolve),
    Footer: (resolve) => require(["@/components/footer"], resolve),
    Alert: (resolve) => require(["@/components/Alert"], resolve),
    PageLoading: (resolve) => require(["@/components/pageLoadIng"], resolve),
  },
  watch: {},
  created() {    
  },
  mounted() {
    //移动端导航菜单隐藏
    this.toggleMenuFun()
    },
  methods: {
    headerNavFun(){
      /*----------------------------------------------------*/
      /* Toggle menu
      /*----------------------------------------------------*/
      $( ".toggle_menu" ).toggleClass( 'open' );
      if( $( ".toggle_menu" ).hasClass( 'open' ) )
      {
        $( '.menu' ).addClass( 'open' );
        $( 'body' ).addClass('no-scroll');
      }
      else
      {
        $( '.menu' ).removeClass( 'open' );
        $( '.menu-item-has-children' ).removeClass( 'open-list' );
        $( 'body' ).removeClass( 'no-scroll' );
      }
    },
    toggleMenuFun(){
      $( ".toggle_menu" ).removeClass( 'open' );
      $( '.menu' ).removeClass( 'open' );
      $( '.menu-item-has-children' ).removeClass( 'open-list' );
      $( 'body' ).removeClass( 'no-scroll' );
    },
  },
  updated(){
    //移动端导航菜单隐藏
    this.toggleMenuFun()
  },
};
</script>
<style lang="scss" scoped>
.metaMaskText{
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  margin-top: 20px;
}
.sum_main{
  width: 100%;
  // height: auto;
  height: 100%;
  z-index: 1;
}
.layout{
  position: relative;
  // background:rgba(31, 29, 50, 1) url('../assets/images/body_back.jpg') no-repeat center bottom/100%;
}
.footerPosition{
  width: 100%;
  height: auto;
  // position: absolute;
  // bottom: 0px;
}
.buyBtn{
  width: 148px;
  height: 48px;
  font-size: 20px;
  margin-top: 30px;
}
@media (max-width:1600px){
  .layout{
    // background:rgba(31, 29, 50, 1) url('../assets/images/body_back.jpg') no-repeat center bottom/1919px 1958px;
  }

}
@media (max-width:768px){
    .layout{
      // background:url('../assets/images/games/h5/bottom.png') no-repeat center bottom/100% 255px;
    }
}
</style>
