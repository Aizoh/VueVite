<!-- <template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/food.jpeg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>

<script>
  export default {
  props: ['foodName','foodDesc','isFavorite'],
  data() {
    return {
      foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      this.foodIsFavorite = !this.foodIsFavorite;
    }
  }
}
</script>

<style>
  img {
    height: 1.5em;
    float: right;
  }
</style> -->

<template>
    <div v-on:click="countClicks">
    <h3>The fruit is {{foodName}}
      <img src="/food.jpeg" v-show="isFavorite">
    </h3>
    <p>{{foodDesc}} </p>
    <p id="red">You have ordered {{ clicks }} times.</p>
    <button v-on:click="toggleFavorite">Favorite</button>
    </div>
   
  </template>
  <script >
  export default{
    data(){
      return{
        // name: 'oranges',
        // message: ' I hate oranges',
        clicks: 0,
        foodIsFavorite: this.isFavorite
      };
    },
    methods: {
        countClicks(){
            return this.clicks++;
        },
        toggleFavorite() { 
          //this.foodIsFavorite = !this.foodIsFavorite;
          //emit an event to toggle
          this.$emit('toggle-favorite', this.foodName);
        }
    },
    /**Props 1.1
    props: [
      'foodName',
      'foodDesc',
      'isFavorite'
    ]**/
    /** prop object 1
     * props: {
      foodName: String,
      foodDesc: String,
      isFavorite: Boolean
    }
     */
   /**
    * props object 1.1
    *   props: {
      foodName: {
        type: String,
        required: true
      },
      foodDesc: String,
      isFavorite: Boolean
    }
    */
    props: {
      foodName: {
        type: String,
        required: true
      },
      foodDesc: {
        type: String,
        required: false,
        default: 'This is the default description.'
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false
      }
    }

  };
  </script>
  
  <style>
    #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }
  .favorite{
    font-weight: bold ;
    color: rgb(249, 5, 5);
  }
  img {
    height: 1.5em;
    float: right;
  }
  </style>