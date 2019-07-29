<template>
<div class="circle">
<svg width="40px" height="40px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle
      id="ratings"
      :stroke="color"
      cx="20"
      cy="20"
      r="19"
      :stroke-dashoffset="strokeOffset"
      stroke-dasharray="100"
      fill="none"
      stroke-width="1"
     ></circle>
     <text
      id="circle-text"
      x="20" y="25"
      text-anchor="middle"
      alignment-baseline="middle"
      :fill="color"
     > {{itemRating}} </text>
</svg>

</div>
</template>

<script>
// :opacity="properties.opacity"
// :stroke-opacity="properties.strokeOpacity"
// :fill-opacity="properties.fillOpacity"

export default {
  name: 'Footer',
  components: {},
  data() {},
  props: ['color', 'strokeOffset', 'itemRating'],
};
</script>

<style scoped>
.ratings {
  color: black;
}
.circle {
  display: inline-block;
  cursor: pointer;
}
circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  position: relative;
}
#circle-text {
  position: absolute;
  top: 50%
}
  /* TRANSITION */
</style>
