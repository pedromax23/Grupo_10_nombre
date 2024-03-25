window.addEventListener("load", () => {

    let form = document.querySelector('.formulario');
    let errorsHTML = document.querySelector(".validaciones");


    form.addEventListener("submit", (event) => {

        let errorsList = [];

        // CAMPO NOMBRE
        if(form.name.value == "") {
            errorsList.push("El nombre está vacío");
        } else if (form.name.value.length < 2) {
            errorsList.push("El nombre debe tener al menos 2 caracteres");
        };

        // CAMPO APELLIDO
        if(form.last_name.value == "") {
            errorsList.push("El Apellido está vacío");
        } else if (form.name.value.length < 2) {
            errorsList.push("El Apellido debe tener al menos 2 caracteres");
        };

        // CAMPO EMAIL
        // declaro un regex
        let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(form.email.value == "") {
            errorsList.push("Escribe un email");
        } else if (!emailReg.test(form.email.value)) {
            errorsList.push("Debe contener un email valido");
        }
        
        // CAMPO CONTRASEÑA
        if(form.password.value == "") {
            errorsList.push("La contraseña está vacía");
        } else if (form.password.value.length < 8) {
            errorsList.push("La constraseña debe contener al menos 8 caracteres");
        };

        // CAMPO IMAGEN
        let imagenInput = document.getElementById('imagenUsuario');
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

        // agregar al listado (inicialmente vacio) los errores como elementos <li>
        // si hay errores, prevengo que se envien
        if (errorsList.length > 0) {
            event.preventDefault();
            errorsHTML.innerHTML = "";
            errorsList.forEach(error => {
                errorsHTML.innerHTML += "<li class='viewErrores'>" + "* " + error + "</li>";
            });
        }
    })

    const maxCaracteres = 250;
    const comentarioInput = document.querySelector("#comment");
    const contador = document.querySelector("#contador");

    // funcion para actualizar contador de caracteres dispobibles en comentario
    function actualizarContador() {
        let caracteresRestantes = maxCaracteres - comentarioInput.value.length;
        contador.textContent = caracteresRestantes;
    };
    comentarioInput.addEventListener("input", actualizarContador);

    actualizarContador();
});
