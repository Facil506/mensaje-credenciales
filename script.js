// Relación fija de correos con sus contraseñas
const clavesPorCorreo = {
  "cuenta1@facil.net": "ClaveCuenta1",
  "cuenta2@facil.net": "ClaveCuenta2",
  "cuenta3@facil.net": "ClaveCuenta3",
  "cuenta8@facil.net": "Netflix800"
};

// Rellenar la clave automáticamente según el correo seleccionado
function actualizarClave() {
  const correoSeleccionado = document.getElementById("cuenta").value;
  const clave = clavesPorCorreo[correoSeleccionado] || "";
  document.getElementById("clave").value = clave;
}

// Generar el mensaje final
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

// Copiar al portapapeles
function copiarMensaje() {
  const mensaje = document.getElementById("mensajeGenerado");
  mensaje.select();
  mensaje.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("¡Mensaje copiado!");
}
