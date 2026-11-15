<script setup lang="ts">
import { links } from '../data/site'

// Cubos isométricos em contorno espalhados pelas bordas (posição, tamanho, giro e opacidade).
const cubes = [
  { left: '5%', top: '14%', size: 72, rot: -12, o: 0.14, delay: 0 },
  { left: '15%', top: '62%', size: 44, rot: 8, o: 0.1, delay: -3 },
  { left: '2%', top: '78%', size: 28, rot: 20, o: 0.12, delay: -6 },
  { right: '6%', top: '10%', size: 54, rot: 14, o: 0.12, delay: -2 },
  { right: '12%', top: '60%', size: 84, rot: -8, o: 0.14, delay: -5 },
  { right: '2%', top: '42%', size: 30, rot: -22, o: 0.1, delay: -8 },
]
</script>

<template>
  <section class="section cta">
    <div class="cubes" aria-hidden="true">
      <svg
        v-for="(c, i) in cubes"
        :key="i"
        class="cube"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
        :style="{
          left: c.left,
          right: c.right,
          top: c.top,
          width: `${c.size}px`,
          height: `${c.size}px`,
          opacity: c.o,
          '--rot': `${c.rot}deg`,
          animationDelay: `${c.delay}s`,
        }"
      >
        <path d="M12 2 21 7v10l-9 5-9-5V7Z" vector-effect="non-scaling-stroke" />
        <path d="M3 7l9 5 9-5M12 12v10" vector-effect="non-scaling-stroke" />
      </svg>
    </div>

    <div class="container cta__inner">
      <h2 class="section-title section-title--light">Pare de adivinhar o que a banca quer.</h2>
      <p>Comece hoje e aprenda a escrever a redação que pontua.</p>
      <div class="cta__actions">
        <a class="btn btn--primary" :href="links.matricula">Comece agora!</a>
        <a class="btn btn--outline" :href="links.whatsapp" target="_blank" rel="noopener">Falar no WhatsApp</a>
      </div>
      <a class="cta__group" :href="links.grupoWhatsapp" target="_blank" rel="noopener">
        Entre no grupo do WhatsApp e receba materiais grátis →
      </a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 120%, color-mix(in srgb, var(--color-secondary) 40%, transparent) 0, transparent 55%),
    var(--color-primary);
  color: var(--color-tertiary);
  text-align: center;
}

/* Cubos de fundo: ficam nas bordas, longe do texto, e flutuam devagar */
.cubes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cube {
  position: absolute;
  color: var(--color-white);
  transform: rotate(var(--rot));
  animation: cube-float 9s ease-in-out infinite;
}

@keyframes cube-float {
  0%,
  100% {
    transform: translateY(0) rotate(var(--rot));
  }
  50% {
    transform: translateY(-10px) rotate(calc(var(--rot) + 6deg));
  }
}

.cta__inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.cta p {
  font-size: 1.15rem;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}

.cta__group {
  display: inline-block;
  margin-top: 28px;
  color: var(--color-secondary);
  font-weight: var(--fw-semibold);
  text-decoration: none;
}

.cta__group:hover {
  text-decoration: underline;
}

/* Celular: cubos menores, mais fracos e só nos cantos, para não passar atrás do texto */
@media (max-width: 720px) {
  .cube {
    scale: 0.55;
    transform-origin: center;
  }

  .cube:nth-child(2),
  .cube:nth-child(5) {
    display: none;
  }

  .cube:nth-child(1) {
    top: 2% !important;
  }

  .cube:nth-child(3) {
    top: 88% !important;
  }

  .cube:nth-child(4) {
    top: 2% !important;
  }

  .cube:nth-child(6) {
    top: 88% !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cube {
    animation: none;
  }
}
</style>
