import * as BABYLON from 'babylonjs';

export function createUranus(scene) {
    // Создание планеты Уран (размер оставляем 0.65)
    let uranus = BABYLON.MeshBuilder.CreateSphere("uranus", { diameter: 0.65 }, scene);

    let uranusMaterial = new BABYLON.StandardMaterial("uranusMat", scene);
    uranusMaterial.emissiveTexture = new BABYLON.Texture('/textures/uranus.jpg', scene);
    uranusMaterial.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); // Уменьшает яркость
    uranusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    uranus.material = uranusMaterial;
    

    // Ось вращения (РЕАЛЬНЫЙ наклон 97.77° - Уран вращается "лёжа на боку")
    let uranusAxis = new BABYLON.Vector3(
        Math.sin(97.77 * Math.PI / 180), 
        Math.cos(97.77 * Math.PI / 180), 
        0
    );

    // Параметры вращения (РЕАЛЬНЫЕ СКОРОСТИ)
    const orbitRadius = 8; // Сохраняем ваш радиус орбиты
    const rotationSpeed = 0.008; // 17.2 часа для полного оборота
    const orbitSpeed = 0.00007; // 84 земных года для полного оборота

    scene.registerBeforeRender(function () {
        // Орбитальное движение (ваш стиль с performance.now())
        const angle = performance.now() * orbitSpeed;
        uranus.position.x = orbitRadius * Math.cos(angle);
        uranus.position.z = orbitRadius * Math.sin(angle);
        
        // Вращение вокруг оси (ваш стиль с WORLD space)
        uranus.rotate(uranusAxis, rotationSpeed, BABYLON.Space.WORLD);
    });

    return uranus;
};