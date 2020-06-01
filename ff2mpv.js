function ff2mpv(url) {
  const link = url.replace(/^(https?|ftp):\/\//, 'ytdl://');
  browser.tabs.executeScript({code: `window.location = "${link}";`});
}

browser.contextMenus.create({
    id: 'ff2mpv',
    title: 'Play in MPV',
    contexts: ['link', 'frame', 'tab', 'video', 'selection']
});

browser.contextMenus.onClicked.addListener(info => {
    if (info.menuItemId === 'ff2mpv') {
        const url = info.linkUrl || info.srcUrl || info.frameUrl || info.selectionText || info.pageUrl;
        if (url) ff2mpv(url);
    }
});

browser.browserAction.onClicked.addListener(tab => ff2mpv(tab.url));