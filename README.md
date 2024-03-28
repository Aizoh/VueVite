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
**Watcher**
A watcher is a method that watches a data property with the same name.
A watcher runs every time the data property value changes.
Use a watcher if a certain data property value requires an action.
**Computed Properties**
Computed properties are like data properties, except they depend on other properties.
Computed properties are written like methods, but they do not accept any input arguments.
Computed properties are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example.
Computed properties are used when outputting something that depends on something else.
**Methods**
Vue methods are functions that belong to the Vue instance under the 'methods' property.
Vue methods are great to use with event handling (v-on) to do more complex things.
Vue methods can also be used to do other things than event handling.
**Templates**
A template in Vue is what we call the HTML part of our Vue application.
The <template> tag will later be used in *.vue files to structure our code in a better way.
It is possible to use template as a configuration option in the Vue instance, and put the HTML code inside.

**Components**
Components in Vue lets us decompose our web page into smaller pieces that are easy to work with.
We can work with a Vue component in isolation from the rest of the web page, with its own content and logic.
A web page often consists of many Vue components.
- *Create a new folder components inside the src folder.*
    - *create a new file FoodItem.vue inside the components*

**Props**
Props is a configuration option in Vue.
With props we can pass data to the components via custom attributes to the component tag.
eg
```vue
<food-item food-name="Apples"/>
```