const TEMAS = {
  rosas: {
    "--dark-color": "#100b1f",
    "--lavender": "#e8d8ff",
    "--light-purple": "#d8a9ff",
    "--deep-purple": "#5d3d7d"
  },
  tulipanes: {
    "--dark-color": "#120b1f",
    "--lavender": "#f6ebff",
    "--light-purple": "#c1a0ff",
    "--deep-purple": "#8a5ec8"
  },
  cerezos: {
    "--dark-color": "#160b1d",
    "--lavender": "#ffe3ee",
    "--light-purple": "#ffb7d6",
    "--deep-purple": "#c35f8f"
  }
};

const TEMAS_NOMBRES = ["rosas", "tulipanes", "cerezos"];

function aplicarTema(configTema) {
  const root = document.documentElement;
  const nombreTema = TEMAS[configTema.nombre] ? configTema.nombre : "tulipanes";
  const paleta = TEMAS[nombreTema];

  Object.entries(paleta).forEach(([prop, valor]) => {
    root.style.setProperty(prop, valor);
  });

  if (configTema.colorPrincipal) {
    root.style.setProperty("--light-purple", configTema.colorPrincipal);
  }

  if (configTema.colorSecundario) {
    root.style.setProperty("--lavender", configTema.colorSecundario);
  }

  if (configTema.fondoOscuro === false) {
    root.style.setProperty("--dark-color", "#f5f0ff");
  }

  const contenedor = document.querySelector(".flowers") || document.body;
  TEMAS_NOMBRES.forEach((tema) => contenedor.classList.remove(`tema-${tema}`));
  contenedor.classList.add(`tema-${nombreTema}`);
}

function actualizarFlowerType() {
  const flowerType = CONFIG.flowerType || CONFIG.tema.nombre || "tulipanes";
  CONFIG.tema.nombre = flowerType;
}
