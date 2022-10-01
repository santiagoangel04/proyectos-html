let nuevo_user= document.getElementById("nuevo_user")
let modificar_user= document.getElementById("modificar_user")
let borrar_user = document.getElementById("borrar_user")
let datos_user = document.getElementById("datos_user")

inicial()
exportar_datos()

function inicial(){
    nuevo_user.style.display="none"
    modificar_user.style.display="block"
    borrar_user.style.display="none"
    datos_user.style.display="block"
}

