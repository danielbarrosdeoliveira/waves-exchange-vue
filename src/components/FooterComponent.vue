<template>
  <footer class="footer">
    <p>
      {{ new Date().getFullYear() }} -&nbsp;
      <a href="https://github.com/danielbarrosdeoliveira" target="_blank"> Daniel Oliveira </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: 4rem;
  background: var(--background);
  width: 100%;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer p {
  display: flex;
  justify-content: center;
}

.footer a {
  color: var(--white);
  transition: filter 0.4s;
}

.footer a:hover {
  filter: opacity(0.7);
}
</style>
