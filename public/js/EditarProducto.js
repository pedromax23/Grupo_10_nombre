window.addEventListener("load", () => {

    let form = document.querySelector('.edicion-form');
    let validacion = document.querySelector(".validaciones");

    form.addEventListener("submit", (event) => {

        let errorsList = [];

        // NOMBRE
        if(form.nombre.value == "") {
            errorsList.push("El Nombre está vacío");
        } else if(form.nombre.value.length < 5) {
            errorsList.push("El Nombre debe tener al menos 5 caracteres");
        }
        
        // DESCRIPCIÓN
        if(form.descripcion.value == "") {
            errorsList.push("La descripción está vacío");
        } else if(form.descripcion.value.length < 20) {
            errorsList.push("La descripción debe tener al menos 20 caracteres");
        }

        if (errorsList.length > 0) {
            event.preventDefault();
            validacion.innerHTML = "";
            errorsList.forEach(error => {
                validacion.innerHTML += "<li class='viewErrores'>" + "* " + error + "</li>";
            });
        }

    })
});
