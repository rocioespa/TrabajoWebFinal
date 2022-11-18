
const nombre = document.getElementById("nombre");
const email= document.getElementById("email");
const apellido = document.getElementById("apellido");
const contrasenia = document.getElementById("contrasenia");
const rcontrasenia = document.getElementById("rcontrasenia");
const form = document.querySelector(".form");
const parrafo = document.getElementById("mensaje");
let listaRegistro = []
form.addEventListener("submit",(e)=>{
   e.preventDefault()
   let warning = ''
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   var passw=  /^[A-Za-z]\w{7,14}$/;
   let entrar = false;
   parrafo.innerHTML = ""
   if(nombre.value == ""){
    entrar = true
    warning += `El campo nombre es obligatorio <br>`
   }else{
   
   }
   if(apellido.value == ""){
    entrar = true
    warning += `El campo apellido es obligatorio <br>`
   }else{
    
   }
   if(!regexEmail.test(email.value)){
    entrar =  true
    warning += `El campo email no es valido <br>`
   }else{
   
   }
   if(contrasenia.value == ""){
    entrar = true
    warning += `Debe ingresar una contraseña <br>`
   }
   if(contrasenia.value.length <= 8 || (contrasenia.value.match(/[A-Z]/)) <1 || (contrasenia.value.match(/\d/)) <1 ){
    entrar =  true
    warning += `El campo contraseña no es valido, debe tener 8 o mas digitos,
     al menos 1 letra en mayuscula y al menos 1 numero <br>`
   }else{
   
   }
   if(rcontrasenia.value != contrasenia.value){
    entrar =  true
    warning += `El campo repetir contraseña no es el correcto <br>`
   }else{
   
   }


if(entrar){
    parrafo.innerHTML = warning
}else{
    parrafo.style.color = 'black'
    parrafo.innerHTML = `Guardado con exito!`
    listaRegistro.push({
        usuario: nombre.value,
        apellido : apellido.value,
        email : email.value,
        contraseña: contrasenia.value
        
    })
    localStorage.setItem("datos", JSON.stringify(listaRegistro));
    
}
 
})

