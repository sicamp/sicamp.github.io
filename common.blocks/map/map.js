/* global ymaps */
ymaps.ready(init);

function init() {
    var bMap = document.querySelector('.map');
    var mapContainer, map, camp, school;

    if ( ! bMap) {
        return;
    }

    mapContainer = bMap.querySelector('.map__container');

    camp = getData(bMap, 'camp');
    school = getData(bMap, 'school');

    bMap.classList.add('map_js_inited');

    map = getMap(mapContainer, camp.coords, camp.zoom);

    var schoolPoint = addPoint(map, school, function() {
        campPoint.button.deselect();
    });

    var campPoint = addPoint(map, camp, function() {
        schoolPoint.button.deselect();
    });
}

function getData(block, attr) {
    var data = block.getAttribute('data-' + attr);

    try {
        data = JSON.parse(data);
    } catch(e) {
        data = {};
    }

    return data;
}

function getMap(container, coords, zoom) {
    return new ymaps.Map(container, {
        center: coords,
        zoom: zoom,
        controls: [ 'zoomControl', 'fullscreenControl', 'typeSelector' ]
    });
}

function getMark(coords, name) {
    return new ymaps.Placemark(coords, {
        iconCaption: name
    }, {
        preset: 'islands#darkGreenDotIconWithCaption'
    });
}

function addPoint(map, point, onSelect) {
    var mark = getMark(point.coords, point.title);
    var button = new ymaps.control.Button({
        data: { content: point.button },
        state: { selected: point.selected }
    });

    button.events.add('select', function() {
        onSelect();
        map.setCenter(point.coords, point.zoom);
    });

    map.controls.add(button, { float: 'left' });
    map.geoObjects.add(mark);

    return {
        button: button,
        mark: mark
    };
}
