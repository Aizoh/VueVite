
<template>
  <h1>{{message}}</h1>
  <!-- <foodItem 
  v-for="food in foods"
  v-bind:foodName="food" 
  receive the emitted event
/> -->
<foodItem 
  v-for="food in foods"
  v-bind:key="food.name"
  v-bind:foodName="food.name" 
  v-bind:foodDesc="food.desc"
  v-bind:isFavorite="food.favorite"
  @toggle-favorite="receiveEmit"
/>
<h3>To do items</h3>
<ul>
  <todoItem
    v-for="item in items"
    v-bind:key="item"
    v-bind:itemName="item"
    style="background-color: lightgreen;"
/>
</ul>
<input v-model="newItem">
<button v-on:click="addItem">Add</button>
</template>
<script >
import TodoItem from './components/TodoItem.vue'

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
        ],
        newItem:'',
        items:[
          'Buy Mangoes',
          'Buy Perfume', 
          'Buy bread'
        ]
    };
  },
  methods:{
    receiveEmit(foodId) {
    const foundFood = this.foods.find(
      food => food.name === foodId
    );
    foundFood.favorite = !foundFood.favorite;
    },
    addItem(){
      this.items.push(this.newItem),
      this.newItem='';
    }
  },
  components:{
    'todoItem': TodoItem
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
