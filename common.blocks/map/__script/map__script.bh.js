module.exports = (bh) => {
    bh.match('map__script', () => {
        return {
            block: 'page',
            elem: 'js',
            url: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
        };
    });
};
