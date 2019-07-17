<template>
 <div class="chat-Icon-wrapper" >
     <div class="class-icon" v-html="chatIcon" @click="toggleChatBox"></div>
 </div>
</template>

<script>


export default {
  name: 'ChatProperty',
  components: {},
  data() {
    return {
      chatIcon: '<i class="far fa-comments"></i>',
    };
  },
  methods: {
    toggleChatBox() {
      this.openChat ? this.chatIcon = '<i class="far fa-comments "></i>' : this.chatIcon = '<span>&#10005;</span>'
      this.$parent.toggleChatBox()
    }
  },
  props: ['openChat']
};
</script>

<style scoped>
.chat-Icon-wrapper {
  /* position: -webkit-sticky; /* Safari & IE */
  position: sticky;

}
.class-icon {
  width: 60px;
  height: 60px;
  background-color: #48c5b6;
  text-align: center;
  border-radius: 50%;
  padding-top: 12px;
  color: white;
  cursor: pointer;
  font-size: 22px;
  font-weight: 900;
}

.class-icon:hover {
  background-color: white; 
  color: #48c5b6;
}


  /* TRANSITION */
</style>
