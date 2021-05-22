
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width= newWidth;
    document.getElementById("myCanvas").height= newHeight;
    document.body.style.overflow = "hidden";
}
    canvas.addEventListener("touchstart", mytouchstart);
    function mytouchstart(e){
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        color=document.getElementById("color").value;
        width_of_line=document.getElementById("width").value;

    }
    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {
        console.log("mytouchmove");
        current_position_of_touch_x= e.touches[0].clientX-canvas.offsetLeft;
        current_position_of_touch_y= e.touches[0].clientX-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
    }

