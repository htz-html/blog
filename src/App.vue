<template>
  <div id="app">
    <router-view :isSearh = "isSearh"></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isSearh: false
    }
  },
  watch:{
    "$route": {
      handler: function(val, oldVal){
        console.log(val.name)
        if(val.name === 'About'){
          console.log("我是home")
          this.isSearh = true
        }else{
          this.isSearh = false
        }
      }
    }
  },
}
</script>
<style lang="scss">
$bodyBackground: #121417;
body{
  background-image: url(./assets/image/Layer.png);
  background-color:$bodyBackground !important  ;
  background-size: auto; 
  background-repeat: no-repeat;
  background-position: top 100px right 20%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-size: 14px;
}
</style>
