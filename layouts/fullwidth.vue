<template>
  <div id="fullwidth-layouts">
    <slot />
  </div>
</template>

<style lang="scss">
#fullwidth-layouts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100svh;
}
</style>