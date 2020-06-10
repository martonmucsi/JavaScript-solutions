let color = "purple";
let number = 10;
let word = 'cool';

if (color = "purple") {
    $(".red").css("background-color", "purple")
}

$(".yellow").text("Yellow is the color");

if (number > 100) {
    console.log("Whoa, it's a great number!")
} else {
    console.log("just a regular number, please.")
}

if (word === "cool") {
    $(".light").text("The power of DOM")
} else {
    $(".dark").text("The power of DOM")
}