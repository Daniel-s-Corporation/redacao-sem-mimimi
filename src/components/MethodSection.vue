<script setup lang="ts">
import foto from '../assets/img/prof-mimimi.webp'

const pillars = [
  {
    n: '01',
    title: 'Pense como o avaliador',
    text: 'Você aprende o critério de correção por dentro — e passa a escrever para quem vai te dar a nota.',
  },
  {
    n: '02',
    title: 'Estrutura que pontua',
    text: 'Modelos e estruturas testadas para cada tipo de texto, sem enrolação e sem fórmula vazia.',
  },
  {
    n: '03',
    title: 'Português sem armadilhas',
    text: 'Os padrões que as bancas repetem e os erros que mais derrubam candidatos, direto ao ponto.',
  },
  {
    n: '04',
    title: 'Treino com correção',
    text: 'Exercícios práticos e correção comentada para você saber exatamente onde está perdendo pontos.',
  },
]
</script>

<template>
  <section id="metodo" class="section">
    <div class="container">
      <div class="intro">
        <div class="intro__copy">
          <span class="eyebrow">Somos experientes em bancas</span>
          <h2 class="section-title">Aprovar não é escrever bonito. É saber pontuar.</h2>
          <p>
            Muita gente estuda por meses, escreve bem e mesmo assim é reprovada na redação. O motivo
            quase sempre é o mesmo: ninguém ensinou o que a banca realmente avalia.
          </p>
          <p>
            Aqui o foco é o critério de correção. Você para de adivinhar e passa a escrever pensando
            como quem corrige.
          </p>
        </div>
        <img class="intro__img" :src="foto" alt="Professor Gleison com as mãos abertas, questionando" width="800" height="641" loading="lazy" />
      </div>

      <ol class="pillars">
        <li v-for="p in pillars" :key="p.n" class="pillar">
          <span class="pillar__n">{{ p.n }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}

.intro__copy p {
  max-width: 54ch;
  font-size: 1.05rem;
}

.intro__img {
  width: 100%;
  max-width: 440px;
  height: auto;
  margin-left: auto;
  background: var(--color-tertiary);
  border-radius: 50% 50% var(--radius) var(--radius);
}

.pillars {
  list-style: none;
  padding: 0;
  margin: 64px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.pillar {
  padding: 28px 24px;
  background: var(--color-tertiary);
  border-radius: var(--radius);
}

.pillar__n {
  display: block;
  margin-bottom: 12px;
  color: var(--color-secondary);
  font-weight: var(--fw-extrabold);
  font-size: 1.5rem;
}

.pillar h3 {
  font-size: 1.1rem;
}

.pillar p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-complementary);
}

@media (max-width: 960px) {
  .pillars {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .intro {
    grid-template-columns: 1fr;
  }

  .intro__img {
    max-width: 320px;
    margin-inline: auto;
  }

  .pillars {
    grid-template-columns: 1fr;
  }
}
</style>
