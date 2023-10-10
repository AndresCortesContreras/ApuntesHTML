// Declaramos las variables que tenemos en el formulario y las llamamos con el id

let nombre = document.getElementById("nombres")
let apellido = document.getElementById("apellidos")
let documento = document.getElementById("documento")
let consultorio = document.getElementById("consultorio")
let telefono = document.getElementById("telefono")
let correo = document.getElementById("correo")
let especialidad = document.getElementById("especialidad")
let terminos = document.getElementById("terminos")
let button = document.getElementById("boton")

// Llamado de los elementos de formulario con el Dom

const formularioMedicos = document.getElementById("registro-medicos")
const formularioPacientes = document.getElementById("registroPacientes")

class Usuarios {
    constructor(nombre, apellido, documento, telefono, correo, especialidad, terminos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.telefono = telefono;
        this.correo = correo;
        this.especialidad = especialidad;
        this.terminos = terminos;
    }
}

//Funcion para mostrar los datos en el html
const mostrarMedicos = function () {
    let medicos = [];
    let cuerpoTabla = document.getElementById("cuerpo-tabla-medicos")
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos=JSON.parse(localMedicos)
    }

    medicos.forEach((Medicos) => {
        let fila = document.createElement("tr")
        //Para crear celdas se usa el metodo InsertCell()
        let celdaNombres = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaDocumento = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaPaciente = fila.insertCell()

        celdaNombres.textContent  = Medicos.nombre
        celdaApellido.textContent  = Medicos.apellido
        celdaDocumento.textContent  = Medicos.documento
        celdaConsultorio.textContent  = Medicos.consultorio
        celdaTelefono.textContent  = Medicos.telefono
        celdaCorreo.textContent  = Medicos.correo
        celdaEspecialidad.textContent  = Medicos.especialidad
        celdaPaciente.textContent  = "Sin asignar";
        cuerpoTabla.appendChild(fila)
    })
}

if (window.location.href.endsWith("listadoMedicos.html")) {
    mostrarMedicos()
}

if (window.location.href.endsWith("medicosRegistros.html")) {
    //evento para formulario medicos  va a hacer de tipo submit

    formularioMedicos.addEventListener("submit", function (event) {
        //Previene que la pagina se recargue sin antes hacer la logica del AddEvenListener
        event.preventDefault()

        let valorNombre = nombre.value
        let valorApellido = apellido.value
        let valorDocumento = documento.value
        let valorTelefono = telefono.value
        let valorCorreo = correo.value
        let valorEspecialidad = especialidad.value
        let valorTerminos = terminos.value
        let valorConsultorio = consultorio.value

        const Medicos = new Usuarios(valorNombre, valorApellido, valorDocumento, valorTelefono, valorCorreo,
            valorEspecialidad, valorTerminos)
        Medicos.consultorio = valorConsultorio

        console.log(Medicos)
        let medicos = []

        //Guardamos los datos del arreglo en el local storage
        let localMedicos = localStorage.getItem("medicos")

        //Si localUsuarios no esta vacio el cumple if

        if (localMedicos) {
            medicos = JSON.parse(localMedicos)
        }

        medicos.push(Medicos)

        // Aca llamamos los datos y convertimos los mismos a formato Json y damos una alerta de que el 
        //usuario se registro de forma exitosa

        localStorage.setItem("medicos", JSON.stringify(medicos))
        alert("Medico registrado")

    })
}
