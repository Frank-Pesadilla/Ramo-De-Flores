let musicPlaying = false;

function crearElementoAudio() {
  let audio = document.getElementById('backgroundMusic');

  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'backgroundMusic';
    audio.loop = true;
    audio.preload = 'auto';

    const source = document.createElement('source');
    source.src = `assets/music/${CONFIG.audio.archivo}`;
    source.type = 'audio/mp4';
    audio.appendChild(source);

    audio.appendChild(
      document.createTextNode('Tu navegador no soporta el elemento de audio.')
    );

    document.body.appendChild(audio);
  }

  return audio;
}

async function playMusic() {
  const audio = crearElementoAudio();
  const playBtn = document.getElementById('playBtn');

  audio.volume = CONFIG.audio.volumen;
  try {
    await audio.play();
    musicPlaying = true;
    if (playBtn) playBtn.textContent = '🔊';
  } catch (error) {
    console.log('Autoplay bloqueado, usa el botón para reproducir');
    if (playBtn) playBtn.textContent = '▶';
  }
}

async function toggleMusic() {
  const audio = crearElementoAudio();
  const playBtn = document.getElementById('playBtn');

  if (!musicPlaying) {
    try {
      audio.volume = CONFIG.audio.volumen;
      await audio.play();
      musicPlaying = true;
      if (playBtn) playBtn.textContent = '🔊';
    } catch (error) {
      console.log('Error al reproducir audio:', error);
      if (playBtn) playBtn.textContent = '▶';
    }
  } else {
    audio.pause();
    musicPlaying = false;
    if (playBtn) playBtn.textContent = '🔇';
  }
}

window.toggleMusic = toggleMusic;
window.playMusic = playMusic;
