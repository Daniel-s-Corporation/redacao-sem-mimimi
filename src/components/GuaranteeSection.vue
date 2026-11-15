<template>
  <section class="guarantee">
    <div class="container guarantee__inner">
      <div class="seal" aria-hidden="true">
        <strong>7</strong>
        <span>dias</span>
      </div>
      <div>
        <h2>Garantia de 7 dias, sem mimimi</h2>
        <p>
          Entre, assista às aulas e conheça o método. Se em até 7 dias você achar que não é para você,
          devolvemos 100% do seu dinheiro. Simples assim.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.guarantee {
  padding-block: 56px;
  background: var(--color-secondary);
  color: var(--color-primary);
}

.guarantee__inner {
  display: flex;
  align-items: center;
  gap: 32px;
}

.seal {
  flex: none;
  width: 112px;
  height: 112px;
  display: grid;
  place-content: center;
  text-align: center;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  box-shadow: 0 0 0 6px var(--color-tertiary);
}

.seal strong {
  font-size: 2.6rem;
  line-height: 1;
}

.seal span {
  font-size: 0.85rem;
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
}

p {
  margin: 0;
  max-width: 60ch;
  font-weight: var(--fw-medium);
}

@media (max-width: 640px) {
  .guarantee__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
