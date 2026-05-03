let environmentTitle = "Space Journey";

let environmentElements = ["Jupiter", "Mars", "rocket", "Alien"];


let Jupiter = {
    AtmosphereContains: 'very thick',
    MassIs: 317.906,
    HasRings: true,
    Moons: 101
}

let Mars = {
    AtmosphereContains: "very thin",
    MassIs: 0.107,
    HasRings: false,
    Moons: 2
}

const output_jupiter = document.getElementById('output_jupiter');

document.getElementById('JupiterAtmosphere').addEventListener('click', () => {
    output_jupiter.innerText = 'Jupiter has a ' + Jupiter.AtmosphereContains + ' atmosphere!';
});

document.getElementById('JupiterMass').addEventListener('click', () => {
    output_jupiter.innerText = 'Jupiter has a mass of ' + Jupiter.MassIs + ' Earth masses!';
});

document.getElementById('JupiterRings').addEventListener('click', () => {
    output_jupiter.innerText = 'Jupiter ' + (Jupiter.HasRings ? 'has' : 'does not have') + ' rings!';
});

document.getElementById('JupiterMoons').addEventListener('click', () => {
    output_jupiter.innerText = 'Jupiter has ' + Jupiter.Moons + ' moons!';
});

const output_mars = document.getElementById('output_mars');

document.getElementById('MarsAtmosphere').addEventListener('click', () => {
    output_mars.innerText = 'Mars has a ' + Mars.AtmosphereContains + ' atmosphere!';
});

document.getElementById('MarsMass').addEventListener('click', () => {
    output_mars.innerText = 'Mars has a mass of ' + Mars.MassIs + ' Earth masses!';
});

document.getElementById('MarsRings').addEventListener('click', () => {
    output_mars.innerText = 'Mars ' + (Mars.HasRings ? 'has' : 'does not have') + ' rings!';
}); 

document.getElementById('MarsMoons').addEventListener('click', () => {
    output_mars.innerText = 'Mars has ' + Mars.Moons + ' moons!';
});
