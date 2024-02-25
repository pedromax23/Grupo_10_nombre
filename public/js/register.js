window.addEventListener("load", () => {
    const maxCaracteres = 250;
    const comentarioInput = document.querySelector("#comment");
    const contador = document.querySelector("#contador");

    // funcion para actualizar contador de caracteres dispobibles en comentario

    function actualizarContador() {
        let caracteresRestantes = maxCaracteres - comentarioInput.value.length;
        contador.textContent = caracteresRestantes;
    };
    comentarioInput.addEventListener("input", actualizarContador);

    // Llamar a actualizarContador para establecer el contador inicial al cargar la página
    actualizarContador();
});
