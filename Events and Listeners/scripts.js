// First Exercise

$("#first").click(() => {
    console.log("Yeah, you clicked on me!")
})

// Second exercise

$("#second").click(() => {
    $("#first").text(":(");
    console.log("Haha, I stole your click! :D")
})

// Third Exercise

$("#third").click(() => {
    $("#first").css("background-color", "purple");
    $("#second").css("background-color", "pink");
    $("#third").css("background-color", "coral");
})

// Next setInterval, firth exercise

$("#fourth").click(() => {
    let value = $("input:text").val()
    if (value === "") {
        $("#fourth").css("background-color", "blue")
    } else {
        $("#fourth").css("background-color", value)  
    }    
})