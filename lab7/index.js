//1.1
document.getElementById('primerProblemaBoton').onclick = () => {
    document.getElementById("primerProblema").style.color = "red"
}
//1.2
document.getElementById('segundoProblemaBoton').onclick = () => {
    document.getElementById('segundoProblema').innerHTML += 'Hola'
}
//1.3
document.getElementById('tercerProblemaBoton').onclick = () => {
    document.getElementById('tercerProblema').innerHTML += document.getElementById('tercerProblemaTexto').value
}
//1.4
document.getElementById('cuartoProblemaBoton').onclick = () => {
    document.getElementById('cuartoProblema').remove(0)
}
//1.5
document.getElementById('quintoProblemaBoton').onclick = () => {
    location.href = 'https://www.youtube.com/watch?v=Ub45-NcZnmY'
}
//1.6
document.getElementById('sextoProblemaBoton').onclick = () => {
    alert(document.getElementById('tercerProblema').innerText)
}
//1.7
document.getElementById('septimoProblemaBoton').onclick = () => {
    console.log(navigator.userAgent)
}
//1.8
document.getElementById('octavoProblemaBoton').onclick = () => {
    let check = document.getElementById('octavoProblemaCheck')
    if (check.checked) {
        alert("El checkbox esta activo")
    }
    else {
        alert("El checkbox no esta activo")
    }
}
//1.9
document.getElementById('novenoProblemaBoton').onclick = () => {
    let check = document.getElementById('novenoProblemaRadio')
    if (check.checked) {
        alert("El radio esta activo")
    }
    else {
        alert("El radio no esta activo")
    }
}
//1.10
document.getElementById('decimoProblemaBoton').onclick = () => {
    let inputValue = document.getElementById('decimoProblema').value;
    if (/^[A-Za-z]+$/.test(inputValue)) {
        alert("Gracias por ingresar letras.");
    } else {
        alert("Solo se admiten letras. Por favor, ingrese solo letras.");
    }
}
//FETCH
window.onload = (event) =>{
    obtenerDatos()
}
function obtenerDatos() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
        .then(response => {
            response.json().then(json => {
                cats = json
                console.log(cats)
                MapearDatos()
            })
        })
}

function MapearDatos() {
    let contenedor = document.querySelector('.contenedor')

    for (let i = 0; i < cats.length; i++) {
        contenedor.innerHTML += MapearPLantilla(cats[i])
    }
}

function MapearPLantilla(cats) {
    return `<tr>
    <td>${cats.id}</td>
    <td><img src="${cats.url}" alt="" width='300px'></td>
    </tr>`
}