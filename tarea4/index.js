let login = document.querySelector('.login')
let loader = document.querySelector('.loader')
let password = document.querySelector('#pass')
let ojo = document.querySelector('.ojo')
let video = document.querySelector('.video')
let grua = document.querySelector('.grua')
let fail = document.getElementById('fail');
let start = document.getElementById('start');
const delay = ms => new Promise(res => setTimeout(res, ms));

async function enviar(){
    if(document.querySelector('#funciona').checked){
        login.classList.add('oculto')
        loader.classList.remove('oculto')
        start.play()
        await delay(3000);
        loader.classList.add('oculto')
        video.classList.remove('oculto')
    }
    else{
        login.classList.add('oculto')
        loader.classList.remove('oculto')
        fail.play()
        await delay(4000);
        loader.classList.add('oculto')
        grua.classList.remove('oculto')
    }
}

function mostrarPassword(){
    if(password.type == 'password'){
        password.type="text"
        ojo.src= '/tarea4/imagenes/ojo.png'
    }
    else{
        password.type="password"
        ojo.src= '/tarea4/imagenes/cerrar-ojo.png'
    }
}