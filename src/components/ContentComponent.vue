<template>
  <main class="main container">
    <section class="user">
      <div v-if="!user.address" class="user__info">
        <span>Clique em Connect Wallet para mostrar os dados...</span>
      </div>
      <div v-else class="user__info">
        <p>
          Adress: <span>{{ user.address }}</span>
        </p>
        <p>
          PublicKey: <span>{{ user.publicKey }}</span>
        </p>
      </div>
    </section>
    <button class="button" @click="handleClickConnectWallet">
      Conectar Carteira
      <i class="bi bi-wallet"></i>
    </button>
    <button class="button" @click="handleClickGenerateScript" :disabled="!user.publicKey">
      Chamar Contrato
    </button>
  </main>
</template>

<script>
import { reactive, onBeforeMount } from 'vue'
import { loginToWaves, callTransaction } from '@/utils/signerWaves'
import { generateScriptWavesTransaction } from '@/utils/generateScript'

export default {
  name: 'ContentComponent',
  setup() {
    const user = reactive({
      address: null,
      publicKey: null
    })

    async function handleClickConnectWallet() {
      const data = await loginToWaves()
      if (!data) {
        alert('Ocorreu um erro ao realizar a conexão com a Waves')
      }
      user.address = data.address
      user.publicKey = data.publicKey
    }

    function handleClickGenerateScript() {
      const data = generateScriptWavesTransaction(user.publicKey)

      handleTransaction(data)
    }

    function handleTransaction(dataGeneratedScript) {
      callTransaction(dataGeneratedScript)
    }

    onBeforeMount(() => {
      getBTC()
    })

    async function getBTC() {
      fetch(
        'https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&platform-currency=BTC&per-page=100&page=1'
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    return { user, handleClickConnectWallet, handleClickGenerateScript, handleTransaction, getBTC }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main .user {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.main .user .user__info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main .user .user__info p {
  align-items: center;
  font-weight: bold;
  font-size: 1.125rem;
}

.main .user .user__info p span {
  font-weight: normal;
  font-size: 1rem;
}

.main .button {
  display: flex;
  align-items: center;
  font-size: 1rem;
  background-color: var(--blue-100);
  color: var(--white);
  border: none;
  border-radius: 4px;
  height: 2.5rem;
  margin: 2rem auto 0 auto;
  padding: 0 1.5rem;
  transition: filter 0.4s;
}

.main .button:hover {
  filter: opacity(0.7);
  cursor: pointer;
}

.main .button i {
  margin-left: 1rem;
}

.main .button:disabled {
  background-color: var(--gray-500);
}
.main .button:hover:disabled {
  cursor: inherit;
  filter: inherit;
}
</style>
