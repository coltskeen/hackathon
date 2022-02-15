console.log("loaded!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100 , window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 8;

const geometry = new THREE.CylinderGeometry( 5, 5, .5, 64 );
const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial( { map: loader.load('harambe-image.png') } );
const coin = new THREE.Mesh( geometry, material );
scene.add( coin );

function animate() {
	requestAnimationFrame( animate );
	coin.rotation.x += 0.01;
    coin.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();

