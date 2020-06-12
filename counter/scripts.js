let myClicks = 0;

$("#inc").click(() => {
    myClicks = myClicks + 1
    $("h3").text(myClicks)
})

$("#dec").click(() => {
    myClicks = myClicks - 1
    $("h3").text(myClicks)
})