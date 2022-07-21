<template>
  <div class="home">
    <div class="button-container">
      <button class="btn" @click="openModalProduct">
        Cadastrar Novo Produto
      </button>
    </div>
    <MessageSucess
      v-if="showSucessMessage"
      :msg="msg"
      @close-sucess-message="closeSucessMessage"
    />
    <Loader v-if="isLoading" />
    <ListProducts
      :products="products"
      @send-id-to-delete="deleteProduct($event)"
      @send-product-to-edit="openModalProduct($event)"
    />
    <ModalProduct
      v-if="showModalProduct"
      :editProduct="editProduct"
      @send-product-save="isEditOrSave($event)"
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
import { IProduct } from "../components/types";

@Component({
  components: {
    ListProducts,
    ModalProduct,
    Loader,
    MessageSucess,
  },
})
export default class HomeView extends Vue {
  public products: Array<IProduct> = [];
  public showModalProduct = false;
  public isLoading = false;
  public showSucessMessage = false;
  public msg = "";
  public editProduct!: IProduct;

  async mounted() {
    try {
      this.isLoading = true;
      const response = await Product.list();
      this.products = response.data;
    } catch (error) {
      alert(error);
    } finally {
      this.isLoading = false;
    }
  }
  public isEditOrSave(product: IProduct) {
    if (product.id) {
      this.saveEditProduct(product);
    } else {
      this.saveProduct(product);
    }
  }
  private async saveProduct(product: IProduct) {
    try {
      this.isLoading = true;
      this.showSucessMessage = false;
      const response = await Product.save(product);
      this.showSucessMessage = true;
      this.msg = "Salvo";
    } catch (error) {
      alert(error);
    } finally {
      this.showModalProduct = false;
      this.isLoading = false;
    }
  }
  private async saveEditProduct(product: IProduct) {
    try {
      this.isLoading = true;
      this.showSucessMessage = false;
      const resp = await Product.edit(product.id, product);
      this.showSucessMessage = true;
      this.msg = "Editado";
    } catch (error) {
      alert(error);
    } finally {
      this.showModalProduct = false;
      this.isLoading = false;
    }
  }
  public async deleteProduct(id: number) {
    try {
      this.isLoading = true;
      this.showSucessMessage = false;
      const resp = await Product.delete(id);
      this.showSucessMessage = true;
      this.msg = "Deletado";
    } catch (error) {
      alert(error);
    } finally {
      this.isLoading = false;
    }
  }
  public openModalProduct(product: IProduct) {
    this.editProduct = product;
    this.showModalProduct = true;
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
