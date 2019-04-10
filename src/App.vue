<template>
  <div class="App" :class="{ active: showSideBar }">
    <div v-if="showSideBar">
      <SideBar />
    </div>
    <div class="">
      <NavBar />
        <router-view/>
      <Footer />
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
      showSideBar: false,
    };
  },
};
</script>

<style>
.App {
  font-family: "apercu",sans-serif;
  background-color:  #f4f7f6;
}
.active {
  display:grid;
  grid-template-columns: 30% 70%
}
</style>
