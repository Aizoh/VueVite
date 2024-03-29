
<template>
  <h1>{{message}}</h1>
  <!-- <foodItem 
  v-for="food in foods"
  v-bind:foodName="food" 
/> -->
<foodItem 
  v-for="food in foods"
  v-bind="key=food.name"
  v-bind:foodName="food.name" 
  v-bind:foodDesc="food.desc"
  v-bind:isFavorite="food.favorite"
/>
</template>
<script >

export default{
  data(){
    return{
      message: 'Kenya yetu',
      //foods: ['Apples','Pizza','Rice','Fish','Cake']
      foods: [
          { name: 'Apples',
            desc: 'Apples are a type of fruit that grow on trees.',
            favorite: true },
          { name: 'Pizza',
            desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
            favorite: false },
          { name: 'Rice',
            desc: 'Rice is a type of grain that people like to eat.',
            favorite: false },
          { name: 'Fish',
            desc: 'Fish is an animal that lives in water.',
            favorite: true },
          { name: 'Cake',
            desc: 'Cake is something sweet that tastes good.',
            favorite: false }
        ]
    };
  }
};
</script>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  #app > div:hover {
  cursor: pointer;
}
</style>
