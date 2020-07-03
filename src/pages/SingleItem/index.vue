<template>
    <div class="single-item">
      <div class="item-header">
          <SingleItemHeader />
      </div>
      <div class="single-item-body">
         <SingleItemDisplay />
      </div>
    </div>
</template>

<script>
import SingleItemHeader from './SingleItemHeader';
import SingleItemDisplay from './SingleItemDisplay';

export default {
  name: 'SingleItem',
  components: {
    SingleItemHeader,
    SingleItemDisplay,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.single-item-body {

}
.single-item {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.item-header {
    margin-bottom: 30px;
}


</style>
