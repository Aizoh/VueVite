<template>
    <!--If we have more than one element on the root level of the component, it is no longer clear which element the attributes should fall through to.
    define which root element gets the fallthrough attributes we can mark the element with the built-in $attrs object, like this:
     <li style="margin: 5px 0;">{{ itemName }}</li> -->
    <div class="pinkBall"></div>
        <li v-bind="$attrs">{{ itemName }}</li>
    <div class="pinkBall"></div>
</template>
<script>
    export default{
        props:[
            'itemName'
        ]
    }
</script>