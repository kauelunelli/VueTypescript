<template>
  <div class="header-container">
    <a class="return" href="#">
      <img :src="returnSVG" />
    </a>
    <div class="text-center">
      <p class="text-p">WARREN</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Navbar extends Vue {
  public returnSVG = require("../assets/return.svg");
}
</script>

<style scoped>
.header-container {
  background: #676162;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-p {
  color: white;
  font-weight: bolder;
  font-size: 14px;
  opacity: 70%;
}
</style>
