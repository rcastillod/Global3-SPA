<template>
	<NuxtLink :to="link" :target="target" class="whatsapp-link link">
		<img src="/whatsapp.svg" width="30" alt="Whatsapp Icon">
		<div class="whatsapp-link__number">
			{{ telefono }}
			<div class="container-stars">
				<div class="stars"></div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	link: {
		type: String,
		required: true,
	},
	target: {
		type: String,
		required: true,
	},
	telefono: {
		type: String,
	},
});
</script>

<style scoped>
.whatsapp-link {
	@apply bg-primary/50;
	backdrop-filter: blur(.3125rem);
	position: fixed;
	bottom: 0;
	right: 0;
	padding: .625rem .625rem;
	z-index: 2;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;

	transition: transform 600ms ease-in-out;
	width: 100%;
}

@media (width > 768px) {
	.whatsapp-link {
		background-color: transparent;
		bottom: 100px;
		right: 60px;
		padding: 0;

		flex-direction: column;

		width: max-content;
	}
}

.whatsapp-link img {
	filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, .25));
	width: 1.875rem;
}

@media (width > 768px) {
	.whatsapp-link img {
		width: 3.125rem;
	}
}

.whatsapp-link:hover {
	transform: translateY(-5px);
}

.whatsapp-link .whatsapp-link__number {
	@apply bg-primary/5 border-[2px] border-solid border-orange-1 text-orange-1;
	backdrop-filter: blur(5px);
	border-radius: 1.5625rem;
	font-size: .8125rem;
	font-weight: 700;
	letter-spacing: 1.2px;
	padding: .3125em .9375em;
	position: relative;
	overflow: hidden
}

.container-stars {
  position: absolute;
	top: 0;
	left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

.stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

.stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 110s linear infinite;
}

.stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

.stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 80s linear infinite;
}

.stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

</style>
