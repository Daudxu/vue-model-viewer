<h1 align="center">
    model-viewer Vue  Component
</h1>

[![npm][npm]][npm-url]
[![node][node]][node-url]


## Preview

![preview](./images/preview.png)

## example

- https://daudxu.github.io/vue-model-viewer/


## Installation

```

npm install vue-model-viewer

```

## Usage

```
1. /src/main.js

// vue2
import VueModelViewer from 'vue-model-viewer'
Vue.use(VueModelViewer);


// vue3
import VueModelViewer from 'vue-model-viewer'
app.use(VueModelViewer);

2. page use

      <vue-model-viewer ref="modelViewerRef"
                        :viewWidth="viewWidth"
                        :viewHeight="viewHeight">
      </vue-model-viewer>

```



## demo

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Easily display interactive 3D models on the web & in AR
    </p>
    <button @click="handleClick">Click switch </button>
    <div style="display: flex;justify-content: center; margin-top: 20px;">

      <vue-model-viewer :modelAddress="modelAddress"
                        :poster="poster"
                        :viewWidth="viewWidth"
                        :viewHeight="viewHeight">
      </vue-model-viewer>
    </div>

  </div>
</template>

<script>
import poster from "../assets/logo.png";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      modelAddress: '',
      viewWidth: '500px',
      viewHeight: '500px',
      poster: poster,
      listglb: [
        { 'url': './1.glb' },
        { 'url': './2.glb' },
        { 'url': './3.glb' }
      ]
    }
  },
  mounted () {
    this.handleClick()
  },
  methods: {
    handleClick () {
      let n = 3;
      let random_number = Math.floor(Math.random() * Math.floor(n));
      var urlads = this.listglb[random_number].url
      this.modelAddress = urlads
    },
  }
}
</script>

<style scoped>
button {
  height: 30px;
  background: #42b983;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


```

Click to view [example](../../examples/vuemodelviewer.vue)。

## Options

| configuration item | value type | description                                                 |
| ------------------ | ---------- | ----------------------------------------------------------- |
| modelAddress          | String     | model url Address                                   |
| poster          | String     | model poster loading image                                    |
| viewWidth          | String     | model width （unit： px）                                    |
| viewHeight         | String     | model high （unit： px）                                     |
| isAutoPlay         | Boolean    | isAutoPlay true or flase |
| isDisableZoom      | Boolean    | isDisableZoom true or flase |
| modelId            | String   |  default: 'viewer-display'|
| modelClass            | String   |  modelClass: 'viewer-display'|



## Features

- [x] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
- [x] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.

## Changelog

### 2022.02.25

> v1.0.0 \* init model-viewer Vue Component

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
