<template>
  <div
    data-testid="closeMessage"
    @click="closeSucessMessage"
    class="modal-message"
  >
    <div class="message">
      <h3 class="text-message">{{ productModule.Message.msg }} com sucesso!</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { Products } from "../../store/Products";

@Component
export default class MessageSucess extends Vue {
  public productModule = getModule(Products);

  public closeSucessMessage() {
    this.productModule.context.commit("SET_MESSAGE_STATUS", {
      state: false,
      msg: "",
    });
  }
}
</script>

<style scoped>
.modal-message {
  top: 0;
  left: 0;
}

.message {
  animation: scale-up-center 1s;
  background: rgb(167, 221, 167);
  border-radius: 5px;
  padding: 5px;
  display: grid;
  justify-content: center;
  text-align: center;
  justify-items: center;
  margin: 10px;
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
