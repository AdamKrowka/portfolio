$("#logo ,#headerBtn").click(function () {
    $("#header").css({
        "right": "0",
        "transition": "right .8s linear 0s",
        "zIndex": "1"
    });
    $("#work ,#hobby , #footer").css({
        "right": "-100%",
        "transition": "right 0s linear .8s",
        "zIndex": "0"
    });
    $("#headerBtn").css({
        "color": "white"
    });
    $("#workBtn ,#hobbyBtn , #footerBtn").css({
        "color": "rgb(197, 197, 197)"
    });
})

$("#workBtn").click(function () {
    $("#header , #hobby , #footer").css({
        "right": "-100%",
        "transition": "right 0s linear .8s",
        "zIndex": "0"
    });
    $("#work").css({
        "right": "0",
        "transition": "right .8s linear 0s",
        "zIndex": "1"
    });
    $("#workBtn").css({
        "color": "white"
    });
    $("#headerBtn ,#hobbyBtn , #footerBtn").css({
        "color": "rgb(197, 197, 197)"
    });
})

$("#hobbyBtn").click(function () {
    $("#header ,#work , #footer").css({
        "right": "-100%",
        "transition": "right 0s linear .8s",
        "zIndex": "0"
    });
    $("#hobby").css({
        "right": "0",
        "transition": "right .8s linear 0s",
        "zIndex": "1"
    });
    $("#hobbyBtn").css({
        "color": "white"
    });
    $("#workBtn ,#headerBtn , #footerBtn").css({
        "color": "rgb(197, 197, 197)"
    });
})

$("#footerBtn").click(function () {
    $("#header , #work , #hobby").css({
        "right": "-100%",
        "transition": "right 0s linear .8s",
        "zIndex": "0"
    });
    $("#footer").css({
        "right": "0",
        "transition": "right .8s linear 0s",
        "zIndex": "1"
    });
    $("#footerBtn").css({
        "color": "white"
    });
    $("#workBtn ,#hobbyBtn , #headerBtn").css({
        "color": "rgb(197, 197, 197)"
    });
})