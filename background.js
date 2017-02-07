chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.indexOf("https://www.facebook.com/events/") != -1) {
    chrome.tabs.executeScript(null, {file: "content.js"});
  }
});