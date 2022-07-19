<template>
  <div class="home">
    <div class="button-container">
      <button class="btn" @click="openRegister()">Cadastra Novo Usuario</button>
    </div>
    <Loader v-if="isLoading" />
    <ListProducts :products="products" />
    <RegisterProduct v-if="showRegister" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "../services/product";
import ListProducts from "@/components/ListProducts.vue";
import RegisterProduct from "@/components/RegisterProduct.vue";
import Loader from "../components/Loader.vue";

@Component({
  components: {
    ListProducts,
    RegisterProduct,
    Loader,
  },
})
export default class HomeView extends Vue {
  private showRegister = false;
  private products = [];
  private isLoading = false;

  async mounted() {
    try {
      this.isLoading = true;
      const response = await Product.list();
      this.products = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.isLoading = false;
      console.log(this.products);
    }
  }
  public openRegister() {
    this.showRegister = true;
  }
}
</script>
<style scoped>
.button-container {
  text-align: end;
}
.btn {
  cursor: pointer;
  margin: 40px;
  padding: 20px 40px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  font-weight: bold;
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
