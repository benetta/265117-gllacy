// при нажатии на кнопку #slide-1 / 2 / 3 
// в body --> должен меняться класс на slide-1 / 2 / 3
// а класс visually-hidden должен убираться у соотв. li и назначаться двум другим li

var body 	= document.querySelector("#main-body");

// кнопки
var button1 = document.querySelector("#slide-1");
var button2 = document.querySelector("#slide-2");
var button3 = document.querySelector("#slide-3");

// слайды
var slide1  = document.querySelector("#content-slide-1");
var slide2  = document.querySelector("#content-slide-2");
var slide3  = document.querySelector("#content-slide-3");


button1.addEventListener("click", function(evt) {
	evt.preventDefault();
	// меняем цвет body
	body.className = "slide-1";
	
	// назначаем класс активной кнопке
	button2.classList.remove("main-slider-active");
	button3.classList.remove("main-slider-active");
	button1.classList.add("main-slider-active");

	// показываем нужный li
	slide2.classList.add("visually-hidden");
	slide3.classList.add("visually-hidden");
	slide1.classList.remove("visually-hidden");
});

button2.addEventListener("click", function(evt) {
	evt.preventDefault();
	// меняем цвет body
	body.className = "slide-2";
	
	// назначаем класс активной кнопке
	button1.classList.remove("main-slider-active");
	button3.classList.remove("main-slider-active");
	button2.classList.add("main-slider-active");

	// показываем нужный li
	slide1.classList.add("visually-hidden");
	slide3.classList.add("visually-hidden");
	slide2.classList.remove("visually-hidden");
});

button3.addEventListener("click", function(evt) {
	evt.preventDefault();
	// меняем цвет body
	body.className = "slide-3";
	
	// назначаем класс активной кнопке
	button1.classList.remove("main-slider-active");
	button2.classList.remove("main-slider-active");
	button3.classList.add("main-slider-active");

	// показываем нужный li
	slide1.classList.add("visually-hidden");
	slide2.classList.add("visually-hidden");
	slide3.classList.remove("visually-hidden");
});


// 'обратная связь'

var openLink    = document.querySelector("#feedback-open");
var buttonClose = document.querySelector("#feedback-close");
var modal 		= document.querySelector("#modal-feedback");

var form 		= document.querySelector(".feedback-form");
var login 		= form.querySelector("[name=user-name]");
var password 	= form.querySelector("[name=feedback-email]");

openLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	//убираем класс hidden
	modal.classList.remove("zoomOutRight", "visually-hidden");
	modal.classList.add("zoomInLeft");

	// добавляем overlay в body
	body.classList.add("overlay");
});

buttonClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	// убираем overlay в body
	body.classList.remove("overlay");

	//добавляем класс hidden
	modal.classList.remove("zoomInLeft", "shake");
	modal.classList.add("zoomOutRight");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
    	modal.classList.remove("shake");
    	modal.offsetWidth = modal.offsetWidth;
    	modal.classList.add("shake");
	}
});