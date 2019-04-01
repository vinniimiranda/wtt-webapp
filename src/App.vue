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
$cor-padrao: #f5c;

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
</style>
