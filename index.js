const menu = document.getElementById("menu");
const links = document.getElementById("links");
let clickOrTouchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

menu.addEventListener(clickOrTouchEvent, function () {
    if (links.style.visibility === 'hidden') {
        links.style.visibility = 'visible';
    } else {
        links.style.visibility = 'hidden';
    }
})
