

var botonCalculo = document.getElementById("btn-calcular")
botonCalculo.addEventListener("click", calculo)

function calculo(){
    let n1= document.getElementById('valor1').value
    let n2= document.getElementById('valor2').value
    let cargaTiempo=(n1/n2)

    var horas=Math.trunc(cargaTiempo)
    var minutos=(cargaTiempo-horas)*60
    var minutos=parseInt(minutos)

    document.querySelector(".resultado").innerHTML=+horas+" horas y "+minutos+" minutos"

}
