canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="black";

var mouseEvent="empty"
var positionX,positionY

width_line=10;



var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

if(screen.width<1000){
    document.getElementById("myCanvas").width=new_width;
 document.getElementById("myCanvas").height=new_height;
 document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e){
    color=document.getElementById("color").value;
    touchX=e.touches[0].clientX-canvas.offsetLeft;
    touchY=e.touches[0].clientY-canvas.offsetTop;

    
}

 canvas.addEventListener("touchmove",my_touchmove);   

 function my_touchmove(e){
    console.log("touch moved");
    positionX_actual=e.touches[0].clientX-canvas.offsetLeft;
    positionY_actual=e.touches[0].clientY-canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;

        console.log("Last position of X and Y coordinates");
        console.log("X= "+positionX+" Y= "+positionY);
        ctx.moveTo(positionX,positionY);

        console.log("Actual position of X and Y cooediates");
        console.log(" X= "+positionX_actual+" Y= "+positionY_actual);
        ctx.lineTo(positionX_actual,positionY_actual)
        ctx.stroke();
        
        positionX=positionX_actual;
        positionY=positionY_actual;
    }

function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();

positionX=positionX_actual;
positionY=positionY_actual;

}

function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}