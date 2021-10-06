const menu = document.getElementById("menu");
const links = document.getElementById("links");

menu.addEventListener("click", function () {
    if (links.style.visibility === 'hidden') {
        links.style.visibility = 'visible';
    } else {
        links.style.visibility = 'hidden';
    }
})
