import * as BABYLON from 'babylonjs';

export function createMercury(scene) {

    let mercury = BABYLON.MeshBuilder.CreateSphere("mercury", { diameter: 0.3 }, scene);

    let mercuryMaterial = new BABYLON.StandardMaterial("mercuryMat", scene);
    mercuryMaterial.emissiveTexture = new BABYLON.Texture('/textures/mercury.jpg', scene);
    mercuryMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); // Уменьшает яркость
    mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    mercury.material = mercuryMaterial;
    
    let mercuryAxis = new BABYLON.Vector3(0, 1, 0).normalize();

    const orbitRadius = 2; 
    const rotationSpeed = 0.004; 
    let orbitAngle = 0;

    scene.registerBeforeRender(function () {
       
        orbitAngle += 0.003; 
        mercury.position.x = orbitRadius * Math.cos(orbitAngle);
        mercury.position.z = orbitRadius * Math.sin(orbitAngle);

        mercury.rotate(mercuryAxis, rotationSpeed, BABYLON.Space.WORLD);
    });

    return mercury;
};