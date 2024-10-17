
window.onload = () => {
    const $startButton = document.querySelector('.start');
    console.log("startButton :", $startButton);
    
    $startButton.onclick = () => {
      console.log("startButton clicked");

      // Get active tab
      chrome.tabs.query({
        active: true,
        currentWindow: true,
      }, (tabs) => {

        // Send message to script file
        chrome.tabs.sendMessage(
          tabs[0].id,
          { injectApp: true },
          response => window.close()
        );
      });

    };

    console.log("All OK!");
  }
  