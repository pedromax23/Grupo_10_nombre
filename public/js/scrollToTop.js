// Función para mostrar u ocultar el botón según la posición del scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var icScrollToTop = document.getElementById("iconoScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    icScrollToTop.style.display = "block";
  } else {
    icScrollToTop.style.display = "none";
  }
}

// Función para desplazar la página hacia arriba cuando se hace clic en el botón
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}