<template>
<div class="col-md-12 landing-page">
  <div class="landing-page__items">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
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
  width: 100%;
}
.landing-page__items {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 1.5em;
  position: relative;
  animation: landingPage 1.5s ease forwards;
}
@media (max-width: 768px) {
  .landing-page__items {
   grid-template-columns: 1fr 1fr;   
  }
}
@media (max-width: 420px) {
  .landing-page__items {
    grid-template-columns: 1fr;
    max-width: 800px; 
    padding: 30px 0px
  }
}


@keyframes landingPage {
  0%{ margin-top: 1000px }
  100%{ margin-top: 0  }
}
</style>
