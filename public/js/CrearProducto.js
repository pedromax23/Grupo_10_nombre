window.addEventListener("load", () => {

    let form = document.querySelector('.crearProductoForm');
    let validacion = document.querySelector(".validaciones");

    form.addEventListener("submit", (event) => {

        let errorsList = [];

        if(form.nombre.value == "") {
            errorsList.push("El Nombre está vacío");
        }
    
        if(form.categoriaCerveza.value == 'ninguna') {
            errorsList.push("Escoja una categoría");
        };
        
        if(form.precio.value == '') {
            errorsList.push("Ingrese un Precio valido");
        };

        if(form.stock.value == '') {
            errorsList.push("Ingrese un Stock valido");
        };
        
        if(form.alcohol_content.value == '') {
            errorsList.push("Ingrese un Alchol Content valido");
        };

        if (errorsList.length > 0) {
            event.preventDefault();
            validacion.innerHTML = "";
            errorsList.forEach(error => {
                validacion.innerHTML += "<li class='viewErrores'>" + "* " + error + "</li>";
            });
        }

    })
});
