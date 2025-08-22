import * as BABYLON from 'babylonjs';

export function createJupiter(scene) {
    let jupiter = BABYLON.MeshBuilder.CreateSphere("jupiter", { diameter: 0.8 }, scene);

    let jupiterMaterial = new BABYLON.StandardMaterial("jupiterMat", scene);
    jupiterMaterial.emissiveTexture = new BABYLON.Texture('/textures/jupiter.png', scene);
    jupiter.material = jupiterMaterial;
    jupiterMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4);
    jupiterMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  
    let jupiterAxis = new BABYLON.Vector3(0, 1, 0).normalize();
    
    const orbitRadius = 6; 
    const orbitSpeed = 0.005; 
    const rotationSpeed = 0.01; 
    let orbitAngle = 0; 
    
    jupiter.position.x = orbitRadius;
    jupiter.position.z = 0;

    scene.registerBeforeRender(function () {
        orbitAngle += orbitSpeed;
        
        jupiter.position.x = orbitRadius * Math.cos(orbitAngle);
        jupiter.position.z = orbitRadius * Math.sin(orbitAngle);
        
        jupiter.rotate(jupiterAxis, rotationSpeed, BABYLON.Space.LOCAL);
    });

    return jupiter;
};