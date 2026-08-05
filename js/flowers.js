const TEMAS = {
  rosas: {
    "--dark-color": "#010113",
    "--lavender": "#E6E6FA",
    "--light-purple": "#DDA0DD",
    "--deep-purple": "#483D8B"
  },
  tulipanes: {
    "--dark-color": "#1a0a0a",
    "--lavender": "#FFE4C4",
    "--light-purple": "#FF6B6B",
    "--deep-purple": "#C0392B"
  },
  cerezos: {
    "--dark-color": "#1a1020",
    "--lavender": "#FFD1DC",
    "--light-purple": "#FFB7C5",
    "--deep-purple": "#D4819F"
  }
};

const TEMAS_NOMBRES = ["rosas", "tulipanes", "cerezos"];

function aplicarTema(configTema) {
  const root = document.documentElement;
  const nombreTema = TEMAS[configTema.nombre] ? configTema.nombre : "rosas";
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
