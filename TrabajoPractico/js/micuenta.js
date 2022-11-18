



/*mis metodos*/
const alias1 = document.getElementById("aliasd1");
const codigo = document.getElementById("codigo");
const numTarjeta = document.getElementById("numTarjeta");
const vencimiento = document.getElementById("vencimientos");
const nombreTitular = document.getElementById("nombre");
const form1 = document.querySelector("#form1");
const parrafo1 = document.getElementById("mensaje1");
let regexNumero1 = /^(?:\D*\d){10}\D*$/;
let regexCodigo = /^(?:\D*\d){4}\D*$/;

/*direccion*/
let alias = document.querySelector("#alias");
let direccion = document.querySelector("#direccion");
let telefono = document.querySelector("#telefono");
let piso = document.querySelector("#piso");
let dto = document.querySelector("#dto");
const parrafo = document.getElementById("mensaje");
const form = document.querySelector(".form");
let regexTel = /^(?:\D*\d){9}\D*$/;
let regexNumero = /^([0-9])*$/;

/*direcciones*/
const borrar1 = document.querySelector("#boton1")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let warning = "";
    let entrar = false;
    parrafo.innerHTML = ""
    if (alias.value == "") {
        entrar = true
        warning += `Debe ingresar su alias<br>`
    } else {
        localStorage.setItem('Alias', JSON.stringify(alias.value));
    }
    if (direccion.value == "") {
        entrar = true
        warning += `Debe ingresar su direccion<br>`
    } else {
        localStorage.setItem('Direccion', JSON.stringify(direccion.value));
    }
    if (telefono.value == "" || !regexNumero.test(telefono.value) || regexTel.test(telefono.value)) {
        entrar = true
        warning += `El campo solo acepta  numeros<br>`
    } else {
        localStorage.setItem('Telefono', JSON.stringify(telefono.value));
    }
    

    if (entrar) {
        parrafo.innerHTML = warning
        parrafo.style.color = 'red';
    } else {
        parrafo.style.color = 'black'
        parrafo.innerHTML = `Se ha guardado correctamente!`
        form.submit();
        /*direccion*/
        const itemd = (JSON.parse(localStorage.getItem('Direccion')));
        const itemd2 = (JSON.parse(localStorage.getItem('Alias')));
        const nodolid = document.createElement("td");
        const nodolid1 = document.createElement("td");
        const nodoTextod = document.createTextNode(itemd);
        const nodoTextod1 = document.createTextNode(itemd2);
        nodolid.appendChild(nodoTextod);
        nodolid1.appendChild(nodoTextod1);
        const dire = document.querySelector("#dire");
        dire.appendChild(nodolid);
        dire.appendChild(nodolid1);
        const tabla = document.querySelector("#tabla");
        tabla.appendChild(dire);

        borrar1.classList.remove("oculto");

        borrar1.addEventListener('click', ()=>{
            borrar1.classList.add("oculto");
            nodolid.removeChild(nodoTextod);
            nodolid1.removeChild(nodoTextod1);
            dire.removeChild(nodolid);
            dire.removeChild(nodolid1);
            tabla.removeChild(dire);
        })
        
    }
   
    form.reset()
})

const borrar = document.querySelector("#boton")
/*mis metodos */
form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let warning1 = "";
    let entrar1 = false;
    let suma1 = 0;
    parrafo1.innerHTML = ""

    if (numTarjeta.value == "0") {
        entrar1 = true
        warning1 += `El numero de tarjeta no puede ser 0<br>`
    } else {
        localStorage.setItem('NumTarjeta', JSON.stringify(numTarjeta.value))
    }
    if (alias1.value == "" || alias1.value == null) {
        entrar1 = true
        warning1 += `Se debe ingresar un alias<br>`
    } else {
        localStorage.setItem('Alias1', JSON.stringify(alias1.value))
    }
    if (codigo.value == "" || codigo.value == null || !regexCodigo.test(codigo.value)) {
        entrar1 = true
        warning1 += `El codigo debe tener minimo 4 digitos<br>`
    } else {
        localStorage.setItem('Codigo', JSON.stringify(codigo.value))
    }
    if (vencimiento.value == "") {
        entrar1 = true
        warning1 += `El vencimiento es un campo obligatorio<br>`
    }
    else {
        localStorage.setItem('Vencimiento', JSON.stringify(vencimiento.value));
    }
    if (nombreTitular.value == "" || nombreTitular.value == null) {
        entrar1 = true
        warning1 += `El nombre del titular es obligatorio<br>`
    } else {
        localStorage.setItem('NombreTitular', JSON.stringify(nombreTitular.value))
    }
    if (!regexNumero1.test(numTarjeta.value)) {
        entrar1 = true
        warning1 += `El numero de tarjeta debe tener 10 digitos<br>`
    } else {
        for (var i = 0; i < numTarjeta.length - 1; i++) {
            suma1 += parseInt(numTarjeta[i]);
        }
        if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma1 % 2 != 0)) {
            entrar1 = true
            warning1 += `Numero invalido <br>`
        }
        else if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma1 % 2 == 0)) {
            entrar1 = true
            warning1 += `Numero invalido <br>`
        }
    }


    if (entrar1) {
        parrafo1.innerHTML = warning1
        parrafo1.style.color = 'red';
    } else {
        parrafo1.style.color = 'black'
        parrafo1.innerHTML = `Se ha ingresado el metodo de pago!`
        form1.submit();

    }
    /*metodo*/
    const itemm = (JSON.parse(localStorage.getItem('Alias1')));
    const nodolim = document.createElement("td");
    const nodoTextom = document.createTextNode(itemm);
   
    const meto = document.querySelector("#meto");
   
    const tablaMp = document.querySelector("#tabla-mp");
    nodolim.appendChild(nodoTextom);
    meto.appendChild(nodolim);
    tablaMp.appendChild(meto);
    borrar.classList.remove('oculto')

    borrar.addEventListener('click', ()=>{
        borrar.classList.add("oculto");
        nodolim.removeChild(nodoTextom);
        meto.removeChild(nodolim);
        tablaMp.removeChild(meto);
    })
    form1.reset();
})




/**intente poner otro popup en metodos de pago pero ya no me esta tomando nada 
         */
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const btnAbrirModal1 = document.querySelector("#btn-abrir-modal1");
const btnCerrarModal1 = document.querySelector("#btn-cerrar-modal1");
const modal = document.querySelector("#modal");
const modalMp = document.querySelector("#modal-mp");

btnAbrirModal.addEventListener('click', () => {
    modal.showModal();
})

btnCerrarModal.addEventListener('click', () => {
    modal.close();
    modalMp.close();
    form.reset();
})
btnAbrirModal1.addEventListener('click', () => {
    modalMp.showModal();
})

btnCerrarModal1.addEventListener('click', () => {
    modalMp.close();
    form.reset();
})


