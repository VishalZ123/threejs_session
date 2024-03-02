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

// Loading material takes time (reading image files) //

// geometry
const sphere_geometry = new THREE.SphereGeometry(1.5, 32, 32);
// texture
const texture = new THREE.TextureLoader().load('./globe.jpg');
const sphere_material = new THREE.MeshStandardMaterial({ map: texture });
const sphere = new THREE.Mesh(sphere_geometry, sphere_material);
scene.add(sphere);

// light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(4, 0, 0);
scene.add(light);

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();