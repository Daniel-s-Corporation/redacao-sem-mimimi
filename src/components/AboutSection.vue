<script setup lang="ts">
import { credentials, links } from '../data/site'
import foto from '../assets/img/prof-quem-sou.webp'
</script>

<template>
  <section id="quem-sou" class="section about">
    <div class="container about__inner">
      <div class="about__media">
        <img :src="foto" alt="Professor Gleison Verçosa dando aula" width="896" height="1164" loading="lazy" />
      </div>

      <div class="about__copy">
        <span class="eyebrow eyebrow--light">Quem vai te ensinar</span>
        <h2 class="section-title section-title--light">Prof. Gleison Verçosa</h2>
        <p class="about__lead">
          Já estive dos dois lados: como candidato aprovado e como membro de banca. É essa experiência
          que eu levo para as aulas.
        </p>

        <ul class="about__list">
          <li v-for="c in credentials" :key="c">{{ c }}</li>
        </ul>

        <div class="about__actions">
          <a class="btn btn--primary" :href="links.livroAmazon" target="_blank" rel="noopener">
            Conheça o livro "Redação sem enrolação"
          </a>
          <a class="btn btn--outline" :href="links.youtube" target="_blank" rel="noopener">Veja-me no YouTube</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-primary);
  color: var(--color-tertiary);
}

.about__inner {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 56px;
  align-items: center;
}

.about__media img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
}

.about__lead {
  font-size: 1.1rem;
  max-width: 52ch;
}

.about__list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: grid;
  gap: 12px;
}

.about__list li {
  position: relative;
  padding-left: 32px;
}

.about__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--color-secondary);
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: var(--fw-extrabold);
}

.about__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

@media (max-width: 820px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about__media img {
    max-width: 380px;
    margin-inline: auto;
  }
}
</style>
