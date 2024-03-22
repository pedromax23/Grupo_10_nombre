window.addEventListener("load", () => {

<<<<<<< HEAD
    let validacionesDiv = document.querySelector('.validaciones');

    let formularioLogin = document.querySelector('.formulario');
    formularioLogin.addEventListener('submit', (event) => {
        
        let validaciones = [];
        
        if(formularioLogin.user_name.value == '') {
            validaciones.push('Nombre del Usuario sin completar')
        }
        
        if(formularioLogin.clave.value == '') {
            validaciones.push('Contraseña del Usuario sin completar')
        }
        
        if(validaciones.length > 0) {
            event.preventDefault()
            validacionesDiv.innerHTML = ''
            validaciones.map((error, i) => {
                validacionesDiv.innerHTML += `<li>${error}</li>`
            })
            validacionesDiv.classList.add('viewErrores')
        }

    })

})
=======
    let form = document.querySelector('.formulario');
    let errorsHTML = document.querySelector(".errores");


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
    
        if(form.user_name.value == "") {
            errorsList.push("Escribe un usuario válido");
        };

        if (errorsList.length > 0) {
            event.preventDefault();
            errorsHTML.innerHTML = "";
            errorsHTML.style.display = "block";
            errorsList.forEach(error => {
                errorsHTML.innerHTML += "<li>" + "* " + error + "</li>";
            });
        }

    })
});
>>>>>>> 77dcb32e4bcd90b04cb26656dc16927ba2212597
