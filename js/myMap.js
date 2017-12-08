
ymaps.ready(init);
var myMap;
var	myPlacemark;

function init() {
	myMap = new ymaps.Map("map", {
			center: [59.939318, 30.329388],
			zoom: 16
		});	

	myPlacemark = new ymaps.Placemark([59.938606, 30.323099], {}, 
		{
			iconLayout: "default#image",
			iconImageHref: "./img/pin-w-shadow.png",
			iconImageSize: [218, 142],
			iconImageOffset: [-41, -142]
		});

	myMap.geoObjects.add(myPlacemark);
}