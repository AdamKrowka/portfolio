var canvas = document.getElementById('mainCanvas');
var body = document.getElementById('hobby');
var nav =  document.getElementById('nawigacja');
var navWidth = nav.clientWidth;
var height = body.clientHeight;
var width = body.clientWidth;
canvas.height = height*5;
canvas.width = width*5;
var lineThick=10;
var eraserWidth;
var rangeValue = document.getElementById("LineWidth");
rangeValue .oninput = function(){
    lineThick = document.getElementById("LineWidth").value;
    eraserWidth = lineThick*2;
}
var bar  = document.getElementById('toolBar');

console.log(bar.clientHeight);

var c = canvas.getContext('2d');

var input = document.getElementById('inputColorPicker');
var LineColor = input.style.backgroundColor;
var mouse = {
    x: undefined,
    y: undefined
}
var inputTest = 0;
var EraserTest = 0;

$('#mainCanvas').click(function(){
    var LineColor = input.style.backgroundColor;
    mouse.x = event.x - navWidth;
        mouse.y = event.y;
        // c.rect(mouse.x -(lineThick/2),mouse.y - (lineThick/2),lineThick,lineThick);
        c.fillStyle = LineColor;
        // c.fill();
        if (EraserTest == 0){
        c.arc(mouse.x,mouse.y,lineThick/2,0,2 * Math.PI);
        c.fill();
        }
        else {};

})


rangeValue.addEventListener('mousedown', function () {
    c.strokeStyle = fillStyle = "rgba(0, 0, 0, 0)";;
    c.fillStyle = fillStyle = "rgba(0, 0, 0, 0)";;
    console.log('nie pisze')
    
});
rangeValue.addEventListener('mouseup',function(){
    var LineColor = input.style.backgroundColor;
    c.strokeStyle = LineColor;
            c.fillStyle = LineColor;
            console.log('pisze')
})


window.addEventListener('mousedown', function (event) {
    var LineColor = input.style.backgroundColor;
    if (inputTest == 0) {
        if (EraserTest == 0){
            c.beginPath();
            c.strokeStyle = LineColor;
            c.fillStyle = LineColor;
            c.arc(mouse.x,mouse.y,lineThick/2,0,2 * Math.PI);
            c.fill();
        }
        if (EraserTest == 1)
            c.strokeStyle = "white";

        c.beginPath();
    }
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x - navWidth;
        mouse.y = event.y;
        if (inputTest == 0)
            line();
    });
});

window.addEventListener('mouseup', function (event) {
    c.strokeStyle = "transparent";
    c.beginPath();
});




function line() {
    c.lineTo(mouse.x, mouse.y);
    if (EraserTest == 0)
        c.lineWidth = lineThick;
    if (EraserTest == 1)
        c.lineWidth =eraserWidth;


    c.stroke();
}



