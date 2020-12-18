<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
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
