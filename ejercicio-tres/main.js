var age= document.getElementById("age").value;
var weight= document.getElementById("weight").value;
var height= document.getElementById("height").value * 100;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var IMC= weight/(height*height)


function changeColorM(){
    
    if (document.getElementById("man").src.match("/img/man.png") ){
        document.getElementById("man").src="img/picked-man.png"
        document.getElementById("woman").src="img/woman.png"
       
    }
    else{
        document.getElementById("man").src= "/img/man.png"
    }
}
function changeColorW(){
   
    if (document.getElementById("woman").src.match("/img/woman.png") ){
        document.getElementById("woman").src="img/picked-woman.png"
        document.getElementById("man").src="img/man.png"
       
    }
    else{
        document.getElementById("woman").src= "/img/woman.png"
    }
}