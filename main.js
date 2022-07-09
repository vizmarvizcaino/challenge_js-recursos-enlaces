window.onload = function() {

const url = "https://www.breakingbadapi.com/api/characters";
const modeloTarjetaUsuario = document.querySelector(".modelo-dato-usuario"); 
const contenedorDatoUsuario = document.querySelector(".contenedor-dato-usuario");
const buscadorInput = document.querySelector(".buscar-datos");

buscadorInput.addEventListener("input", (e) =>{
    const value = e.target.value
    console.log(value)
})

fetch(url)
.then(res => res.json())
.then(data => {
    data.map(user => {
    const tarjeta = modeloTarjetaUsuario.cloneNode(true).children[0]
    tarjeta.innerHTML = `
        <img class="image" src='${user.img}'/>
        <p class="titulo dato-titulo">${user.name}</p>
        <p class="descripcion dato-cuerpo">${user.occupation}</p>
    `
    contenedorDatoUsuario.append(tarjeta);
    document.querySelector(".cargando").style.display = 'none'
});
})

}