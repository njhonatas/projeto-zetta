const slideText = document.querySelector('.slide-text');
slideText.addEventListener('click', () => {
  slideText.style.animationPlayState = slideText.style.animationPlayState === 'paused' ? 'running' : 'paused';
});