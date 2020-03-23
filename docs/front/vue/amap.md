---
title: vue 中使用高德地图
---

## 快速上手

1. 安装依赖

```
cnpm install vue-amap --save
```

2. main.js 中引入

```js
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'a4f1067a840245b14804721dc9d498d3',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.15',
  uiVersion: '1.0'})
```
::: tip
key 为自己申请的web端key，v 是使用的SDK版本。
:::

3. App.vue

```html
<template>
  <div id="app">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :resizeEnable="resizeEnable" :zoom="zoom" :plugin="plugin"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        resizeEnable: true,//自动定位到城市
        zoom: 17,//地图缩放等级
        plugin: ['ToolBar','MapType','Geolocation'],//插件  
    }
  }
}
</script>

<style>
.amap-wrapper {
  height: 500px;
}
</style>
```

## 参考资料
- [vue-amap](https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install)
- [amap](https://lbs.amap.com/api/javascript-api/guide/abc/quickstart)
