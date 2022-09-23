# debris游戏页面

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- images命名 -->
最好除了公用的图片除外其余的图片还是按模块创建文件夹

<!-- 样式规范 -->
所有的公共的样式全部存在于main.css
所有px自动转换成rem 100px=>1rem



字体使用公共样式 12px=>.font_12{font-size:12px}
通用的颜色均放在公共：背景用.bg_开头，字体颜色.c_开头
flex布局尽量全写在公共样式，直接类名使用

所有img均使用懒加载 v-lazy

整个项目能单独提出来写组件的，全部提出来写

<!-- 语言包规范 -->

页面不出现任何文字，全部在lang文件夹

所有模块一个文件夹，在对应的js直接使用。如：首页 => 新建一个首页文件夹，写入中英文的语言，在对应的js引入首页的语言包
