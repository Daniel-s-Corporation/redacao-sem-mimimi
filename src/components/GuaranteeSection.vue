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
  position: relative;
  overflow: hidden;
  padding-block: 56px;
  background: var(--color-secondary);
  color: var(--color-primary);
}

/*
 * Textura: malha contínua de losangos em traço branco.
 * Mais visível nas pontas e quase sumindo atrás do texto.
 */
.guarantee::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20 20 0 40 20 20 40Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 40px 40px;
  background-position: center;
  opacity: 0.22;
  mask-image: radial-gradient(ellipse 45% 90% at 45% 50%, rgb(0 0 0 / 0.15), #000 100%);
}

.guarantee__inner {
  position: relative;
  z-index: 1;
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
  .guarantee::before {
    mask-image: radial-gradient(ellipse 75% 45% at 50% 62%, rgb(0 0 0 / 0.15), #000 100%);
  }

  .guarantee__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
