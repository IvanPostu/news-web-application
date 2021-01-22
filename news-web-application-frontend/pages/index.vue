<template>
  <div class="container">
    <div class="sliderContainer">
      <main-slider />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Slider from '@/components/Slider/Slider.vue'

export default Vue.extend({
  components: {
    MainSlider: Slider,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  layout(context) {
    return 'default'
  },
  methods: {
    clickHandler(event: MouseEvent) {
      console.log(event)
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;

  .sliderContainer {
    width: 950px;
  }
}
</style>
