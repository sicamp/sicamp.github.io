var menu = document.querySelector('.menu');
var toggle = menu.querySelector('.menu__toggle');

menu.classList.add('menu_js_inited');

toggle.addEventListener('click', function() {
    menu.classList.toggle('menu_open_yes');
});
