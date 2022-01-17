
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=1;
var mouse_event="blank";
var Last_x,Last_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    linewidth=document.getElementById("width").value;
    mouse_event="mouse_down";
}

  canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    
    if(mouse_event=="mouse_down"){
       ctx.beginPath();
   ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
        ctx.moveTo(Last_x,Last_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();
        console.log(Last_x,Last_y);
      console.log(current_x,current_y);
    }
   Last_x=current_x;
    Last_y=current_y;
}

 canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}

 canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

function cleararea(){
console.log("clear");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}