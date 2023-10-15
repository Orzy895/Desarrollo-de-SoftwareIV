let login = document.querySelector('.login')
let si = document.querySelector('.si')
let no = document.querySelector('.no')
let password = document.querySelector('#pass')
let ojo = document.querySelector('.ojo')
const delay = ms => new Promise(res => setTimeout(res, ms));

async function enviar(){
    await delay(4000);
    if(document.querySelector('#funciona').checked){
        login.classList.add('esconder')
        si.classList.remove('esconder')
    }
    else{
        login.classList.add('esconder')
        no.classList.remove('esconder')
    }
}

function regresar(){
    si.classList.add('esconder')
    no.classList.add('esconder')
    login.classList.remove('esconder')
}

function mostrarPassword(){
    if(password.type == 'password'){
        password.type="text"
        ojo.src= '/tarea4/imagenes/eye.png'
    }
    else{
        password.type="password"
        ojo.src='/tarea4/imagenes/hidden.png'
    }
}