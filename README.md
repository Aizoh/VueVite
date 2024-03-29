# firstvue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup


```sh
npm init vue@latest
#project_name
cd project_name
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
#### notes
**Watcher**</br>
A watcher is a method that watches a data property with the same name.</br>
A watcher runs every time the data property value changes.</br>
Use a watcher if a certain data property value requires an action.</br>

**Computed Properties**</br>
Computed properties are like data properties, except they depend on other properties.</br>
Computed properties are written like methods, but they do not accept any input arguments.</br>
Computed properties are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example.</br>
Computed properties are used when outputting something that depends on something else.</br>

**Methods**</br>
Vue methods are functions that belong to the Vue instance under the 'methods' property.</br>
Vue methods are great to use with event handling (v-on) to do more complex things.</br>
Vue methods can also be used to do other things than event handling.</br>

**Templates**</br>
A template in Vue is what we call the HTML part of our Vue application.</br>
The <template> tag will later be used in *.vue files to structure our code in a better way.</br>
It is possible to use template as a configuration option in the Vue instance, and put the HTML code inside.</br>

**Components**</br>
Components in Vue lets us decompose our web page into smaller pieces that are easy to work with.</br>
We can work with a Vue component in isolation from the rest of the web page, with its own content and logic.</br>
A web page often consists of many Vue components.</br>
- *Create a new folder components inside the src folder.*
    - *create a new file FoodItem.vue inside the components*

**Props**
Props is a configuration option in Vue.
With props we can pass data to the components via custom attributes to the component tag.
eg
```vue
<food-item food-name="Apples"/>
```
Boolean props:</br>
To pass props with a data type different to String, we must write **v-bind**: in front of the attribute we want to pass.

**Modify Props</br>**
When a component is created in the parent element we are not allowed to change the value of the prop received in the child element. So inside FoodItem.vue we cannot change the value of the ***'isFavorite'*** prop we get from App.vue. The prop is read-only from the parent, which is App.vue in our case.</br>

**Emit**</br>
With the built-in $emit() method in Vue we can create a custom event in the child component that can be captured in the parent element.</br>
Props are used to send data from the parent element to the child component, and $emit() is used to do the oposite: to pass information from the child component to the parent.</br>
```vue
<script>
export default {  
//Props must be declared in the component, while emits are just recommended to be documented.
  props: ['foodName','foodDesc','isFavorite'],
  emits: ['toggle-favorite'],
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.foodName);
    }
  }
};
</script>
```
**Fallthrough Attributes**
A component can be called with attributes that are not declared as props, and they will simply fall through to the root element in the component.

With fallthrough attributes you get a better overview from the parent where the component is created, and it simplifies our code because we don't need to declare the attribute as a prop.

Typical attributes used to fall through are class, style and v-on.

**Scoped Styling**
Styling defined inside the <style> tag in a component, or in App.vue, is actually available globally in all components.

To keep the styling limited locally to just the component, we can use the scope attribute on that component: <style scoped> like below

```vue
<template>
  <p>This p-tag belongs to 'CompOne.vue'</p>
</template>

<script></script>

<style scoped>
  p {
    background-color: pink;
    width: 150px;
  }
</style>
```
**Local vs Global Components**
The way we have included components so far makes them accessible from all *.vue files in a project. **ie, as they are being loaded from the main.js**

Components can be made to be local, meaning that they are only accessible inside a specific *.vue file.

let's make to do list Available locally only at Appa.vue