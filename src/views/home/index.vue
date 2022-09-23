<template>
  <div id="three-js">
    <canvas id="three"></canvas>
  </div>
</template>



<script>

import * as THREE from 'three';

import Stats from '@/assets/threejs/jsm/libs/stats.module.js';

import {OrbitControls} from '@/assets/threejs/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '@/assets/threejs/jsm/loaders/GLTFLoader.js';


export default {
  components: {
  },

  data() {
    return {
      msg: '',
    };

  },
  created() {
  },
  mounted() {
    this.threeJs2DScene();
  },
  methods: {
    threeJsScene() {

      const container = document.getElementById('three-js');

      const stats = new Stats();
      container.appendChild(stats.dom);

      const scene = new THREE.Scene();

      scene.background = new THREE.Color('#eee');

      scene.fog = new THREE.Fog('#eee', 20, 100);

      const canvas = document.querySelector('#three');

      const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

      renderer.shadowMap.enabled = true;


      const camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      );

      camera.position.z = 10;

      const gltfLoader = new GLTFLoader();

      const _material = new THREE.RawShaderMaterial( {

        uniforms: {
          time: { value: 1.0 }
        },
        //vertexShader: debris_vertexShader,
        //fragmentShader: debris_fragmentShader,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
        side: THREE.DoubleSide,
        transparent: true

      } );

      let model;
      //gltfLoader.load('models/seraphine/scene.gltf', (gltf) => {
      gltfLoader.load('models/debris_a.glb', (gltf) => {

        model = gltf.scene;
        //遍历模型每部分
        model.traverse((o) => {
        //   //将图片作为纹理加载
        //   let explosionTexture = new THREE.TextureLoader().load(
        //       'models/m05.png'
        //   );
        //
        //   //调整纹理图的方向
        //   explosionTexture.flipY = false;
        //
        //   //将纹理图生成基础网格材质(MeshBasicMaterial)
        //   const material = new THREE.MeshBasicMaterial({
        //     map: explosionTexture,
        //   });
        //
        //   //给模型每部分上材质
           o.material = _material;
        //
        //   if (o.isMesh) {
        //     o.castShadow = true;
        //     o.receiveShadow = true;
        //   }
        })
        scene.add(model);
      }, undefined, function (e) {

        console.log(e);

      })

      const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
      hemLight.position.set(0, 48, 0);
      scene.add(hemLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);

      //光源等位置
      dirLight.position.set(-10, 8, -5);

      //可以产生阴影
      dirLight.castShadow = false;
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      scene.add(dirLight);

      let floorGeometry = new THREE.PlaneGeometry(8000, 8000);
      let floorMaterial = new THREE.MeshPhongMaterial({
        color: 0x857ebb,
        shininess: 0,
      });

      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -0.5 * Math.PI;
      floor.receiveShadow = true;
      floor.position.y = -10.001;
      scene.add(floor);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      function animate() {
        stats.update();
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        const time = performance.now();
        //const object = scene.children[ 0 ];

        //debugger
        if ( model )
        {
          model.rotation.y = time * 0.0005;
          model.material.uniforms.time.value = time * 0.005;
        }

      }

      animate();

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        var width = window.innerWidth;
        var height = window.innerHeight;
        var canvasPixelWidth = canvas.width / window.devicePixelRatio;
        var canvasPixelHeight = canvas.height / window.devicePixelRatio;

        const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.index_main {
  width: 100%;
  // padding-top: 165px;
  padding-top: 45px;

  .main {
    font-size: 18px;
    color: #000;
  }
}
</style>