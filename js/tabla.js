function generarTabla(){
    var tabla =document.getElementById("tabla")
    var resultados =document.getElementById("resultados")
    var numeroTabla=tabla.value
    var salida = "<strong>Tabla de multiplicar del número </strong>: " + numeroTabla + "<br><br>"
    for (var i =1;i<= 10; i++){
        salida += i + "x" + numeroTabla + "=" + (i *numeroTabla) + "<br>"
    }
    /* agregamos un elemento html
    este elemento nos arrojara la salida en este html */
    resultados.innerHTML=salida;
}