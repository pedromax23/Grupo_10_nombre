window.addEventListener('load', () => {

    // Obtiene la URL actual
    let url = window.location.href;
    // Busca el patrón que contiene el ID del producto en la URL
    var idURL = /\/productos\/detalle\/(\d+)/;// Este patrón asume que el ID del producto es un número. Ajusta según sea necesario
    // Ejecuta la expresión regular para encontrar el ID del producto en la URL
    var id = url.match(idURL)[1]; // Recuperamos el ID del producto

    let boton = document.querySelector('.boton_localstorage')

    let carritoComprasJSON = localStorage.getItem('carritoProductos');
    let carritoCompras = JSON.parse(carritoComprasJSON) ? JSON.parse(carritoComprasJSON) : [];
    let indice = carritoCompras.indexOf(id)
    if (indice !== -1) { // Si el producto está en el carrito
        boton.innerHTML = 'Eliminar de LocalStorage'
    } else {
        boton.innerHTML = 'Agregar a LocalStorage'
    }
    
    boton.addEventListener('click', () => {
        
        let indice = carritoCompras.indexOf(id); // Busca el índice del producto en el array
        if (indice !== -1) { // Si el producto está en el carrito
            carritoCompras.splice(indice, 1); // Elimina el producto del carrito
            boton.innerHTML = 'Agregar a LocalStorage'
        } else {
            carritoCompras.push(id)
            boton.innerHTML = 'Eliminar de LocalStorage'
        }

        localStorage.setItem('carritoProductos', JSON.stringify(carritoCompras))
    })
    
})