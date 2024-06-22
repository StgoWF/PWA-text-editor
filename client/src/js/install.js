const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the event
  window.deferredPrompt = event;
  // Remove the hidden class from the button
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  // Show the install prompt
  promptEvent.prompt();
});

window.addEventListener('appinstalled', (event) => {
  // Clear the deferred prompt
  window.deferredPrompt = null;
});
