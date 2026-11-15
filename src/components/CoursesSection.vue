<script setup lang="ts">
import { products, pac, links } from '../data/site'
</script>

<template>
  <section id="cursos" class="section courses">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Cursos e materiais</span>
        <h2 class="section-title">Escolha por onde começar</h2>
        <p>Do curso completo ao material de revisão rápida — tudo focado no que a banca cobra.</p>
      </div>

      <div class="grid">
        <article v-for="p in products" :key="p.name" class="card" :class="{ 'card--featured': p.featured }">
          <span v-if="p.featured" class="card__badge">Mais completo</span>
          <h3 class="card__name">{{ p.name }}</h3>
          <p class="card__desc">{{ p.description }}</p>
          <p class="card__price">{{ p.price }}</p>
          <p class="card__access">{{ p.access }}</p>
          <ul class="card__features">
            <li v-for="f in p.features" :key="f">{{ f }}</li>
          </ul>
          <a class="btn" :class="p.featured ? 'btn--primary' : 'btn--dark'" :href="p.href">{{ p.cta }}</a>
        </article>
      </div>

      <div class="pac">
        <div>
          <h3>{{ pac.name }} <span class="pac__price">por apenas {{ pac.price }}</span></h3>
          <p>{{ pac.description }}</p>
        </div>
        <a class="btn btn--primary" :href="pac.href">Quero o PAC</a>
      </div>

      <div class="special">
        <p>
          <strong>Vai prestar um concurso específico?</strong> Abrimos turmas focadas em editais e bancas
          como FGV e FADENOR.
        </p>
        <a class="link-arrow" :href="links.treinamentos">Ver treinamentos por concurso →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: stretch;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background: var(--color-white);
  border: 1px solid color-mix(in srgb, var(--color-complementary) 25%, transparent);
  border-radius: var(--radius);
}

.card--featured {
  border: 2px solid var(--color-secondary);
  box-shadow: 0 16px 40px -20px color-mix(in srgb, var(--color-secondary) 60%, transparent);
}

.card__badge {
  position: absolute;
  top: -13px;
  left: 24px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--color-secondary);
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: var(--fw-bold);
}

.card__name {
  font-size: 1.2rem;
}

.card__desc {
  font-size: 0.95rem;
}

.card__price {
  margin: 8px 0 0;
  color: var(--color-primary);
  font-size: 1.9rem;
  font-weight: var(--fw-extrabold);
}

.card__access {
  color: var(--color-complementary);
  font-size: 0.85rem;
}

.card__features {
  list-style: none;
  padding: 0;
  margin: 8px 0 24px;
  flex: 1;
  font-size: 0.92rem;
}

.card__features li {
  padding: 6px 0 6px 22px;
  position: relative;
}

.card__features li::before {
  content: '•';
  position: absolute;
  left: 4px;
  color: var(--color-secondary);
  font-weight: var(--fw-extrabold);
}

.card .btn {
  text-align: center;
}

.pac {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 32px;
  padding: 28px 32px;
  background: var(--color-tertiary);
  border-radius: var(--radius);
}

.pac h3 {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.pac p {
  margin: 0;
}

.pac__price {
  color: var(--color-complementary);
  font-weight: var(--fw-semibold);
  font-size: 1rem;
}

.special {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  margin-top: 24px;
  padding: 0 4px;
}

.special p {
  margin: 0;
}

.special strong {
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .pac {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
}
</style>
