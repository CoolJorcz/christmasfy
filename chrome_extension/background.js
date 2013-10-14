chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("MERRY CHRISTMAS!")
  chrome.tabs.executeScript(null, {
    file: "application.js"
  });
});