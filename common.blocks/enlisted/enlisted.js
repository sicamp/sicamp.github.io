var enlisted = document.querySelector('.enlisted');

if (enlisted) {
    var input = enlisted.querySelector('.enlisted__search');
    var list = enlisted.querySelector('.enlisted__list').childNodes;

    enlisted.classList.add('enlisted_js_inited');

    input.addEventListener('input', function() {
        var text = this.value.toLowerCase();

        Array.prototype.forEach.call(list, function(item) {
            var isName = item.dataset.name.indexOf(text) === -1;
            var isCity = item.dataset.city.indexOf(text) === -1;

            item.classList.toggle('enlisted__student_hidden_yes', isName && isCity);
        });
    });
}
