// variables

let count = 0;
let ObjectName = 'Mug';
let IsUseful = true;
let planets = 8;
let color = 'black';
let moods = ["sleepy", "nervous", "glowing", "dramatic"];

let Alien = {
    name  = 'Gleep Glorp',
    species = 'greenidian',
    limbs = 13,
    needsWater = true
};



let buttonCreature = {
    name: "Needy Button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};

// function

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "My current mood is " + currentMood;

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});