<template>
  <div id="app">
    <div class="bodyBackImg"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      slot_show: false,
    };
  },
};
</script>
<style lang="scss">
::-webkit-scrollbar {
    display: none;
}
</style>
