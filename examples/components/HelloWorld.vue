<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      plugin
    </p>
    <button @click="handleClick">Click </button>
    <div style="display: flex;justify-content: center; margin-top: 20px;">

      <vue-model-viewer ref="modelviewer">
      </vue-model-viewer>
    </div>

  </div>
</template>

<script>

import "@google/model-viewer"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      modelViewer: ''
    }
  },
  methods: {
    handleClick () {
      var a = './20.glb'
      var b = './20.glb'
      this.$refs.modelviewer.renderModel(a, b);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
