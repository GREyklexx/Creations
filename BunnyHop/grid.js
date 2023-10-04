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
            bunny.style.gridColumn = 7;
            l2r = !l2r
            console.log(Positionx+"the" +Positiony+"1")

        }
        
        else {
            Positionx = (Positionx + 1);
            bunny.style.gridColumn = Positionx + 1;
            bunny.style.gridRow = Positiony;
            console.log(Positionx+"the" +Positiony+"2")

        }
    }


    
    else {
        
        if (Positionx == 0) {
            Positiony = (Positiony + 1);;
            bunny.style.gridRow = Positiony + 1;
            bunny.style.gridColumn = 0;
            l2r = !l2r
            console.log(Positionx+"the" +Positiony+"3")

        }
    
        else {
            Positionx = (Positionx - 1);
            bunny.style.gridColumn = Positionx - 1;
            bunny.style.gridRow = Positiony;
            console.log(Positionx + "the" + Positiony+"4")
        }
    }
}


var hopInterval = setInterval(hop, 1000); 
