const flowerAnimation = document.getElementById('flower-animation');
const message = document.getElementById('message');

// Show the message after the animation
setTimeout(() => {
  flowerAnimation.classList.add('hidden');
  message.classList.remove('hidden');
}, 5000);
