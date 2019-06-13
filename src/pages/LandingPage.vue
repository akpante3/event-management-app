<template>
<div class="col-md-12 landing-page">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
</div>

</template>

<script>
import Card from '@/components/ui/Card';


export default {
  name: 'LandingPage',

  components: {
    Card,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.landing-page {
    padding: 5% 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 1.5em;
    position: relative;
}

/* .opened::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 1;
    background-color: rgba(0, 0, 0, .5);
    transition: all .4s ease-in;
} */

  /* TRANSITION */
</style>
