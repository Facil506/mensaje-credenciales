const claves = {
  "cuenta1@facil.net": "ClaveCuenta1",
  "cuenta2@facil.net": "ClaveCuenta2",
  "cuenta3@facil.net": "ClaveCuenta3"
};

const pines = {
  "Perfil1": "1234",
  "Perfil2": "2345",
  "Perfil3": "3456",
  "Perfil4": "4567",
  "Perfil5": "5678",
  "Perfil6": "6789",
  "Perfil7": "7890"
};

function actualizarClave() {
  const correo = document.getElementById("correo").value;
  const clave = claves[correo] || "";
  document.getElementById("clave").value = clave;
}

function actualizarPin() {
  const perfil = document.getElementById("perfil").value;
  const pin = pines[perfil] || "";
  document.getElementById("pin").value = pin;
}

function generarMensaje() {
  const servicio = document.getElementById("servicio").value;
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;
  const perfil = document.getElementById("perfil").value;
  const pin = document.getElementById("pin").value;
  const fecha = document.getElementById("fecha").value;

  if (!servicio || !correo || !clave || !perfil || !pin || !fecha) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const mensaje = `¡Estimado/a cliente!\n\n` +
    `Los datos de acceso para tu servicio de [${servicio}] son:\n\n` +
    `Cuenta: ${correo}\n` +
    `Contraseña: ${clave}\n` +
    `Perfil: ${perfil}\n` +
    `PIN: ${pin}\n` +
    `Fecha de vencimiento: ${fecha}\n\n` +
    `Por favor, recuerda que estas credenciales son de uso exclusivo para un dispositivo y no deben compartirse. ` +
    `Si tienes alguna duda o necesitas soporte, estamos para servirte.\n\n` +
    `¡Gracias por su preferencia y que disfrutes el servicio!`;

  document.getElementById("mensaje").value = mensaje;
}

function copiarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.select();
  document.execCommand("copy");
  alert("Mensaje copiado al portapapeles.");
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarClave();
  actualizarPin();
});
