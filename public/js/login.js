window.addEventListener("load", () => {

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