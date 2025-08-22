import * as BABYLON from 'babylonjs';

export function createSaturn(scene) {
   
    let saturn = BABYLON.MeshBuilder.CreateSphere("saturn", { diameter: 0.7 }, scene);
    let saturnMaterial = new BABYLON.StandardMaterial("saturnMat", scene);
    saturnMaterial.emissiveTexture = new BABYLON.Texture('/textures/saturn.jpg', scene);
    saturnMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); 
    saturnMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    saturn.material = saturnMaterial;

 
    const ring = BABYLON.MeshBuilder.CreateSphere("ring", {
        diameterX: 1, 
        diameterY: 0.05, 
        diameterZ: 1, 
        segments: 64
    }, scene);
    
    const ringMaterial = new BABYLON.StandardMaterial("ringMat", scene);
    ringMaterial.emissiveTexture = new BABYLON.Texture('/textures/particle.jpg', scene);
    ringMaterial.emissiveColor = new BABYLON.Color3(-0.1, -0.1, -0.1); 
    ringMaterial.alpha = 1;
    ringMaterial.backFaceCulling = true;
    ringMaterial.alphaMode = BABYLON.Engine.ALPHA_BLEND;
    ring.material = ringMaterial;
    ring.rotation.x = Math.PI / 155;

    
    let saturnAxis = new BABYLON.Vector3(
        Math.sin(26.73 * Math.PI / 180), 
        Math.cos(26.73 * Math.PI / 180), 
        0
    );

 
    const orbitRadius = 7;
    const rotationSpeed = 0.03; 
    const orbitSpeed = 0.00009; 

    scene.registerBeforeRender(function () {
        
        const angle = performance.now() * orbitSpeed;
        saturn.position.x = orbitRadius * Math.cos(angle);
        saturn.position.z = orbitRadius * Math.sin(angle);

        ring.position.copyFrom(saturn.position);


        saturn.rotate(saturnAxis, rotationSpeed, BABYLON.Space.WORLD);
    });

    return saturn;
}