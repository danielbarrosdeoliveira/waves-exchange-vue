import { invokeScript } from '@waves/waves-transactions'

export function generateScriptWavesTransaction(userPublicKey) {
  const data = invokeScript(
    {
      dApp: '3N5LCans5b5hyWbtVQVmqsfhTGXLeduwK6f',
      call: {
        function: 'writeBlock',
        args: []
      },
      fee: 500000,
      payment: []
    },
    userPublicKey
  )

  return data
}
