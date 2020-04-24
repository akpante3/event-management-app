<template>
<div class="footer col-md-12">
    <h5 class="col-md-8">The awards for design, creativity and innovation on the Internet</h5>
    <h5 class="" >Next Confrences </h5>
  <ul class="mt-2">
    <li><strong>ipsum </strong></li>
    <li>ipsum</li>
    <li>ipsum</li>
    <li>ipsum</li>
    <li>ipsum</li>
  </ul>
  <p>Private Cloud by <strong> Stackscale</strong></p>
  <div>
    <font-awesome-icon class="mr-3" :icon="[ 'fab', 'facebook-f' ]" />
    <font-awesome-icon class="mr-3" :icon="[ 'fab', 'twitter' ]"/>
    <font-awesome-icon class="icons" :icon="[ 'fab', 'instagram' ]"/>
  </div>
</div>

</template>

<script>


export default {
  name: 'Footer',

  components: {

  },
  data() {
    return {

    };
  },

};
</script>

<style scoped>
.footer {
  background-color: white;
  padding: 3rem;
  min-width: 100px;
}
h5 {
  display: inline-block;
  padding: 0px;
}
ul {
  padding: 0px;
}

ul li {
  display: inline-block;
  padding-right: 5px;
}
  /* TRANSITION */
</style>
