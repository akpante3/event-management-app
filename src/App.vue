<template>
<div class="App">
  <div :class="{'App-components': showSideBar}">
      <div class="" v-if="showSideBar" >
          <SideBar/>
      </div>
      <div>
        <!-- black-overlay -->
        <div :class="{'modal-mask': showSideBar}" @click="toggleSideBar" />
        <button @click="toggleSideBar"> click me </button>
        <NavBar />
          <router-view/>
        <Footer />
      </div>
  </div>
</div>
</template>

<script>
import Footer from '@/components/ui/footer';
import NavBar from '@/components/ui/NavBar';
import SideBar from '@/components/ui/SideBar';

export default {
  name: 'App',
  components: {
    Footer,
    NavBar,
    SideBar,
  },
  data() {
    return {
      showSideBar: true,
    };
  },

  methods: {
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
  },
};
</script>

<style>
.App {
  font-family: "apercu",sans-serif;
  background-color:  #f4f7f6;
   /* transform: translateX(0) !important;
  transition: transform 0.3s; */
}
.modal-mask {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 85%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 1;
  transition: opacity 0.2s ease;
  overflow: hidden;
}
.App-components {
  display:grid;
  grid-template-columns: 25% 100%;
  overflow: hidden;
  transition: opacity 0.9s ease;
}
</style>
