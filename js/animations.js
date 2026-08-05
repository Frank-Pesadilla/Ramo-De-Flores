const ANIMATION_TIMING = {
  retrasoAutoplay: 500,
  fadeInMensaje: 8200
};

function iniciarAnimaciones() {
  const giftBox = document.getElementById('giftBox');
  const playBtn = document.getElementById('playBtn');

  if (!giftBox) return;
  giftBox.classList.add('breathing');
  giftBox.addEventListener('click', handleGiftInteraction);
  giftBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleGiftInteraction();
    }
  });

  if (playBtn) {
    playBtn.addEventListener('click', toggleMusic);
  }
}

async function handleGiftInteraction() {
  const giftBox = document.getElementById('giftBox');
  const flowers = document.querySelector('.flowers');
  const messageContainer = document.querySelector('.message-container');
  const audioControls = document.querySelector('.audio-controls');

  if (!giftBox || !flowers || !messageContainer || giftBox.classList.contains('opened')) {
    return;
  }

  giftBox.classList.remove('breathing');
  giftBox.classList.add('opening');
  await new Promise((resolve) => setTimeout(resolve, 650));

  giftBox.classList.add('opened');
  await new Promise((resolve) => setTimeout(resolve, 400));
  giftBox.classList.add('hidden-gift');
  setTimeout(() => {
    giftBox.style.display = 'none';
    giftBox.setAttribute('aria-hidden', 'true');
    giftBox.classList.remove('opening', 'opened');
  }, 500);

  flowers.classList.remove('hidden');
  flowers.classList.add('blooming');
  flowers.setAttribute('aria-hidden', 'false');
  audioControls.classList.add('show');
  audioControls.classList.remove('hidden');

  const bubbles = document.querySelector('.bubbles');
  if (bubbles) {
    bubbles.classList.remove('hidden');
    bubbles.setAttribute('aria-hidden', 'false');
  }

  playMusic();
  revealPetals();
  bloomScene();
  await new Promise((resolve) => setTimeout(resolve, 3800));
  messageContainer.setAttribute('aria-hidden', 'false');
  showMessage(messageContainer);
}

function revealPetals() {
  const flowerLines = document.querySelectorAll('.flower__line');
  const flowerLeafs = document.querySelectorAll('.flower__line__leaf, .flower__leafs');

  flowerLines.forEach((line, index) => {
    line.style.animationDelay = `${0.7 + index * 0.1}s`;
    line.style.animationPlayState = 'running';
  });

  flowerLeafs.forEach((leaf) => {
    leaf.style.animationPlayState = 'running';
  });
}

function bloomScene() {
  const lights = document.querySelectorAll('.flower__light');
  const flowerPetals = document.querySelectorAll('.flower__leaf');
  const flowerCenters = document.querySelectorAll('.flower__white-circle');

  lights.forEach((light) => {
    light.style.animationPlayState = 'running';
  });

  flowerPetals.forEach((petal) => {
    petal.style.animationPlayState = 'running';
  });

  flowerCenters.forEach((center) => {
    center.style.animationPlayState = 'running';
  });
}

function showMessage(container) {
  if (!container) return;
  container.classList.add('visible');
  container.classList.remove('hidden');
  setTimeout(() => {
    showParagraphs();
  }, 300);
}
