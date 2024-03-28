
<template>
    <div v-on:click="countClicks">
    <h3>The fruit is {{foodName}}</h3>
    <p>{{foodDesc}} </p>
    <p id="red">You have ordered {{ clicks }} times.</p>
    </div>
   
  </template>
  <script >
  export default{
    data(){
      return{
        // name: 'oranges',
        // message: ' I hate oranges',
        clicks: 0
      };
    },
    methods: {
        countClicks(){
            return this.clicks++;
        }
    },
    props: [
      'foodName',
      'foodDesc'
    ]

  };
  </script>
  
  <style>
    #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }
  </style>