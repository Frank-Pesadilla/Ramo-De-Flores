let musicPlaying = false;

function crearElementoAudio() {
  let audio = document.getElementById('backgroundMusic');

  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'backgroundMusic';
    audio.loop = true;
    if (CONFIG.audio.autoplay) {
      audio.autoplay = true;
    }

    const source = document.createElement('source');
    source.src = `assets/music/${CONFIG.audio.archivo}`;
    source.type = 'audio/mp4';
    audio.appendChild(source);

    audio.appendChild(
      document.createTextNode('Tu navegador no soporta el elemento de audio.')
    );

    const controls = document.querySelector('.audio-controls');
    controls.appendChild(audio);
  }

  return audio;
}

async function autoPlayMusic() {
  if (!CONFIG.audio.autoplay) return;

  const audio = crearElementoAudio();
  const playBtn = document.getElementById('playBtn');

  audio.volume = CONFIG.audio.volumen;

  try {
    await audio.play();
    musicPlaying = true;
    playBtn.textContent = '🔊';
  } catch (error) {
    console.log('Autoplay bloqueado, usa el botón para reproducir');
    playBtn.textContent = '▶';
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
      playBtn.textContent = '🔊';
    } catch (error) {
      console.log('Error al reproducir audio:', error);
      alert(`Error al reproducir la música. Asegúrate de que el archivo ${CONFIG.audio.archivo} esté en assets/music/.`);
    }
  } else {
    audio.pause();
    musicPlaying = false;
    playBtn.textContent = '🔇';
  }
}

window.toggleMusic = toggleMusic;
