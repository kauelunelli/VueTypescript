<template>
  <div id="app">
    <Navbar />
    <div class="view-container">
      <router-view></router-view>
    </div>
    <ModalCookies v-if="productModule.showModalCookies" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
import ModalCookies from "./components/ModalCookies.vue";
import { Products } from "./store/Products";
import { getModule } from "vuex-module-decorators";

@Component({
  components: {
    Navbar,
    ModalCookies,
  },
})
export default class App extends Vue {
  public productModule = getModule(Products);
}
</script>

<style lang="scss">
* {
  font-family: "Source Sans Pro", sans-serif;
  color: #102941;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.view-container {
  margin: auto;
  max-width: 1000px;
}
</style>
