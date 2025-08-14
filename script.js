const botonAgregar = 
document.querySelector('.add-btn');

botonAgregar.addEventListener('click', function() {
    botonAgregar.remove();
});

const botonesLike = 
document.querySelectorAll('.like-btn');

botonesLike.forEach(function(boton) {
    boton.addEventListener('click', function(event) {

        let textoActual = boton.innerText;
        let partes = textoActual.split(' ');
        let contadorActual = parseInt(partes[0]);
        contadorActual++;
        boton.innerText = contadorActual + ' Me gusta';


        const cartaPadre = event.target.closest('.carta');
        const tituloMascota = cartaPadre.querySelector('h2').innerText;
        alert('Te gustó la definición de ' + tituloMascota);
    });
});