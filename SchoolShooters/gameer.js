// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a bluish sky
scene.background = new THREE.Color(0xBFDFF5); // bluish color

// Add clouds to the scene
const cloudGeometry = new THREE.SphereGeometry(15, 32, 32);
const cloudMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
const cloud1 = new THREE.Mesh(cloudGeometry, cloudMaterial);
cloud1.position.set(20, 30, -30);
scene.add(cloud1);
const cloud2 = new THREE.Mesh(cloudGeometry, cloudMaterial);
cloud2.position.set(-30, 25, -20);
scene.add(cloud2);

// Add a basic plane as the ground (grass)
const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x7CFC00 }); // grass color
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Add trees to the scene
function createTree(x, z) {
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 5);
    const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.set(x, 2.5, z);

    const leavesGeometry = new THREE.SphereGeometry(2, 8, 6);
    const leavesMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.set(x, 6, z);

    scene.add(trunk);
    scene.add(leaves);
}

createTree(10, 10);
createTree(-15, 20);
createTree(25, -10);
createTree(-5, -30);

// Add a basic cube as the player character
const playerGeometry = new THREE.BoxGeometry(2, 2, 2); // Adjusted size
const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.y = 1; // Adjusted position to center the larger cube
scene.add(player);

// Set initial camera position and rotation
camera.position.set(0, 10, 20);
camera.lookAt(player.position);

// Movement controls
const moveSpeed = 0.6;
const rotationSpeed = 0.04;
let keys = {
    w: false,
    a: false,
    s: false,
    d: false
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'W') keys.s = true; // Changed to 's' for moving forward
    if (event.key === 'a' || event.key === 'A') keys.a = true;
    if (event.key === 's' || event.key === 'S') keys.w = true; // Changed to 'w' for moving backward
    if (event.key === 'd' || event.key === 'D') keys.d = true;
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'w' || event.key === 'W') keys.s = false; // Changed to 's'
    if (event.key === 'a' || event.key === 'A') keys.a = false;
    if (event.key === 's' || event.key === 'S') keys.w = false; // Changed to 'w'
    if (event.key === 'd' || event.key === 'D') keys.d = false;
});

function update() {
    const angle = player.rotation.y;

    if (keys.w) {
        player.position.z -= moveSpeed * Math.cos(angle);
        player.position.x -= moveSpeed * Math.sin(angle);
    }
    if (keys.a) {
        player.rotation.y += rotationSpeed; // Rotate left
    }
    if (keys.s) {
        player.position.z += moveSpeed * Math.cos(angle);
        player.position.x += moveSpeed * Math.sin(angle);
    }
    if (keys.d) {
        player.rotation.y -= rotationSpeed; // Rotate right
    }

    // Update camera position and rotation based on player's rotation
    const distance = 20;
    const offsetX = Math.sin(player.rotation.y) * distance;
    const offsetZ = Math.cos(player.rotation.y) * distance;
    camera.position.x = player.position.x - offsetX;
    camera.position.y = player.position.y + 10;
    camera.position.z = player.position.z - offsetZ;
    camera.lookAt(player.position);
}

// Enemy parameters
const enemyGeometry = new THREE.BoxGeometry(2, 2, 2); // Adjust size as needed
const enemyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const enemies = [];
let enemySpeed = 0.05; // Initial enemy speed

// Function to create enemies
function createEnemy(x, z) {
    const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
    enemy.position.set(x, 1, z); // Adjust height as needed
    scene.add(enemy);
    enemies.push(enemy);
}

// Function to periodically spawn enemies
// Function to periodically spawn enemies
function spawnEnemies() {
    setInterval(() => {
        // Spawn enemies only within a certain distance from the player
        const spawnDistance = 30; // Adjust distance as needed
        const randomX = player.position.x + (Math.random() * spawnDistance * 2) - spawnDistance;
        const randomZ = player.position.z + (Math.random() * spawnDistance * 2) - spawnDistance;
        createEnemy(randomX, randomZ);
    }, 500); // Adjust interval to spawn enemies less frequently (milliseconds)
}


// Function to update enemies' positions (chase player)
function updateEnemies() {
    enemies.forEach((enemy) => {
        const deltaX = player.position.x - enemy.position.x;
        const deltaZ = player.position.z - enemy.position.z;
        const angle = Math.atan2(deltaZ, deltaX);
        const moveSpeed = 0.5; // Increased speed to make enemies move faster
        const moveX = moveSpeed * Math.cos(angle);
        const moveZ = moveSpeed * Math.sin(angle);
        enemy.position.x += moveX;
        enemy.position.z += moveZ;

        // Check collision with player
        const distance = Math.sqrt(deltaX * deltaX + deltaZ * deltaZ);
        if (distance < 2) {
            alert('Game Over!');
            window.location.reload(); // Reload the page to restart the game
        }
    });
}

    
    // Shooting controls
document.addEventListener('click', (event) => {
    // Calculate the direction based on the player's rotation and reverse it
    const direction = new THREE.Vector3(Math.sin(player.rotation.y), 0, Math.cos(player.rotation.y));

    // Create and shoot the bullet in the calculated direction
    shootBullet(direction);
});

// Function to shoot a bullet in a specific direction
function shootBullet(direction) {
    const bulletGeometry = new THREE.SphereGeometry(0.2, 8, 8); // Adjust size as needed
    const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow color
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    bullet.position.copy(player.position);

    // Set the bullet's direction
    bullet.direction = direction;

    // Set the bullet's speed
    const bulletSpeed = 1; // Adjust speed as needed
    bullet.moveDistance = bulletSpeed;

    // Add the bullet to the scene and the bullets array
    scene.add(bullet);
    bullets.push(bullet);
}

    
    // Bullets array to keep track of bullets
    const bullets = [];
    
    // Function to update bullets' positions and check for collisions with enemies
    function updateBullets() {
        bullets.forEach((bullet) => {
            bullet.position.add(bullet.direction.clone().multiplyScalar(bullet.moveDistance));
    
            // Check if the bullet is too far
            if (bullet.position.distanceTo(player.position) > bullet.maxDistance) {
                scene.remove(bullet);
                bullets.splice(bullets.indexOf(bullet), 1);
            } else {
                // Check collision with enemies
                enemies.forEach((enemy) => {
                    if (bullet.position.distanceTo(enemy.position) < 1.5) {
                        scene.remove(enemy);
                        scene.remove(bullet);
                        bullets.splice(bullets.indexOf(bullet), 1);
                        enemies.splice(enemies.indexOf(enemy), 1);
                    }
                });
            }
        });
    }
    
    // Function to animate the scene
    function animate() {
        requestAnimationFrame(animate);
        update();
        updateEnemies(); // Call updateEnemies in the animation loop
        updateBullets(); // Call updateBullets in the animation loop
        renderer.render(scene, camera);
    }
    
    // Start spawning enemies
    spawnEnemies();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Start animation
    animate();
    