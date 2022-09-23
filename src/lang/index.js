import Vue from 'vue';
import VueI18n from 'vue-i18n';
import config from '@/assets/config/index'
import zn from './zn';
import en from './en';

Vue.use(VueI18n);

// 定义各语言的配置
let messages = {
    "zh-cn": zn, // 中文
    "en-us": en, // 英文
};
// 自动设置语言
let navLang = navigator.userLanguage||window.navigator.language;
let localLang = (navLang === 'zh-cn' || navLang === 'en-us') ? navLang : false;
let lang2 = window.localStorage.getItem('language') || localLang || config.baseLang;
var lang = lang2.toLowerCase()
lang = lang == 'zh-cn' ? 'zh-cn' :'en-us'


var body = document.body;
body.className = lang;

console.log(lang,'===lang',config.baseLang)

// 获取持久化语言状态
let locale = lang || config.baseLang
localStorage.setItem('language',locale)


console.log(locale)

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: locale, // 设置默认地区
    messages, // 设置配置信息
    silentTranslationWarn: true,
});


export default i18n;