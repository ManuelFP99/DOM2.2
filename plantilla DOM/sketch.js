let canvas;
let h1;
let p;
let a;
let slider;
let valSlider;
let colorPicker;
let button;
let rgbColor;
let button2;
let rgbColor2;
let txtInput;
let txt;
let font;
let paisaje1;
let sel;


function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);

h1= createElement('h1', 'Manu F. Pardo');
h1.style('color', 'red');
h1.position(700, 0);

p = createP('Hola, Me llamo Manu F. Pardo y este es mi Sitio Web');
p.style('font-size', '20px');
p.position(600, 100);

a = createA('https://manuelfp99.github.io/Manu-F.-Pardo-Sitio-Web-Version-Definitiva-/', 'Manu F. Pardo');
a.position(600, 160);
a.style('font-size', '16px');
a.style('color', 'yellow');

slider = createSlider(50, 300, 100);
slider.position(50, 200);
slider.style('width', '100px');


colorPicker = createColorPicker(color('grey'));
colorPicker.position(50, 250);
button = createButton('randomColor');
button.position(50, 300);
button.mousePressed(cambiarColor);
button2 = createButton('randomColor2');
button2.position(50, 500);
button2.mousePressed(cambiarColor2);

rgbColor = color(random(255), random(255), random(255));
rgbColor2 = color(random(255), random(255), random(255));

txtInput = createInput('Soledad');
txtInput. position(40, 90);
txtInput.size(200);
txtInput.style('color', 'red');

sel = createSelect();
sel.position(50, 450);

sel.option('Anek Latin');
sel.option('League Gothic');
sel.option('Roboto');
sel.selected('Roboto')

}

function cambiarColor(){ 
  rgbColor2 = color(random(255), random(255), random(255));
}

function cambiarColor2(){
  rgbColor = color(random(255), random(255), random(255));
}


function draw(){
  background(colorPicker.color()); 
  
  valSlider = slider.value();
  txt = txtInput.value();
  font = sel.value();
  
  fill(rgbColor);  
  ellipse(800, 400, valSlider, valSlider);
 
  fill(0); 
  textFont(font);
  textSize(50); 
  text(txt, 50, 400); 

  tint(rgbColor2);
  image(paisaje1, 800, 100, 400, 300);
}
