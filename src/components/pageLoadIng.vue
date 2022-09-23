<template>
  <div class="sum_loader-wrapper" v-if="modalText">
        <div class='cssload-loader'>
          <div class="cssload_img">
            <div class='cssload-inner cssload-one'></div>
            <div class='cssload-inner cssload-two'></div>
            <div class='cssload-inner cssload-three'></div>
          </div>
         
        </div>
         <p class="loading_text text-center">{{msg}}...</p>
    </div>
</template>

<script>
export default {
  props:['msg'],
  data() {
		return {
			minusFlag:false,
			modalText:'',
			timer:null,
		};
  },
  watch: {
		msg(newValue){
			// console.log(newValue)
			this.modalText = newValue
			
			if(newValue){
				let second = 2 * 60;
				this.timer = setInterval(() => {
					second--;
					if (second) {
						// console.log('=倒计时====',second)
						// toast.message = `倒计时 ${second} 秒`;
					} else {
						clearInterval(this.timer);
						 this.$emit("clear", true);
					}
				}, 1000);
			}else{
				if(this.timer) clearInterval(this.timer);
			}
		}
  }
}
</script>


<style scoped>
.sum_loader-wrapper {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 62.5%;
    width: 100vw;
    height: 100vh;
    background: rgba(31,29,50,.6); 
  }
  body.no-scroll {
    overflow: hidden; }

.sum_loader-wrapper {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999999999; }
  .cssload_img{
    height: 100px;
    position: relative;
  }
  .loading_text{
    min-width: 100%;
    position: absolute;
    left: 65%;
    top: 65%;
    transform: translate(-65%, -65%);
    width: 120px;
    margin-bottom:0 ;
    color: #f9a450;
    font-size: 14px;
    text-shadow: 0 0px 4px #f9a450;
  }
</style>