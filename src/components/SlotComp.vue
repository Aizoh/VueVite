<template>
    <div> <!-- This div makes the card-like appearance -->
      <slot>
        <!---fall back content incase the componet is created without content goes here-->
      </slot>

      <!--named slots-->
      <slot name="footerSlot">
        <p>Copy right 2016</p>
      </slot>
    </div>
    <div>
    <slot name="bottomSlot"></slot>
  </div>
  </template>
 
  
  <script></script>
  
  <style scoped>
    div {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      border-radius: 10px;
      margin: 10px;
    }
  </style>