let moon = document.getElementById("moon")
let header = document.querySelector("header")
let btnSVG = document.querySelector("svg path");
let alllinks = document.querySelectorAll("a");
let allbody = document.querySelectorAll("body");
let input = document.querySelectorAll("input");

if (localStorage.getItem("bgdark") &&
    localStorage.getItem("darknav") &&
    localStorage.getItem("everydark") &&
    localStorage.getItem("ondark")) {

    document.body.classList.add("on")
    header.classList.add("bg-dark")
    btnSVG.classList.add("dark")
    allbody.forEach((every) => {
        every.classList.add("all-dark")
    })
    input.forEach((inputs) => {
        inputs.classList.add("border-w")
    })
    moon.classList.add("hide");
    sun.classList.remove("hide")
}

moon.addEventListener("click", function () {
    moon.classList.add("hide");
    sun.classList.remove("hide")
    document.body.classList.toggle("on")
    header.classList.toggle("bg-dark")
    btnSVG.classList.toggle("dark")
    allbody.forEach((every) => {
        every.classList.toggle("all-dark")
    })
    input.forEach((inputs) => {
        inputs.classList.toggle("border-w")
    })

    localStorage.setItem("bgdark", "bg-dark")
    localStorage.setItem("darknav", "dark")
    localStorage.setItem("everydark", "all-dark")
    localStorage.setItem("ondark", "on")
    localStorage.setItem("whitetext", "text-white")
    localStorage.setItem("borderwhite", "border-w")
})

document.getElementById("sun").onclick = function () {
    moon.classList.remove("hide");
    sun.classList.add("hide")
    localStorage.clear()
    document.body.classList.remove("on")
    header.classList.remove("bg-dark")
    btnSVG.classList.remove("dark")
    allbody.forEach((every) => {
        every.classList.remove("all-dark")
    })
    input.forEach((inputs) => {
        inputs.classList.remove("border-w")
    })
}