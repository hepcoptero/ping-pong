let raio = 7.5;
let xbolinha = 100;
let ybolinha = 200;
let diametro = raio * 2
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;
let xraquete = 5;
let yraquete = 150;
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let meuspontos = 0;
let pontosoponente = 0;

function setup(){
  createCanvas(600,400)
}
function draw(){
  
}

function movimentoBolinha(){
  circle(xbolinha, ybolinha, diametro);
  
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  if(xbolinha + raio> width || xbolinha -raio <0){
    velocidadexbolinha *= -1;
  }
  if(ybolinha + raio > height || ybolinha -raio <0){
    velocidadeybolinha *= -1
  }
}
function raquetes(){
  rect(xraquete,yraquete,10,90)
}