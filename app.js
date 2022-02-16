
//define the scene
const scene = new THREE.Scene();
//set the camera perspective 
const camera = new THREE.PerspectiveCamera( 100 , window.innerWidth / window.innerHeight, 0.1, 1000 );
//query the canvas
const canvas = document.querySelector('#c');

//render, size, and append the scene and the camera
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//set camera position
camera.position.z = 8;

//create coin geometry shape
const geometry = new THREE.CylinderGeometry( 5, 5, .3, 64 );

//add texture to the coin --> image of bitcoin
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('Bitcoin-image.png');
const material = [ 
    new THREE.MeshBasicMaterial( {color: 0xa27d0c} ),
    new THREE.MeshBasicMaterial( { map: texture } ),
    new THREE.MeshBasicMaterial( { map: texture } )
];
const coin = new THREE.Mesh( geometry, material );

//add the coin to the scene
scene.add( coin );

//animate the coin to rotate
function animate() {
    requestAnimationFrame( animate );
	coin.rotation.x += 0.01;
    coin.rotation.y += 0.01;
    // coin.rotation.z = 0.01
    renderer.render( scene, camera );
}
animate();

