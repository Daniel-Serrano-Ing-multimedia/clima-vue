<template>
  <form @submit="search">
    <h1>Encuentra Noticias Por Categoria</h1>
    <SelectCategory 
      :options="OPTIONS" 
      @categoryChanged = 'setCategory'
    />
    <FindButton/> 
  </form>
</template>

<script>
import getNews from '../../config/axios';
import SelectCategory from './SelectCategory.vue'
import FindButton from './FindButton.vue'
// api

            
export default {
  name : 'Form',
  data() {
    return {
       OPTIONS : [
        { value: 'general', label : 'General' },
        { value: 'business', label : 'Negocios' },
        { value: 'entretaiment', label : 'Entretenimiento' },
        { value: 'health', label : 'Salud' },
        { value: 'science', label : 'Ciencia' },
        { value: 'sports', label : 'Deportes' },
        { value: 'tecnology', label : 'Tecnología' },
    ],
      currentCategory : '',
      news : null,
    };
  },
  components : {
    SelectCategory,
    FindButton
  },
  methods :{
    async search( e ){
      e.preventDefault();
      this.news =  await getNews( this.currentCategory )
      console.log( this.currentCategory )
    },
    setCategory( category ){
      this.currentCategory = category;
    }
  }
}
</script>

<style>
  form{
    width: 30em;
  }
</style>