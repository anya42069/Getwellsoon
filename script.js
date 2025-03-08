const flowerAnimation = document.getElementById('flower-animation');
const message = document.getElementById('message');

// Show the message after 5 seconds
setTimeout(() => {
  flowerAnimation.classList.add('hidden');
  message.classList.remove('hidden');
}, 5000);
