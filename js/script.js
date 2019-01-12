var orientation;
var p1 = document.getElementById("praca1");
var p2 = document.getElementById("praca2");
var p3 = document.getElementById("praca3");
var p4 = document.getElementById("hobby1");
var p5 = document.getElementById("hobby2");

var opis1 = document.getElementById("opis1");
var opis2 = document.getElementById("opis2");
var opis3 = document.getElementById("opis3");
var opis4 = document.getElementById("opis4");
var opis5 = document.getElementById("opis5");

var obraz1 = document.getElementById("obraz1")
var obraz2 = document.getElementById("obraz2")
var obraz3 = document.getElementById("obraz3")
var obraz4 = document.getElementById("obraz4")
var obraz5 = document.getElementById("obraz5")

var is_touch_device = 'ontouchstart' in document.documentElement;
if (is_touch_device) {
    przewijanie();
    obraz1.style.height = "30vh"
    obraz2.style.height = "30vh"
    obraz3.style.height = "30vh"
    obraz4.style.height = "30vh"
    obraz5.style.height = "30vh"

    var h1 = obraz1.clientHeight + opis1.clientHeight;
    var h2 = obraz1.clientHeight + opis2.clientHeight;
    var h3 = obraz1.clientHeight + opis3.clientHeight;
    var h4 = obraz1.clientHeight + opis4.clientHeight;
    var h5 = obraz1.clientHeight + opis5.clientHeight;

    p1.style.height = h1 + "px";
    p2.style.height = h2 + "px";
    p3.style.height = h3 + "px";
    p4.style.height = h4 + "px";
    p5.style.height = h5 + "px";
    if (window.innerHeight > window.innerWidth)
        Resize("touchP")
    else if (window.innerHeight <= window.innerWidth)
        Resize("touchL")
    window.addEventListener('resize', function (event) {
        if (window.innerHeight > window.innerWidth)
            Resize("touchP")
        else if (window.innerHeight <= window.innerWidth)
            Resize("touchL")

    });
} else {
    // Startowe pobranie wysokości opisu i ustawienie rodzicowi tej wysokości bez tego rodzic nie ma wysokości

    p1.style.height = opis1.clientHeight + "px";
    p2.style.height = opis2.clientHeight + "px";
    p3.style.height = opis3.clientHeight + "px";
    p4.style.height = opis4.clientHeight + "px";
    p5.style.height = opis5.clientHeight + "px";

    Resize("mouse");
    // Zczytywanie wysokości opisu w czasie rzeczywistym i uruchomienie funkcji Resize() zapisanej poniżej
    window.addEventListener('resize', function (event) {
        Resize("mouse");

    });



}



function Resize(display) {
    var wysOpisu1 = document.getElementById("opis1").clientHeight;
    var wysOpisu2 = document.getElementById("opis2").clientHeight;
    var wysOpisu3 = document.getElementById("opis3").clientHeight;
    var wysOpisu4 = document.getElementById("opis4").clientHeight;
    var wysOpisu5 = document.getElementById("opis5").clientHeight;

    if (display === "mouse") {

        document.getElementById("praca1").style.height = wysOpisu1 + "px";
        document.getElementById("praca2").style.height = wysOpisu2 + "px";
        document.getElementById("praca3").style.height = wysOpisu3 + "px";
        document.getElementById("praca4").style.height = wysOpisu4 + "px";
        document.getElementById("praca5").style.height = wysOpisu5 + "px";

        document.getElementById("obraz1").style.height = "100%"
        document.getElementById("obraz2").style.height = "100%"
        document.getElementById("obraz3").style.height = "100%"
        document.getElementById("obraz4").style.height = "100%"
        document.getElementById("obraz5").style.height = "100%"

    } else if (display === "touchP") {
        document.getElementById("obraz1").style.height = "30vh"
        document.getElementById("obraz2").style.height = "30vh"
        document.getElementById("obraz3").style.height = "30vh"
        document.getElementById("obraz4").style.height = "30vh"
        document.getElementById("obraz5").style.height = "30vh"

        var pictureHeight = document.getElementById("obraz1").clientHeight;

        var h1 = pictureHeight + wysOpisu1;
        var h2 = pictureHeight + wysOpisu2;
        var h3 = pictureHeight + wysOpisu3;
        var h4 = pictureHeight + wysOpisu4;
        var h5 = pictureHeight + wysOpisu5;
        document.getElementById("praca1").style.height = h1 + "px";
        document.getElementById("praca2").style.height = h2 + "px";
        document.getElementById("praca3").style.height = h3 + "px";
        document.getElementById("hobby1").style.height = h4 + "px";
        document.getElementById("hobby2").style.height = h5 + "px";

    } else if (display === "touchL") {
        // document.getElementsByClassName("obraz").style.height = "90vh"
        document.getElementById("obraz1").style.height = "70vh"
        document.getElementById("obraz2").style.height = "70vh"
        document.getElementById("obraz3").style.height = "70vh"
        document.getElementById("obraz4").style.height = "70vh"
        document.getElementById("obraz5").style.height = "70vh"

        var pictureHeight = document.getElementById("obraz1").clientHeight;

        var h1 = pictureHeight + wysOpisu1;
        var h2 = pictureHeight + wysOpisu2;
        var h3 = pictureHeight + wysOpisu3;
        var h4 = pictureHeight + wysOpisu4;
        var h5 = pictureHeight + wysOpisu5;
        document.getElementById("praca1").style.height = h1 + "px";
        document.getElementById("praca2").style.height = h2 + "px";
        document.getElementById("praca3").style.height = h3 + "px";
        document.getElementById("hobby1").style.height = h4 + "px";
        document.getElementById("hobby2").style.height = h5 + "px";
    }
}



function przewijanie() {

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
        } else if (strona == 2) {
            if (slide < (0 - 50)) {
                left = left - 100;
                strona++;
            } else if (slide > 50) {
                left = left + 100;
                strona--;
            }
        } else if (strona == 3) {
            if (slide > 50) {
                left = left + 100;
                strona--;
            }
        }

        square.style.left = left + "vw";
    }, false);

}