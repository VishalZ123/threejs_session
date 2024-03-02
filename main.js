// imports
import * as THREE from 'three';

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

const sphere_geometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphere_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphere_geometry, sphere_material);
sphere.position.set(2, 0, 0);
scene.add(sphere);

const torus_geometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
const torus_material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const torus = new THREE.Mesh(torus_geometry, torus_material);
torus.position.set(-2, 0, 0);
scene.add(torus);

renderer.render(scene, camera);