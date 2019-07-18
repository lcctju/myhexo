<template>
<section class="font-hidden">
  <div class="hidden-item">
    <p>font-hidden: 1</p>
    <p class="hidden-text hidden-1">PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.</p>
  </div>
  <div class="hidden-item">
    <p>font-hidden: 2</p>
    <p class="hidden-text hidden-3">PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.</p>
  </div>
</section>
</template>

<style lang="postcss" scoped>
.hidden-text {
  margin-top: 1rem;
  max-width: 20rem;
}
.hidden-1 {
  font-hidden: 1;
}
.hidden-3 {
  max-height: 5.5rem;
  font-hidden: 2;
  -webkit-box-orient: vertical;
}
</style>
