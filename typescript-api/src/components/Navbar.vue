<template>
  <div class="header-container">
    <a class="return" href="#">
      <svg
        width="50"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
          fill="#ffffff"
        />
      </svg>
    </a>
    <div class="text-center">
      <p class="text-p">WARREN</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Navbar extends Vue {}
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
