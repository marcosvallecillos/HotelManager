const { app, BrowserWindow } = require("electron");

function crearVentana() {
  // Las opciones fijan el tamaño inicial de la ventana.
  const ventana = new BrowserWindow({
    width: 1200,
    height: 800
  });

  // Cargamos la interfaz HTML local dentro de la ventana.
  ventana.loadFile("index.html");
}

// Electron llamará a crearVentana cuando esté listo.
app.whenReady().then(crearVentana);
