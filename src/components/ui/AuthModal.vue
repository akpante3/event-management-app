<template>
  <div class="">
      <div class="auth-modal-mask">
          <span class="auth-close-btn" @click="toggleAuthModal">&#10005;</span>
          <div class="auth-modal">
            <div class="auth-content">
                <div class="register-now">Register now</div>
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Password">
                <div class="auth-submit-btn">Submit</div>
                <div class="forgot-password">Forgot Password?</div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AuthModal',
  components: {},
  data() {
    return {

    };
  },
  methods: {
    toggleAuthModal() {
      this.$parent.toggleAuthModal();
    },
  },
};
</script>

<style scoped>
.auth-modal-mask {
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 1;
  transition: opacity 0.2s;
}

/* @keyframes modalMask {
  0%{ opacity: 0;}
  100%{ opacity: 1;}
} */

.auth-modal-mask .auth-modal {
  width: 600px;
  height: 600px;
  background-color: #f5f7f6;
  position: absolute;
  top: 10%;
  padding: 80px;
  animation: modalMask 1.5s ease forwards;
}

.auth-modal-mask .auth-modal input {
  padding: 20px;
  background-color: white;
  width: 100%;
  margin-bottom: 20px;
}
.auth-submit-btn {
  color: white;
  padding: 20px;
  width: 100%;
  background-color: #48c5b6;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.auth-close-btn {
  font-size: 25px;
  font-weight: 700;
  color: white;
  position: absolute;
  top: 4%;
  right: 4%;
  cursor: pointer;
}
.forgot-password {
  font-weight: 400;
  color: #48c5b6;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.register-now {
  font-weight: 400;
  color: #48c5b6;
  width: 100%;
  text-align: right;
  margin-bottom: 20px;
  cursor: pointer;
}
  /* TRANSITION */
</style>
