<!--THREEJS组件-->
<template>
  <div class="vue-model-viewer"
       id="vue-model-viewer"
       v-if="engine === 1"
       v-html="renderModela">
  </div>
  <div class="vue-model-viewer"
      id="vue-model-viewer"
      v-else >
      <canvas ref="modelView" style="width: 100%; height: 100%;"></canvas>
 </div>

</template>
<script>
  import "@google/model-viewer"
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
  import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
  export default {
    name: "VueModelViewer",
    props: {
      /*渲染引擎*/
      engine: {
        type: Number,
        default() {
          return 1
        }
      },
      /*模型资源地址*/
      modelAddress: {
        type: String,
        default() {
          return './1.glb'
        }
      },
      /*文件类型*/
      suffix: {
        type: String,
        default() {
          return 'gltf'
        }
      },
      AutoFresh: {
        type: Boolean,
        default() {
          return true
        }
      },
      /*是否开启自动旋转*/
      autoAnimate: {
        type: Boolean,
        default() {
          return true
        }
      },
      webGlOptions: {
          type: Object,
      },
       viewWidth: {
        type: String,
        default: '300px'
      },
        viewHeight: {
        type: String,
        default: '300px'
      },
      poster: {
        type: String,
        default: ''
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
      }
    },
    data() {
      return {
        // loading: false,
        renderModela: '',
        publicPath: process.env.BASE_URL,
        wrapper: new THREE.Object3D(),
        mesh: null,
        camera: null,
        scene: null,
        originX: 300,
        originY: 0,
        originZ: 360,
        renderer: null,
        controls: null,
      }
    },
    mounted() {
      if(this.engine === 2){
          this.init()
      }
    },
    watch: {
      //监听地址变化时需要更新地址,防止多次点击同一个渲染多次;
      modelAddress(val, oldVal) {
        console.log("val",val)
        console.log("oldVal",oldVal)
        if(this.engine === 2){
          if (val != oldVal) {
            this.init()
          }
        }else{
          this.renderModela = `<model-viewer style="width: ${this.viewWidth};height: ${this.viewHeight};"  autoplay="${this.isAutoPlay}" camera-controls="true" animation-name="Run" interpolation-decay="200" max-camera-orbit="auto 75deg auto" min-camera-orbit="auto 75deg auto"  disable-zoom="${this.isDisableZoom}" id="${this.modelClass}" class="${this.modelId}" poster="${this.poster}" src="${val}" ar-status="not-presenting"></model-viewer>`;
        }
      },
      //监测是否更新整个场景
      AutoFresh(val) {
        if (val) {
          this.init()
        } else {
          //自我清理
          this.destroyed();
        }
      }
    },
    //组件被销毁时,干掉所有3D资源；
    methods: {
      destroyed() {
        this.clear();
      },
      // 初始化
      init() {
        // 创建场景
        this.createScene() 
        // 加载P模型
        this.loadLoader() 
        // 创建光源
        this.createLight() 
        // 创建相机
        this.createCamera() 
        // 创建渲染器
        this.createRender() 
        // 创建控件对象
        this.createControls() 
        // 渲染
        this.render() 
      },
      //清除当前所有场景
      clear() {
        this.mesh = null
        this.camera = null
        this.scene = null
        this.renderer = null
        this.controls = null
        cancelAnimationFrame(this.animationId)
        console.log("我要清除啦");
      },
      // 创建场景
      createScene() {
        this.scene = new THREE.Scene()
      },
      // 加载PLY模型
      loadLoader() {
        const _this = this
         let loader = new GLTFLoader();
         loader.load(
            _this.modelAddress,
            gltf => {
              this.mesh = gltf.scene;
              //设置大小比例
              this.mesh.scale.set(30, 30, 30); 
               //设置位置
              this.mesh.position.set(0, -30, 0); 
              // 旋转位置
              this.mesh.rotation.set(0, 0, 0);
              // 将模型引入
              this.scene.add(this.mesh); 
            }
        )
      },
      // 创建光源
      createLight() {
        // 环境光
        let pointColor = '0x000000';
        // 创建环境光
        const ambientLight = new THREE.AmbientLight(pointColor, 1) 
        // 将环境光添加到场景
        this.scene.add(ambientLight)
        // 创建聚光灯
        const spotLight = new THREE.SpotLight(0xffffff) 
        // 创建聚光灯
        spotLight.position.set(100, 100, 100)
        // 加载光源
        this.scene.add(spotLight)
      },

      // 创建相机
      createCamera() {
        // 窗口宽度
        const width = 300 
        const height = 300 //
        this.cWidth = width;
        this.cHeight = height;
        const k = width / height // 窗口宽高比
        this.aspect = k;
        // PerspectiveCamera( fov, aspect, near, far )
        this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100000)
        this.camera.position.set(0, 30, 20) // 设置相机位置
        this.camera.position.z = '90';
        this.camera.lookAt(new THREE.Vector3(this.originX, this.originY, this.originZ)) // 设置相机方向
        this.scene.add(this.camera)
      },
      // 创建渲染器
      createRender() {
        const OPTIONS = {
            antialias: true,
            alpha: true,
        };
        const options = Object.assign({}, OPTIONS, this.webGlOptions, {
            canvas: this.$refs.modelView,
         });
        this.renderer = new THREE.WebGLRenderer(options)
        // 设置渲染区域尺寸
        this.renderer.setSize(300, 300) 
      },
      render() {
        this.animationId = requestAnimationFrame(this.render);//旋转动画;
        this.renderer.render(this.scene, this.camera)
      },
      // 创建控件对象
      createControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.type = 'orbit';
        this.scene.add(this.wrapper);
      },
      onWindowResize() {
        this.camera.aspect = this.aspect;
        this.camera.updateProjectionMatrix();
      }
    }
  }
</script>

<style scoped>
</style>