<template>
  <span>
    <span class="vueCursor"></span>
    <span class="vueCursor--Small"></span>
  </span>
</template>

<script setup>
import { computed, onMounted } from "vue";

const props = defineProps({
  scaleElement: {},
  dotSize: {
    default: 6,
  },
  dotColor: {
    default: "#aaa",
  },
  circleSize: {
    default: 40,
  },
  borderColor: {
    default: "#f00",
  },
});

onMounted(() => {
  let vueCursor = document.querySelector(".vueCursor");
  let vueCursorAfter = document.querySelector("::after");
  let vueCursorSmall = document.querySelector(".vueCursor--Small");
  let btnRounded = document.querySelector(".btn-rounded");

  document.addEventListener("mousemove", (e) => {
    let scaleElementHovered =
      e.target &&
      (e.target.classList.contains(props.scaleElement) ||
        e.target.closest(`.${props.scaleElement}`));

    vueCursor.style.cssText = `
      transform: translate3d(${
        e.clientX - props.circleSize + props.dotSize - 1
      }px, ${e.clientY - props.circleSize + props.dotSize - 1}px, 0) scale(${
      scaleElementHovered ? 1 : 0.5
    });
        width: ${props.circleSize * 2}px;
        height: ${props.circleSize * 2}px;
        border-color: ${props.borderColor}
        `;

    vueCursorSmall.style.cssText = `
      transform: translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${
      scaleElementHovered ? 1 : 0.5
    });
      width: ${props.dotSize * 2}px;
      height: ${props.dotSize * 2}px;
      background-color: ${props.dotColor}`;
  });

  // btnRounded.addEventListener("mouseenter", () => {
  //   vueCursor.classList.add("active");
  // });
  // btnRounded.addEventListener("mouseleave", () => {
  //   vueCursor.classList.remove("active");
  // });
});
</script>

<style>
@media (min-width: 1280px) {
  * {
    cursor: none;
  }
  .vueCursor,
  .vueCursor--Small {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    border-radius: 50%;
    pointer-events: none;
    box-sizing: border-box;
    backface-visibility: hidden;
  }

  .vueCursor {
    transition: transform 100ms;
    border: 1px solid #f00;
  }

  .vueCursor.active {
    border: none;
  }
  .vueCursor::after {
    content: "";
    animation: rotate 10s infinite linear;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 2px dashed white;
    opacity: 0;
  }
  .vueCursor.active::after {
    opacity: 1;
  }

  .vueCursor.active + .vueCursor--Small {
    opacity: 0;
  }

  .vueCursor--Small {
    background-color: #aaa;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(0.9);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(0.9);
    }
  }
}
</style>
