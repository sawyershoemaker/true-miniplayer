(function() {
    // attach handler to override youtube's button
    function attachMiniplayerOverride() {
      const button = document.querySelector('.ytp-miniplayer-button');
      if (button && !button.dataset.trueMiniplayerBound) {
        button.dataset.trueMiniplayerBound = "true";  // Avoid duplicate bindings.
        button.addEventListener('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
  
          // use the native PiP API on the video element
          const video = document.querySelector('video');
          if (video) {
            if (document.pictureInPictureElement) {
              document.exitPictureInPicture().catch(err => console.error(err));
            } else {
              video.requestPictureInPicture().catch(err => console.error(err));
            }
          } else {
            console.error("TrueMiniplayer: No video element found.");
          }
        }, true);
      }
    }
  
    // use MutationObserver to catch dynamic insertion of the miniplayer button.
    const observer = new MutationObserver(() => {
      attachMiniplayerOverride();
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
    attachMiniplayerOverride();
  })();
  