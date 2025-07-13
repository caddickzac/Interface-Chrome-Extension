// background.js — no DOM allowed

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

// You can still use listeners and storage APIs here
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "ping") {
    console.log("Ping received from", sender);
    sendResponse({ response: "pong" });
  }
});
