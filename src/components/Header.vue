<template>
  <header> 
    <a>{{ msg }}</a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style >
  @import '../styles.css';
  header {
    height: 4rem;
    background-color: var(--secondary);
    width: 100%;
  }
  a{
    font-size: 2.1rem;
    padding: 0;
  }
</style>
