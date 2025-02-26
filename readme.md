# TrueMiniplayer

**TrueMiniplayer** is a Chrome extension that overrides YouTube's native miniplayer functionality with Chrome's built-in Picture-in-Picture mode. This offers a more flexible viewing experience by allowing videos to play in a resizable, separate window.

## Overview

The original YouTube miniplayer keeps the video stuck on the same page, which can limit your browsing experience. TrueMiniplayer intercepts the native miniplayer button click and instead activates Chrome’s native Picture-in-Picture mode, letting you watch videos while using other tabs or applications.

### Old Behavior
![Old Miniplayer](https://github.com/sawyershoemaker/true-miniplayer/demo/old_miniplayer.gif)

### New Behavior
![New Miniplayer](https://github.com/sawyershoemaker/true-miniplayer/new_miniplayer.gif)

## Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/sawyershoemaker/TrueMiniplayer.git
   
2. **Load the extension in Chrome:**
   - Open Chrome and navigate to chrome://extensions.
   - Enable **Developer Mode**.
   - Click **Load unpacked** and select the cloned extension folder.

4. **Usage:**
   - Navigate to any YouTube video page.
   - Click the miniplayer button to activate Chrome’s Picture-in-Picture mode.

## Files
- **manifest.json**: Contains configuration details for the extension.
- **content.js**: The content script that overrides YouTube's miniplayer button.
- **icon.png**: The extension icon displayed in Chrome.

## Contributing
Contributions, issues, and feature requests are welcome!  

Feel free to check [issues page](https://github.com/sawyershoemaker/true-miniplayer/issues) if you want to contribute.