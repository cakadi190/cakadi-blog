<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="scss" scoped>
blockquote {
  font-size: 1.1em;
  width: 100%;
  font-family: 'Georgia', serif;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid var(--bs-primary);
  line-height: 1.6;
  position: relative;
  background: #eee;

  &::before {
    content: '\201C';
    color: var(--bs-primary);
    font-size: 4em;
    position: absolute;
    left: 20px;
    top: -5px;
  }

  &::after {
    content: '';
  }

  cite {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;

    &::before {
      content: '\2014 \2009';
    }
  }

  p:nth-last-child(n+2) {
    margin-bottom: 0 !important;
  }
}
</style>