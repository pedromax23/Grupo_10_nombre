// Función para desplazarse hacia arriba en la página
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  }
  
  // Evento de clic en el botón en el footer para desplazarse hacia arriba
  document.getElementById('scrollToTopBtnFooter').addEventListener('click', scrollToTop);
  
  // Mostrar u ocultar el botón según la posición del scroll
  window.addEventListener('scroll', function() {
    var scrollToTopBtnFooter = document.getElementById('scrollToTopBtnFooter');
    if (window.scrollY > 300) { // Cambia este valor según cuánto quieras que el usuario haga scroll antes de mostrar el botón
      scrollToTopBtnFooter.style.display = 'block';
    } else {
      scrollToTopBtnFooter.style.display = 'none';
    }
  });
  