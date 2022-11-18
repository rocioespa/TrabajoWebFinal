let alias=document.querySelector("#alias");
let direccion=document.querySelector("#direccion");
let telefono=document.querySelector("#telefono");
let piso=document.querySelector("#piso");
let dto=document.querySelector("#dto");
const parrafo = document.getElementById("mensaje");
const form = document.querySelector(".form");

let regexTel = /^(?:\D*\d){10}\D*$/;
let regexNumero = /^([0-9])*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let warning = "";
    let entrar = false;
    parrafo.innerHTML = ""
    if (alias.value == "") {
        entrar = true
        warning += `Debe ingresar su alias<br>`
    }else{
        localStorage.setItem('Alias', JSON.stringify(alias.value))
    }
    if (direccion.value == "") {
        entrar = true
        warning += `Debe ingresar su direccion<br>`
    }else{
        localStorage.setItem('Direccion',JSON.stringify(direccion.value))
    }
    if (telefono.value == ""||!regexNumero.test(telefono.value)||regexTel.test(telefono.value)) {
        entrar = true
        warning += `El campo solo acepta 10 numeros<br>`
    }else{
        localStorage.setItem('Telefono', (telefono.value))
    }
    if (entrar) {
        parrafo.innerHTML = warning
        parrafo.style.color='red';
    } else {
        parrafo.style.color = 'black'
        parrafo.innerHTML = `Se ha guardado correctamente!`
        let direccion = [
            localStorage.getItem('Alias'),
            localStorage.getItem('Direccion'),
            (JSON.parse(localStorage.getItem('Telefono')))
        ]
        console.log(direccion)
    }
})