let wireframe1 = "wireframe1.png";
let wireframe2 = "wireframe2.png";
var curwirefrme = 0

document.getElementById("wireframe").src = wireframe1;

function switchwireframe(){
    if (curwirefrme == 0){
        document.getElementById("wireframe").src = wireframe2;
        curwirefrme = 1;
    }
    else {
        document.getElementById("wireframe").src = wireframe1;
        curwirefrme = 0;
    }
}