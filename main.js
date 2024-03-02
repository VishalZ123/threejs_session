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
camera.position.set(0, 1.5, 5);
camera.lookAt(0, 0, 0); // look at the origin

// geometry
const cube_geometry = new THREE.BoxGeometry(1, 1, 1);
const cube_material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube); // add the cube to the scene !! important !!

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  // you can use different mathematical functions to animate the cube
  // change the rotation and position of the cube
  cube.rotation.z += 0.05; // rotation about z-axis
  cube.position.x = 2 * Math.sin(Date.now() * 0.002); // oscillation in x-direction
  controls.update();
  renderer.render(scene, camera);
};

animate();