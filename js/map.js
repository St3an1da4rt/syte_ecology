ymaps.ready(init);

let center = [61.290349294142985,73.42461699999987]

function init() {
    var map = new ymaps.Map("map", {
        center: center, // ваши данные
        zoom: 12
    });

    // отходы

    let placemark_trash_1 = new ymaps.Placemark([61.24457479253231,73.41422554742537], {
        balloonContent: `
        <div class="balloon">
            <h1>ЭкоПункт "Вторчермет"</h1>
            <p>Учебная улица, 2</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 10:00 - 19:00</li>
                <li>Вт 10:00 - 19:00</li>
                <li>Ср 10:00 - 19:00</li>
                <li>Чт 10:00 - 19:00</li>
                <li>Пт 10:00 - 19:00</li>
                <li>Сб 10:00 - 19:00</li>
                <li>Вс 10:00 - 19:00</li>
            <ul>
            <a href="https://vk.com/vchm186">ЭкоПункт "Вторчермет"</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/отходы.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_trash_2 = new ymaps.Placemark([61.248859135570726,73.3730159153441], {
        balloonContent: `
        <div class="balloon">
            <h1>«Птичка» пункт приёма вторсырья в Сургуте</h1>
            <p>Сургут, пр. Набережный дом 5, строение 2</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн -</li>
                <li>Вт 14:00 - 19:00</li>
                <li>Ср -</li>
                <li>Чт 14:00 - 19:00</li>
                <li>Пт 14:00 - 19:00</li>
                <li>Сб 11:00 - 16:00</li>
                <li>Вс 11:00 - 16:00</li>
            <ul>
            <a href="https://vk.com/ptichka_punkt">«Птичка» пункт приёма вторсырья в Сургуте</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/отходы.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_trash_3 = new ymaps.Placemark([61.2544715623809,73.4229465], {
        balloonContent: `
        <div class="balloon">
            <h1>«Птичка» пункт приёма вторсырья в Сургуте</h1>
            <p>Сургут, ул. 30 лет победы 21/3</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн -</li>
                <li>Вт -</li>
                <li>Ср 14:00 - 19:00</li>
                <li>Чт 14:00 - 19:00</li>
                <li>Пт -</li>
                <li>Сб 10:00 - 15:00</li>
                <li>Вс 10:00 - 15:00</li>
            <ul>
            <a href="https://vk.com/ptichka_punkt">«Птичка» пункт приёма вторсырья в Сургуте</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/отходы.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_trash_4 = new ymaps.Placemark([61.241107062378106,73.46578699999996], {
        balloonContent: `
        <div class="balloon">
            <h1>«Птичка» пункт приёма вторсырья в Сургуте</h1>
            <p>Сургут, ул. 30 лет победы 21/3</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн -</li>
                <li>Вт 14:00 - 19:00</li>
                <li>Ср -</li>
                <li>Чт 14:00 - 19:00</li>
                <li>Пт 14:00 - 19:00</li>
                <li>Сб 11:00 - 16:00</li>
                <li>Вс 11:00 - 16:00</li>
            <ul>
            <a href="https://vk.com/ptichka_punkt">«Птичка» пункт приёма вторсырья в Сургуте</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/отходы.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_voltage_1 = new ymaps.Placemark([61.25755206235724,73.4569385], {
        balloonContent: `
        <div class="balloon">
            <h1>Экодоме</h1>
            <p>30 Лет Победы, 74</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 10.00-14.00 15.00-20.00</li>
                <li>Вт 10.00-14.00 15.00-20.00</li>
                <li>Ср 10.00-14.00 15.00-20.00</li>
                <li>Чт 10.00-14.00 15.00-20.00</li>
                <li>Пт 10.00-14.00 15.00-20.00</li>
                <li>Сб 10.00-14.00 15.00-20.00</li>
                <li>Вс 10.00-14.00 15.00-20.00</li>
            <ul>
            <a href="https://vk.com/eco4u2">Югра Собирает</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/батарейка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_voltage_2 = new ymaps.Placemark([61.258045562390116,73.45598649999995], {
        balloonContent: `
        <div class="balloon">
            <h1>Экоцентре «Югра собирает»</h1>
            <p>30 лет Победы 74</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 10.00-14.00 15.00-20.00</li>
                <li>Вт 10.00-14.00 15.00-20.00</li>
                <li>Ср 10.00-14.00 15.00-20.00</li>
                <li>Чт 10.00-14.00 15.00-20.00</li>
                <li>Пт 10.00-14.00 15.00-20.00</li>
                <li>Сб 10.00-14.00 15.00-20.00</li>
                <li>Вс 10.00-14.00 15.00-20.00</li>
            <ul>
            <a href="https://vk.com/eco4u2">Югра Собирает</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/батарейка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_voltage_4 = new ymaps.Placemark([61.24344506238406,73.36443000002043], {
        balloonContent: `
        <div class="balloon">
            <h1>Магазин "Лента"</h1>
            <p>Югорский тракт, 2</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 8.00-22.00</li>
                <li>Вт 8.00-22.00</li>
                <li>Ср 8.00-22.00</li>
                <li>Чт 8.00-22.00</li>
                <li>Пт 8.00-22.00</li>
                <li>Сб 8.00-22.00</li>
                <li>Вс 8.00-22.00</li>
            <ul>
            <a href="">Магазин "Лента"</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/батарейка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_voltage_5 = new ymaps.Placemark([61.24344506238406,73.36443000002043], {
        balloonContent: `
        <div class="balloon">
            <h1>Магазин "Лента"</h1>
            <p>ул. 30 лет Победы, 74</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 8.00-22.00</li>
                <li>Вт 8.00-22.00</li>
                <li>Ср 8.00-22.00</li>
                <li>Чт 8.00-22.00</li>
                <li>Пт 8.00-22.00</li>
                <li>Сб 8.00-22.00</li>
                <li>Вс 8.00-22.00</li>
            <ul>
            <a href="">Магазин "Лента"</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/батарейка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_cloth_1 = new ymaps.Placemark([61.25652700385212,73.38823549999987], {
        balloonContent: `
        <div class="balloon">
            <h1>Магазин «Мир»</h1>
            <p>ул.Бахилова, д.1, пом.11</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 10.00-17.00</li>
                <li>Вт 10.00-17.00</li>
                <li>Ср 10.00-17.00</li>
                <li>Чт 10.00-17.00</li>
                <li>Пт 10.00-17.00</li>
                <li>Сб -</li>
                <li>Вс -</li>
            <ul>
            <a href="https://vk.com/tn.fond">Благотворительный фонд Траектория Надежды</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/рубашка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_cloth_2 = new ymaps.Placemark([61.24998006240094,73.38622349999996], {
        balloonContent: `
        <div class="balloon">
            <h1>Благотворительный фонд «Благо Дарю»</h1>
            <p>ул. Декабристов,д.15</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 10.00-17.00</li>
                <li>Вт 10.00-17.00</li>
                <li>Ср 10.00-17.00</li>
                <li>Чт 10.00-17.00</li>
                <li>Пт 10.00-17.00</li>
                <li>Сб -</li>
                <li>Вс -</li>
            <ul>
            <a href="https://vk.com/dariblago">Благотворительный фонд «Благо Дарю»</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/рубашка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_cloth_3 = new ymaps.Placemark([61.24743106239433,73.427429], {
        balloonContent: `
        <div class="balloon">
            <h1>Гуманитарный склад при Храме Геогрия Победоносца.</h1>
            <p>Университетской, 12/2</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 12:00-17:00</li>
                <li>Вт 12:00-17:00</li>
                <li>Ср 12:00-17:00</li>
                <li>Чт 12:00-17:00</li>
                <li>Пт 12:00-17:00</li>
                <li>Сб 12:00-17:00</li>
                <li>Вс 12:00-17:00</li>
            <ul>
            <a href="https://stribuna.ru/articles/video-report/gumanitarnyy_sklad_pri_khrame_georgiya_pobedonostsa_prinimaet_pomoshch_ot_surgutyan/">Гуманитарный склад при Храме Геогрия Победоносца.</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/рубашка.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_cloth_4 = new ymaps.Placemark([61.26708656235021,73.36928100002045], {
        balloonContent: `
        <div class="balloon">
            <h1>Гуманитарный корпус</h1>
            <p>Ленина, 67</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 12:00-17:00</li>
                <li>Вт 12:00-17:00</li>
                <li>Ср 12:00-17:00</li>
                <li>Чт 12:00-17:00</li>
                <li>Пт 12:00-17:00</li>
                <li>Сб 12:00-17:00</li>
                <li>Вс 12:00-17:00</li>
            <ul>
            <a href="https://vk.com/resurs_surgut">Гуманитарный корпус</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/отходы.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    let placemark_cloth_5 = new ymaps.Placemark([61.26708656235021,73.36928100002045], {
        balloonContent: `
        <div class="balloon">
            <h1>ЭкоПункт "Вторчермет"</h1>
            <p>Учебная улица, 2</p>
            <h2>Расписание</h2>
            <ul>
                <li>Пн 10:00 - 19:00</li>
                <li>Вт 10:00 - 19:00</li>
                <li>Ср 10:00 - 19:00</li>
                <li>Чт 10:00 - 19:00</li>
                <li>Пт 10:00 - 19:00</li>
                <li>Сб 10:00 - 19:00</li>
                <li>Вс 10:00 - 19:00</li>
            <ul>
            <a href="https://vk.com/vchm186">ЭкоПункт "Вторчермет"</a>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/img/отходы.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    //   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects
    .add(placemark_trash_1)
    .add(placemark_trash_2)
    .add(placemark_trash_3)
    .add(placemark_trash_4)
    map.geoObjects.add(placemark_voltage_1)
    .add(placemark_voltage_2)
    .add(placemark_voltage_3)
    .add(placemark_voltage_4)
    .add(placemark_voltage_5)
    map.geoObjects
    .add(placemark_cloth_1)
    .add(placemark_cloth_2)
    .add(placemark_cloth_3)
    .add(placemark_cloth_4)
    .add(placemark_cloth_5)

    // map.options.set({balloonPanelMaxMapArea:'Infinity'});
}