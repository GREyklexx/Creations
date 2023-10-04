var root = document.querySelector("#root");
var gridColumns = 7;
var x = 0;
var y = 0;
var gridRow = 8;
var left2right = true;
function hop() {
    if (left2right) {
        if (x == 6) {
            y = (y + 1) % gridRow;
            left2right = !left2right;
        } else {
            x = (x + 1) % gridColumns;
        }
    } else {
        if (x == 0) {
            y = (y + 1) % gridRow;
            left2right = !left2right;
        } else {
            x = (x - 1) % gridColumns;
        }
    }
    bunny.style.gridColumn = x + 1;
    bunny.style.gridRow = y + 1;
}
var hopInterval = setInterval(hop, 1000);