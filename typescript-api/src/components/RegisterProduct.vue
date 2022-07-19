<template>
  <div class="register">
    <div class="register-container">
      <div class="register-title">
        <h3>Registrar um Produto</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RegisterProduct extends Vue {}
</script>
<style scoped>
.register {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(58, 56, 56, 0.5);
}

.register-container {
  max-width: 65vh;
  width: 100%;
  border-radius: 10px;
  background-color: white;
}
.register-title {
  display: grid;
  padding: 20px;
  text-align: center;
  align-items: center;
  grid-template-columns: 90% 10%;
}
</style>
