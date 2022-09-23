<template>
  <div id="three-js">
    <canvas id="three"></canvas>
  </div>
</template>



<script>

import * as THREE from 'three';

import Stats from '@/assets/threejs/jsm/libs/stats.module.js';


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
    threeJs2DScene() {

      const _threejsContainer = document.getElementById('three-js');


      const _winWidth = window.innerWidth;
      const _winHeight = window.innerHeight;

      let _cameraOrtho, _sceneOrtho;
      let spriteTL;

      _cameraOrtho = new THREE.OrthographicCamera( - _winWidth / 2, _winWidth / 2, _winHeight / 2, - _winHeight / 2, 1, 10 );
      _cameraOrtho.position.z = 10;

      const stats = new Stats();

      _threejsContainer.appendChild(stats.dom);

      _sceneOrtho = new THREE.Scene();


      const _textureLoader = new THREE.TextureLoader();

      _textureLoader.load( 'textures/t1.png', createSprites );

      const canvas = document.querySelector('#three');

      const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

      renderer.setPixelRatio( window.devicePixelRatio );

      renderer.setSize( window.innerWidth, window.innerHeight );

      renderer.autoClear = false;

      window.addEventListener( 'resize', onWindowResize );



      animate();

      function createSprites( _texture )
      {

        const _material = new THREE.SpriteMaterial( { map: _texture} );

        _material.map.offset = new THREE.Vector2(0.25, 0.25);
        _material.map.repeat = new THREE.Vector2(0.25, 0.25);

        const width = _material.map.image.width / 4;
        const height = _material.map.image.height / 4;

        spriteTL = new THREE.Sprite( _material );

        spriteTL.center.set( 0.5, 0.5 );

        spriteTL.scale.set( width, height, 1 );

        _sceneOrtho.add( spriteTL );

        updateSprites();
      }

      function onWindowResize() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        _cameraOrtho.left = - width / 2;
        _cameraOrtho.right = width / 2;
        _cameraOrtho.top = height / 2;
        _cameraOrtho.bottom = - height / 2;
        _cameraOrtho.updateProjectionMatrix();

        updateSprites();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      function animate() {
        stats.update();
        requestAnimationFrame(animate);
        render();
      }

      function render(){

        renderer.clear();
        renderer.clearDepth();
        renderer.render( _sceneOrtho, _cameraOrtho );

      }

      function updateSprites() {

        const width = window.innerWidth / 2;
        const height = window.innerHeight / 2;

        spriteTL.position.set( - width, height, 1 ); // top left

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