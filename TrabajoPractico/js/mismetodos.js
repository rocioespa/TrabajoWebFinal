

const alias = document.getElementById("alias");
const codigo = document.getElementById("codigo");
const numTarjeta = document.getElementById("numTarjeta");
const vencimiento = document.getElementById("vencimientos");
const nombreTitular = document.getElementById("nombre");
const form = document.querySelector(".form");
const parrafo = document.getElementById("mensaje");
let regexNumero = /^(?:\D*\d){10}\D*$/;
let regexCodigo = /^(?:\D*\d){4}\D*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let warning = "";
    let entrar = false;
    let suma = 0;
    parrafo.innerHTML = ""

    if (numTarjeta.value == "0") {
        entrar = true
        warning += `El numero de tarjeta no puede ser 0<br>`
    } else {
        localStorage.setItem('NumTarjeta', numTarjeta.value)
    }
    if (alias.value == "" || alias.value == null) {
        entrar = true
        warning += `Se debe ingresar un alias<br>`
    } else {
        localStorage.setItem('Alias', JSON.stringify(alias.value))
    }
    if (codigo.value == "" || codigo.value == null || !regexCodigo.test(codigo.value)) {
        entrar = true
        warning += `El codigo debe tener minimo 4 digitos<br>`
    } else {
        localStorage.setItem('Codigo', JSON.stringify(codigo.value))
    }
    if (vencimiento.value == "") {
        entrar = true
        warning += `El vencimiento es un campo obligatorio<br>`
    }
    else {
        localStorage.setItem('Vencimiento', JSON.stringify(vencimiento.value));
    }
    if (nombreTitular.value == "" || nombreTitular.value == null) {
        entrar = true
        warning += `El nombre del titular es obligatorio<br>`
    } else {
        localStorage.setItem('NombreTitular', JSON.stringify(nombreTitular.value))
    }
    if (!regexNumero.test(numTarjeta.value)) {
        entrar = true
        warning += `El numero de tarjeta debe tener 10 digitos<br>`
    } else {
        for (var i = 0; i < numTarjeta.length - 1; i++) {
            suma += parseInt(numTarjeta[i]);
        }
        if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma % 2 != 0)) {
            entrar = true
            warning += `Numero invalido <br>`
        }
        else if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma % 2 == 0)) {
            entrar = true
            warning += `Numero invalido <br>`
        }
    }


    if (entrar) {
        parrafo.innerHTML = warning
        parrafo.style.color = 'red';
    } else {
        parrafo.style.color = 'black'
        parrafo.innerHTML = `Se ha ingresado el metodo de pago!`
        let metodos = [
            (JSON.parse(localStorage.getItem('Alias'))),
            (JSON.parse(localStorage.getItem('NumTarjeta')))
        ]
        console.log(metodos)
        // const guardar = querySelector("#guardar");
        // guardar.addEventListener("click", (f) => {
            
        //     let nuevoMetodo = [{
        //         alias: 'Alias',
        //         valor: localStorage.getItem('Alias')

        //     }]
        //     metodo.push(nuevoMetodo);
        // })
    }



})




