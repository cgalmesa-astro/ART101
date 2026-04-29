let count = 0;
let colors = ["Orchid", "Coral", "Plum", "HotPink"]

$("#needy-button").click( function(){
    $("#needy-button").html("You clicked me " + count + " times");

    $("#needy-button").css('background-color', colors[count]);

    $("html").css( "background-color", colors[count-1]);

    count = count + 1;

    if (count == 4){
        count=0;
        console.log("it happened");
    }

});
