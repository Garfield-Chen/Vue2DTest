<template>
  <div>
<footer class="footer T_block font-roboto" style="background: rgba(24,23,40,.4);padding-bottom: 50px;">
        <div class="container">
            <div class="row mb40">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer_logo">
                    <a href="index.html" class="wow fadeInRight">
                        <!-- <img src="@/assets/images/logobottom.png" width="165px" alt=""> -->
                    </a>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-right marign-bottom0">
                    <div class="font-roboto h5fontSixze10">
                        <!-- In 2210, mankind has discovered 
                        <br /> countless planetary civilizations. In the uncertain and  -->
                        sumgames breaks through the barriers between different games
                    </div>
                    <div class="social-content mt30">
                        <div class="social-list">
                            <a href="https://www.facebook.com/SumGames-102874945517090/" target="facebook">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="social-list">
                            <a href="https://twitter.com/SumGames01" target="twitter">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="social-list">
                            <a href="https://discord.gg/yYBp9ak3" target="discord">
                                <i class="iconfont icon-discord1" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="social-list">
                            <a href="https://t.me/SumGamesNFTMetaverse" target="sumgamesEnglish">
                                <i class="iconfont icon-telegram" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="social-list">
                            <a href="https://www.certik.com/projects/sumgames" target="sumgames">
                                <i class="iconfont icon-certik1" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="copyright ptb30 col-lg-12 h5fontSixze10">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 font-roboto ">
                        sumgames © copyright 2021
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right font-roboto">
                        all rights reserved
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/font/iconfont.css'
export default {
  mounted(){
    new this.$WOW.WOW().init();
  }
}
</script>


<style scoped lang="scss">

.footer{
    font-size: 12px;
}
.social-list i{
    font-size: 16px !important;
}
@media (max-width:768px){
    .mt30{
        margin-top: 10px;
    }
    .mb40{
        margin-bottom: 0px;
    }
    /* .footer [class*='col-']{
        margin-bottom: 5px;
    } */
    .footer_logo{
        margin: 0px auto 20px !important;
        img{
            width: 129px;
        }
    }
    footer.footer{
        padding-top: 20px;
    }
    .h5fontSixze10{
        font-size: 10px;
    }
    .copyright{
        padding-top: 10px;
    }
    .copyright,.copyright div{
        margin-bottom: 0px !important;
    }
    .marign-bottom0{
        margin-bottom: 10px !important;
    }
}
</style>