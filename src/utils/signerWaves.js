import { Signer } from '@waves/signer'
import { ProviderCloud } from '@waves.exchange/provider-cloud'

const signer = new Signer({})

signer.setProvider(new ProviderCloud())

export async function loginToWaves() {
  try {
    const user = await signer.login()
    return user
  } catch (error) {
    return error
  }
}

export async function callTransaction(dataScriptGenerator) {
  const result = await signer
    .invoke(dataScriptGenerator)
    .broadcast()
    .then((tx) => console.log(tx))
    .catch((tx) => console.log(JSON.stringify(tx)))

  return result
}
