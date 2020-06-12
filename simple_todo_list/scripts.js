$("button").click(() => {
    let todo = $("input:text").val();
    if (todo === "") {
        console.log("Todo field empty")
    } else {
        $("ul").append(`<li>${todo}</li>`)  
    }    
})

// $("li").click(() => {
//     $("li").css("text-decoration", "line-through")
// })