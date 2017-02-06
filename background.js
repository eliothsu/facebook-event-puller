chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
  if (tab.url.indexOf("https://www.facebook.com/events/") != -1) {
    chrome.tabs.executeScript(null, {file: "content.js"});
  }
});