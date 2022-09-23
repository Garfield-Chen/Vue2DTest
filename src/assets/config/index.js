import zn from '@/lang/zn'
import en from '@/lang/en'

var baseLang = 'en-us'//en-us or zh-cn
var filet = '',lang = window.localStorage.getItem('language') || baseLang
filet = lang == 'zh-cn' ? zn : en //语言包

console.log(filet, '===cfg--lang')
//线上测试94.74.87.223:8020
let port = 8020,
// let port = 8080,
  env = process.env.NODE_ENV
// 正式8086 其余的均为测试，区别合约地址
console.log(env, '===node_env')
// process.env.NODE_ENV   本地:development  打包后:production
let config = {
  baseUrl: env == 'development' ? port == 8086 ? 'http://94.74.87.223:8020' : 'http://94.74.87.223:8020' : 'http://94.74.87.223:8020',
  baseLang:baseLang,
  port: port, //端口
  netId: 97, //网络Id
  inviteUrl: location.href.split('#')[0], //邀请链接
}
export default config
