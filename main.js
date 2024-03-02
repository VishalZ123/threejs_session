// imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

// geometry
const cube_geometry = new THREE.BoxGeometry(1, 1, 1);
const cube_material = new THREE.MeshStandardMaterial({ color: 0xff0000, metalness: 0.5, roughness: 0.5});
const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);

// Use different LightShadow, combination of two or more lights can also be used to create a more realistic scene
// Intensity of the light also play a role in giving different effects to the scene

// directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(-1, 1, -1);
scene.add(directionalLight);
// helper
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(directionalLightHelper);

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// // point light
// const light = new THREE.PointLight(0xffffff, 4);
// light.position.set(1, 1, 1);
// scene.add(light);
// // helper
// const lightHelper = new THREE.PointLightHelper(light, 0.2);
// scene.add(lightHelper);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();