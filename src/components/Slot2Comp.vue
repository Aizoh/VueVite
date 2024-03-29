<template>
    <slot
      v-for="x in foods"
      :key="x.name"
      :foodName="x.name"
      :foodDesc="x.desc"
      :foodUrl="x.url"
    ></slot>
  </template>
  
  <script>
    export default {
      data() {
        return {
          foods: [
            { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'food.jpeg' },
            { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: '/food.jpeg' },
            { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: '/food.jpeg' },
            { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: '/food.jpeg' },
            { name: 'Cake', desc: 'Cake is something sweet that tastes good but is not considered healthy.', url: '/food.jpeg' }
         ]
        }
      }
    }
  </script>