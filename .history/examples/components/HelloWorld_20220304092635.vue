<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Easily display interactive 3D models on the web & in AR
    </p>
    <button @click="handleClick">Click switch </button>
    <div style="display: flex;justify-content: center; margin-top: 20px;">

      <vue-model-viewer ref="modelViewerRef"
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
      modelViewer: '',
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
      // console.log(random_number)
      this.$refs.modelViewerRef.renderModel(poster, this.listglb[random_number].url);
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
