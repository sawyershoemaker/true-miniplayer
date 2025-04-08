(function() {
  // function to toggle PiP
  function togglePictureInPicture() {
    const video = document.querySelector('video');
    if (!video) {
      console.error("TrueMiniplayer: No video element found.");
      return;
    }
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(err => console.error(err));
    } else {
      video.requestPictureInPicture().catch(err => console.error(err));
    }
  }

  // attach ovverride to youtube's button
  function attachMiniplayerOverride() {
    const button = document.querySelector('.ytp-miniplayer-button');
    if (button && !button.dataset.trueMiniplayerBound) {
      button.dataset.trueMiniplayerBound = "true";  // Prevent duplicate bindings.
      button.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        togglePictureInPicture();
      }, true);
    }
  }

  // create all event listeners
  function setupEventHandlers() {
    attachMiniplayerOverride();

    // listen for keydown to trigger PiP
    document.addEventListener('keydown', function(event) {
      const activeTag = event.target.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || event.target.isContentEditable) {
        return;
      }
      if (event.key.toLowerCase() === 'i') {
        event.preventDefault();
        event.stopPropagation();
        togglePictureInPicture();
      }
    }, true);
  }

  setupEventHandlers();

  // mutationobserver incase DOM is modified
  const observer = new MutationObserver(() => {
    attachMiniplayerOverride();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('yt-navigate-finish', () => {
    setupEventHandlers();
  });
})();
