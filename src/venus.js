import * as BABYLON from 'babylonjs';

export function createVenus(scene) {
    
    let venus = BABYLON.MeshBuilder.CreateSphere("venus", { diameter: 0.45 }, scene);

    let venusMaterial = new BABYLON.StandardMaterial("venusMat", scene);
    venusMaterial.emissiveTexture = new BABYLON.Texture('/textures/venus.jpg', scene);
    venusMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); 
    venusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    venus.material = venusMaterial;


    
    let venusAxis = new BABYLON.Vector3(
        Math.sin(177.4 * Math.PI / 180),
        Math.cos(177.4 * Math.PI / 180),
        0
    );

    
    const orbitRadius = 3; 
    const rotationSpeed = 0.0015;
    const orbitSpeed = 0.00015; 

    scene.registerBeforeRender(function () {
      
        const angle = performance.now() * orbitSpeed;
        venus.position.x = orbitRadius * Math.cos(angle);
        venus.position.z = orbitRadius * Math.sin(angle);
        
       
        venus.rotate(venusAxis, rotationSpeed, BABYLON.Space.WORLD);
    });

    return venus;
};