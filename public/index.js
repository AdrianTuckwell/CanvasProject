var app = function(){
  var canvas = document.getElementById('main-canvas');
  console.log('canvas');
  var context = canvas.getContext('2d');
  console.log(context);

  // draw a rectangle
  context.fillStyle = "red";
  context.fillRect(10, 10, 50, 50)
  //context.strokeRect(10, 10, 50, 50)

  // draw a line
  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(100,200);
  context.stroke();

  context.beginPath();
  context.moveTo(200,200);
  context.lineTo(200,300);
  context.lineTo(100,300);
  context.closePath();
  context.strokeStyle = 'dodgerblue'
  //context.stroke();  
  context.fill();

var offset = 200

  // context.beginPath();
  // context.arc(offset + 75,offset + 75,50,0,Math.PI*2,true); // Outer circle
  // context.moveTo(offset + 110,offset + 75);
  // context.arc(offset + 75,offset + 75,35,0,Math.PI,true);  // Mouth (clockwise)
  // context.moveTo(offset + 65,offset + 65);
  // context.arc(offset + 60,offset + 65,5,0,Math.PI*2,true);  // Left eye
  // context.moveTo(offset + 95,offset + 65);
  // context.arc(offset + 90,offset + 65,5,0,Math.PI*2,true);  // Right eye
  // context.stroke();


var drawCircle = function(x,y){
  context.beginPath();
  context.arc(x,y,50,0,Math.PI*2,true); // Outer circle
  context.stroke();
}

canvas.onclick = function(event){
  // console.log('clicked', event);
  // console.log('location', event.layerX, event.layerY)
  drawCircle(event.layerX, event.layerY)
}

var img = document.createElement('img');
img.src = "http://www.codebearsoftware.com/BearCoding.jpg";

var drawBear = function(){
  context.drawImage(img,200,200, 300, 300);
}

img.onload = drawBear;

var changeColor = function(){
  // console.log(this.value)
  context.strokeStyle = this.value;
}


var colorPicker = document.querySelector('#input-color');
colorPicker.onchange = changeColor;


}





















window.onload = app;