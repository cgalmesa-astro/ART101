// variables

let count = 0;

let buttonCreature = {
    name: "Button man",
    species: "goblin living in your screen",
    favoriteFood: "attention",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]

};

// function

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});