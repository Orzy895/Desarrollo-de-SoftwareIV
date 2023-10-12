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
    document.getElementById('tercerProblema').innerHTML += document.getElementById('tercerProblemTexto').value
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
    alert(navigator.userAgent)
}