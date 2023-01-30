var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
var painting = false;
var undoStack = []; //stack to store the undone actions

//Evento de mouse para iniciar a pintura quando o usuário pressiona o mouse
canvas.addEventListener("mousedown", function(e) {
  painting = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

//Evento de mouse para parar de pintar quando o usuário solta o mouse
canvas.addEventListener("mouseup", function() {
  painting = false;
});

//Evento de mouse para desenhar linhas enquanto o usuário pressiona o mouse
canvas.addEventListener("mousemove", function(e) {
  if (painting) {
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    undoStack.push(canvas.toDataURL()); //adding the current image data to undo stack
  }
});

//Evento de touch para iniciar a pintura quando o usuário pressiona o tela
canvas.addEventListener("touchstart", function(e) {
  painting = true;
  ctx.beginPath();
  ctx.moveTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
});

//Evento de touch para parar de pintar quando o usuário solta a tela
canvas.addEventListener("touchend", function() {
  painting = false;
});

//Evento de touch para desenhar linhas enquanto o usuário pressiona a tela
canvas.addEventListener("touchmove", function(e) {
  if (painting) {
    ctx.lineTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
    ctx.stroke();
    undoStack.push(canvas.toDataURL()); //adding the current image data to undo stack
  }
});

document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.keyCode === 90) { //Ctrl+Z
    if (undoStack.length > 0) {
      var undoData = undoStack.pop();
      var img = new Image();
      img.src = undoData;
      img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    }
  }
});
