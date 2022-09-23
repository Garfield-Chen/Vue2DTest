const state = {
  //loading
  install: null, //是否安装钱包
  netErr: null, //网络错误
  wallet_show: false, //未安装弹框
  net_show: false, //网络错误弹框
  accounts_show: false, //链接钱包弹窗
  accounts: [],
  gasPrice: 0,
  connectWallet: true, //是否链接钱包true-未连接，false-已连接
  boxShopContract: null, //商店合约
  usdtContract: null, //usdt合约
  hoeContract: null, // 镐头合约
  sumCoinContract: null, //sum代币
  BoxContract: null, //盲盒合约
  cardSlotContract: null, //卡槽合约
  digContract: null, //挖矿合约
  levelUpContract:null, // 升级合约,
  msg:'',//加载蒙层
}
export default state
