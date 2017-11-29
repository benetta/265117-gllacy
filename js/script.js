// при нажатии на кнопку #slide-1 / 2 / 3 
// в body --> должен меняться класс на slide-1 / 2 / 3
// а класс visually-hidden должен убираться у соотв. li и назначаться двум другим li

var button1 = document.getElementById("slide-1");
var button2 = document.getElementById("slide-2");
var button3 = document.getElementById("slide-3");

button1.addEventListener("click", function() {
	// меняем цвет body
	document.getElementById("main-body").className = "slide-1";
	
	// назначаем класс активной кнопке
	button2.classList.remove("main-slider-active");
	button3.classList.remove("main-slider-active");
	button1.className = "main-slider-active";

	// показываем нужный li
	document.getElementById("content-slide-2").className = "visually-hidden";
	document.getElementById("content-slide-3").className = "visually-hidden";
	document.getElementById("content-slide-1").classList.remove("visually-hidden");
});

button2.addEventListener("click", function() {
	// меняем цвет body
	document.getElementById("main-body").className = "slide-2";
	
	// назначаем класс активной кнопке
	button1.classList.remove("main-slider-active");
	button3.classList.remove("main-slider-active");
	button2.className = "main-slider-active";

	// показываем нужный li
	document.getElementById("content-slide-1").className = "visually-hidden";
	document.getElementById("content-slide-3").className = "visually-hidden";
	document.getElementById("content-slide-2").classList.remove("visually-hidden");
});

button3.addEventListener("click", function() {
	// меняем цвет body
	document.getElementById("main-body").className = "slide-3";
	
	// назначаем класс активной кнопке
	button1.classList.remove("main-slider-active");
	button2.classList.remove("main-slider-active");
	button3.className = "main-slider-active";

	// показываем нужный li
	document.getElementById("content-slide-1").className = "visually-hidden";
	document.getElementById("content-slide-2").className = "visually-hidden";
	document.getElementById("content-slide-3").classList.remove("visually-hidden");
});