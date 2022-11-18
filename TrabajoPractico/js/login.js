const nombre = document.getElementById("nombre");
const contrasenia = document.getElementById("contrasenia");
const form = document.querySelector(".form");
const parrafo = document.getElementById("mensaje");
let listaLogin =[]
form.addEventListener("submit", (e) => {
    e.preventDefault()
   
    let warning = ""
    let entrar = false;
    parrafo.innerHTML = ""
    if (nombre.value == "") {
        entrar = true
        warning += `Debe ingresar su nombre usuario <br>`
    }
    if (contrasenia.value == "" && contrasenia.value.length >= 8) {
        entrar = true
        warning += `Debe ingresar una contraseña valida<br>`
    }


    if (entrar) {
        parrafo.innerHTML = warning
        
    } else {
        parrafo.style.color = 'black'
        parrafo.innerHTML = `Ha iniciado sesion correctamente!`
        listaLogin.push({
            usuario: nombre.value,
            contraseña: contrasenia.value
        })
        localStorage.setItem("datos", JSON.stringify(listaLogin));
    }
})

