<template>
  <header class="header">
    <nav class="header__nav container">
      <img src="@/assets/img/logo-light.png" alt="Logo Daniel Oliveira" class="logo-daniel" />
      <ul>
        <li>
          <a target="_blank" href="https://www.tecmundo.com.br/nft">O que é NFT?</a>
        </li>
        <li>
          <a target="_blank" href="https://www.ibm.com/br-pt/topics/what-is-blockchain">
            O que é Blockchain?
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background: var(--background);
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.header__nav span {
  font-size: 2rem;
}

.header__nav ul {
  display: flex;
  gap: 2rem;
}

.header__nav ul li a {
  color: var(--white);
}

.header__nav ul li a:hover {
  color: var(--blue-100);
  transition: color 0.4s;
}

.logo-daniel {
  width: 42px;
  height: 42px;
}
</style>
