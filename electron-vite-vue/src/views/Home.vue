
<template>
  <div id="home">
    <div class="crane-part" v-for="item in craneList">
      <p>{{item['code']}}</p>
    </div>
  </div>
</template>

<script  lang="ts">
 import {defineComponent} from 'vue'
 type Todo = {
    id:number,
   name:string,
   completed:boolean,

 }
 export  default  defineComponent({
    data(){
      return {
         count:1,
        items:[] as Todo[]
      }
    }
 })
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
