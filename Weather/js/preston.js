const hambutton = document.querySelector(".contain");
const mainnav = document.querySelector(".pop")

hambutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')},
false);

window.onresize = () => {if
(window.innerWidth > 760)
mainnav.classList.remove('responsive')};

if(new Date().getDay()!= 6) {
    document.getElementById("days").style.display = "none";
}