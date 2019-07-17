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
  animation: landingPage 3s ease forwards;
}

@keyframes landingPage {
  0%{ margin-top: 1000px }
  100%{ margin-top: 0  }
}
</style>
