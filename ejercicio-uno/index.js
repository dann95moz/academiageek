var element  = document.getElementById("tipo1")
                   var fragment = document.createDocumentFragment();
                   var moneda = ['Elije tu moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
                  moneda.forEach(function(moneda){
                    var option=document.createElement("option")
                        option.textContent=moneda;
                        fragment.appendChild(option)
                   });
                   element.appendChild(fragment)
var element  = document.getElementById("tipo2")
                var fragment = document.createDocumentFragment();
                var moneda = ['Elije tu moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
               moneda.forEach(function(moneda){
                 var option=document.createElement("option")
                     option.textContent=moneda;
                     fragment.appendChild(option)
                });
                element.appendChild(fragment)
function Convertir() {
    document.getElementById("alert").setAttribute("class","alert");
    
    var input= document.getElementById("inputValue").value
    if (isNaN(input)) {
        document.getElementById("alert").innerHTML=("</br>"+"Ingrese un valor válido.")
    } else if (tipo1.value==tipo2.value) {
        document.getElementById("alert").innerHTML=("</br>"+"Elija dos monedas distintas")  
    }else if (tipo1.value=="Dolar" && tipo2.value=="Peso Mexicano"){
        input=(input*20.69).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus dolares equivalen a: "+ input +" MXN")
    } else if (tipo1.value=="Dolar" && tipo2.value=="Peso Colombiano"){
        input=(input*4002.72).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus dolares equivalen a: "+ input +" COP")
    }else if (tipo1.value=="Dolar" && tipo2.value=="Euro"){
        input=(input*0.88).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus dolares equivalen a: "+ input +" EUR")
    }else if (tipo1.value=="Dolar" && tipo2.value=="Libra Esterlina"){
        input=(input*0.74).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus dolares equivalen a: "+ input +" GBP")
    }else if (tipo1.value=="Peso Mexicano" && tipo2.value=="Dolar"){
        input=(input/20.69).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos mexicanos equivalen a: "+ input +" USD")
    }else if (tipo1.value=="Peso Mexicano" && tipo2.value=="Peso Colombiano"){
        input=(input/0.0051).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos mexicanos equivalen a: "+ input +" COP")
    }else if (tipo1.value=="Peso Mexicano" && tipo2.value=="Euro"){
        input=(input*0.043).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos mexicanos equivalen a: "+ input +" EUR")
        }
    else if (tipo1.value=="Peso Mexicano" && tipo2.value=="Libra Esterlina"){
        input=(input*0.036).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos mexicanos equivalen a: "+ input +" GBP")
        }
    else if (tipo1.value=="Peso Colombiano" && tipo2.value=="Dolar"){
        input=(input*0.00025).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos colombianos equivalen a: "+ input +" USD")
        }
    else if (tipo1.value=="Peso Colombiano" && tipo2.value=="Peso Mexicano"){
        input=(input*0.0051).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos colombianos equivalen a: "+ input +" MXN")
        }
    else if (tipo1.value=="Peso Colombiano" && tipo2.value=="Euro"){
        input=(input*0.00022).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos colombianos equivalen a: "+ input +" EUR")
        } 
    else if (tipo1.value=="Peso Colombiano" && tipo2.value=="Libra Esterlina"){
        input=(input*0.00019).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus Pesos colombianos equivalen a: "+ input +" GBP")
        }      
    else if (tipo1.value=="Euro" && tipo2.value=="Dolar"){
        input=(input*1.13).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus euros equivalen a: "+ input +" USD")
        }     
     else if (tipo1.value=="Euro" && tipo2.value=="Peso Mexicano"){
        input=(input*23.26).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus euros equivalen a: "+ input +" MXN")
        }    
    else if (tipo1.value=="Euro" && tipo2.value=="Peso Colombiano"){
        input=(input*4520.15).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus euros equivalen a: "+ input +" COP")
        }
    else if (tipo1.value=="Euro" && tipo2.value=="Libra Esterlina"){
        input=(input*0.84).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus euros equivalen a: "+ input +" GBP")
        }
    else if (tipo1.value=="Libra Esterlina" && tipo2.value=="Dolar"){
        input=(input*1.3425).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus libras esterlinas equivalen a: "+ input +" USD")
        }
    else if (tipo1.value=="Libra Esterlina" && tipo2.value=="Peso Mexicano"){
        input=(input*27.65).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus libras esterlinas equivalen a: "+ input +" MXN")
        } 
    else if (tipo1.value=="Libra Esterlina" && tipo2.value=="Peso Colombiano"){
        input=(input*5371.66).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus libras esterlinas equivalen a: "+ input +" COP")
        }  
    else if (tipo1.value=="Libra Esterlina" && tipo2.value=="Euro"){
        input=(input*1.1875).toFixed(2)
        document.getElementById("alert").innerHTML=("</br>"+"Tus libras esterlinas equivalen a: "+ input +" Euro")
        }        



}
