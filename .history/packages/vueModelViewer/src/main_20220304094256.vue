<template>
  <div class="vue-model-viewer"
       id="vue-model-viewer"
       v-html="modelViewer">
  </div>
</template>
<script>
import "@google/model-viewer"
export default {
  name: 'VueModelViewer',
  props: {
    viewWidth: {
      type: String,
      default: 'auto'
    },
    viewHeight: {
      type: String,
      default: 'auto'
    },
  },
  data () {
    return {
      modelViewer: '',
    };
  },
  methods: {
    renderModel (poster, sourceUrl) {
      this.modelViewer = `<model-viewer style="width: ${this.viewWidth};height: ${this.viewHeight};"  autoplay="true" camera-controls="true" animation-name="Run" interpolation-decay="200" max-camera-orbit="auto 75deg auto" min-camera-orbit="auto 75deg auto"  disable-zoom="true" id="characterMviewer" class="characterMviewer" poster="${poster}" src="${sourceUrl}" ar-status="not-presenting"></model-viewer>`;
    },
  }
}

</script>
