<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MethodSection from './components/MethodSection.vue'
import AboutSection from './components/AboutSection.vue'
import CoursesSection from './components/CoursesSection.vue'
import GuaranteeSection from './components/GuaranteeSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsappButton from './components/WhatsappButton.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <MethodSection />
    <AboutSection />
    <CoursesSection />
    <GuaranteeSection />
    <FaqSection />
    <CtaSection />
  </main>
  <SiteFooter />
  <WhatsappButton />
</template>
