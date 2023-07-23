let stars = document.getElementById("stars");
let floatingRocks = document.getElementById("floatingRocks");
let mountains = document.getElementById("mountains");
let cloudySmoke = document.getElementById("cloudySmoke");
let heroText = document.getElementById("hero-text");
let header = document.getElementById("header");
let exploreSecText = document.getElementById("secHeading");
let secText = document.getElementById("secText");


window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;

    header.style.marginTop = scrollValue * 0.5 + "px";
    mountains.style.marginTop = scrollValue * 0.15 + "px";
    stars.style.left = scrollValue * 0.2 + "px";
    floatingRocks.style.top = scrollValue * 0.12 + "px";
    cloudySmoke.style.marginBottom = scrollValue * 0.2 + "px"
    heroText.style.marginBottom = scrollValue * 0.2 + "px";
    exploreBtn.style.marginBottom = scrollValue * 0.3 + "px";
    exploreSecText.style.marginBottom = (800-scrollValue) * 0.2 + "px";
})