function header() {
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");
    
    header.style.right = "0";
    work.style.right = "-100%";
    hobby.style.right = "-100%";
    footer.style.right = "-100%";
    
    header.style.transition = "right 1s linear 0s";
    work.style.transition = "right 0s linear 1s";
    hobby.style.transition = "right 0s linear 1s";
    footer.style.transition = "right 0s linear 1s";

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

    work.style.transition = "right 1s linear 0s";
    header.style.transition = "right 0s linear 1s";
    hobby.style.transition = "right 0s linear 1s";
    footer.style.transition = "right 0s linear 1s";

    work.style.zIndex = "1";
    header.style.zIndex = "0";
    hobby.style.zIndex = "0";
    footer.style.zIndex = "0";
}

function hobby(){
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");

    hobby.style.right = "0";
    work.style.right = "-100%";
    header.style.right = "-100%";
    footer.style.right = "-100%";

    hobby.style.transition = "right 1s linear 0s";
    work.style.transition = "right 0s linear 1s";
    header.style.transition = "right 0s linear 1s";
    footer.style.transition = "right 0s linear 1s";

    hobby.style.zIndex = "1";
    work.style.zIndex = "0";
    header.style.zIndex = "0";
    footer.style.zIndex = "0";

}

function footer(){
    var header = document.getElementById("header");
    var work = document.getElementById("work");
    var hobby = document.getElementById("hobby");
    var footer = document.getElementById("footer");

    footer.style.right = "0";
    work.style.right = "-100%";
    header.style.right = "-100%";
    hobby.style.right = "-100%";

    footer.style.transition = "right 1s linear 0s";
    work.style.transition = "right 0s linear 1s";
    header.style.transition = "right 0s linear 1s";
    hobby.style.transition = "right 0s linear 1s";

    footer.style.zIndex = "1";
    work.style.zIndex = "0";
    header.style.zIndex = "0";
    hobby.style.zIndex = "0";
}




