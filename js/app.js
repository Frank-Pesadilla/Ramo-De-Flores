window.onload = () => {
  document.title = CONFIG.meta.tituloPagina;

  aplicarTema(CONFIG.tema);
  iniciarAnimaciones();

  if (CONFIG.audio.autoplay) {
    setTimeout(autoPlayMusic, ANIMATION_TIMING.retrasoAutoplay);
  }

  setTimeout(showParagraphs, CONFIG.mensaje.retrasoInicio);
};
