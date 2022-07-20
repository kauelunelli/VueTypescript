<template>
  <div class="home">
    <div class="button-container">
      <button class="btn" @click="openRegister">Cadastrar Novo Produto</button>
    </div>
    <MessageSucess
      v-if="showSucessMessage"
      @close-sucess-message="closeSucessMessage"
      :msg="msg"
    />
    <Loader v-if="isLoading" />
    <ListProducts
      @send-id-to-delete="deleteProduct($event)"
      :products="products"
      @send-product-to-edit="openRegister($event)"
    />
    <RegisterProduct
      v-if="showRegister"
      :editProduct="editProduct"
      @send-product-save="isEditOrSave($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "../services/product";
import ListProducts from "../components/ListProducts.vue";
import RegisterProduct from "../components/RegisterProduct.vue";
import Loader from "../components/Loader.vue";
import MessageSucess from "../components/messages/MessageSucess.vue";

@Component({
  components: {
    ListProducts,
    RegisterProduct,
    Loader,
    MessageSucess,
  },
})
export default class HomeView extends Vue {
  private products = [];
  public showRegister = false;
  public isLoading = false;
  public showSucessMessage = false;
  public msg = "";
  public editProduct = [];

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
  public isEditOrSave(product) {
    if (product.id) {
      this.saveEditProduct(product);
    } else {
      this.saveProduct(product);
    }
  }
  private async saveProduct(product) {
    try {
      this.isLoading = true;
      this.showSucessMessage = false;
      const response = await Product.save(product);
      console.log(response);
      this.showSucessMessage = true;
      this.msg = "Salvo";
    } catch (error) {
      console.log(error);
    } finally {
      this.showRegister = false;
      this.isLoading = false;
    }
  }
  private async saveEditProduct(product: Array<any>) {
    try {
      this.isLoading = true;
      this.showSucessMessage = false;
      const resp = await Product.edit(product.id, product);
      console.log(resp);
      this.showSucessMessage = true;
      this.msg = "Editado";
    } catch (error) {
      alert(error);
    } finally {
      this.showRegister = false;
      this.isLoading = false;
    }
  }
  public async deleteProduct(id: number) {
    try {
      this.isLoading = true;
      this.showSucessMessage = false;
      const resp = await Product.delete(id);
      console.log(resp);
      this.showSucessMessage = true;
      this.msg = "Deletado";
    } catch (error) {
      alert(error);
    } finally {
      this.isLoading = false;
    }
  }

  public openRegister(product: Array<any>) {
    this.editProduct = product;
    this.showRegister = true;
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
