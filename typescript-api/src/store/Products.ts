import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { IProduct, IMessage } from "@/types/index";
import Product from "@/services/product";
import store from "./index";

@Module({ name: "Products", dynamic: true, store })
export class Products extends VuexModule {
  products: IProduct[] = [];
  editProduct: IProduct = {
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
  message: IMessage = {
    showMessage: false,
    msg: "",
  };
  isLoading = false;
  error = false;
  showModal = false;
  showModalCookies = false;

  get Products() {
    return this.products;
  }

  get Loading() {
    return this.isLoading;
  }

  get Error() {
    return this.error;
  }

  get EditProduct() {
    return this.editProduct;
  }

  get ShowModal() {
    return this.showModal;
  }

  get Message() {
    return this.message;
  }

  get ShowModalCookies() {
    return this.showModalCookies;
  }

  @Mutation
  SET_PRODUCTS(products: IProduct[]) {
    this.products = products;
  }

  @Mutation
  SET_LOADING_STATUS(status: boolean) {
    this.isLoading = status;
  }

  @Mutation
  SET_ERROR_STATUS(status: boolean) {
    this.error = status;
  }

  @Mutation
  SET_EDIT_PRODUCT(editProduct: IProduct) {
    this.editProduct = editProduct;
  }

  @Mutation
  SET_MODAL_STATUS(status: boolean) {
    this.showModal = status;
  }

  @Mutation
  SET_MESSAGE_STATUS(info: IMessage) {
    this.message.showMessage = info.showMessage;
    this.message.msg = info.msg;
  }

  @Mutation
  SET_MODAL_COOKIES(status: boolean) {
    this.showModalCookies = status;
  }

  @Action
  public async fetchProducts() {
    this.context.commit("SET_LOADING_STATUS", true);
    try {
      const products = await Product.list();
      this.context.commit("SET_PRODUCTS", products.data);
    } catch (error) {
      this.context.commit("SET_ERROR_STATUS", true);
    } finally {
      this.context.commit("SET_LOADING_STATUS", false);
    }
  }
  @Action
  public async fetchEditProduct(id: number) {
    try {
      this.context.commit("SET_LOADING_STATUS", true);
      const editProduct = await Product.get(id);
      this.context.commit("SET_EDIT_PRODUCT", editProduct.data);
      this.context.commit("SET_MODAL_STATUS", true);
    } catch (error) {
      this.context.commit("SET_ERROR_STATUS", true);
    } finally {
      this.context.commit("SET_LOADING_STATUS", false);
    }
  }
}
