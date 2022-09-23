<template>
  <div>
    <!-- HEADER START -->
    <div class="header-line-wrapper" id="home">
        <header class="header-wrapper fixed-top plr100">
            <div class="table height-100p">
                <div class="table-row">
                    <div class="table-cell valign-middle text-left">
                        <a href="#" target="index" class="logo wow fadeInRight">
                            <img src="@/assets/images/logo.png" alt="" class="img-responsive inline-block">
                        </a>
                    </div>
                    <div class="table-cell valign-top text-right nav_btn">
                        <div class="right-bl">
                            <div class="search-wrapper inline-block valign-middle">
                                <form class="search-content" action="#">
                                    <input type="text" placeholder="Search Keyword...">
                                    <button class="color-white">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    <div class="table-cell valign-top text-left vm-sm">
                        <div class="main-menu">
                            <span class="toggle_menu" @click="headerNavFun()">
                                <span></span>
                            </span>
                            <ul class="menu clearfix font-agency font-roboto">
                                <li class="inline-block">
                                    <a href="#" class=""> Home </a>
                                </li>
                                <li class="inline-block" v-for="item in menuList" :key="item.index">
                                    <router-link :to="item.path"> {{item.name}} </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="table-cell valign-top text-right nav_btn">
                        <div class="right-bl">
                            <div class="search-wrapper inline-block valign-middle">
                                <form class="search-content" action="#">
                                    <input type="text" placeholder="Search Keyword...">
                                    <button class="color-white">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  </div>
</template>

<script>
import '@/assets/css/responsive.css'
import '@/assets/js/bootstrap.min.js'
import '@/assets/js/flexmenu.min.js'
import '@/assets/js/slick.min.js'
import '@/assets/js/script.js'
export default {
  props:{
    connectWallet:{
      type:Boolean,
      default:true
    },
    account:{
      // type:String,
      // default:'1212'
    },
    menuList:{
      type:Array,
      default:''
    },
  },
  methods:{
    headerNavFun(){
      this.$emit("headerNavFun")
    },
    flexMenuFun(){
      /*----------------------------------------------------*/
      /* Adaptive Menu Width991
      /*----------------------------------------------------*/
        var winObj = $( window ),
        bodyObj = $( 'body' ),
        headerObj = $( 'header' );
        var ulMenu1 = $( 'ul.menu' );
        winObj.on( 'resize', function()
        {	
          if( $( this ).width() > 991 )
            {
              ulMenu1.flexMenu();
            }
        } );
        winObj.on( 'load', function()
        {
          if( winObj.innerWidth() > 991 )
          {
            ulMenu1.flexMenu();
          }
        } );

        headerObj.on( 'click', '.flexMenu-viewMore', function()
        {
          $( this ).toggleClass( 'active' );
        } );
      },
    toastTextFun(){
      this.$emit("toastTextFun")
    },
  },
  mounted() {
    
    new this.$WOW.WOW().init();
    this.flexMenuFun();
    /*----------------------------------------------------*/
    /* Fixed Menu
    /*----------------------------------------------------*/
	  var nav = $( '.header-line-wrapper' ),
		navHide = $( '.header-wrapper' );

	  var winObj = $( window )

    winObj.on( 'scroll', function()
    {		
      if( winObj.scrollTop() > navHide.height() - 20 )
      {
        nav.addClass( 'affix-top' );
      }
      else
      {
        nav.removeClass( 'affix-top' );
      }
    });
    document.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        $( ".toggle_menu" ).removeClass( 'open' );
        $( '.menu' ).removeClass( 'open' );
        $( '.menu-item-has-children' ).removeClass( 'open-list' );
        $( 'body' ).removeClass( 'no-scroll' );
      }
    });
  },

  

}
</script>

<style scoped lang="scss">
.isactive{
  color: #3dd0d8 !important;
}
.nav_btn{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.logo img{
    width: 165px;
  }
.menu{
    // max-height: 900px;
    /* overflow: hidden; */
    /* display: flex;
    flex-wrap: nowrap; */
}
.main-menu .menu.open{
  height:100%;
  z-index: 99999;
}
.main-menu {
    margin-left: -100px;
}
.menu-btn {
    width: 220px;
    height: 60px;
    line-height: 59px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    padding: 0;
    color: #fff;
    text-align: right;
    /* border: 2px solid #7c69e3; */
    transition: all 0.3s ease-out; }
    .menu-btn:hover {
      /* border: 2px solid #3dd0d8; */
      /* background: #3dd0d8 !important; */
      color:#3dd0d8 ;
      transition: all 0.3s ease-out;
}
@media (max-width:768px){
  .nav_btn{
    justify-content: flex-start;
  }
  .menu-btn{
    width: 150px;
    height: 60px;
    line-height: 59px;
    margin-left: 0px;
    font-size: 14px;
    text-align: center;
    margin-right: -10px;
    color: #A5F6FF;
  }
  .logo img{
    width: 130px;
  }
  header{
    height: 80px;
  }
  .header-line-wrapper.affix-top header{
    height: 60px;
  }
  header .main-menu .toggle_menu:before, header .main-menu .toggle_menu span, header .main-menu .toggle_menu span:before, header .main-menu .toggle_menu span:after{
    width: 25px;
  }
  .h5font-size10{
    font-size: 10px !important;
  }
}
</style>
