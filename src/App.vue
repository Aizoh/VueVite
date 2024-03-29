
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
<h1>This section contains slot components</h1>
<p>We create card-like div boxes from the foods array.</p>
  <div id="wrapper">
    <slot-comp v-for="food in foods">
      <img v-bind:src="food.url">
      <h4>{{food.name}}</h4>
      <p>{{food.desc}}</p>
    </slot-comp>
  </div>
  <!--Reuse component slot to create a footer-->
  <!-- <footer>
    <slot-comp>
      <h4>Footer</h4>
    </slot-comp>
  </footer> -->
  <!--Named slots-->
  <slot-comp v-slot:footerSlot>Hello!</slot-comp>
  <slot-comp>
    <template v-slot:bottomSlot>
      <h4>To the bottom slot!</h4>
      <p>This p tag and the h4 tag above are directed to the bottom slot with the v-slot directive used on the template tag.</p>
    </template>
    <p>This goes into the default slot</p>
  </slot-comp>
  <h3>Scoped slots</h3>
  <slot2-comp v-slot="food">
    <hr>
  <h2>{{ food.foodName }}<img :src=food.FoodUrl></h2>
  <p>{{ food.foodDesc }}</p>
</slot2-comp>

<h1>Dynamic Components</h1>
  <p>App.vue switches between which component to show.</p>
  <button @click="toggleValue = !toggleValue">
    Switch component
  </button>
  <KeepAlive>
    <component :is="activeComp"></component>
  </KeepAlive>

  <h1>Radio Buttons in Vue</h1>
  <form @submit.prevent="registerAnswer">
    <p>What is your favorite animal?</p>
    <!-- Radio buttons that belong to the same choice must have the same name so that only one radio button can be chosen.
    As with all inputs in Vue, we capture the radio button input value with v-model, but the value attribute must also be set explicitly on the <input type="radio"> tag. -->
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Cat"> Cat
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Dog"> Dog
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Turtle"> Turtle
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Moose"> Moose
    </label>
    <button type="submit">Submit</button>
  </form>
  <div>
    <h3>Submitted choice:</h3>
    <p id="pAnswer">{{ inpValSubmitted }}</p>
  </div>

  <h1>Checkbox Inputs in Vue</h1>
  <form @submit.prevent="registerChecked">
    <p>What kinds of food do you like?</p>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Pizza"> Pizza
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Rice"> Rice
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Fish"> Fish
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Salad"> Salad
    </label>
    <button type="submit">Submit</button>
  </form>
  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer">{{ chkValSubmitted }}</p>
  </div>

</template>



<script >
import TodoItem from './components/TodoItem.vue'
import SlotComp from './components/SlotComp.vue'
import Slot2Comp from './components/Slot2Comp.vue'
export default{
  data(){
    return{
      message: 'Kenya yetu',
      //foods: ['Apples','Pizza','Rice','Fish','Cake']
      likeFoods: [],
      foods: [
          { name: 'Apples',
            desc: 'Apples are a type of fruit that grow on trees.',
            favorite: true,
            url:'/food.jpeg' },
          { name: 'Pizza',
            desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
            favorite: false,
            url:'/food.jpeg' },
          { name: 'Rice',
            desc: 'Rice is a type of grain that people like to eat.',
            favorite: false },
          { name: 'Fish',
            desc: 'Fish is an animal that lives in water.',
            favorite: true,
            url:'/food.jpeg' },
          { name: 'Cake',
            desc: 'Cake is something sweet that tastes good.',
            favorite: false,
            url:'/food.jpeg' }
        ],
        newItem:'',
        items:[
          'Buy Mangoes',
          'Buy Perfume', 
          'Buy bread'
        ],
        toggleValue: true,
        inpVal: '',
        chkVal:'',
      inpValSubmitted: 'Not submitted yet',
      chkValSubmitted: 'Not checked yet',
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
    },
    registerAnswer() {
      if(this.inpVal) {
        this.inpValSubmitted = this.inpVal;
      }
    },
    registerChecked() {
        this.chkValSubmitted = this.likeFoods;
      
    }
  },
  components:{
    'todoItem': TodoItem,
    'slot-comp': SlotComp,
    'slot2-comp':Slot2Comp
  }, 
  computed:{
    activeComp(){
      if(this.toggleValue) {
          return 'slot-comp'
        }
        else {
          return 'slot2-comp'
        }
    }
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
