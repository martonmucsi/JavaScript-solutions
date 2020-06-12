let myid = 1;

$("button").click(() => {
    let todo = $("input:text").val()
    myid = myid + 1
    if (todo === "") {
        console.log("Todo field empty")
    } else {
        $("ul").append(`<li class = "todo-item" id = "${myid}">${todo}</li>`)  
    }    
})

$(".todo-item").click(() => {
    var itemId = $(this).attr("id");
    $(`#${itemId}`).css("text-decoration", "line-through");
})