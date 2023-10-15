function ff2mpv(url) {
  var link = url.replace(new RegExp('^(http|https)://', 'i'), 'ytdl://');
  browser.tabs.executeScript({ code: `window.location = "${link}";` });
}

browser.contextMenus.create({
  id: 'ff2mpv',
  title: 'Play in MPV',
  contexts: ['link', 'frame', 'tab'],
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'ff2mpv') {
    const url = info.linkUrl || info.frameUrl || info.pageUrl;
    if (url) ff2mpv(url);
  }
});

browser.browserAction.onClicked.addListener((tab) => {
  ff2mpv(tab.url);
});
