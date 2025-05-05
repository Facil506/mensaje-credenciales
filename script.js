const servicios = {
  "Netflix": {
    cuentas: {
      "cuenta13@facil.net.in": "Netflix113"
    },
    perfiles: {
      "Perfil1": "1245",
      "Perfil2": "1289",
      "Perfil3": "1274",
      "Perfil4": "1294",
      "Perfil5": "5678"
    }
  },
  "Disney+": {
    cuentas: {
      
    },
    perfiles: {
      
    }
  },
  "Spotify": {
    cuentas: {
     
    },
    perfiles: {
     
    }
  }
};

function actualizarServicio() {
  const servicio = document.getElementById("servicio").value;
  const correoSelect = document.getElementById("correo");
  const perfilSelect = document.getElementById("perfil");
  const claveInput = document.getElementById("clave");
  const pinInput = document.getElementById("pin");

  // Resetear campos
  correoSelect.innerHTML = '<option disabled selected value="">Selecciona un correo</option>';
  perfilSelect.innerHTML = '<option disabled selected value="">Selecciona un perfil</option>';
  claveInput.value = "";
  pinInput.value = "";

  if (!servicio || !servicios[servicio]) return;

  const cuentas = servicios[servicio].cuentas;
  const perfiles = servicios[servicio].perfiles;

  for (const correo in cuentas) {
    const option = document.createElement("option");
    option.value = correo;
    option.textContent = correo;
    correoSelect.appendChild(option);
  }

  for (const perfil in perfiles) {
    const option = document.createElement("option");
    option.value = perfil;
    option.textContent = perfil;
    perfilSelect.appendChild(option);
  }
}

function actualizarClave() {
  const servicio = document.getElementById("servicio").value;
  const correo = document.getElementById("correo").value;
  const clave = servicios[servicio]?.cuentas[correo] || "";
  document.getElementById("clave").value = clave;
}

function actualizarPin() {
  const servicio = document.getElementById("servicio").value;
  const perfil = document.getElementById("perfil").value;
  const pin = servicios[servicio]?.perfiles[perfil] || "";
  document.getElementById("pin").value = pin;
}

function generarMensaje() {
  const servicio = document.getElementById("servicio").value;
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;
  const perfil = document.getElementById("perfil").value;
  const pin = document.getElementById("pin").value;

  const fechaOriginal = document.getElementById("fecha").value;
  const partesFecha = fechaOriginal.split("-");
  const fecha = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;

  if (!servicio || !correo || !clave || !perfil || !pin || !fechaOriginal) {
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
