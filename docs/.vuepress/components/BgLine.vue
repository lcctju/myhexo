<template>
<section>
  <code>
    .bg-line(90deg);
  </code>
  <div class="bg-line line-1"></div>
  <code>
    .bg-line(90deg, @c-red);
  </code>
  <div class="bg-line line-2"></div>
  <code>
    .bg-line(90deg, @c-red 80%, @c-yellow);
  </code>
  <div class="bg-line line-3"></div>
  <code>
    .bg-line(90deg, @c-red 20%, @c-yellow 40%, @c-blue 60%, @c-orange 90%, @c-green 100%);
  </code>
  <div class="bg-line line-4"></div>
  <code>
    .bg-line-rainbow;
  </code>
  <div class="bg-line line-5"></div>
</section>
</template>

<style lang="less" scoped>
@import url("../less/mixins");

.bg-line {
  .m(1rem);
  .box(auto, 2rem);
}
.line-1 {
  .bg-line(90deg);
}
.line-2 {
  .bg-line(90deg, @c-red);
}
.line-3 {
  .bg-line(90deg, @c-red 80%, @c-yellow);
}
.line-4 {
  .bg-line(90deg, @c-red 20%, @c-yellow 40%, @c-blue 60%, @c-orange 90%, @c-green 100%);
}
.line-5 {
  .bg-line-rainbow;  
}
</style>
