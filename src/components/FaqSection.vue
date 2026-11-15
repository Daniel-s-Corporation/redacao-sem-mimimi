<script setup lang="ts">
import { faq } from '../data/site'
</script>

<template>
  <section id="duvidas" class="section faq">
    <div class="container faq__inner">
      <div class="section-head">
        <span class="eyebrow">Perguntas frequentes</span>
        <h2 class="section-title">Ficou alguma dúvida?</h2>
      </div>

      <div class="faq__list">
        <details v-for="(item, i) in faq" :key="item.q" :open="i === 0">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--color-tertiary);
}

.faq__inner {
  max-width: 820px;
}

.faq__list {
  display: grid;
  gap: 12px;
}

details {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 0 24px;
}

summary {
  position: relative;
  padding: 20px 32px 20px 0;
  color: var(--color-primary);
  font-weight: var(--fw-bold);
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: '+';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-secondary);
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  transition: transform 0.2s ease;
}

details[open] summary::after {
  transform: translateY(-50%) rotate(45deg);
}

details p {
  margin: 0;
  padding-bottom: 20px;
}
</style>
