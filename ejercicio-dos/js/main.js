document.addEventListener("DOMContentLoaded", () =>{
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel,{
        duration: 3000,
    });
});

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "/img/aftermath.jpg"
imgArray[1]="aftermath"
imgArray[1] = new Image();
imgArray[1].src ="/img/AfterWeFell.jpg"
imgArray[2] = new Image();
imgArray[2].src ="/img/Apex-829910789-large.jpg"
imgArray[3] = new Image();
imgArray[3].src ="/img/Encanto.jpg"
imgArray[4] = new Image();
imgArray[4].src ="/img/Intrusion.jpg"
imgArray[5] = new Image();
imgArray[5].src ="/img/Malignant.jpg"
imgArray[6] = new Image();
imgArray[6].src ="/img/Ox_geno-637135506-large.jpg"
imgArray[7] = new Image();
imgArray[7].src ="/img/PoTS.jpg"
imgArray[8] = new Image();
imgArray[8].src ="/img/Rednotice.jpg"
imgArray[9] = new Image();
imgArray[9].src ="/img/The8Night.jpg"
imgArray[10] = new Image();
imgArray[10].src ="/img/TheGuilty.jpg"
imgArray[11] = new Image();
imgArray[11].src ="/img/TheWitcher.jpg"
imgArray[12] = new Image();
imgArray[12].src ="/img/tick_tick_Boom-363141996-large.jpg"
imgArray[13] = new Image();
imgArray[13].src ="/img/Unforgivable.jpg"



var covers=["aftermath",
"after we fell",
"Apex",
"Encanto",
"Intrusion",
"Malignant",
"Oxygen",
"Prayers for the stolen",
"Red notice",
"The8night",
"TheGuilty",
"TheWitcher",
"Ticktickboom",
"TheUnforgivable"];
var element  = document.getElementById("imagenes")
var titles = document.getElementById("titulos")
var contenedor = document.getElementById("container")
               
                var fragment = document.createDocumentFragment();
                var fragment2 = document.createDocumentFragment();


function draw(arr,index) {
    var arr=[{
        text: covers[0],image:imgArray[0]
    
    }]  
    console.log(arr)
    document.innerHTML=arr
    
    var textnode = document.createTextNode(covertitle);  
    for (i = 0; i < covers.length; i++) {
        
        
        
        var covertitle = i
        titulos = document.createElement('div');
        titulos.className = 'covers';
        titulos.innerHTML = covers[i];
        img= document.createElement("div")
        titulos.innerText=covers[i]
        img.className="covers"
       
        img.appendChild(imgArray[i]);
        document.getElementById("covers").appendChild(img)// agregar objetos de arr

        
       tituls.appendChild(titulos).className="covers";
       // supercontainer.appendChild(imgArray[i]).className = "covers";
              
        
      }
  //document.getElementsByTagName('body')[0].appendChild(titulos);
}
draw()



var titulos;



               imgArray.forEach(function(imgArray, index){
                const covertitle = covers[index]
                
                                  
                     var textnode = document.createTextNode(covertitle);        
                     
                                          
                           
                     const supercontainer = document.getElementById("supercontainer");
                     const text=document.getElementById("test")
                     

                function makeRows(rows, cols) {
                  supercontainer.style.setProperty('--grid-rows', rows);
                  supercontainer.style.setProperty('--grid-cols', cols);
                  
                  
                    let cell = document.createElement("div");
                    supercontainer.appendChild(imgArray,textnode).className = "covers";
                  
                       
                    
                  
                    
                  
                };
                
                makeRows(4,4)

                });
               
                

function Collect(){
    var name = document.getElementById("name").value
    var lastname = document.getElementById("lastName").value
    var phone = document.getElementById("phone").value
    var adress = document.getElementById("adress").value
    var other = document.getElementById("other").value
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("phone", phone)
    localStorage.setItem("adress", adress)
    localStorage.setItem("other", other)
    var storedName= localStorage.getItem("name")
    var storedLastName= localStorage.getItem("lastname")
    var storedphone = localStorage.getItem("phone")
    var storedadress= localStorage.getItem("adress")
    var storedother= localStorage.getItem("other")
    
    console.log(storedName, storedLastName, storedphone, storedadress, storedother)
}
