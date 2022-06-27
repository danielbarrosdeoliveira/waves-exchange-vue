<template>
  <header class="header">
    <nav class="header__nav container">
      <img src="@/assets/img/logo-light.png" alt="Logo Daniel Oliveira" class="logo-daniel" />
      <span v-show="ethereum.price">Agora, Ethereum {{ ethereumFormated }}<sup>USD</sup> </span>
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
      getPriceETH()
    })

    const ethereum = reactive({
      price: null
    })

    const ethereumFormated = computed(() => {
      return Number(ethereum.price).toFixed('2')
    })

    async function getPriceETH() {
      fetch(
        'https://api.nomics.com/v1/currencies/ticker?key=4abbb7e7592df4f53bb67052d7ec165d4cf677f2&ids=BTC,ETH,XRP&interval=1h&convert=EUR&platform-currency=ETH&per-page=100&page=1'
      )
        .then((response) => response.json())
        .then((data) => {
          ethereum.price = data[0].price
        })
    }

    return { getPriceETH, ethereum, ethereumFormated }
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
