import * as BABYLON from 'babylonjs';

export function createNeptune(scene) {
 
    let neptune = BABYLON.MeshBuilder.CreateSphere("neptune", { diameter: 0.65 }, scene);

    let neptuneMaterial = new BABYLON.StandardMaterial("neptuneMat", scene);
    neptuneMaterial.emissiveTexture = new BABYLON.Texture('/textures/neptune.jpg', scene);
    neptuneMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); // Уменьшает яркость
    neptuneMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    neptune.material = neptuneMaterial;
  


    let neptuneAxis = new BABYLON.Vector3(
        Math.sin(28.32 * Math.PI / 180), 
        Math.cos(28.32 * Math.PI / 180), 
        0
    ).normalize();

    const orbitRadius = 9; 
    const rotationSpeed = 0.03; 
    const orbitSpeed = 0.00006; 

    scene.registerBeforeRender(function () {

        const angle = performance.now() * orbitSpeed;
        neptune.position.x = orbitRadius * Math.cos(angle);
        neptune.position.z = orbitRadius * Math.sin(angle);
        
   
        neptune.rotate(neptuneAxis, rotationSpeed, BABYLON.Space.WORLD);
    });

    return neptune;
};