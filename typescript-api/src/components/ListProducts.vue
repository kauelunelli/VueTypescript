<template>
  <div>
    <div class="table">
      <div class="container-title">
        <p>Produto</p>
        <p>Descrição</p>
        <p>Categoria</p>
        <p>Marca</p>
        <p>Preço</p>
      </div>
      <div
        class="container-list"
        v-for="product in productModule.Products"
        :key="product.id"
      >
        <p>{{ product.product }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.categories }}</p>
        <p>{{ product.brand }}</p>
        <p>{{ product.price }}</p>
        <div class="container-svg">
          <a data-testid="editBtn" @click="sendProductToEdit(product.id)"
            ><img :src="editSVG"
          /></a>
        </div>
        <div class="container-svg">
          <a data-testid="deleteBtn" @click="sendIdToDelete(product.id)"
            ><img :src="deleteSVG"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { Products } from "../store/Products";
import { getModule } from "vuex-module-decorators";

@Component
export default class ListProducts extends Vue {
  @Emit("send-id-to-delete")
  public sendIdToDelete(id: number) {
    return id;
  }

  public editSVG = require("../assets/edit.svg");
  public deleteSVG = require("../assets/delete.svg");
  public productModule = getModule(Products);

  async mounted() {
    await this.productModule.fetchProducts();
  }
  async sendProductToEdit(id: number) {
    await this.productModule.fetchEditProduct(id);
  }
}
</script>
<style scoped>
.table {
  margin-top: 100px;
  border-bottom: 1px solid #b9b5b5;
  border-top: 1px solid #000000;
}

.container-title {
  font-weight: bold;
  font-size: 18px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 4vh;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #000000;
}

.container-list {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 5vh;
  align-items: center;
  padding: 10px;
}

.form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  margin-top: 25px;
}
</style>
