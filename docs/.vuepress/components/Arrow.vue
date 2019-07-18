<template>
<section class="arrow">
  <div class="arrow-item">
    <span class="type">top</span>
    <span class="item arrow-top"></span>
  </div>
  <div class="arrow-item">
    <span class="type">bottom</span>
    <span class="item arrow-bottom"></span>
  </div>
  <div class="arrow-item">
    <span class="type">left</span>
    <span class="item arrow-left"></span>
  </div>
  <div class="arrow-item">
    <span class="type">right</span>
    <span class="item arrow-right"></span>
  </div>
  <div class="arrow-item">
    <span class="type">top-left</span>
    <span class="item arrow-top-left"></span>
  </div>
  <div class="arrow-item">
    <span class="type">top-right</span>
    <span class="item arrow-top-right"></span>
  </div>
  <div class="arrow-item">
    <span class="type">bottom-left</span>
    <span class="item arrow-bottom-left"></span>
  </div>
  <div class="arrow-item">
    <span class="type">bottom-right</span>
    <span class="item arrow-bottom-right"></span>
  </div>
</section>
</template>

<style lang="postcss" scoped>
.arrow {
  display: block;
  box: 100%;
}
.arrow-item {
  line-height: 2rem;
}
.type {
  display: inline-block;
}
.item {
  display: inline-block;
  margin-left: 1rem;
}
.arrow-top {
  arrow: top;
}
.arrow-bottom {
  arrow: bottom;
}
.arrow-left {
  arrow: left;
}
.arrow-right {
  arrow: right;
}
.arrow-top-left {
  arrow: top-left;
}
.arrow-top-right {
  arrow: top-right;
}
.arrow-bottom-left {
  arrow: bottom-left;
}
.arrow-bottom-right {
  arrow: bottom-right;
}
</style>
