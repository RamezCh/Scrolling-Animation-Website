let sunrise = document.querySelector(".sunrise");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let backMountains = document.getElementById("mountains3");
let middleMountains = document.getElementById("mountains4");
let frontMountains = document.getElementById("mountains7");
let main = document.querySelector(".main");

window.onscroll = () => {
    let scrollPosition = scrollY;
    stars.style.left = scrollPosition + "px";
    moon.style.top = (scrollPosition * 3) + "px";
    backMountains.style.top = (scrollPosition * 2) + "px";
    middleMountains.style.top = (scrollPosition * 1.5) + "px";
    river.style.top = scrollPosition + "px";
    boat.style.top = scrollPosition + "px";
    boat.style.left = (scrollPosition * 3) + "px";
    sunrise.style.fontSize = scrollPosition + "px";
    if( scrollPosition >= 75 ){
        stars.style.display = scrollPosition >= 129  ? "none" : "block";
        sunrise.style.fontSize = 75 + "px";
        sunrise.style.display = scrollPosition >= 478 ? "none" : "block";
        main.style.background = scrollPosition >= 127 ? "linear-gradient(to bottom, #ff6f61, #a7d7c5)" : "linear-gradient(to bottom, #04045e, #000000)";
    }
}