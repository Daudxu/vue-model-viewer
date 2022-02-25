<template>
  <div class="mv-model-viewer"
       v-html="modelViewer">
    <!-- canvas start -->

    <!-- canvas end -->
  </div>
</template>

<script>
export default {
  name: 'vue-model-viewer',
  props: {
    tileScale: {
      type: Number,
      default: 1,
    }
  },
  data () {
    return {
      modelViewer: null,
    };
  },
  methods: {
    renderModel (poster, sourceUrl) {
      this.modelViewer = '<model-viewer  autoplay="true" camera-controls="true" animation-name="Run" interpolation-decay="200" max-camera-orbit="auto 75deg auto" min-camera-orbit="auto 75deg auto"  disable-zoom="true" id="characterMviewer" class="characterMviewer" poster="' + poster + '" src="' + sourceUrl + '" ar-status="not-presenting"></model-viewer>';
    }
  }
};
</script>
