// var is_touch_device = 'ontouchstart' in document.documentElement;
// if(is_touch_device){

//  $("#styleMobilki").attr({href : "css/stylemobile.css"});
//  $("#stylePC").attr({href : ""});
// }
// else{
//     $("#styleMobilki").attr({href : ""});
//  $("#stylePC").attr({href : "css/style.css"});
// }


var clearBtn = document.getElementById("CLEAR");
clearBtn.onclick = function () {
    c.clearRect(0, 0, canvas.width, canvas.height);
};




var buttonColor = document.getElementById("inputColorPicker");
var eraser = document.getElementById('eraser');

eraser.onclick = function () {
    erase();
};


buttonColor.onfocus = function () {
    StopDrowing();
};
buttonColor.onblur = function () {
    StartDrowing();
};


function erase() {
    if (EraserTest == 0) {
        EraserTest = 1;
        eraser.style.boxShadow = "0px -20px 20px 10px #1459FF";
        canvas.style.cursor = "url(cursor.png), pointer";
    } else {
        EraserTest = 0;
        eraser.style.boxShadow = "0px 0px 45px 12px rgba(255,255,255,0)";
        canvas.style.cursor = "pointer";
    }
    console.log(EraserTest);
}

function StopDrowing() {
    inputTest = 1;


}

function StartDrowing() {
    inputTest = 0;


}