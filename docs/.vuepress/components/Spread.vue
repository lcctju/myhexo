<template>
<section class="spread">
  <div class="spread-item top">top</div>
  <div class="spread-item bottom">bottom</div>
  <div class="spread-item left">left</div>
  <div class="spread-item right">right</div>
  <div class="spread-item top-bottom">top-bottom</div>
  <div class="spread-item bottom-top">bottom-top</div>
  <div class="spread-item left-right">left-right</div>
  <div class="spread-item right-left">right-left</div>
</section>
</template>

<style lang="postcss" scoped>
.spread-item {
  display: inline-block;
  margin: 0.5rem;
  box: 8rem 4rem;
  border: 1px solid #ccc;
  font-cc: 4rem;
  vertical-align: top;
}
.top {
  spread: top 100% 2px #da3;
}
.bottom {
  line-height: calc(4rem - 2px);
  spread: bottom 100% 2px #da3;
}
.left {
  spread: left 2px 100% #da3;
}
.right {
  spread: right 2px 100% #da3;
}
.top-bottom {
  spread: top-bottom #da3;
}
.bottom-top {
  spread: bottom-top #da3;
}
.left-right {
  spread: left-right #da3;
}
.right-left {
  spread: right-left #da3;
}
</style>
