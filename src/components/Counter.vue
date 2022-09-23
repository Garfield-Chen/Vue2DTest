<template>
  <countTo :startVal='startVal' :endVal='endVal' :duration='3000' :separator="''"></countTo>
</template>
<script>
import countTo from 'vue-count-to';
export default {
    props: {
        endVal: {
            type: Number,
            default: 0
        },
    },
    data(){
        return{
            startVal:0
        }
    },
    components: {
        countTo
    },
}
</script>
