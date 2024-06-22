const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the event
  window.deferredPrompt = event;
  // Remove the hidden class from the button
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  // Show the install prompt
  promptEvent.prompt();
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt
    window.deferredPrompt = null;
  });