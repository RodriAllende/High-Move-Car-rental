

$(function() {
  // Obtenemos la fecha y la hora actuales.
  var fecha = new Date();

  // Formateamos la fecha y la hora en el formato especificado por la configuración regional del navegador.
  var fechaFormateada = fecha.toLocaleString();
  var horaFormateada = fecha.toLocaleString("time");

  // Mostramos la fecha y la hora en el DOM.
  $('#fecha-hora').html(fechaFormateada + " - " + horaFormateada);
});