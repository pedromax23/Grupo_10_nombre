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
        
        // IMAGEN
        let imagenInput = document.getElementById('foto-producto');
        let archivo = imagenInput.files[0]; // Recuperamos la informacion del archivo
        // Validaciones
        if (!archivo) {
            errorsList.push("Por favor, selecciona una imagen.");
        } else {
            let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.test(archivo.name)) {
                errorsList.push("La imagen debe tener una extensión válida (jpg, jpeg, png o gif).");
            } else if (archivo.size > 10 * 1024 * 1024) { // 10 MB
                errorsList.push("La imagen es demasiado grande. Por favor, selecciona una imagen más pequeña.");
            }
        }
        console.log(errorsList)

        if (errorsList.length > 0) {
            event.preventDefault();
            validacion.innerHTML = "";
            errorsList.forEach(error => {
                validacion.innerHTML += "<li class='viewErrores'>" + "* " + error + "</li>";
            });
        }

    })
});
