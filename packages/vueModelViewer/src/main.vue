<template>
  <div class="model-viewer-warp"
       v-html="modelViewer">

  </div>
</template>
<script>

export default {
  name: 'VueModelViewer',
  props: {
    msg: String,
    providerOptions: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      modelViewer: '',
    };
  },
  methods: {
    renderModel (poster, sourceUrl) {
      this.modelViewer = '<model-viewer  autoplay="true" camera-controls="true" animation-name="Run" interpolation-decay="200" max-camera-orbit="auto 75deg auto" min-camera-orbit="auto 75deg auto"  disable-zoom="true" id="characterMviewer" class="characterMviewer" poster="' + poster + '" src="' + sourceUrl + '" ar-status="not-presenting"></model-viewer>';
    },
  }
}

</script>
<style  scoped>
.model-viewer-warp {
  width: 500px;
  height: 600px;
  background: #000;
}
</style>