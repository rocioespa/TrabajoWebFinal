const nombre = document.getElementById("nombre");
const contrasenia = document.getElementById("contrasenia");
const form = document.querySelector(".form");
const parrafo = document.getElementById("mensaje");
const boton =document.getElementById("boton");


form.addEventListener("submit", (e) => {
    e.preventDefault()
   
    let warning = ""
    let entrar = false;
    parrafo.innerHTML = ""
    if (nombre.value == "") {
        entrar = true
        warning += `Debe ingresar su nombre usuario <br>`
    }else{
        localStorage.setItem('Usuario', JSON.stringify(nombre.value))
    }
    if (contrasenia.value == "" && contrasenia.value.length >= 8) {
        entrar = true
        warning += `Debe ingresar una contraseña valida<br>`
    }else{ 
        localStorage.setItem('Contraseña', JSON.stringify(contrasenia.value))
    }

    let usuariosLogin = [
        (JSON.parse(localStorage.getItem('Usuario'))),
        (JSON.parse(localStorage.getItem('Contraseña')))
    ]

    if (entrar) {
        parrafo.innerHTML = warning
        
    } else {
        parrafo.style.color = 'black'
        parrafo.innerHTML = `Ha iniciado sesion correctamente!`
        console.log(usuariosLogin)
    }
})

const btnAbrirModal = document.querySelector("#login");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");
btnAbrirModal.addEventListener('click',()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener('click',()=>{
    modal.close();
})


const nombre1 = document.getElementById("nombre1");
const email= document.getElementById("email1");
const apellido = document.getElementById("apellido1");
const contrasenia1= document.getElementById("contrasenia1");
const rcontrasenia = document.getElementById("rcontrasenia1");
const form1 = document.querySelector("#form1");
const parrafo1 = document.getElementById("mensaje1");

form1.addEventListener("submit",(e)=>{
   e.preventDefault()
   let warning1 = ''
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   let entrar1 = false;
   parrafo1.innerHTML = ""
   if(!regexEmail.test(email.value)){
    entrar1 =  true
    warning1 += `El campo email no es valido <br>`
   }else{
    localStorage.setItem('Email',JSON.stringify(email.value))
   }
   if(nombre1.value == ""){
    entrar1 = true
    warning1 += `El campo nombre es obligatorio <br>`
   }else{
    localStorage.setItem('Nombre1', JSON.stringify(nombre1.value))
   }
   if(apellido.value == ""){
    entrar1 = true
    warning1 += `El campo apellido es obligatorio <br>`
   }else{
    localStorage.setItem('Apellido', JSON.stringify(apellido.value))
   }
   if(contrasenia1.value == ""){
    entrar1 = true
    warning1 += `Debe ingresar una contraseña <br>`
   }
   if(contrasenia1.value.length <= 8 || (contrasenia1.value.match(/[A-Z]/)) <1 || (contrasenia1.value.match(/\d/)) <1 ){
    entrar1 =  true
    warning1 += `El campo contraseña no es valido, debe tener 8 o mas digitos,
     al menos 1 letra en mayuscula y al menos 1 numero <br>`
   }else{
    localStorage.setItem('Contraseña1', JSON.stringify(contrasenia1.value))
   }
   if(rcontrasenia.value != contrasenia1.value){
    entrar1 =  true
    warning1 += `El campo repetir contraseña no es el correcto <br>`
   }else{
    localStorage.setItem('Repetir Contraseña', JSON.stringify(rcontrasenia.value))
   }

let usuarios = [
    (JSON.parse(localStorage.getItem('Nombre1'))),
    (JSON.parse(localStorage.getItem('Email'))),
    (JSON.parse(localStorage.getItem('Apellido'))),
    (JSON.parse(localStorage.getItem('Contraseña1'))),
    (JSON.parse(localStorage.getItem('Repetir Contraseña')))
]
if(entrar1){
    parrafo1.innerHTML = warning1
}else{
    parrafo1.style.color = 'black'
    parrafo1.innerHTML = `Guardado con exito!`
    console.log(usuarios);
}
 
})
const btnAbrirModal1 = document.querySelector("#registrate");
const btnCerrarModal1 = document.querySelector("#btn-cerrar");
const modalR = document.querySelector("#modal-r");
btnAbrirModal1.addEventListener('click',()=>{
    modalR.showModal();
})

btnCerrarModal1.addEventListener('click',()=>{
    modalR.close();
})