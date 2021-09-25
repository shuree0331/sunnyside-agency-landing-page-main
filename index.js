const menu = document.getElementById("menu");
const links = document.getElementById("links");

menu.addEventListener('click', function () {
    // console.log('hjhkhkjhkjhkj')
    if (links.style.visibility === 'hidden') {
        links.style.visibility = 'visible';
    } else {
        links.style.visibility = 'hidden';
    }
})
