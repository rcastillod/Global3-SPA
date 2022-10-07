<template>
  <div
    class="flex gap-5 font arimo uppercase text-white dark:text-primary overflow-hidden whitespace-nowrap py-5 border-y border-border-color dark:border-border-color-light"
  >
    <div v-for="n in 3" class="anim-wrapper">
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
  animation: text-marquee-right 25s linear infinite;
  padding-right: 1.5625rem;
}
.text {
  font-size: clamp(4rem, 5vw, 8rem);
  line-height: 1em;
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
