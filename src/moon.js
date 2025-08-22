import * as BABYLON from 'babylonjs';
export function createMoon(scene, earth) {
  
    const moon = BABYLON.MeshBuilder.CreateSphere("moon", {
        diameter: 0.1,
        segments: 32
    }, scene);

    const moonMaterial = new BABYLON.StandardMaterial("moonMat", scene);
    moonMaterial.emissiveTexture = new BABYLON.Texture('/textures/moon.jpg', scene);
        moonMaterial.emissiveColor = new BABYLON.Color3(-0.2, -0.2, -0.2); // Уменьшает яркость
        moonMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    moon.material = moonMaterial;

    const moonOrbitRadius = 0.7;
    const moonOrbitSpeed = 0.001;
    const moonRotationSpeed = 0.005;

    moon.position = new BABYLON.Vector3(
        earth.position.x + moonOrbitRadius,
        earth.position.y,
        earth.position.z
    );

    scene.registerBeforeRender(() => {
      
        const earthPos = earth.position;
        
        const moonAngle = performance.now() * moonOrbitSpeed;
        
        moon.position.x = earthPos.x + moonOrbitRadius * Math.cos(moonAngle);
        moon.position.z = earthPos.z + moonOrbitRadius * Math.sin(moonAngle);
        moon.position.y = earthPos.y + 0.2 * Math.sin(moonAngle); 
        
        moon.rotate(BABYLON.Axis.Y, moonRotationSpeed, BABYLON.Space.LOCAL);
    });

    return moon;
}