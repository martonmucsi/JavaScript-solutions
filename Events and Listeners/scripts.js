// First Exercise

$("#first").click(() => {
    console.log("Yeah, you clicked on me!")
})

// Second exercise

$("#second").click(() => {
    $("#first").text(":(");
    console.log("Haha, I stole your click! :D")
})