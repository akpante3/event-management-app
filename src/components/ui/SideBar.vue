<template>
<div>
  <div class="side-bar">
  <div>
    <ul class="list">
      <li>Register/Login</li>
      <li>Home</li>
      <li>Winner</li>
      <li>Noinee's</li>
      <li>Register/Login</li>
      <li>Home</li>
      <li>Winner</li>
      <li>Noinee's</li>
    </ul>
  </div>
  </div>
    <!-- <div class="modal-mask">
    </div> -->
</div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.side-bar {
  width: 25%;
  height: 100%;
  position: fixed;
  background-color: none;
  transform: translateX(0) !important;
  transition: transform 2s;
  overflow: hidden;
}
ul {
 text-decoration: none !important;
 list-style: none;
}
ul li {
  padding: 7px;
}
/** transition **/

@media only screen and (max-width: 400px) {

}
</style>
