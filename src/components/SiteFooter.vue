<script setup lang="ts">
import { links, nav } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <a href="#topo" class="logo">Redação <span>sem mimimi</span></a>
        <p class="footer__tag">Redação e Português para concursos.<br />Não temos escola física — todo o conteúdo é on-line.</p>
      </div>

      <nav aria-label="Rodapé">
        <h3>Navegue</h3>
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a :href="links.loja">Ebooks</a>
      </nav>

      <nav aria-label="Contato">
        <h3>Contato</h3>
        <a :href="links.whatsapp" target="_blank" rel="noopener">WhatsApp</a>
        <a :href="links.email">E-mail</a>
        <a :href="links.instagram" target="_blank" rel="noopener">Instagram</a>
        <a :href="links.youtube" target="_blank" rel="noopener">YouTube</a>
      </nav>
    </div>

    <div class="container footer__bottom">
      <span>© {{ year }} Redação sem mimimi. Todos os direitos reservados.</span>
      <a :href="links.privacidade">Política de privacidade</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #072509;
  color: var(--color-tertiary);
  padding-top: 56px;
  font-size: 0.95rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
}

.logo {
  color: var(--color-white);
  font-weight: var(--fw-extrabold);
  font-size: 1.25rem;
  text-decoration: none;
}

.logo span {
  color: var(--color-secondary);
}

.footer__tag {
  margin-top: 12px;
  opacity: 0.8;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h3 {
  margin-bottom: 4px;
  color: var(--color-white);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

nav a,
.footer__bottom a {
  color: var(--color-tertiary);
  text-decoration: none;
  opacity: 0.85;
}

nav a:hover,
.footer__bottom a:hover {
  color: var(--color-secondary);
  opacity: 1;
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 48px;
  padding-block: 20px;
  border-top: 1px solid color-mix(in srgb, var(--color-tertiary) 15%, transparent);
  font-size: 0.85rem;
  opacity: 0.85;
}

@media (max-width: 720px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer__inner > div:first-child {
    grid-column: 1 / -1;
  }
}
</style>
