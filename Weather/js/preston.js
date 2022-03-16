const hamburger = document.querySelector(".wrap");
const navMenu = document.querySelector(".pop");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".act").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

if(new Date().getDay()!= 3) {
    document.getElementsByClassName("q").style.display = "none";
}