<template>
  <select 
    name="select"
    @change="setCategory"
  >
  <option 
    v-for="option in options" 
    :key = 'option.value' 
    :value='option.value'
  >{{ option.label }}</option>
</select>
</template>

<script>
export default {
  name : 'SelectCategory',
  props : {
    options: Array,
  },
  data (){
    return {
      currentCategory : '',
    }
  },
  methods :{
    setCategory( e ){
      this.currentCategory = e.target.value
      this.$emit( 'categoryChanged', this.currentCategory )
    }
  }
}
</script>

<style>
select{
  width: 100%;
}
</style>