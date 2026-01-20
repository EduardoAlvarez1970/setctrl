document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('listenBtn');
  const audio = document.getElementById('audio');

  if (!btn || !audio) return;

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = 'stop';
    } else {
      audio.pause();
      audio.currentTime = 0;
      btn.textContent = 'listen';
    }
  });
});
