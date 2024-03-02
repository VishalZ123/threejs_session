// imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(20, 20, 20)");

const app = document.querySelector("#app");

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(app.offsetWidth, app.offsetHeight);
app.appendChild(renderer.domElement);

// camera
const camera = new THREE.PerspectiveCamera(60, app.offsetWidth/app.offsetHeight, 0.1, 500);
camera.position.set(0, 1.5, 5); // a different position
camera.lookAt(0, 0, 0); // look at the origin

// load .obj file
const loader = new OBJLoader();
loader.load(
  "./FLAME_mesh.obj",
  function (object) {
    scene.add(object);
  }
);

// light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(4, 0, -1);
scene.add(light);

const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-4, 0, 1);
scene.add(light2);

// light 3
const light3 = new THREE.PointLight(0xffffff, 1);
light3.position.set(0, 1, 2.5);
scene.add(light3);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();