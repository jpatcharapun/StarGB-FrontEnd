const getTokenLogoURL = (address: string) => {
  if (address === '0xb5EC484f0271f579Ae1Cc52fB1e402ff4472eF2f') {
    return `https://github.com/jpatcharapun/StarGB-FrontEnd/blob/60fb7e39768e1e683627730a674c09f179d61a61/StarGB.png`
  }
  return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
}
// 'https://github.com/jpatcharapun/StarGB-FrontEnd/blob/60fb7e39768e1e683627730a674c09f179d61a61/StarGB.png?raw=true'

export default getTokenLogoURL
