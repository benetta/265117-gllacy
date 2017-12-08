var body 	= document.querySelector("#main-body");

var button1 = document.querySelector("#slide-1");
var button2 = document.querySelector("#slide-2");
var button3 = document.querySelector("#slide-3");

var slide1  = document.querySelector("#content-slide-1");
var slide2  = document.querySelector("#content-slide-2");
var slide3  = document.querySelector("#content-slide-3");


button1.addEventListener("click", function(evt) {
	evt.preventDefault();

	body.className = "slide-1";
	
	button2.classList.remove("main-slider-active");
	button3.classList.remove("main-slider-active");
	button1.classList.add("main-slider-active");

	slide2.classList.add("visually-hidden");
	slide3.classList.add("visually-hidden");
	slide1.classList.remove("visually-hidden");
});

button2.addEventListener("click", function(evt) {
	evt.preventDefault();

	body.className = "slide-2";
	
	button1.classList.remove("main-slider-active");
	button3.classList.remove("main-slider-active");
	button2.classList.add("main-slider-active");

	slide1.classList.add("visually-hidden");
	slide3.classList.add("visually-hidden");
	slide2.classList.remove("visually-hidden");
});

button3.addEventListener("click", function(evt) {
	evt.preventDefault();

	body.className = "slide-3";
	
	button1.classList.remove("main-slider-active");
	button2.classList.remove("main-slider-active");
	button3.classList.add("main-slider-active");

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

	modal.classList.remove("visually-hidden", "zoomOutRight");
	modal.classList.add("zoomInLeft");

	body.classList.add("overlay");
});

buttonClose.addEventListener("click", function(evt) {
	evt.preventDefault();

	body.classList.remove("overlay");

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