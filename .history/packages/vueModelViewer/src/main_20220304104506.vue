<template>
  <div class="vue-model-viewer"
       id="vue-model-viewer">

    {{renderModela}}
  </div>
</template>
<script>
import "@google/model-viewer"
export default {
  name: 'VueModelViewer',
  props: {
    modelAddress: {
      type: String,
      default: ''
    },
    viewWidth: {
      type: String,
      default: '300px'
    },
    poster: {
      type: String,
      default: ''
    },
    viewHeight: {
      type: String,
      default: '300px'
    },
    isAutoPlay: {
      type: Boolean,
      default: true
    },
    isDisableZoom: {
      type: Boolean,
      default: true
    },
    modelId: {
      type: String,
      default: 'viewer-display'
    },
    modelClass: {
      type: String,
      default: 'viewer-display'
    },
  },
  computed: {
    renderModela () {
      return `<model-viewer style="width: ${this.viewWidth};height: ${this.viewHeight};"  autoplay="${this.isAutoPlay}" camera-controls="true" animation-name="Run" interpolation-decay="200" max-camera-orbit="auto 75deg auto" min-camera-orbit="auto 75deg auto"  disable-zoom="${this.isDisableZoom}" id="${this.modelClass}" class="${this.modelId}" poster="${this.poster}" src="${this.modelAddress}" ar-status="not-presenting"></model-viewer>`;
    }
  },
}

</script>
