import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { IProduct } from "@/types/index";
import Product from "@/services/product";
import store from "./index";

@Module({ name: "Products", dynamic: true, store })
export class Products extends VuexModule {
  products: IProduct[] = [];
  isLoading = false;

  get AllProducts() {
    return this.products;
  }

  get Loading() {
    return this.isLoading;
  }

  @Mutation
  SET_PRODUCTS(products: IProduct[]) {
    this.products = products;
  }

  @Mutation
  SET_LOADING_STATUS(state: boolean) {
    this.isLoading = state;
  }

  @Action
  async featchProducts() {
    this.context.commit("SET_LOADING_STATUS", true);
    try {
      const products = await Product.list();
      this.context.commit("SET_PRODUCTS", products.data);
    } catch (error) {
      alert(error);
    } finally {
      this.context.commit("SET_LOADING_STATUS", false);
    }
  }
}
