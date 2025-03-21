import browser from "webextension-polyfill";

browser.action.onClicked.addListener(() => {
  const url = browser.runtime.getURL("src/page/index.html");
  browser.tabs.create({ url });
});
