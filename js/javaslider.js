var square = document.getElementById('slide');
var position = 0;
var slide = 0;

var position1 = 0;
var slide1 = 0;
var left = 0;
var strona = 1;
var prac = 1;
var praca = document.getElementById("work");
var p1 = document.getElementById("praca1");
var p2 = document.getElementById("praca2");
var p3 = document.getElementById("praca3");


square.addEventListener("touchstart", function () {
	position = event.touches[0].clientX;
}, false);

square.addEventListener("touchend", function () {
	slide = event.changedTouches[0].clientX - position;

	// console.log(slide);
	if (strona == 1) {
		if (slide < (0 - 50)) {
			left = left - 100;
			strona++;
		}
	} else if (strona == 2 || strona == 3) {
		if (slide < (0 - 50)) {
			left = left - 100;
			strona++;
		} else if (slide > 50) {
			left = left + 100;
			strona--;
		}
	} else if (strona == 4) {
		if (slide > 50) {
			left = left + 100;
			strona--;
		}
	}

	square.style.left = left + "vw";
}, false);

praca.addEventListener("touchstart", function () {
	position1 = event.touches[0].clientX;
}, false);

praca.addEventListener("touchend", function () {
	slide1 = event.changedTouches[0].clientX - position1;
	if (slide1 > -20 && slide1 < 20) {
		if (prac == 1) {
			p1.style.display = "none";
			p2.style.display = "block";
			p3.style.display = "none";
			prac = 2;
		} else if (prac == 2) {
			p1.style.display = "none";
			p2.style.display = "none";
			p3.style.display = "block";
			prac = 3;
		} else if (prac == 3) {
			p1.style.display = "block";
			p2.style.display = "none";
			p3.style.display = "none";
			prac = 1;
		}
		console.log(prac);

	}




	square.style.left = left + "vw";
}, false);