<template>
  <header class="header">
    <nav class="header__nav container">
      <img src="@/assets/img/logo-light.png" alt="Logo Daniel Oliveira" class="logo-daniel" />
      <span v-show="bitcoin.price">Agora, Bitcoin {{ bitcoinUseFormated }}<sup>USD</sup> </span>
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
import { computed } from '@vue/reactivity'
import { onBeforeMount, reactive } from 'vue'

export default {
  name: 'HeaderComponent',
  setup() {
    onBeforeMount(() => {
      getPriceBTC()
    })

    const bitcoin = reactive({
      price: null
    })

    const bitcoinUseFormated = computed(() => {
      return Number(bitcoin.price).toFixed('2')
    })

    async function getPriceBTC() {
      fetch('https://api.coincap.io/v2/assets/bitcoin')
        .then((response) => response.json())
        .then((data) => {
          bitcoin.price = data.data.priceUsd
        })
    }

    return { getPriceBTC, bitcoin, bitcoinUseFormated }
  }
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
  font-size: 1rem;
  color: var(--white);
}

.header__nav span sup {
  font-size: 0.5rem;
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
