/*este programa tambien me hara aprender de javascript*/
//let es una variable, esta es una version actualizada de var
let nuevo = document.getElementById("nuevo")// getElmentById forma de llamar a un elemento de html
let modificar = document.getElementById("modificar")
let borrar = document.getElementById("borrar")
let datos_finca = document.getElementById("datos")

inicial()
traerdatos()

/**
 * creamos todas las funciones que hagan ocultar los elementos de nuestra ventana de acuerdo a cada accion
 * registrada por el usuario
 */

/**
 * esta funcion sera la principal de la forma que esta aqui se vera nuestro front en pagina
 */
function inicial() {
  //none=incisibilidad
  //block=visibilidad
  nuevo.style.display = "none" //todos los elementos del body que esten enmarcados como nuevo desapareceran de la vista 
  modificar.style.display = "none" // elementos de modificar invisibles
  borrar.style.display = "none"
  datos_finca.style.display = "block"
}

/**
 * elementos visibles en agregar
 */
function agregar_datos() { 
  /*
  document.getElementById("id").value=""
  document.getElementById("address").value=""
  document.getElementById("exension").value=""
  document.getElementById("categoryId").value=""
  document.getElementById("name").value=""
  */
  nuevo.style.display = "block"
  modificar.style.display = "none"
  borrar.style.display = "none"
  datos_finca.style.display = "none"
}
function editar(id) {
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  let url =
    "https://g0cefd84e954756-fug8n6nxtxkblfbfarm.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/farm/farm";

  /*
  2 propiedad onreadystatechange asigna a una funcion
  que funcion valida si la respuesta fue exitosa
  readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
  le aplica formato y modifica la pagina o vista
*/
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      let respuesta = JSON.parse(this.responseText)

      let idModif = respuesta.items[0].id
      let addressModif = respuesta.items[0].address
      let exensionModif = respuesta.items[0].exension
      let categoryIdModif = respuesta.items[0].category_id
      let nameModif = respuesta.items[0].name

      document.getElementById("idModif").value = idModif
      document.getElementById("addressModif").value = addressModif
      document.getElementById("exensionModif").value = exensionModif
      document.getElementById("categoryIdModif").value = categoryIdModif
      document.getElementById("nameModif").value = nameModif

      nuevo.style.display = "none";
      modificar.style.display = "block";
      borrar.style.display = "none";
      datos_finca.style.display = "none";
    }
  };
  peticion.open("GET", url + "/" + id, true);
  peticion.send();

}

function eliminar(id) {
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  let url =
    "https://g0cefd84e954756-fug8n6nxtxkblfbfarm.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/farm/farm";

  /*
  2 propiedad onreadystatechange asigna a una funcion
  que funcion valida si la respuesta fue exitosa
  readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
  le aplica formato y modifica la pagina o vista
*/
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      let respuesta = JSON.parse(this.responseText)

      let idModif = respuesta.items[0].id
      let addressModif = respuesta.items[0].address
      let exensionModif = respuesta.items[0].exension
      let categoryIdModif = respuesta.items[0].category_id
      let nameModif = respuesta.items[0].name


      document.getElementById("idDelete").value = idModif
      document.getElementById("idList").innerHTML = "<strong>Farm id :</strong>" + idModif //se subraya el id con el html
      document.getElementById("addressList").innerHTML = "<strong>Address :</strong>" + addressModif
      document.getElementById("exensionList").innerHTML = "<strong>Exension :</strong>" + exensionModif
      document.getElementById("category_idList").innerHTML = "<strong>Farm categoryId :</strong>" + categoryIdModif
      document.getElementById("nameList").innerHTML = "<strong>Farm Name :</strong>" + nameModif

      nuevo.style.display = "none";
      modificar.style.display = "none";
      borrar.style.display = "block";
      datos.style.display = "none";
    }
  };
  peticion.open("GET", url + "/" + id, true);
  peticion.send();
}

function guardarNuevo() {
  //recuperar la informacion ingresada en el formulario
  let idFarm = document.getElementById("id").value
  let addressFarm = document.getElementById("address").value
  let exensionFarm = document.getElementById("exension").value
  let categoryIdFarm = document.getElementById("categoryId").value
  let nameFarm = document.getElementById("name").value

  //creo un objeto javascript
  let objeto = {
    id: idFarm,
    address: addressFarm,
    exension: exensionFarm,
    category_id: categoryIdFarm,
    name: nameFarm
  }

  //convierto el objeto de javascript a formato json
  let objetoJson = JSON.stringify(objeto)

  let url =
    "https://g0cefd84e954756-fug8n6nxtxkblfbfarm.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/farm/farm";

  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {

      //Configura el aspecto de la pagina
      traerdatos()
      inicial()
    }
  }

  peticion.open("POST", url, true)
  peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  peticion.send(objetoJson)
}

function guardarEditar() {

  //recuperar la informacion ingresada en el formulario
  let idFarm = document.getElementById("idModif").value
  let addressFarm = document.getElementById("addressModif").value
  let exensionFarm = document.getElementById("exensionModif").value
  let categoryIdFarm = document.getElementById("categoryIdModif").value
  let nameFarm = document.getElementById("nameModif").value

  //creo un objeto javascript
  let objeto = {
    id: idFarm,
    address: addressFarm,
    exension: exensionFarm,
    category_id: categoryIdFarm,
    name: nameFarm
  }

  //convierto el objeto de javascript a formato json
  let objetoJson = JSON.stringify(objeto)

  let url =
    "https://g0cefd84e954756-fug8n6nxtxkblfbfarm.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/farm/farm";

  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {

      //Configura el aspecto de la pagina
      traerdatos()
      inicial()
    }
  }

  peticion.open("PUT", url, true)
  peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  peticion.send(objetoJson)
}


function guardarBorrar() {
  //recuperar la informacion ingresada en el formulario
  let idFarm = document.getElementById("idModif").value //Solo se declara el elemento guia del delete
  
  //creo un objeto javascript
  let objeto = {
    id: idFarm,
  }

  //convierto el objeto de javascript a formato json
  let objetoJson = JSON.stringify(objeto)

  let url =
    "https://g0cefd84e954756-fug8n6nxtxkblfbfarm.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/farm/farm";

  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 204) {

      //Configura el aspecto de la pagina
      traerdatos()
      inicial()
    }
  }

  peticion.open("DELETE", url, true)
  peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  peticion.send(objetoJson)
}

//function// 

function traerdatos() {
  let url = "https://g0cefd84e954756-fug8n6nxtxkblfbfarm.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/farm/farm"
  //peticion ajax basica
  //crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()// manera de crear objetos 
  /*
  *este objeto me permite trabajar con peticiones asincronas
   */

  //invocar la propiedad onreadystatechange igualandolo a una funcion
  /*2 propiedad onreadystatechange asigna a una funcion
      que funcion valida si la respuesta fue exitosa
      readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
      le aplica formato y modifica la pagina o vista
  */
  peticion.onreadystatechange = function () {
    //almacena el html para generar los registros de la tabla
    let registros = ""
    //valida su la peticion fue exitosa
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = JSON.parse(this.responseText)//me convierte la respuesta de json a texto

      //mostrar las respuestas en consola
      console.log("Codigo de respuesta: " + this.status)//estado de respuesta del codigo
      console.log("ReadyState: " + this.readyState)
      console.log("Respuesta antes de convertir: " + this.responseText)
      console.log("Respuesta despues de convertir a JSON: " + respuesta)
      ///crear html usando los datos de la repuesta que me da el servico de la tabla farm 
      ///variable 'respuesta'
      for (let i in respuesta.items) { //bucle for en javascripy

        let id = respuesta.items[i].id//ME PUEDO REFERIR AL OBJETO items es un arreglo
        registros +=
          '<tr>\
                            <th scope="row">' +
          respuesta.items[i].id + //recorre cada columna, en este caso sera id
          "</th>\
                            <td>" +
          respuesta.items[i].address +
          "</td>\
                            <td>" +
          respuesta.items[i].exension +
          "</td>\
                            <td>" +
          respuesta.items[i].category_id +
          "</td>\
                            <td>" +
          respuesta.items[i].name +
          '</td>\
                            <td>\
                                <button class="btn btn-outline-dark bg-info" onclick="editar(' +
          id +
          ')">Modificar elemento</button>\
                              <button class="btn btn-outline-dark bg-danger" onclick="eliminar(' +
          id + ')">Borrar elemento</button>\
                          </td>\
                          </tr>';
      }

      // necesito acceder al elemento de html 
      document.getElementById("registros").innerHTML = registros
    }

  }
  peticion.open("GET", url, true)//abre canal con url e indica el metodo http, contiene una bandera true si sera de manera asincrona y false si es de manera sincrona
  peticion.send()
}