<template>
<div class="btn">btn</div>
</template>

<style lang="less" scoped>
@import url("../less/mixins");

.btn {
  .m(20px);
  .btn(100px, 40px, 10px, @c-blue);
  .box>.shadow;
  .font(20px, @c-white);
}
</style>
