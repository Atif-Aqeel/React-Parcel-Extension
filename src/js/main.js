
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div> Your App injected to DOM correctly! </div>
    )
  }
}


// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  console.log("request :", request);
  console.log("sender :", sender);
  console.log("response :", response);
  
  // If message is injectApp
  if(request.injectApp) {
    // Inject our app to DOM and send response
    injectApp();

    response({
      startedExtension: true,
    });
  }
});

function injectApp() {
  console.log("IN injectApp function ");

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);

  console.log("OK!");
}
