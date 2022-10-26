<template>
  <div id="preloader"><span>.</span><span>.</span><span>.</span></div>
</template>

<style scoped>
/* Preloader */
#preloader {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -12px;
  z-index: 99999;
  opacity: 1;
  transition: all 0.15s linear;
  pointer-events: none;
}
#preloader span {
  font-size: 28px;
  line-height: 28px;
  color: #fff;
  animation-name: blink;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
#preloader span:first-child {
  padding-left: 2px;
}
#preloader span:nth-child(2) {
  animation-delay: 0.3s;
}
#preloader span:nth-child(3) {
  animation-delay: 0.6s;
}
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
