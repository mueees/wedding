$(document).ready(function () {


    //resize all div
    (function () {
        $(window).on('resize', resizeDiv);

        function resizeDiv() {
            $('.slide').height($(window).height());
        }

        resizeDiv();
    })();

    //add google maps
    (function () {
        function initialize() {
            var mapCanvas = document.getElementById('map'),
                myLatlng = new google.maps.LatLng(50.182564, 30.621905);

            var mapOptions = {
                    center: new google.maps.LatLng(50.329470, 30.940895),
                    zoom: 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false
                },
                map = new google.maps.Map(mapCanvas, mapOptions),
                marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Дача'
                });

            var contentString =  '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h2 id="firstHeading" class="firstHeading">Дача</h2>'+
                '<div id="bodyContent">'+
                '<p>Адрес: Новые Безрадичи, Киевская область </br>' +
                'Телефон: (067) 503-23-36</br>' +
                'Чем доехать: Киевская обл., 34-й км Новообуховской трассы, поворот на с. Безрадичи</br>' +
                ' Координаты: 50.182564, 30.621905 </p>' +
                '<p></p>' +
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            infowindow.open(map, marker);
        }

        initialize();
    })();

});
