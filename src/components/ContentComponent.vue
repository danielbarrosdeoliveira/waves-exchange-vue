<template>
  <main class="main container">
    <section class="user">
      <div id="info-user" class="user__info">
        <span>Clique em Connect Wallet para mostrar os dados...</span>
      </div>
    </section>
    <button id="connect-wallet" class="button">
      Connect Wallet
      <i class="bi bi-wallet"></i>
    </button>
    <button id="invokeScript" class="button">invokeScript</button>
  </main>
</template>

<script>
export default {
  name: 'ContentComponent'
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
</style>
