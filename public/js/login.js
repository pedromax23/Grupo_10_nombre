window.addEventListener("load", () => {

    let form = document.querySelector('.formulario');
    let errorsHTML = document.querySelector(".validaciones");


    form.addEventListener("submit", (event) => {

        // Array de errores

        let errorsList = [];

        // CONTRASEÑA

        if(form.clave.value == "") {
            errorsList.push("La contraseña está vacía");
        } else if (form.password.value.length < 8) {
            errorsList.push("La constraseña debe contener al menos 8 caracteres");
        };


        // USER NAME (o EMAIL)
    
        if(form.name.value == "") {
            errorsList.push("Escribe un usuario válido");
        };

        if (errorsList.length > 0) {
            event.preventDefault();
            errorsHTML.innerHTML = "";
            errorsList.forEach(error => {
                errorsHTML.innerHTML += "<li class='viewErrores'>" + "* " + error + "</li>";
            });
        }

    })
});
