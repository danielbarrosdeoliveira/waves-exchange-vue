<template>
  <HeaderComponent />
  <ContentComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ContentComponent from './components/ContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent
  }
}
</script>

<style></style>
