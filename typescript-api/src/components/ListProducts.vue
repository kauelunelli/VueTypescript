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
      <div class="container-list" v-for="product in products" :key="product.id">
        <p>{{ product.product }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.categories }}</p>
        <p>{{ product.brand }}</p>
        <p>{{ product.price }}</p>
        <div class="container-svg">
          <a><img :src="editSVG" /></a>
        </div>
        <div class="container-svg">
          <a><img :src="deleteSVG" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ListProducts extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  })
  products!: Array<any>;
  public editSVG = require("../assets/edit.svg");
  public deleteSVG = require("../assets/delete.svg");
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
