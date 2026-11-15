<script setup lang="ts">
import { links } from '../data/site'
import logo from '../assets/img/logo-white.webp'
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#topo" class="logo" aria-label="Redação sem mimimi — início">
        <img class="logo__img" :src="logo" alt="" width="48" height="45" />
        <span class="logo__text">Redação <span>sem mimimi</span></span>
      </a>

      <nav class="header__actions" aria-label="Acesso">
        <a class="btn btn--primary btn--sm" :href="links.matricula">Comece agora</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--color-primary) 94%, transparent);
  backdrop-filter: blur(8px);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 68px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-white);
  font-weight: var(--fw-extrabold);
  font-size: 1.15rem;
  line-height: 1.1;
  text-decoration: none;
  letter-spacing: -0.01em;
}

.logo__img {
  flex: none;
  width: 48px;
  height: auto;
}

.logo__text span {
  color: var(--color-secondary);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__actions .btn {
  white-space: nowrap;
}

/* Celular: logo em duas linhas e botão um pouco menor */
@media (max-width: 480px) {
  .header__inner {
    gap: 10px;
  }

  .logo {
    flex: none;
    font-size: 0.95rem;
  }

  .logo__text span {
    display: block;
    white-space: nowrap;
  }

  .logo__img {
    width: 44px;
  }

  .header__actions .btn {
    padding: 0.6em 1.1em;
    font-size: 0.85rem;
  }
}
</style>
