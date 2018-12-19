// window.addEventListener('resize'),
// function (event) {

var orientation;




var x = window.matchMedia("(orientation:landscape)")
myFunction(x)
x.addListener(myFunction)


// Funkcja sprawdza warunek jaka orientacja
function myFunction(x) {


    // deklaracja zmiennych dla elementów umiejętności
    var p1 = document.getElementById("praca1");
    var p2 = document.getElementById("praca2");
    var p3 = document.getElementById("praca3");

    var opis1 = document.getElementById("opis1");
    var opis2 = document.getElementById("opis2");
    var opis3 = document.getElementById("opis3");

    var obraz1 = document.getElementById("obraz1")
    var obraz2 = document.getElementById("obraz2")
    var obraz2 = document.getElementById("obraz2")



    // Jeśli lanscape
    if (x.matches) {


        // Startowe pobranie wysokości opisu i ustawienie rodzicowi tej wysokości bez tego rodzic nie ma wysokości

        p1.style.height = opis1.clientHeight + "px";
        p2.style.height = opis2.clientHeight + "px";
        p3.style.height = opis2.clientHeight + "px";


        // Zczytywanie wysokości opisu w czasie rzeczywistym i uruchomienie funkcji Resize() zapisanej poniżej
        window.addEventListener('resize', function (event) {
            Resize("landscape");

        });

        przewijanie(0);

        // Jeśli portrait
    } else {
        obraz1.style.height = "30vh"
        obraz2.style.height = "30vh"
        obraz3.style.height = "30vh"

        var h1 = obraz1.clientHeight + opis1.clientHeight;
        var h2 = obraz1.clientHeight + opis2.clientHeight;
        var h3 = obraz1.clientHeight + opis3.clientHeight;

        p1.style.height = h1 + "px";
        p2.style.height = h2 + "px";
        p3.style.height = h3 + "px";
        window.addEventListener('resize', function (event) {
            Resize("portrait")

        });

        przewijanie(1);

    }
}

// }


function Resize(orientation) {
    var wysOpisu1 = document.getElementById("opis1").clientHeight;
    var wysOpisu2 = document.getElementById("opis2").clientHeight;
    var wysOpisu3 = document.getElementById("opis3").clientHeight;

    if (orientation === "landscape") {

        document.getElementById("praca1").style.height = wysOpisu1 + "px";
        document.getElementById("praca2").style.height = wysOpisu2 + "px";
        document.getElementById("praca3").style.height = wysOpisu3 + "px";

        document.getElementById("obraz1").style.height = "100%"
        document.getElementById("obraz2").style.height = "100%"
        document.getElementById("obraz3").style.height = "100%"

    } else if (orientation === "portrait") {
        document.getElementById("obraz1").style.height = "30vh"
        document.getElementById("obraz2").style.height = "30vh"
        document.getElementById("obraz3").style.height = "30vh"

        var pictureHeight = document.getElementById("obraz1").clientHeight;

        var h1 = pictureHeight + wysOpisu1;
        var h2 = pictureHeight + wysOpisu2;
        var h3 = pictureHeight + wysOpisu3;
        console.log("obraz:" + pictureHeight);
        console.log("opis:" + wysOpisu1);
        console.log("cały:" + h1);
        document.getElementById("praca1").style.height = h1 + "px";
        document.getElementById("praca2").style.height = h2 + "px";
        document.getElementById("praca3").style.height = h3 + "px";

    } else {}
}

function header() {
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");

    header.style.right = "0";
    work.style.right = "-100%";
    hobby.style.right = "-100%";
    footer.style.right = "-100%";

    header.style.transition = "right .8s linear 0s";
    work.style.transition = "right 0s linear .8s";
    hobby.style.transition = "right 0s linear .8s";
    footer.style.transition = "right 0s linear .8s";

    header.style.zIndex = "1";
    work.style.zIndex = "0";
    hobby.style.zIndex = "0";
    footer.style.zIndex = "0";
}

function work() {
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");

    work.style.right = "0";
    header.style.right = "-100%";
    hobby.style.right = "-100%";
    footer.style.right = "-100%";

    work.style.transition = "right .8s linear 0s";
    header.style.transition = "right 0s linear .8s";
    hobby.style.transition = "right 0s linear .8s";
    footer.style.transition = "right 0s linear .8s";

    work.style.zIndex = "1";
    header.style.zIndex = "0";
    hobby.style.zIndex = "0";
    footer.style.zIndex = "0";
}

function hobby() {
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");

    hobby.style.right = "0";
    work.style.right = "-100%";
    header.style.right = "-100%";
    footer.style.right = "-100%";

    hobby.style.transition = "right .8s linear 0s";
    work.style.transition = "right 0s linear .8s";
    header.style.transition = "right 0s linear .8s";
    footer.style.transition = "right 0s linear .8s";

    hobby.style.zIndex = "1";
    work.style.zIndex = "0";
    header.style.zIndex = "0";
    footer.style.zIndex = "0";

}

function footer() {
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");

    footer.style.right = "0";
    work.style.right = "-100%";
    header.style.right = "-100%";
    hobby.style.right = "-100%";

    footer.style.transition = "right .8s linear 0s";
    work.style.transition = "right 0s linear .8s";
    header.style.transition = "right 0s linear .8s";
    hobby.style.transition = "right 0s linear .8s";

    footer.style.zIndex = "1";
    work.style.zIndex = "0";
    header.style.zIndex = "0";
    hobby.style.zIndex = "0";
}

function przewijanie(n) {
    if (n === 1) {
        var square = document.getElementById('slide');
        var position = 0;
        var slide = 0;
        var left = 0;
        var strona = 1;

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
    } else {

    }
}