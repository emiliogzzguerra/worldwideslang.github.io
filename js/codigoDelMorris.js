//Codigo Del Morris


////// Visualizadora de retorno y riesgo (Kahn Academy)

var inversion = 300;
var retorno = 0.8;

//variables interactivas
var certidumbre = 0.5; //entre [0,1]
var tiempo = 1; //entre [0,1]

// coordenadas (0,0)
var x_0 = 50;
var y_0 = 200;

//////////////Bandas
var val_esp = 0.5; //valor esperado de inversion


var canvas = document.getElementById('a');
var ctx = canvas.getContext('2d');

/*/triangulo
fill(232, 175, 90);
noStroke();
triangle(x_0, y_0+100, x_0+265, y_0-100*retorno*(val_esp+certidumbre*(1-val_esp)), x_0+265, (y_0+100)*certidumbre +(y_0-100*retorno*val_esp)*(1-certidumbre));

// valor esperado linea
stroke(247, 227, 8);
strokeWeight(2);
line(x_0, y_0+100, x_0+265, y_0-100*retorno*val_esp);

//recta retorno
stroke(31, 17, 235);
strokeWeight(3);
line(x_0, y_0+100, x_0+265, y_0-100*retorno);*/

//recta retorno
    ctx.beginPath();
    ctx.moveTo(x_0, y_0+100);
    ctx.lineTo(x_0+265, y_0-100*retorno);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '31, 17, 235';
    ctx.stroke();

//rectangulo
stroke(255, 255, 255);
fill(255,255,255);
rect(x_0+265, y_0-150, tiempo*265-265, 300);

//linea punteada de retorno
stroke(220, 225, 227);
strokeWeight(1);
line(x_0, y_0-100*retorno, x_0+265, y_0-100*retorno); //break even

//recta retorno
    ctx.beginPath();
    ctx.moveTo(x_0, y_0-100*retorno);
    ctx.lineTo(x_0+265, y_0-100*retorno);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '220, 225, 227';
    ctx.stroke();

//ejes
stroke(4, 5, 5);
strokeWeight(3);
line(x_0, y_0-150, x_0, y_0+150); //y
line(x_0, y_0, x_0+300, y_0); //x

////////numeros y ejes
//$ verde
fill(22, 163, 10);
textSize(20);
text("$", x_0-7, y_0-160);
//$ roja
fill(230, 7, 18);
textSize(20);
text("$", x_0-7, y_0+174);
//numero invesion inicial
fill(130, 125, 125);
textSize(15);
text("-"+inversion, x_0-40, y_0+108);
//numero retorno final
fill(130, 125, 125);
textSize(15);
text(inversion*retorno, x_0-35, y_0-100*retorno+7);
//tiempo
fill(3, 3, 3);
textSize(15);
text("tiempo", x_0+280, y_0+20);


