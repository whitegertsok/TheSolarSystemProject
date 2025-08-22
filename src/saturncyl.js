import * as BABYLON from 'babylonjs';


export function createSaturnCyl(scene) {

    let saturncyl = BABYLON.MeshBuilder.CreateSphere("saturncyl", { diameter: 0.01 }, scene);

    let saturncylMaterial = new BABYLON.StandardMaterial("saturncylMat", scene);
    saturncylMaterial.emissiveTexture = new BABYLON.Texture('/textures/saturn_ring.jpg', scene);
    saturncyl.material = saturncylMaterial; // Присваиваем материал планете
  

    scene.registerBeforeRender(function () {
        const angle = performance.now() * rotationSpeed; // Угол вращения
        saturncyl.position.x = orbitRadius * Math.cos(angle); // Позиция по оси X
        saturncyl.position.z = orbitRadius * Math.sin(angle); // Позиция по оси Z
    

        // Вращение Юпитера вокруг своей оси
        saturncyl.rotate(saturncylAxis, rotationSpeed);
    }); 

   

    return saturncyl;
};


