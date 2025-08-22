import * as BABYLON from 'babylonjs';

export function createEarth(scene) {
    const earth = BABYLON.MeshBuilder.CreateSphere("earth", {
        diameter: 0.5,
        segments: 64
    }, scene);

    var earthMat = new BABYLON.StandardMaterial("earthMat", scene)

    var earthTexture = new BABYLON.Texture("/textures/earth_4096.png", scene)
    earthMat.emissiveTexture = earthTexture;
    earthMat.emissiveColor = new BABYLON.Color3(-0.4, -0.4, -0.4); 
    earthMat.specularColor = new BABYLON.Color3(0, 0, 0);
    var earthNormalTexture = new BABYLON.Texture("/textures/earthNormal.jpg", scene);
    earthMat.bumpTexture = earthNormalTexture;

    earthTexture.vScale = -1;
    earthTexture.uScale = -1;
    earthNormalTexture.vScale = -1;
    earthNormalTexture.uScale = 1;

    earth.material = earthMat;

    const earthAxis = new BABYLON.Vector3(
        Math.sin(23.44 * Math.PI / 180),
        Math.cos(23.44 * Math.PI / 180),
        0
    ).normalize();

    const orbitRadius = 4;
    const rotationSpeed = 0.01;
    const orbitSpeed = 0.00005;

    scene.registerBeforeRender(() => {

        const angle = performance.now() * orbitSpeed;
        earth.position.x = orbitRadius * Math.cos(angle);
        earth.position.z = orbitRadius * Math.sin(angle);


        earth.rotate(earthAxis, rotationSpeed, BABYLON.Space.LOCAL);
    });

     const sound = new BABYLON.Sound(
            "MusicSound",
            "textures/sound/AfterHours.mp3",
            scene,
            null,
            {
                loop: true,
                autoplay: true,
                spatialSound: true, 
                maxDistance: 3,   
                distanceModel: "linear"
    
            }
    
        );
        sound.setVolume(0.05);
        sound.attachToMesh(earth);

    return earth;
};