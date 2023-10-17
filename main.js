$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) { // Cambia "100" a la altura deseada para el colapso
      $(".navbar").addClass("navbar-scroll");
    } else {
      $(".navbar").removeClass("navbar-scroll");
    }
  });
});
