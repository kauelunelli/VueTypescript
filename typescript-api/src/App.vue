<template>
  <div id="app">
    <Navbar />
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
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
