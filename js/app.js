window.onload = () => {
  document.title = CONFIG.meta.tituloPagina;

  actualizarFlowerType();
  aplicarTema(CONFIG.tema);
  iniciarAnimaciones();
};
