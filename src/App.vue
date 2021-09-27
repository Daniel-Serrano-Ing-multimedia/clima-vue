<template>
  <Header msg = 'Buscador De Noticias' />
  <img alt="Vue logo" src="./assets/logo.png">
  <Form/>
</template>

<script>
import Header from './components/Header.vue'
import Form from './components/form/Form.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form
  }
}
</script>

<style>
@import './styles.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
