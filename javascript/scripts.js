document.getElementById('hamburgesa').addEventListener("click", (e) =>{
    let nav = document.getElementById('nav');
    if(nav.classList.contains('activo')){
        nav.classList.remove('activo');
    }else{
        nav.classList.add('activo');
    }
});

function mostrarEsconder(event, id){
    let elemento = document.getElementById(id);
    if(elemento.style.visibility == "visible"){
        elemento.style.visibility = "hidden";
        elemento.style.height = "0px";
        event.target.textContent = "Mostrar";
    }else{
        elemento.style.visibility = "visible";
        elemento.style.height = "auto";
        event.target.textContent = "Esconder";
    }
}