<template>
  <div @click="closeModalCookies">
    <div class="modal">
      <h2>
        Ao usar esse site você concorda com uso de Cookies. Exato vc n tem
        escolha :D
      </h2>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: absolute;
  padding: 20px;
  z-index: 999;
  right: 0;
  bottom: 0;
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  background-color: rgba(20, 19, 19, 0.5);
  border-radius: 5px;
}
</style>
<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { Products } from "../store/Products";
import { getModule } from "vuex-module-decorators";

@Component
export default class ModalCookies extends Vue {
  public productModule = getModule(Products);
  public closeModalCookies() {
    this.productModule.context.commit("SET_MODAL_COOKIES", false);
  }
}
</script>
