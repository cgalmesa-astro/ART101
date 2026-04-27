let count = 0;
let colors = ["Orchid", "Coral", "Plum", "HotPink"]

$("#needy-button").click( function(){
    $("#needy-button").html("You clicked me " + count + " times");

    $("#needy-button").css('background-color', colors[count]);

    $("html").css( "background-color", colors[count+2]);

    count = count + 1;

});
