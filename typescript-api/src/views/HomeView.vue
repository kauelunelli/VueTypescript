<template>
  <div class="home">
    <ListProducts :products="products" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListProducts from "@/components/ListProducts.vue";
import Product from "../services/product";

@Component({
  components: {
    ListProducts,
  },
})
export default class HomeView extends Vue {
  public products = [];

  async mounted() {
    try {
      const response = await Product.list();
      this.products = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      console.log(this.products);
    }
  }
}
</script>
