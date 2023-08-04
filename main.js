mouseEvent = " ";
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var last_X, last_Y, current_X, current_Y = 0

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    mouseEvent = "mouseup"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    current_X = e.clientX - canvas.offsetLeft
    current_Y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.arc(current_X, current_Y, 40, 0, 360)

        ctx.stroke()
    }
    last_X = current_X
    last_Y = current_Y
}