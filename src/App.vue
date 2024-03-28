
<template>
  <h1>{{message}}</h1>
  <foodItem foodName="Unga" foodDesc="Well prepared sima"/>
  <foodItem foodName="Rice" foodDesc="Great taste of Mwea"/>
  <foodItem foodName="Fish" foodDesc="Enjoy a taste of dholuo"/>
</template>
<script >

export default{
  data(){
    return{
      message: 'Kenya yetu'
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
