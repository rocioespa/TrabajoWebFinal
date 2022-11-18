

const nombre = document.getElementById("nombre");
const email= document.getElementById("email");
const correo= document.getElementById("correo");
const form = document.querySelector(".form");
const parrafo = document.getElementById("mensaje");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let warning = ''
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false;
    parrafo.innerHTML = ""

    if (nombre.value == "") {
        entrar = true
        warning += `Debe ingresar su nombre usuario <br>`
    }
    if (!regexEmail.test(email.value)) {
        entrar = true
        warning += `El campo email es incorrecto <br>`
    }
    if (correo.value == "") {
        entrar = true
        warning += `Debe ingresar su mensaje <br>`
    }

    if (entrar) {
        parrafo.innerHTML = warning
    } else {
        parrafo.innerHTML = `Ha iniciado sesion correctamente!`
    }
})
