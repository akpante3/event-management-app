<template>
  <div :class="['app', {'disable-page': showSideBar || showAuthModal}]">
    <div v-show="showAuthModal">
      <AuthModal />
    </div>
    <div class="chat-app-wrapper">
        <div :class="['chat-box',{'dont-display':!openChat}]">
          <ChatBox />
        </div>
        <div :class="['chat-icon', {'chat-icon-right': !openChat, 'chat-icon-left': openChat}]" >
          <ChatIcon :openChat="openChat" />
        </div>
    </div>
    <div :class="['wrapper', {'App-components': showSideBar}]">
        <div class="side-bar" v-show="showSideBar" >
            <SideBar/>
        </div>
        <div>
          <!-- black-overlay -->
          <div :class="{'modal-mask': showSideBar}" @click="toggleSideBar" />
          <div :class="{'disable-div': showSideBar}">
            <div class="nav-bar">
            <NavBar />
            </div>
              <router-view></router-view>
            <Footer />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/ui/footer';
import NavBar from '@/components/ui/NavBar';
import SideBar from '@/components/ui/SideBar';
import AuthModal from '@/components/ui/AuthModal';
import ChatIcon from '@/components/ui/ChatIcon';
import ChatBox from '@/components/ui/ChatBox';

export default {
  name: 'App',
  components: {
    Footer,
    NavBar,
    SideBar,
    AuthModal,
    ChatIcon,
    ChatBox,
  },
  data() {
    return {
      showSideBar: false,
      showAuthModal: false,
      openChat: false,
    };
  },
  computed: {
  },
  methods: {
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
    toggleAuthModal() {
      // console.log('click')
      this.showAuthModal = !this.showAuthModal;
    },
    toggleChatBox() {
      this.openChat = !this.openChat;
    },
  },
};
</script>

<style>
div {
  transition: 0.5s;
}
.chat-app-wrapper {
  position: absolute;
  right: 5%;
  height: 100%;
  pointer-events: none;
  z-index:10;
}
div .chat-icon {
  margin-left: 260px;
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  z-index:2;
  pointer-events:auto;
}
@media (max-width: 1024px) {

}
div .chat-box {
  position: sticky;
  top: 45%;
  z-index:2;
  pointer-events:auto;
}
.chat-icon-right {
  top: 90%;
}
.chat-icon-left {
  top: 45%;
}
.disable-page {
  max-height: 100vh;
  overflow: hidden;
}
.app {
  font-family: 'Rubik', sans-serif;
  background-color:  #f4f7f6;
  transform: translateX(0) !important;
  transition: transform 0.3s;
  position: relative;
  min-width: 1000px;
}
.modal-mask {
  position: fixed;
  z-index: 4;
  top: 0;
  width: 85%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.2s;
  overflow: hidden;
  animation: modalMask 1.5s ease forwards;
}

@keyframes modalMask {
  0%{ opacity: 0;}
  100%{ opacity: 1;}
}

div .wrapper {
  transition: 1s;
  min-width: 1000px;
}
.App-components {
  display:grid;
  overflow: hidden;
  grid-template-columns: 25% 100%;
}

.side-bar {
  width: 0%;
  animation: body 1.5s ease forwards;
}
@keyframes body {
  0%{ width: 0% }
  100%{ width: 25% }
}

.disable-div {
  pointer-events: none;
}
.dont-display {
  display: none;
}
</style>
