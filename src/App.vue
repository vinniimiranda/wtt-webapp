<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header: Header
  }
}
</script>
<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
$cor-padrao: #28a745;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

table, h1{
  text-align: center !important;
}
.dropdown-item.active, .dropdown-item:active {
  background-color: #fff
}

body{
  background-color: rgba($cor-padrao, .5) !important;
  background-image: url("./assets/bg.png");
}

.dropdown-item.active, .dropdown-item:active{
  background-color: #fff !important;
  color: #000 !important;
}
.dropdown-item.active, .dropdown-item:hover{
  // background-color: rgba(#28a745, .6) !important;
}

</style>
