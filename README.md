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
        //emits a 'toggle-favourite event with a parameter of the prop'
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

let's make to do list Available locally only at App.vue

**Slots**

Slots are a powerful feature in Vue that allow for more flexible and reusable components.

We use slots in Vue to send content from the parent into the <template> of a child component.

**v-slot**

We need the v-slot directive to refer to named slots.

Named slots allow for more control over where the content is placed within the child component's template.

Named slots can be used to create more flexible and reusable components.

```js
//defination
<h3>Component</h3>
<div>
  <slot></slot>
</div>
<div>
  <slot name="bottomSlot"></slot>
</div>
//The shorthand for v-slot: is #.
<slot-comp v-slot:topSlot>'Hello!'</slot-comp> //as
<slot-comp #topSlot>'Hello!'</slot-comp>
```

**Scoped Slots**

A Scoped slot provides local data from the component so that the parent can choose how to render it.[Scoped Slots](https://www.w3schools.com/vue/vue_scoped-slots.php)

```vue
<template>
  <slot
    v-for="x in foods"
    :key="x"
    :foodName="x"
  ></slot>
</template>

<script>
  export default {
    data() {
      return {
        foods: ['Apple','Pizza','Rice','Fish','Cake']
      }
    }
  }
</script>
//now in the parent App.vue
<slot-comp v-slot="food">
  <h2>{{ food.foodName }}</h2>
</slot-comp>
```
***Dynamic Components**

Dynamic Components can be used to flip through pages within your page, like tabs in your browser, with the use of the ***'is'*** attribute.

```js
//to remeber the state in the component give it a name attribute
<script>
  export default {
    name: 'CompOne',
    data() {
      return {
        imgSrc: 'img_question.svg'
      }
    }
  }
</script>
//in the parent 
<template>
  <h1>Dynamic Components</h1>
  <p>App.vue switches between which component to show.</p>
  <button @click="toggleValue = !toggleValue">
    Switch component
  </button>
  <KeepAlive include="CompOne"> <!--<KeepAlive include="CompOne, CompThree" :max="2"> for mutliple max for maximum componets to keep the state-->
    <component :is="activeComp"></component>
  </KeepAlive>
</template>
```

**Vue Teleport**

The Vue <Teleport> tag is used to move content to a different place in the DOM structure.everything else can be done normally/all operations

```vue
<Teleport to="body">
  <p>Hello!</p>
</Teleport>
```
**[Vue HTTP](https://www.w3schools.com/vue/vue_http.php)**

Here is example of fetching text from a text file

```vue
<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{{ data }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    //The async operator tells the browser that the method is asynchronous, which means that it waits for something, and the browser can continue to do other tasks while it waits for the method to complete.

    //To wait for the response to be fulfilled, with the data we want, we need to use the await operator in front of the fetch() method:

    //To get the text inside the file.txt file we need to use the text() method on the response
    async fetchData() {
      const response = await fetch("file.txt");
      this.data = await response.text();
    }
  }
};
</script>
```
**Vue Templates Refs**

Vue Template Refs are used to refer to specific DOM elements.

When the ref attribute is set on an HTML tag, the resulting DOM element is added to the $refs object.

We can use the ref attribute and the $refs object in Vue as an alternative to methods in plain JavaScript like ***getElementById() or querySelector()***.

```vue
<template>
  <h1>Example</h1>
  <p>Start writing inside the input element, and the text will be copied into the last paragraph by the use of the '$refs' object.</p>
  <input ref="inputEl" @input="getRefs" placeholder="Write something..">
  <p ref="pEl"></p>
</template>

<script>
  export default {
    methods: {
      getRefs() { 
        this.$refs.pEl.innerHTML = this.$refs.inputEl.value;
      }
    }
  };
</script>
<script>
//'ref' with v-for HTML elements created with v-for, with the ref attribute, will be added to the $refs object as an array.
<ul>
    <li v-for="x in liTexts" ref="liEl">{{ x }}</li>
</ul>
   methods: {
      getValue() { 
        this.thirdEl = this.$refs.liEl[2].innerHTML;
        console.log("this.$refs.liEl = ",this.$refs.liEl);
      }
    }
</script>
```

**Vue Lifecycle Hooks**

Lifecycle hooks in Vue are certain stages in the lifecycle of a component where we can add code to do things.

<pre>
- beforeCreate - created - beforeMount - mounted - beforeUpdate - updated - beforeUnmount - unmounted - errorCaptured
- renderTracked - renderTriggered - activated - deactivated - serverPrefetch
</pre>

**Provide/Inject**

Provide/Inject in Vue is used to provide data from one component to other components, particularly in large projects.

Provide makes data available to other components.

Inject is used to get the provided data.

Provide/Inject is a way to share data as an alternative to passing data using props.

```vue
<template>
  <h1>Food</h1>
  <div @click="this.activeComp = 'food-about'" class="divBtn">About</div>
  <div @click="this.activeComp = 'food-kinds'" class="divBtn">Kinds</div>
  <div id="divComp">
    <component :is="activeComp"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: 'food-about',
      foods: [
        { name: 'Pizza', imgUrl: '/img_pizza.svg' },
        { name: 'Apple', imgUrl: '/img_apple.svg' },
        { name: 'Cake', imgUrl: '/img_cake.svg' },
        { name: 'Fish', imgUrl: '/img_fish.svg' },
        { name: 'Rice', imgUrl: '/img_rice.svg' }
      ]
    }
  },
  provide() {
    return {
      foods: this.foods
    }
  }
}
</script>
//To use it elsewhere in a different component
<script>
export default {
    inject: ['foods']
}
</script>

```
**[Vue Routing](https://www.w3schools.com/vue/vue_routing.php)**

Routing in Vue is used to navigate the Vue application, and it happens on the client side (in the browser) without full page reload, which results in a faster user experience.

Routing is a way to navigate, similar to how we have used dynamic components earlier.

With routing we can use the URL address to direct someone to a specific place in our Vue application.

```bash
npm install vue-router@4
```
```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')

//in APP>View
<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/animals">Animals</router-link>
  <router-link to="/food">Food</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>
```

**[vue Forms](https://www.w3schools.com/vue/vue_form-inputs.php)**
for more info see the above link.

```vue
<template>
  <h1>Radio Buttons in Vue</h1>
  <form @submit.prevent="registerAnswer">
    <p>What is your favorite animal?</p>
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
</template>

<script>
export default {
  data() {
    return {
      inpVal: '',
      inpValSubmitted: 'Not submitted yet'
    }
  },
  methods: {
    registerAnswer() {
      if(this.inpVal) {
        this.inpValSubmitted = this.inpVal;
      }
    }
  }
}
</script>

<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    display: inline-block;
  }
  button {
    margin: 10px;
  }
  label {
    display: block;
    width: 80px;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
    background-color: rgb(211, 244, 211);
    border-radius: 5px;
  }
  #pAnswer {
    background-color: lightgreen;
    padding: 5px;
  }
</style>
```
**VUe Animations**

The built-in <Transition> component in Vue helps us to do animations when elements are added or removed with v-if, v-show or with dynamic components.[Animations](https://www.w3schools.com/vue/vue_animations.php)

The built-in [<TransitionGroup>](https://www.w3schools.com/vue/vue_animations_v-for.php) component in Vue helps us to animate elements that are added to our page with v-for.

There is nothing wrong with using plain CSS transitions and animations in other cases.

**Vue Build**

When a Vue project is finished, it should move from being in "development mode" into "build" mode.

The build command compiles our Vue project into .html, .js and .css files that are optimized to run directly in the browser.

We build our Vue project to create files on a server for others to access.

```bash
npm run build
#To see your built project in the browser, use the commando:
npm run preview
# this opens a browser window that displays the built project from the dist folder.
```

**VUe Compositions API**

The Composition API is an alternative way of writing Vue applications to the Options API that is used elsewhere in this repo.

In Composition API we can write code more freely, but it requires a deeper understanding, and it is considered to be less beginner-friendly

With Composition API, logic is written using imported Vue functions instead of using the Vue instance structure that we are used to from Options API

***Compositions API***

```vue

<template>
  <h1>Example</h1>
  <img src="/img_typewriter.jpeg" alt="Typewriter">
  <p>Typewriters left in storage: {{ typeWriters }}</p>
  <button @click="remove">Remove one</button>
  <p style="font-style: italic;">"{{ storageComment }}"</p>
</template>

<script setup>
//the setup attribute makes it easier to use Composition API. For example, by using the setup attribute, variables and functions can be used directly inside the <template>.
//ref and computed must be imported before they can be used. In Options API, we do not need to import anything to declare reactive variables or to use computed properties.
  import { ref, computed } from 'vue'

//ref is used to declare the 'typewriters' property as reactive with '10' as the initial value.
  const typeWriters = ref(10);

  function remove(){
    if(typeWriters.value>0){
      typeWriters.value--;
    }
  }

  const storageComment = computed(
    function(){
      if(typeWriters.value > 5) {
        return "Many left"
      }
      else if(typeWriters.value > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  )
</script>

```
***The options API***

```vue
<template>
  <h1>Example</h1>
  <img src="/img_typewriter.jpeg" alt="Typewriter">
  <p>Typewriters left in storage: {{ typeWriters }}</p>
  <button @click="remove">Remove one</button>
  <p style="font-style: italic;">"{{ storageComment }}"</p>
</template>

<script>
export default {
  data() { 
    return {
      typeWriters: 10
    };
  },
  methods: {
    remove(){
      if(this.typeWriters>0){
        this.typeWriters--;
      }
    }
  },
  computed: {
    storageComment(){
      if(this.typeWriters > 5) {
        return "Many left"
      }
      else if(this.typeWriters > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  }
}
</script>
```

***[Vue Instance Options](https://www.w3schools.com/vue/vue_ref_options.php)***

data:   	contains the data properties we set up and their initial values

methods:    contains the methods we write

computed:	contains the computed properties we make, that are used as data properties, but are written like functions with a return and no arguments, and gets called whenever a dependency is changed

watch:  	contains the watchers we make, which are like functions that get called whenever a data property with the same name is changed

props:  	contains the props of a component, that are used as custom attributes by the parent component

emits:  	contains the emits of a component, the custom events a component emits to its parent component

expose: 	contains a list of public properties. Properties that are not exposed, are kept private to the component


***[Vue Built-in Attributes](https://www.w3schools.com/vue/vue_ref_builtin-attributes.php)***

is:     Refers to the current active dynamic component

key:	Gives a unique value to elements created with v-for

ref:	Gives a reference to an element in the template so that the element can be manipulated later in the script.


***[Vue Built-in Components](https://www.w3schools.com/vue/vue_ref_builtin-components.php)***

<KeepAlive>:   	Remembers the state of non-active dynamic components

<Suspense>: 	Used with asynchronous components to render the content of the fallback slot while waiting for the asynchronous component to resolve so that it can render the content of the default slot. Warning: This built-in component is experimental, and not globally supported.

<Teleport>: 	Moves an element to another place in the DOM structure

<Transition>:  	Animates an element as it is removed from, or added to, our application with v-if or v-show, or with dynamic components.

<TransitionGroup>:  	Animates elements that are added to our page with v-for

***[Vue Built-in Elements](https://www.w3schools.com/vue/vue_ref_builtin-elements.php)***

<component>:   	Creates a dynamic component

<slot>: 	Creates a slot where the child component can receive content from the parent

<template>: 	Creates a placeholder for content without being rendered itself

***[Vue Component Instance](https://www.w3schools.com/vue/vue_ref_component-instance.php)***

- objects
$attrs: 	Represents the fallthrough attributes and event listeners set on the component tag.

$data:  	Represents the properties stored in the data part of the Vue instance.

$el:    	Represents the root DOM node of the Vue component.

$parent:    Represents the Vue instance of the parent component.

$props: 	Represents the props declared in the receiving component.

$refs:  	Represents the DOM elements marked with the built-in 'ref' attribute.

$root:  	Represents the Vue instance of the root component of the total Vue application.

$slots: 	Represents the slots provided by the parent component.

- methods

$emit():    	triggers a custom event that is used to communicate up to the parent component

$forceUpdate(): 	forces a re-render of the Vue application

$nextTick():    	waits for the DOM update cycle of the current Vue component to finish before executing

$watch():   	is used to create watchers, and returns a stop function we can use to stop the watcher

***[Vue Directives](https://www.w3schools.com/vue/vue_ref_directives.php)***

v-bind: 	Binds an attribute to a data property

v-cloak:    Hides an un-compiled template until it is ready

v-for:  	Renders a list of elements

v-html: 	Outputs HTML code in the template

v-if:   	Renders an element conditionally

v-else-if:	Renders an element conditionally when the first part of the if-statement is false

v-else: 	Renders an element when the first part of the if-statement is false

v-memo: 	Holds back rendering of an element until a change is detected in one or more specified properties

v-model:    Creates a two-way binding between an input element and the corresponding data property

v-on:   	Connects an event to an action

v-once: 	Renders an element only once

v-pre:  	Skips compilation of an element and its content

v-show: 	Toggles an element's visibility conditionally

v-slot:  	Directs content to a named slot

v-text: 	Updates an element's text content

***[Vue Lifecycle Hooks](https://www.w3schools.com/vue/vue_ref_lifecycle-hooks.php)***

beforeCreate:   	happens before all the other lifecycle hooks

created:        	the component is initialized, and we can access component instance properties

beforeMount:    	the component is not mounted yet, so we can not access DOM elements

mounted:        	the component is mounted to the DOM tree, so we can access DOM elements

beforeUpdate:   	happens when Vue's reactive system has detected a change that requires a new rendering

updated:        	happens right after the DOM tree has updated

beforeUnmount:  	happens just before a component is removed from the DOM

unmounted:      	happens after a component is removed from the DOM

errorCaptured:  	happens when an error happens in a child/descendant component

renderTracked:  	happens when a render function is set to track, or monitor, a reactive component

renderTriggered:   	happens when there is a change in a tracked reactive component, so that a new render is triggered

activated:      	happens when a cached dynamic component is added (but is already in the DOM)

deactivated:    	happens when a cached dynamic component is removed (but not from the DOM)

serverPrefetch: 	happens during server-side rendering (SSR)
