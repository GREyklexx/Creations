var bunny = document.querySelector("#bunny");
var root = document.querySelector("#root");
var gridColumns = 7; 
var Positionx = 0; 
var Positiony = 0;
var gridRow = 7;
var l2r = true;
function hop() {
    if (l2r == true) {
        if (Positionx == 7) {
            Positiony = (Positiony + 1);
            bunny.style.gridRow = Positiony + 1;
            bunny.style.gridColumn = Positionx;
            l2r = !l2r
            console.log(Positionx+Positiony+"1")

        }
        
        else {
            Positionx = (Positionx + 1);
            bunny.style.gridColumn = Positionx + 1;
            bunny.style.gridRow = Positiony;
            console.log(Positionx+Positiony+"2")

        }
    }


    
    else {
        
        if (Positionx == 0) {
            Positiony = (Positiony + 1);;
            bunny.style.gridRow = Positiony + 1;
            bunny.style.gridColumn = Positionx;
            l2r = !l2r
            console.log(Positionx+Positiony+"3")

        }
    
        else {
            Positionx = (Positionx - 1);
            bunny.style.gridColumn = Positionx - 1;
            bunny.style.gridRow = Positiony;
            console.log(Positionx+Positiony+"4")
        }
    }
}


var hopInterval = setInterval(hop, 1000); 
