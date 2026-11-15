<script setup lang="ts">
// Ícones em contorno branco que sobem pelo fundo do hero
// em intervalos e posições aleatórias.
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Desenhos no estilo de traço do Lucide (viewBox 24×24). Conteúdo estático e confiável.
const ICONS = {
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  trophy:
    '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/>' +
    '<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>' +
    '<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  medal:
    '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/>' +
    '<path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
  award:
    '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>' +
    '<circle cx="12" cy="8" r="6"/>',
  // Readme: livro aberto com linhas de texto
  readme:
    '<path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M6 12h2"/><path d="M6 8h2"/>' +
    '<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  glasses:
    '<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-1 2 2 0 0 0-2 1"/>' +
    '<path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',
  // Envelope aberto com a carta saindo
  'envelope-open-text':
    '<path d="M6 10.5V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.5"/><path d="M9 7.5h6"/><path d="M9 10.5h6"/>' +
    '<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6"/>' +
    '<path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>',
} as const

type Kind = keyof typeof ICONS

interface Floater {
  id: number
  kind: Kind
  x: number // posição horizontal (%)
  size: number // px
  dur: number // s
  rot: number // graus de giro ao longo do trajeto
  drift: number // deslocamento lateral (px)
  opacity: number
}

const MAX_ON_SCREEN = 9
const kinds = Object.keys(ICONS) as Kind[]

const items = ref<Floater[]>([])
let nextId = 0
let timer: number | undefined

const rand = (min: number, max: number) => min + Math.random() * (max - min)

// Prefere as laterais, para não passar atrás do rosto e da frase
function randomX() {
  const r = Math.random()
  if (r < 0.4) return rand(2, 26)
  if (r < 0.8) return rand(74, 96)
  return rand(28, 72)
}

function spawn() {
  if (document.hidden || items.value.length >= MAX_ON_SCREEN) return
  items.value.push({
    id: nextId++,
    kind: kinds[Math.floor(Math.random() * kinds.length)]!,
    x: randomX(),
    size: rand(22, 46),
    dur: rand(10, 17),
    rot: rand(-40, 40),
    drift: rand(-60, 60),
    opacity: rand(0.12, 0.26),
  })
}

function remove(id: number) {
  items.value = items.value.filter((f) => f.id !== id)
}

function schedule() {
  timer = window.setTimeout(() => {
    spawn()
    schedule()
  }, rand(1400, 3200))
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  spawn()
  schedule()
})

onBeforeUnmount(() => window.clearTimeout(timer))
</script>

<template>
  <div class="floaters" aria-hidden="true">
    <svg
      v-for="f in items"
      :key="f.id"
      class="floater"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      :style="{
        left: `${f.x}%`,
        width: `${f.size}px`,
        height: `${f.size}px`,
        animationDuration: `${f.dur}s`,
        '--rot': `${f.rot}deg`,
        '--drift': `${f.drift}px`,
        '--o': f.opacity,
      }"
      @animationend="remove(f.id)"
      v-html="ICONS[f.kind]"
    />
  </div>
</template>

<style scoped>
.floaters {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  container-type: size;
}

.floater {
  position: absolute;
  bottom: -60px;
  color: var(--color-white);
  opacity: 0;
  animation-name: float-up;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  will-change: transform, opacity;
}

@keyframes float-up {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg);
  }
  12% {
    opacity: var(--o);
  }
  80% {
    opacity: var(--o);
  }
  100% {
    opacity: 0;
    transform: translate(var(--drift), calc(-100cqh - 80px)) rotate(var(--rot));
  }
}
</style>
