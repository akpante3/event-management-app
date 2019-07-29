<template>
<div class="chat-box">
  <div class="chat-box-header">
  </div>
  <div class="chat-section">
    <div class="chat-dialog">hi! am dave</div>
  </div>
  <div class="input-section">
    <i class="fa fa-paper-plane send-paper-plane" aria-hidden="true"></i>
    <input type="text" placeholder="type">
  </div>
</div>
</template>

<script>
export default {
  name: 'ChatBox',
  components: {},
  data() {},
};
</script>

<style scoped>
.chat-box-header {
  background-color: black;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.chat-dialog {
  width: 200px;
  height: 50px;
  background-color: #bae2de;
  border-radius: 15px 15px 15px 0px;
  padding: 10px;
  box-sizing: border-box;
  margin: 5px;
}
.chat-section {
  background-color:  #f4f7f6;
  position: relative;
  width: 100%;
}
.chat-box {
  width: 300px;
  height: 300px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  transition: 1s;
  display: grid;
  grid-template-rows: 1fr 6fr 0.8fr;
}

.chat-box .input-section {
  width: 100%;
}
.send-paper-plane {
  position: absolute;
  right: 0;
  margin: 10px;
  color: #bae2de;
  cursor: pointer;
}

.send-paper-plane:hover {
  color: #128679 ;
}

.chat-box .input-section input {
  width: 100%;
  border: none;
  height: 100%;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
}

  /* TRANSITION */
</style>
