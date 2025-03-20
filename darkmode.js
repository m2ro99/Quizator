let moon = document.getElementById("moon")
let header = document.querySelector("header")
let btnSVG = document.querySelector("svg path");
let alllinks = document.querySelectorAll("a");
let allbody = document.querySelectorAll("body");
let logo = document.getElementById("logo");
let about = document.getElementById("about");

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
    logo.classList.add("text-white")
    about.classList.add("text-white")
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
    logo.classList.toggle("text-white")
    about.classList.toggle("text-white")

    localStorage.setItem("bgdark", "bg-dark")
    localStorage.setItem("darknav", "dark")
    localStorage.setItem("everydark", "all-dark")
    localStorage.setItem("ondark", "on")
    localStorage.setItem("whitetext", "text-white")
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
    logo.classList.remove("text-white")
    about.classList.remove("text-white")
}


logo.addEventListener("mouseover", function () {
    logo.style.letterSpacing = "2px"
    logo.style.transition = "0.5s ease all"
})
logo.addEventListener("mouseleave", function () {
    logo.style.letterSpacing = "0px"
    logo.style.transition = "0.5s ease all"
})