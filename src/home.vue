<template>
  <div class="new-main">
    <Header class="header" />
    <Map class="map" />
    <Main class="newmain" />
    <Bottom class="newbottom" />
  </div>
</template>
<script>
import Header from './views/header.vue'
import Map from './views/map.vue'
import Main from './views/main.vue'
import Bottom from './views/bottom.vue'
export default {
  data() {
    return {};
  },
  components:{
      Header,
      Map,
      Main,
      Bottom
  },
  
};
</script>
