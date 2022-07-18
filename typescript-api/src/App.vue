<template>
  <div id="app">
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
