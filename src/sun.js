import * as BABYLON from 'babylonjs';

export function createSunScene(sunScene) {
    var sunScene = null;
    // var sunScene = new BABYLON.Scene(sunEngine);
    var surfaceParticles = new BABYLON.ParticleSystem("surfaceParticles", 1600, sunScene);
    var flareParticles = new BABYLON.ParticleSystem("flareParticles", 20, sunScene);
    var coronaParticles = new BABYLON.ParticleSystem("coronaParticles", 600, sunScene);

    surfaceParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png", sunScene);
    flareParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png", sunScene);
    coronaParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", sunScene);

    var coreSphere = BABYLON.MeshBuilder.CreateSphere("coreSphere", { diameter: 2.01, segments: 64 }, sunScene);
    var coreMat = new BABYLON.StandardMaterial("coreMat", sunScene)
    coreMat.emissiveColor = new BABYLON.Color3(0.3773, 0.0930, 0.0266);
    coreSphere.material = coreMat;
    var sunEmitter = new BABYLON.SphereParticleEmitter();
    sunEmitter.radius = 1;
    sunEmitter.radiusRange = 0;

    surfaceParticles.emitter = coreSphere;
    surfaceParticles.particleEmitterType = sunEmitter;
    flareParticles.emitter = coreSphere;
    flareParticles.particleEmitterType = sunEmitter;
    coronaParticles.emitter = coreSphere;
    coronaParticles.particleEmitterType = sunEmitter;

    surfaceParticles.addColorGradient(0, new BABYLON.Color4(0.8509, 0.4784, 0.1019, 0.0));
    surfaceParticles.addColorGradient(0.4, new BABYLON.Color4(0.6259, 0.3056, 0.0619, 0.5));
    surfaceParticles.addColorGradient(0.5, new BABYLON.Color4(0.6039, 0.2887, 0.0579, 0.5));
    surfaceParticles.addColorGradient(1.0, new BABYLON.Color4(0.3207, 0.0713, 0.0075, 0.0));
    flareParticles.addColorGradient(0, new BABYLON.Color4(1, 0.9612, 0.5141, 0.0));
    flareParticles.addColorGradient(0.25, new BABYLON.Color4(0.9058, 0.7152, 0.3825, 1.0));
    flareParticles.addColorGradient(1.0, new BABYLON.Color4(0.6320, 0.0, 0.0, 0.0));
    coronaParticles.addColorGradient(0, new BABYLON.Color4(0.8509, 0.4784, 0.1019, 0.0));
    coronaParticles.addColorGradient(0.5, new BABYLON.Color4(0.6039, 0.2887, 0.0579, 0.12));
    coronaParticles.addColorGradient(1.0, new BABYLON.Color4(0.3207, 0.0713, 0.0075, 0.0));
    surfaceParticles.minSize = 0.3;
    surfaceParticles.maxSize = 0.8;
    flareParticles.minScaleX = 0.3;
    flareParticles.minScaleY = 0.6;
    flareParticles.maxScaleX = 1;
    flareParticles.maxScaleY = 1;
    coronaParticles.minScaleX = 0.3;
    coronaParticles.minScaleY = 0.8;
    coronaParticles.maxScaleX = 1.5;
    coronaParticles.maxScaleY = 2.5;

    flareParticles.addSizeGradient(0, 0);
    flareParticles.addSizeGradient(1, 1);
    surfaceParticles.minLifeTime = 7;
    surfaceParticles.maxLifeTime = 7;
    flareParticles.minLifeTime = 10;
    flareParticles.maxLifeTime = 10;
    coronaParticles.minLifeTime = 3;
    coronaParticles.maxLifeTime = 3;

    surfaceParticles.emitRate = 250;
    flareParticles.emitRate = 2;
    coronaParticles.emitRate = 250;

    surfaceParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
    flareParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
    coronaParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

    surfaceParticles.minAngularSpeed = -0.4;
    surfaceParticles.maxAngularSpeed = 0.4;
    flareParticles.minAngularSpeed = 0.0;
    flareParticles.maxAngularSpeed = 0.0;
    coronaParticles.minAngularSpeed = 0.0;
    coronaParticles.maxAngularSpeed = 0.0;

    surfaceParticles.minEmitPower = 0;
    surfaceParticles.maxEmitPower = 0;
    surfaceParticles.updateSpeed = 0.005;
    flareParticles.minEmitPower = 0.001;
    flareParticles.maxEmitPower = 0.01;
    coronaParticles.minEmitPower = 0.0;
    coronaParticles.maxEmitPower = 0.0;

    surfaceParticles.isBillboardBased = false;
    flareParticles.isBillboardBased = true;
    coronaParticles.isBillboardBased = true;

    surfaceParticles.start();
    flareParticles.start();
    coronaParticles.start();

    const sound = new BABYLON.Sound(
        "SunSound",
        "textures/sound/sun.mp3",
        sunScene,
        null,
        {
            loop: true,
            autoplay: true,
            spatialSound: true, 
            maxDistance: 4,   
            distanceModel: "linear"

        }

    );
    sound.setVolume(1);

    sound.attachToMesh(coreSphere);

    return coreSphere;
}

