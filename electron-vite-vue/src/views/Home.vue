
<template>
  <div id="home">

  </div>
</template>

<script  lang="ts">
 //
</script>

<style scoped lang="scss">
  @import "src/assets/scss/app.scss";
  #home {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: blue;
    width: 100vw;
    height: 100vh;

    .crane-part {
      flex: 0 1 25%;
      background: red;
      color: black;
    }
  }

</style>
