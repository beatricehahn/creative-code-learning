// Create a scene
const scene = new THREE.Scene();

// Red cube created by using mesh (1,1,1) are the measurement parameters
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
// Mesh is a combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);

// Add mesh to the scene
scene.add(mesh);

// Set sizes object
const sizes = {
    width: 800,
    height: 600
};

// Camera by adding 1) field of view and 2) aspect ratio
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// Change camera position
camera.position.z = 3;
// Add camera to scene
scene.add(camera);

// WebGL Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer ({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);