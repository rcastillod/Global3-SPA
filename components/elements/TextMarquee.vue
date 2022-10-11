<template>
  <div
    class="flex gap-5 font arimo uppercase text-white dark:text-primary overflow-hidden whitespace-nowrap py-5 border-y border-border-color dark:border-border-color-light"
    :class="{ bordered: bordered }"
  >
    <div v-for="n in 3" class="anim-wrapper" :class="direction">
      <span v-for="(text, index) in listDash" :key="index" class="text">{{
        text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
    },
    direction: {
      type: String,
      default: "right",
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listDash() {
      let listArr = this.texts;
      let dashEl = "-";
      let between = 1;

      const newListArr = listArr.reduce((list, elem, i) => {
        list.push(elem);
        if ((i + 1) % between === 0) list.push(dashEl);
        return list;
      }, []);
      return newListArr;
    },
  },
};
</script>

<style scoped>
.anim-wrapper {
  animation-duration: 25s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.anim-wrapper.right {
  animation-name: text-marquee-right;
}
.anim-wrapper.left {
  animation-name: text-marquee-left;
}
.text {
  font-size: clamp(4rem, 5vw, 8rem);
  line-height: 1em;
}
.bordered .text {
  color: rgba(255, 255, 255, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
}
.dark .bordered .text {
  color: rgba(255, 255, 255, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #131313;
}
@keyframes text-marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes text-marquee-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
