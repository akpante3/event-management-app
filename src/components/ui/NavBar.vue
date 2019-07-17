<template>
 <nav class="nav">
     <div class="menu-button" @click="toggleSideBar"><i class="fas fa-bars"></i> Menu</div>
     <div class="nav-mid-section">
       <div class="nav-item">search</div>
       <div class="nav-logo">
          <span>LOGO</span>
       </div>
       <div @click="toggleAuthModal" class="nav-item nav-mid-section-register">Register/login</div>
     </div>
     <div class="nav-item submit-button">Submit</div>
 </nav>
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
.nav {
  width: 100%;
  display: grid;
  border: 1px #e6eaea solid;
  background-color: #f4f7f6;
  grid-template-columns: 0.5fr 3.8fr 0.7fr;
}
.nav-item {
  cursor: pointer;
}
.nav-mid-section {
  display: grid;
  padding: 20px;
  grid-template-columns: 0.5fr 3fr 0.5fr;
}
.nav-logo {
  display: inline-block;
  text-align: center;
  font-family: 'Alfa Slab One', cursive;
  font-size: 20px;
}
.menu-button {
  border-right: 1px #e6eaea solid;
  padding: 20px;
  cursor: pointer;
}
.menu-button:hover {
  color: #128679
}
.submit-button {
  background-color: #48c5b6;
  text-align: center;
  color: white;
  padding: 20px;
}
.submit-button:hover {
  background-color: #128679;
}
.nav-mid-section-register {
  text-align: right;
}
.nav-mid-section-register:hover {
  color: #128679 ;
}
</style>

