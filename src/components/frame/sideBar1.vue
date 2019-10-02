<template>
  <div id="app" ref="app">
    <slider :width="300" format="push" direction="left" :opacity="0.15"></slider>
  </div>
</template>
<script>
import Slider from '@jeremyhamm/vue-slider'
export default {
  components: {
    'slider': Slider
  }
}
</script>