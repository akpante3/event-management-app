<template>
<div>
  <div class="side-bar">
  <div>
    <ul class="list">
      <li class="close-btn"><span @click="toggleSideBar" >&#10005;</span></li>
      <li><p @click="toggleAuthModal">Register/Login</p></li>
      <li><p>Home</p></li>
      <li><p>Winner</p></li>
      <li><p>Noinee's</p></li>
      <li><p>Register/Login</p></li>
      <li><p>Home</p></li>
      <li><p>Winner</p></li>
      <li><p>Noinee's</p></li>
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
  methods: {
    toggleSideBar() {
      this.$parent.toggleSideBar();
    },
    toggleAuthModal() {
      this.$parent.toggleAuthModal();
    },
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
  transition: 1s;
}
ul {
 text-decoration: none !important;
 list-style: none;
 padding: 0;
}
ul li {
  border-bottom: 1px solid rgb(189, 188, 188);
}
.close-btn {
  padding: 20px;
  text-align: right;
}
.close-btn span {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

ul li p{
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 0;
}

ul li:hover {
  background-color: white;
}
/** transition **/

@media only screen and (max-width: 400px) {

}
</style>
