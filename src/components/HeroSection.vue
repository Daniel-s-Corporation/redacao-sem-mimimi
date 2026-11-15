<script setup lang="ts">
import { links } from '../data/site'
import foto from '../assets/img/prof-apontando.webp'
import HeroFloaters from './HeroFloaters.vue'

// Frase animada palavra por palavra; `hl` destaca na cor secundária.
const words = [
  { t: 'Nós' },
  { t: 'te' },
  { t: 'mostramos' },
  { t: 'o' },
  { t: 'caminho' },
  { t: 'para' },
  { t: 'uma' },
  { t: 'redação', hl: true },
  { t: 'vencedora', hl: true },
]

const step = 90 // ms entre palavras
const actionsDelay = 400 + words.length * step + 250
</script>

<template>
  <section id="topo" class="hero">
    <HeroFloaters />
    <div class="container hero__inner">
      <div class="hero__stage">
        <p class="bubble">Redação e Português<br />para concursos</p>

        <img
          class="hero__img"
          :src="foto"
          alt="Professor Gleison Verçosa apontando para você"
          width="900"
          height="808"
        />

        <div class="hero__overlay">
          <h1 class="hero__title" aria-label="Nós te mostramos o caminho para uma redação vencedora">
            <span
              v-for="(w, i) in words"
              :key="i"
              class="word"
              :class="{ 'word--hl': w.hl }"
              :style="{ animationDelay: `${400 + i * step}ms` }"
              aria-hidden="true"
              >{{ w.t }}</span
            >
          </h1>

          <div class="hero__actions" :style="{ animationDelay: `${actionsDelay}ms` }">
            <a class="btn btn--primary" :href="links.matricula">Quero minha vaga</a>
            <a class="btn btn--outline" href="#metodo">Veja como funciona</a>
          </div>

          <p class="hero__note" :style="{ animationDelay: `${actionsDelay + 200}ms` }">
            ✓ Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--color-secondary) 38%, transparent) 0, transparent 42%),
    var(--color-primary);
  color: var(--color-tertiary);
}

/*
 * Textura: duas camadas de linhas onduladas em escalas diferentes,
 * deslizando devagar em sentidos opostos.
 */
.hero::before,
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='36' viewBox='0 0 240 36'%3E%3Cpath d='M0 18 C40 6 80 6 120 18 S200 30 240 18' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3C/svg%3E");
  background-repeat: repeat;
  /* Mais visível nas laterais, suave atrás do professor */
  mask-image: radial-gradient(ellipse 55% 70% at 50% 45%, rgb(0 0 0 / 0.35), #000 85%);
}

.hero::before {
  background-size: 240px 36px;
  opacity: 0.07;
  animation: waves-drift 40s linear infinite;
}

.hero::after {
  background-size: 420px 63px;
  background-position: 120px 20px;
  opacity: 0.05;
  animation: waves-drift 60s linear infinite reverse;
}

@keyframes waves-drift {
  to {
    background-position-x: 240px;
  }
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 72px;
  text-align: center;
}

/* Balão de conversa à direita do professor */
.bubble {
  position: absolute;
  z-index: 2;
  top: 6%;
  left: 70%;
  margin: 0;
  padding: 14px 20px;
  width: max-content;
  background: var(--color-white);
  color: var(--color-primary);
  border-radius: 22px;
  font-size: 1rem;
  font-weight: var(--fw-bold);
  line-height: 1.35;
  text-align: left;
  box-shadow: 0 12px 32px -12px rgb(0 0 0 / 0.45);
  transform-origin: 0% 100%;
  animation:
    bubble-in 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both,
    bubble-float 4s ease-in-out 1.2s infinite;
}

/* Rabinho apontando para o professor */
.bubble::after {
  content: '';
  position: absolute;
  left: -10px;
  bottom: 10px;
  width: 26px;
  height: 22px;
  background: var(--color-white);
  clip-path: polygon(100% 0, 0 100%, 100% 70%);
}

/* Palco: imagem centralizada; o texto sobe e fica sobre o notebook */
.hero__stage {
  position: relative;
  /*
   * A largura acompanha a altura da tela para que foto + frase + botões
   * caibam sem rolar: altura até os CTAs ≈ 0,97 × largura + ~190px.
   */
  width: min(640px, 100%, max(260px, calc(100vh - 200px)));
  width: min(640px, 100%, max(260px, calc(100svh - 200px)));
  /* Permite que a frase escale junto com o palco (unidade cqi) */
  container-type: inline-size;
}

.hero__img {
  width: 100%;
  height: auto;
  margin-inline: auto;
  /* O notebook se dissolve no fundo, mantendo a textura visível */
  mask-image: linear-gradient(to bottom, #000 68%, transparent 100%);
  animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.hero__overlay {
  position: relative;
  z-index: 1;
  /* Margem negativa em % da largura do palco: o bloco começa na altura do notebook */
  margin-top: -26%;
  padding-top: 7%;
}

.hero__title {
  margin: 0 auto;
  max-width: 20ch;
  color: var(--color-white);
  font-size: clamp(1.35rem, 7.5cqi, 3rem);
  text-shadow:
    0 2px 4px rgb(0 0 0 / 0.35),
    0 4px 24px rgb(0 0 0 / 0.45);
}

.word {
  display: inline-block;
  margin-right: 0.25em;
  opacity: 0;
  animation: word-in 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
}

.word:last-child {
  margin-right: 0;
}

.word--hl {
  color: var(--color-secondary);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
  opacity: 0;
  animation: fade-up 0.6s ease-out forwards;
}

.hero__note {
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  opacity: 0;
  animation: fade-in 0.6s ease-out forwards;
}

/* Fora do celular os CTAs ficam sempre lado a lado, mesmo com o palco estreito */
@media (min-width: 641px) {
  .hero__actions {
    flex-wrap: nowrap;
    white-space: nowrap;
  }
}

@keyframes word-in {
  from {
    opacity: 0;
    transform: translateY(0.6em) scale(0.96);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade-in {
  to {
    opacity: 0.85;
  }
}

@keyframes bubble-in {
  from {
    opacity: 0;
    transform: scale(0.4) rotate(-6deg);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes bubble-float {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -6px;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 640px) {
  .hero__inner {
    padding-top: 28px;
    padding-bottom: 56px;
  }

  .bubble {
    top: 3%;
    left: auto;
    right: 0;
    padding: 9px 13px;
    border-radius: 16px;
    font-size: 0.78rem;
  }

  .bubble::after {
    left: -8px;
    width: 18px;
    height: 16px;
  }

  .hero__overlay {
    margin-top: -22%;
    padding-top: 4%;
  }

  .hero__actions .btn {
    flex: 1 1 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero::before,
  .hero::after {
    animation: none;
  }

  .hero__img,
  .bubble,
  .word,
  .hero__actions,
  .hero__note {
    animation: none;
    opacity: 1;
  }

  .hero__note {
    opacity: 0.85;
  }
}
</style>
