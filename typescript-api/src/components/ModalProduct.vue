<template>
  <div class="register">
    <div class="register-container">
      <div class="register-title">
        <h3>Registrar um Produto</h3>
      </div>
      <div class="form-content">
        <input
          class="input"
          type="text"
          v-model="product.product"
          placeholder="Produto"
        />
        <input
          class="input"
          type="text"
          v-model="product.description"
          placeholder="Descrição"
        />
        <input
          class="input"
          type="text"
          v-model="product.categories"
          placeholder="Categoria"
        />
        <input
          class="input"
          type="text"
          v-model="product.brand"
          placeholder="Marca"
        />
        <input
          class="input"
          type="text"
          v-model="product.countryOrigin"
          placeholder="Pais de origem"
        />
        <input
          class="input"
          type="number"
          v-model="product.price"
          placeholder="Preço"
        />
        <input
          class="input"
          type="number"
          v-model="product.promo"
          placeholder="Preço promoção"
        />
        <input
          class="input"
          type="date"
          v-model="product.validity"
          placeholder="Validade"
        />
        <input
          class="input"
          type="text"
          v-model="product.temperature"
          placeholder="Temperatura"
        />
      </div>
      <button @click="isEditOrSave">Salvar</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { IProduct } from "../types";
import { Products } from "../store/Products";
import Product from "../services/product";
import { getModule } from "vuex-module-decorators";

@Component
export default class ModalProduct extends Vue {
  public productModule = getModule(Products);
  public product: IProduct = {
    product: "",
    description: "",
    categories: "",
    brand: "",
    countryOrigin: "",
    price: "",
    promo: "",
    validity: "",
    temperature: "",
  };
  private mounted() {
    this.product = this.productModule.EditProduct;
  }

  public isEditOrSave() {
    if (this.product.id) {
      this.saveEditProduct();
    } else {
      this.saveProduct();
    }
  }

  private async saveProduct() {
    try {
      this.productModule.context.commit("SET_LOADING_STATUS", true);
      this.productModule.context.commit("SET_MODAL_STATUS", false);
      await Product.save(this.product);
      this.showSucessMessage = true;
      this.msg = "Salvo";
    } catch (error) {
      alert(error);
      this.productModule.context.commit("SET_ERROR_STATUS", true);
    } finally {
      this.productModule.context.commit("SET_MODAL_STATUS", false);
      this.productModule.context.commit("SET_LOADING_STATUS", false);
    }
  }
  private async saveEditProduct() {
    try {
      this.productModule.context.commit("SET_LOADING_STATUS", true);
      this.productModule.context.commit("SET_MODAL_STATUS", false);
      await Product.edit(this.product.id, this.product);
      this.showSucessMessage = true;
      this.msg = "Editado";
    } catch (error) {
      alert(error);
      this.productModule.context.commit("SET_ERROR_STATUS", true);
    } finally {
      this.productModule.context.commit("SET_MODAL_STATUS", false);
      this.productModule.context.commit("SET_LOADING_STATUS", false);
    }
  }
}
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
  animation: scale-up-center 1s;
  max-width: 65vh;
  width: 100%;
  border-radius: 10px;
  padding: 50px;
  background-color: white;
}

.register-title {
  display: grid;
  padding: 10px;
  text-align: center;
  align-items: center;
  grid-template-columns: 90% 10%;
}

.form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  margin-top: 20px;
}

.input {
  border: 2px solid #000000;
  border-radius: 4px;
  background-color: white;
  height: 56px;
  padding: 10px;
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
