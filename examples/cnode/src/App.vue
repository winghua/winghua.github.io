<template>
  <div id="app">
    <c-header></c-header>
    <router-view name="body"></router-view>
    <router-view name="side"></router-view>
  </div>
</template>

<script>
import cHeader from './components/Cheader';

export default {
  name: 'App',
  components:{
    cHeader
  }
}

</script>

<style>
html{
  background-color: #ddd;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,div,span,a,p,ul,li{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
ul,li{
  list-style: none;
}
#app{
  text-align: left;
  margin: 0;
}
</style>
