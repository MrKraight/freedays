<template>
    <AddDocumentComponent class="h-100"></AddDocumentComponent>
</template>

<script>
import AddDocumentComponent from './components/AddDocumentComponent.vue'

export default {
  name: 'App',
  components: {
    AddDocumentComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 overflow-y: hidden;
}

.hint__circle {
  margin-left: 10px;
  height: 23px;
  width: 23px;
  -webkit-border-radius: 100px;
  color: white;
  line-height: 23px;
  font-family: arial;
  font-size: 20px;
  border: 2px solid white;
  opacity: .4;
}

.hint__circle:hover {
  border: 2px solid #f37920;
  color: #f37920;
  cursor: pointer;
  opacity: 1;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
