let myArray = ["Mark", "Gina", "Lali", "Marci"]

myArray.forEach(name => {
    $("ul").append(`<li>${name}</li>`)
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append(
    `<h2>${additionalBlock.title}</h2>`,
    `<p>${additionalBlock.text}<p>`
);