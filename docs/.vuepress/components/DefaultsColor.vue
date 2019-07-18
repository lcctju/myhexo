<template>
<section>
  <div v-for="(item, index) in defaultsColor" :key="index">
    <input v-model="item.value" @click="changeColor(index, item.value)" class="color" type="color">
    <span>{{ item.name + ": " + item.value }}</span>
  </div>
</section>
</template>

<script>
export default {
  data () {
		return {
			defaultsColor: [
        {
          name: "@c-navy",
          value: "#001f3f"
        },
        {
          name: "@c-blue",
          value: "#0074d9"
        },
        {
          name: "@c-aqua",
          value: "#7fdbff"
        },
        {
          name: "@c-teal",
          value: "#39cccc"
        },
        {
          name: "@c-olive",
          value: "#3d9970"
        },
        {
          name: "@green",
          value: "#2ecc40"
        },
        {
          name: "@c-lime",
          value: "#01ff70"
        },
        {
          name: "@c-yellow",
          value: "#ffdc00"
        },
        {
          name: "@c-orange",
          value: "#ff851b"
        },
        {
          name: "@c-red",
          value: "#ff4136"
        },
        {
          name: "@c-maroon",
          value: "#85144b"
        },
        {
          name: "@c-fuchsia",
          value: "#f012be"
        },
        {
          name: "@c-purple",
          value: "#b10dc9"
        },
        {
          name: "@c-black",
          value: "#111111"
        },
        {
          name: "@c-gray",
          value: "#aaaaaa"
        },
        {
          name: "@c-silver",
          value: "#dddddd"
        },
        {
          name: "@c-white",
          value: "#ffffff"
        }
      ]
		}
  },
  methods: {
    changeColor(index, color) {
      this.defaultsColor[index].value = color;
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../less/mixins");

.color {
  .box(2rem, 2rem);
  .border(0);
}
</style>
