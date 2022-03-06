var logo = document.querySelector('contain');
var menu = document.querySelector('.pop');

logo.addEventListener('click', function() {
    menu.classList.toggle('showmenu');
});

window.onresize = () => {if (window.innerWidth > 700) mainnav.classList.remove('responsive')};

var string = document.lastModified;

let nLastModif = Date.parse(document.lastModified);

document.body.appendChild(document.createElement("center")).innerText = "Last Updated:" + document.lastModified;