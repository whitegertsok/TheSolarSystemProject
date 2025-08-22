export function createFallingStars (scene) {
            var fallingStars = new BABYLON.ParticleSystem("particles", 2000, scene);
            fallingStars.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
            fallingStars.emitter = new BABYLON.MeshBuilder.CreateSphere("emitter");
            fallingStars.minEmitBox = new BABYLON.Vector3(-15, -15, -15); 
            fallingStars.maxEmitBox = new BABYLON.Vector3(15, 15, 15); 
            fallingStars.minSize = 0.05;
            fallingStars.maxSize = 0.10;
            fallingStars.minLifeTime = 0.5; 
            fallingStars.maxLifeTime = 0.8; 
            fallingStars.emitRate = 50; 
            fallingStars.gravity = new BABYLON.Vector3(10, 1, 0);
            fallingStars.direction1 = new BABYLON.Vector3(0, 0, -1);
            fallingStars.direction2 = new BABYLON.Vector3(0, 2, 0);
            fallingStars.color1 = new BABYLON.Color4(1, 1, 1, 1); 
            fallingStars.color2 = new BABYLON.Color4(1, 1, 1, 1); 
            fallingStars.colorDead = new BABYLON.Color4(0, 0, 0, 0); 
          
            fallingStars.start();
            return fallingStars;
}