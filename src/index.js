import './front.css';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
/*
canvas.width = window.innerWidth 
canvas.height = window.innerHeight 
*/

let s = getComputedStyle(canvas);
let w = s.width;
let h = s.height;

//tamaño segun el tañano del css widht
canvas.width = w.split("px")[0];
canvas.height = h.split("px")[0];

//config de linea
context.lineWidth = 3; //grosor de linea
//Para el texto
context.font = "16pt Calibri";
context.fillText('------------------------------------', 30, h.split("px")[0] - 8);


let prevX = null
let prevY = null

let draw = false

context.strokeStyle = '#000099'; //trazo color

// canvas events
canvas.onmousedown = function (event) {
  draw = true;
};

canvas.onmousemove = function (event) {
 
  dibujar(event.layerX, event.layerY);

};

canvas.onmouseup = function (event) {
  draw = false;
};

canvas.onmouseleave = function (event) {
  draw = false;
};


//canvas touch events
let canvasCss
canvas.ontouchstart = function (event) {
  event.preventDefault();
  draw = true;
  canvasCss = event.target.getBoundingClientRect();
};

canvas.ontouchmove = function (event) {
  let x = event.targetTouches[0].clientX  - canvasCss.left
  let y = event.targetTouches[0].clientY  - canvasCss.top
  dibujar(x, y);

};

canvas.ontouchend = function (event) {
  draw = false;
  prevX = null
  prevY = null
};



const dibujar = function (mouseX, mouseY) {

  console.log(mouseX);

  if (prevX == null || prevY == null || !draw) {
    prevX = mouseX
    prevY = mouseY
    return
  }

  context.beginPath()
  context.moveTo(prevX, prevY)
  context.lineTo(mouseX, mouseY)
  context.stroke()

  prevX = mouseX
  prevY = mouseY
}

/*
window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)
window.addEventListener("mousemove", function (e) {

    if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let mouseX = e.clientX
    let mouseY = e.clientY

    context.beginPath()
    context.moveTo(prevX, prevY)
    context.lineTo(mouseX, mouseY)
    context.stroke()

    //message = "Mouse position: " + mouseX + "," + mouseY;

    prevX = e.clientX
    prevY = e.clientY
})*/