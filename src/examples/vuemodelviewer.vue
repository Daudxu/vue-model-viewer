<template>
  <div class="wrap">
    <h4>Vue Model Viewer </h4>
    <div style="text-align: center;margin-bottom: 10px;">
    </div>
    <div>
      <VueModelViewer>
      </VueModelViewer>
    </div>
  </div>
</template>
<script>

import { VueModelViewer } from '@/components';
// import { VueModelViewer } from '../../dist/vue-model-viewer.min.js';

export default {
  name: 'landsTileMap',
  data () {
    return {
      startPaintingY: '123123'
    };
  },
  components: {
    VueModelViewer
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
