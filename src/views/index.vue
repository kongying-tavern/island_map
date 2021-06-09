<template>
  <div class="main">
      <div id="map"></div>
      <picker></picker>
  </div>
</template>

<script>
import {initmap} from '../api/map.js'
import picker from '../component/picker.vue'
export default {
  components: { picker },
  data() {
    return {
      map:''
    }
  },
  component:{
    picker
  },
  name: 'index',
  methods: {
  },
  mounted() {
    initmap(this.map);
  },
}
</script>
<style>
#map{
  width:100%;
  height:100vh;
}
</style>
