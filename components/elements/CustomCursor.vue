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

const route = useRoute();

onMounted(() => {
  let vueCursor = document.querySelector(".vueCursor");
  let vueCursorSmall = document.querySelector(".vueCursor--Small");
  let linkAnim = document.querySelectorAll(".link-anim");

  document.addEventListener("mousemove", (e) => {
    let scaleElementHovered =
      e.target &&
      (e.target.classList.contains(props.scaleElement) ||
        e.target.closest(`.${props.scaleElement}`));

    vueCursor.style.cssText = `
      transform: translate3d(${e.clientX - props.circleSize + props.dotSize - 1
      }px, ${e.clientY - props.circleSize + props.dotSize - 1}px, 0) scale(${scaleElementHovered ? 1 : 0.5
      });
        width: ${props.circleSize * 2}px;
        height: ${props.circleSize * 2}px;
        border-color: ${props.borderColor}
        `;

    vueCursorSmall.style.cssText = `
      transform: translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${scaleElementHovered ? 1 : 0.5
      });
      width: ${props.dotSize * 2}px;
      height: ${props.dotSize * 2}px;
      background-color: ${props.dotColor}`;
  });

  if (route.name === "index") {
    linkAnim.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        vueCursor.classList.add("active-arrow");
      });
      el.addEventListener("mouseleave", () => {
        vueCursor.classList.remove("active-arrow");
      });
    });
  }

  if (route.name === "proyectos") {
    linkAnim.forEach(el => {
      el.addEventListener("mouseenter", () => {
        vueCursor.classList.add("active-arrow", "active-plus");
      });
      el.addEventListener("mouseleave", () => {
        vueCursor.classList.remove("active-arrow", "active-plus");
      });
    })
  }

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

  .vueCursor.active-arrow,
  .vueCursor.active-plus {
    border: none;
  }
  .vueCursor.active-arrow::after,
  .vueCursor.active-plus::after {
    content: "";
    animation: rotate 10s infinite linear;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    border: 2px dashed white;
  }
  .vueCursor.active-arrow::before,
  .vueCursor.active-plus::before {
    content: url("/arrow-link-light.svg");
    position: fixed;
    top: 50%;
    left: 50%;
    height: 50%;
    width: 50%;
    transition: transform 400ms ease-in-out;
    transform: translate(-50%, -50%) scale(0);
  }

  .vueCursor.active-plus::before {
    transform: translate(-50%, -50%) scale(0) rotate(90deg);
  }

  .vueCursor.active-arrow::before,
  .vueCursor.active-plus::before {
    transform: translate(-50%, -50%) scale(1);
  }

  .vueCursor.active-arrow + .vueCursor--Small,
  .vueCursor.active-plus + .vueCursor--Small {
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
