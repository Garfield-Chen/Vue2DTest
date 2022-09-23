
const actions = {
  AccountsVal({ commit }, data){
    commit('Accounts', data)
  },
  InstallVal({ commit }, data){
    commit('Install', data)
  },
  GasPriceVal({ commit }, data){
    commit('GasPrice', data)
  },
  ConnectWalletVal({ commit }, data){
    commit('ConnectWallet', data)
  },
  
}
export default actions;