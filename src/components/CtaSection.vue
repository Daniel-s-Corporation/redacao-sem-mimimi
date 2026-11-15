<script setup lang="ts">
import { links } from '../data/site'
</script>

<template>
  <section class="section cta">
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
  background:
    radial-gradient(circle at 50% 120%, color-mix(in srgb, var(--color-secondary) 40%, transparent) 0, transparent 55%),
    var(--color-primary);
  color: var(--color-tertiary);
  text-align: center;
}

.cta__inner {
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
</style>
