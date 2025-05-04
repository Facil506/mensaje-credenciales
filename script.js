function generarMensaje() {
  const servicio = document.getElementById("servicio").value;
  const cuenta = document.getElementById("cuenta").value;
  const perfil = document.getElementById("perfil").value;
  const pin = document.getElementById("pin").value;
  const clave = document.getElementById("clave").value;
  const fecha = document.getElementById("fecha").value;

  const mensaje = `¡Estimado/a cliente!\n\nLos datos de acceso para tu servicio de [${servicio}] son:\n\nCuenta: ${cuenta}\nContraseña: ${clave}\nPerfil: ${perfil}\nPIN: ${pin}\nFecha de vencimiento: ${fecha}\n\nPor favor, recuerda que estas credenciales son de uso exclusivo para un dispositivo y no deben compartirse. Si tienes alguna duda o necesitas soporte, estamos para servirte.\n\n¡Gracias por su preferencia y que disfrutes el servicio!`;

  document.getElementById("mensajeGenerado").value = mensaje;
}

function copiarMensaje() {
  const mensaje = document.getElementById("mensajeGenerado");
  mensaje.select();
  mensaje.setSelectionRange(0, 99999); // Para móviles
  document.execCommand("copy");
  alert("¡Mensaje copiado!");
}
