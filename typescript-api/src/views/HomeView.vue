<template>
  <div class="home">
    <div class="button-container">
      <button class="btn" @click="openModalProduct">
        Cadastrar Novo Produto
      </button>
    </div>
    <div v-if="productModule.Error">
      <h1>Ocorreu um erro!</h1>
    </div>
    <MessageSucess
      v-if="showSucessMessage"
      :msg="msg"
      @close-sucess-message="closeSucessMessage"
    />
    <Loader v-if="productModule.Loading" />
    <ListProducts @send-id-to-delete="deleteProduct($event)" />
    <ModalProduct
      v-if="productModule.ShowModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "../services/product";
import ListProducts from "../components/ListProducts.vue";
import ModalProduct from "../components/ModalProduct.vue";
import Loader from "../components/Loader.vue";
import MessageSucess from "../components/messages/MessageSucess.vue";
import { Products } from "../store/Products";
import { getModule } from "vuex-module-decorators";

@Component({
  components: {
    ListProducts,
    ModalProduct,
    Loader,
    MessageSucess,
  },
})
export default class HomeView extends Vue {
  public showSucessMessage = false;
  public msg = "";
  public productModule = getModule(Products);

  public async deleteProduct(id: number) {
    try {
      this.productModule.context.commit("SET_LOADING_STATUS", true);
      this.showSucessMessage = false;
      await Product.delete(id);
      this.showSucessMessage = true;
      this.msg = "Deletado";
    } catch (error) {
      alert(error);
      this.productModule.context.commit("SET_ERROR_STATUS", true);
    } finally {
      this.productModule.context.commit("SET_LOADING_STATUS", false);
    }
  }
  public openModalProduct() {
    this.productModule.context.commit("SET_MODAL_STATUS", true);
  }
  public closeSucessMessage() {
    this.showSucessMessage = false;
  }
}
</script>
<style scoped>
.button-container {
  text-align: center;
}
.btn {
  cursor: pointer;
  margin: 40px;
  padding: 30px 60px;
  font-size: 18px;
  font-style: normal;
  text-decoration: none;
  line-height: 24px;
  color: white;
  border-radius: 12px;
  font-weight: 700;
  border: none;
  background: #e02b57;
}
.btn:hover {
  transform: scale(1.0175);
}
.btn:active {
  transform: scale(0.985);
}
</style>
