<template>
  <div class="main">
      <div id="map"></div>
      <picker></picker>
  </div>
</template>

<script>
import {initmap,togglelayer} from '../api/map.js'
import picker from '../component/picker.vue'
export default {
  data() {
    return {
      map:''
    }
  },
  components:{
    picker
  },
  name: 'index',
  methods: {
    test1(){
      togglelayer(this.map)
    },
  },
  mounted() {
    this.map=initmap(this.map);
  },
}
</script>
<style scoped>
#map{
  width:100%;
  height:100vh;
}
.testbtn{
  position:absolute;
  z-index: 9999;
  top: 25%;
  left: 25%;
}
</style>
