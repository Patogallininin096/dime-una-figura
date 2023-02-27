var speechRecognition = window.webkitspeechRecognition;
var recognition = new speechRecognition();
recognition.lang = "es-MX";
var message = document.getElementById("status");
var x = 0;
var y = 0;
var figure = "";
function setup() {
    canvas = createCanvas(900, 600);
}
function start() {
    recognition.start();
    nessage.innerHTML = "habla, el sistema de escucha"
}
recognition.onresulta = function (event) {
    figure = event.result[0][0].transcript;
    figure = figure.toLowerCase();
    if (figure == "circulo" || figure == "rectangulo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
    } else {
        message.innerHTML = "no se dibujar ese conjunto de atomos";
    }
}

function draw() {
    if (figure == "círculo") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        figure = "";
        message.innerHTML = "se dibujó un círculo";
    }
    if (figure == "rectángulo") {
        rect(x, y, 70, 50);
        figure = "";
        message.innerHTML = "se dibujó un círculo";
    }
}