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
camera.position.set(-2, 2, -3); // a different position
camera.lookAt(0, 0, 0); // look at the origin

// geometry

// MeshBasic Material
const cube_geometry1 = new THREE.BoxGeometry(1, 1, 1);
const cube_material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new THREE.Mesh(cube_geometry1, cube_material1);
scene.add(cube1); // add the cube to the scene !! important !!

// MeshLambert Material
const cube_geometry2 = new THREE.BoxGeometry(1, 1, 1);
const cube_material2 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const cube2 = new THREE.Mesh(cube_geometry2, cube_material2);
cube2.position.set(2, 0, 0);
scene.add(cube2);

// MeshPhong Material
const cube_geometry3 = new THREE.BoxGeometry(1, 1, 1);
const cube_material3 = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100});
const cube3 = new THREE.Mesh(cube_geometry3, cube_material3);
cube3.position.set(-2, 0, 0);
scene.add(cube3);

// Mesh Standard Material
const cube_geometry4 = new THREE.BoxGeometry(1, 1, 1);
const cube_material4 = new THREE.MeshStandardMaterial({ color: 0xff0000, metalness: 0.5, roughness: 0.5}); // tweak the metalness and roughness values
const cube4 = new THREE.Mesh(cube_geometry4, cube_material4);
cube4.position.set(0, 0, 2);
scene.add(cube4);

// light (MeshLambertMaterial, MeshPhongMaterial and MeshStandardMateral needs light to be visible)
const light = new THREE.DirectionalLight(0xffffff, 3); // Directional light from +ive Z axis
light.position.set(0, 2, 4);
scene.add(light);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();