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
let dificuldade = "normal"
let trilha,ponto,raquetada;
function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup(){
  createCanvas(600,400)
  trilha.loop()
}
function draw(){
  background(0)
  movimentobolinha();
  raquetes(xraquete,yraquete)
  raquetes(xraqueteoponete,yraqueteoponente)
  npc(dificuldade)
  if(keyIsDown(UP_ARROW)){
    yraquete -= 10}
  if(xbolinha -raio < xraquete + 10 & ybolinha -raio < yraquete + 90 & ybolinha +raio > yraquete ){
    velocidadexbolinha *= -1;
    raquetada.play()}
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