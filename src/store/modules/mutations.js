const mutations = {
  Accounts(state, data){
    state.accounts = data
  },
  Install(state, data){
    state.install = data
  },
  GasPrice(state, data){
    state.gasPrice = data
  },
  ConnectWallet(state, data){
    state.connectWallet = data
  },
  
  
}
export default mutations;