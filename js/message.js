function convertirMarkdownBasico(texto) {
  return texto.replace(/\*\*(.+?)\*\*/g, '<span class="highlight">$1</span>');
}

function typeWriter(element, text, speed = 50) {
  return new Promise((resolve) => {
    let i = 0;
    let isTag = false;
    let currentTag = '';

    function type() {
      if (i < text.length) {
        let char = text.charAt(i);

        if (char === '<') {
          isTag = true;
          currentTag = char;
        } else if (char === '>') {
          isTag = false;
          currentTag += char;
          element.innerHTML += currentTag;
          currentTag = '';
        } else if (isTag) {
          currentTag += char;
        } else {
          element.innerHTML += char;
        }

        i++;
        setTimeout(type, isTag ? 0 : speed);
      } else {
        resolve();
      }
    }
    type();
  });
}

async function showParagraphs() {
  const parrafos = CONFIG.mensaje.parrafos;
  const velocidad = CONFIG.mensaje.velocidadTypewriter;
  const pausa = CONFIG.mensaje.pausaEntreParrafos;
  const container = document.querySelector('.message-text');

  for (let i = 0; i < parrafos.length; i++) {
    let element = document.getElementById(`paragraph${i + 1}`);

    if (!element) {
      element = document.createElement('div');
      element.id = `paragraph${i + 1}`;
      element.className = 'paragraph';
      container.appendChild(element);
    }

    element.style.opacity = '1';
    element.style.marginBottom = '0.6rem';

    const textoHtml = convertirMarkdownBasico(parrafos[i]);
    await typeWriter(element, textoHtml, velocidad);

    await new Promise(resolve => setTimeout(resolve, pausa));
  }
}
