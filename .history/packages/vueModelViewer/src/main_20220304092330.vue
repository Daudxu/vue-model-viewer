<template>
  <div class="vue-model-viewer"
       v-html="modelViewer">
  </div>
</template>
<script>

export default {
  name: 'VueModelViewer',
  props: {
    viewWidth: {
      type: String,
      default: '300'
    },
    viewHeight: {
      type: String,
      default: '300'
    },
  },
  data () {
    return {
      modelViewer: '',
    };
  },
  methods: {
    renderModel (poster, sourceUrl) {
      this.modelViewer = `<model-viewer style="width: ${this.viewWidth}px;height: ${this.viewHeight}px;"  autoplay="true" camera-controls="true" animation-name="Run" interpolation-decay="200" max-camera-orbit="auto 75deg auto" min-camera-orbit="auto 75deg auto"  disable-zoom="true" id="characterMviewer" class="characterMviewer" poster="${poster}" src="${sourceUrl}" ar-status="not-presenting"></model-viewer>`;
    },
  }
}

</script>
