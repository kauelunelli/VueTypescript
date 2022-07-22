<template>
  <div @click="closeSucessMessage" class="modal-message">
    <div class="message">
      <h3 class="text-message">{{ msg }} com sucesso!</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class MessageSucess extends Vue {
  @Prop({ type: String, required: false, default: false })
  readonly msg!: string;

  @Emit("close-sucess-message")
  public closeSucessMessage() {
    return;
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
  padding: 5px;
  border-radius: 5px;
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
