//1.1
document.getElementById('primerProblemaBoton').onclick = () =>{
    document.getElementById("primerProblema").style.color = "red"
}
//1.2
document.getElementById('segundoProblemaBoton').onclick = ()=>{
    document.getElementById('segundoProblema').innerHTML += 'Hola'
}
//1.3
document.getElementById('tercerProblemaBoton').onclick = ()=>{
    document.getElementById('tercerProblema').innerHTML += document.getElementById('tercerProblemaTexto').value
}
//1.4
document.getElementById('cuartoProblemaBoton').onclick= ()=>{
    document.getElementById('cuartoProblema').remove(0)
}
//1.5
document.getElementById('quintoProblemaBoton').onclick=()=>{
    location.href = 'https://www.youtube.com/watch?v=Ub45-NcZnmY'
}
//1.6
document.getElementById('sextoProblemaBoton').onclick=()=>{
    alert(document.getElementById('tercerProblema').innerText)
}
//1.7
document.getElementById('septimoProblemaBoton').onclick=()=>{
    console.log(navigator.userAgent)
}
//1.8
document.getElementById('octavoProblemaBoton').onclick=()=>{
    let check = document.getElementById('octavoProblemaCheck')
    if(check.checked){
        alert("El checkbox esta activo")
    }
    else{
        alert("El checkbox no esta activo")
    }
}
//1.9
document.getElementById('novenoProblemaBoton').onclick=()=>{
    let check = document.getElementById('novenoProblemaRadio')
    if(check.checked){
        alert("El radio esta activo")
    }
    else{
        alert("El radio no esta activo")
    }
}
//1.10


//FETCH
function obtenerDatos(){
    fetch('https://api.thecatapi.com/v1/images/search?limit=5').then(
        res=>{
            res.json().then(json=>{
                gatos = json.results
                console.log(gatos)
            })
        }
    )
}