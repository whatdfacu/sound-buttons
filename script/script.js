function playSound(event) {
    const soundFile = event.target.getAttribute('data-sound');
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
    }
  }

const soundButtons = document.querySelectorAll('.audio-button');
soundButtons.forEach(button => {
  button.addEventListener('click', playSound);
});