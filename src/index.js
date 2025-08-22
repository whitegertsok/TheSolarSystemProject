import * as BABYLON from 'babylonjs';
import * as cannon from "cannon";
import { createScene } from './scene';
import { createJupiter } from './jupiter';
import { createSunScene } from './sun';
import { createFallingStars } from './fallingStars';
import { createStarField } from './starField';
import { createEarth } from './earth';
import { createMercury } from './mercury';
import { createVenus } from './venus';
import { createMars } from './mars';
import { createSaturn } from './saturn';
import { createUranus } from './uranus';
import { createNeptune } from './neptune';
import {createMoon} from './moon';


const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true, { stencil: true });




const scene = createScene(engine, canvas);
const camera = scene.getCameraByName("camera");


const mercury = createMercury(scene);
const venus = createVenus(scene);
const earth = createEarth(scene);
const mars = createMars(scene);
const jupiter = createJupiter(scene);
const saturn = createSaturn(scene);
const uranus = createUranus(scene);
const neptune = createNeptune(scene);
const sunScene = createSunScene(scene);
const moon = createMoon(scene, earth);

createFallingStars(scene);
createStarField(scene);

function focusOnPlanet(planet) {
    camera.setTarget(planet);
}


window.moveToPlanet = (planetName) => {

    switch (planetName) {
        case 'mercury':
            focusOnPlanet(mercury);
            showPlanetInfo('mercury', 'textures/mercury-info.png');
            break;
        case 'venus':
            focusOnPlanet(venus);
            showPlanetInfo('venus', 'textures/venus-info.png');
            break;
        case 'earth':
            focusOnPlanet(earth);
            showPlanetInfo('earth', 'textures/earth-info.png');
            break;
        case 'mars':
            focusOnPlanet(mars);
            showPlanetInfo('mars', 'textures/mars-info.png');
            break;
        case 'jupiter':
            focusOnPlanet(jupiter);
            showPlanetInfo('jupiter', 'textures/jupiter-info.png');
            break;
        case 'saturn':
            focusOnPlanet(saturn);
            showPlanetInfo('saturn', 'textures/saturn-info.png');
            break;
        case 'uranus':
            focusOnPlanet(uranus);
            showPlanetInfo('uranus', 'textures/uranus-info.png');
            break;
        case 'neptune':
            focusOnPlanet(neptune);
            showPlanetInfo('neptune', 'textures/neptune-info.png');
            break;
        case 'sun':
            focusOnPlanet(sunScene);
            showPlanetInfo('sun', 'textures/sun-info.png');
            break;
            case 'moon':
                focusOnPlanet(moon);
                showPlanetInfo('moon', 'textures/moon-info.png');
                break;
    }
};

function showPlanetInfo(planetName, imagePath) {
    const planetInfo = document.getElementById('planetInfo');
    const planetImage = document.getElementById('planetImage');
    
    planetImage.src = imagePath;
    planetInfo.style.display = 'block';
}

window.hidePlanetInfo = function() {
    const planetInfo = document.getElementById('planetInfo');
    planetInfo.style.display = 'none'
}



engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});