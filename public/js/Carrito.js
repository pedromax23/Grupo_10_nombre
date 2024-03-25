window.addEventListener('load', () => {

    let carritoComprasJSON = localStorage.getItem('carritoProductos');
    let carritoCompras = JSON.parse(carritoComprasJSON) ? JSON.parse(carritoComprasJSON) : [];
    
    let divProductos = document.querySelector('.productos')

    carritoCompras.forEach(producto => {
        divProductos.innerHTML += `ID: ${producto}`
    });

})