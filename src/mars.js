import * as BABYLON from 'babylonjs';

export function createMars(scene) {
    // Создание планеты Марс (размер оставляем 0.4)
    let mars = BABYLON.MeshBuilder.CreateSphere("mars", { diameter: 0.4 }, scene);

    let marsMaterial = new BABYLON.StandardMaterial("marsMat", scene);
    marsMaterial.emissiveTexture = new BABYLON.Texture('/textures/mars.jpg', scene);
    marsMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); // Уменьшает яркость
    marsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    mars.material = marsMaterial;


    
    let marsAxis = new BABYLON.Vector3(
        0, 
        Math.cos(25.19 * Math.PI / 180), 
        Math.sin(25.19 * Math.PI / 180)
    ).normalize();
    
    
    const orbitRadius = 5;
    const orbitSpeed = 0.0015;
    const rotationSpeed = 0.007; 
    let orbitAngle = 0;
    
    // Начальная позиция
    mars.position.x = orbitRadius;
    mars.position.z = 0;

    scene.registerBeforeRender(function () {
        // Орбитальное движение
        orbitAngle += orbitSpeed;
        mars.position.x = orbitRadius * Math.cos(orbitAngle);
        mars.position.z = orbitRadius * Math.sin(orbitAngle);
        
        // Вращение вокруг оси
        mars.rotate(marsAxis, rotationSpeed, BABYLON.Space.LOCAL);
    });

    return mars;
};