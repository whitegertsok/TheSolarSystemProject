export function createScene(engine, canvas) {
    const scene = new BABYLON.Scene(engine);
   
    //Цвет сцены
    scene.clearColor = new BABYLON.Color3(0.0, 0, 0.0);
    scene.createDefaultEnvironment({
        createSkybox: false,
        createGround: false,
        cameraContrast: 2,
        cameraExposure: 1
    });
    
    // Создание Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size: 1000.0}, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        "textures/skybox/skybox", // Путь к текстурам (6 изображений с именами: px, nx, py, ny, pz, nz)
        scene
    );
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    skybox.material = skyboxMaterial;

    let light = new BABYLON.PointLight('light', new BABYLON.Vector3(0, 0, 0), scene);
    light.intensity = 0.5;

    // Камера
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
    camera.lowerRadiusLimit = 2.5;
    camera.upperRadiusLimit = 10;
    camera.pinchDeltaPercentage = 0.01;
    camera.wheelDeltaPercentage = 0.01;
    camera.attachControl(canvas, true);

    // Возвращаем сцену
    return scene;
}