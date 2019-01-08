function myFunction(x) {
    var p1 = document.getElementById("praca1");
    var p2 = document.getElementById("praca2");
    var p3 = document.getElementById("praca3");
    if (x.matches) {
        p1.style.display = "block";
        p2.style.display = "block";
        p3.style.display = "block";


        var wysOpisu1 = document.getElementById("opis1").clientHeight;
        var wysOpisu2 = document.getElementById("opis2").clientHeight;
        var wysOpisu3 = document.getElementById("opis3").clientHeight;
        document.getElementById("praca1").style.height = wysOpisu1 + "px";
        document.getElementById("praca2").style.height = wysOpisu2 + "px";
        document.getElementById("praca3").style.height = wysOpisu3 + "px"
        document.body.onresize = Resize();

    } else {
        p1.style.display = "none";
        p2.style.display = "block";
        p3.style.display = "none";
        document.getElementById("praca1").style.height = "40%";
        document.getElementById("praca2").style.height = "40%";
        document.getElementById("praca3").style.height = "40%";


        var square = document.getElementById('slide');
        var position = 0;
        var slide = 0;

        var position1 = 0;
        var slide1 = 0;
        var left = 0;
        var strona = 1;
        var prac = 1;
        var praca = document.getElementById("work");
        // var p1 = document.getElementById("praca1");
        // var p2 = document.getElementById("praca2");
        // var p3 = document.getElementById("praca3");


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
    }
}

var x = window.matchMedia("(orientation:landscape)")
myFunction(x)
x.addListener(myFunction)





;

function Resize() {
    var wysOpisu1 = document.getElementById("opis1").clientHeight;
    var wysOpisu2 = document.getElementById("opis2").clientHeight;
    var wysOpisu3 = document.getElementById("opis3").clientHeight;
    document.getElementById("praca1").style.height = wysOpisu1 + "px";
    document.getElementById("praca2").style.height = wysOpisu2 + "px";
    document.getElementById("praca3").style.height = wysOpisu3 + "px";
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