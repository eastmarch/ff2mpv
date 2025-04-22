'use strict';

browser.contextMenus.create({
  id: 'ff2mpv-link',
  title: 'Play link in MPV',
  contexts: ['link'],
});

browser.contextMenus.create({
  id: 'ff2mpv-tab',
  title: 'Play tab in MPV',
  contexts: ['tab'],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == 'ff2mpv-link') {
    playInMPV(tab.id, info.linkUrl, false);
  }
  if (info.menuItemId == 'ff2mpv-tab') {
    playInMPV(tab.id, info.pageUrl, false);
  }
});

browser.action.onClicked.addListener((tab) => {
  playInMPV(tab.id, tab.url, true);
});

function playInMPV(tabID, targetURL, pausePlayback) {
  let link = targetURL.replace(new RegExp('^(http|https)://', 'i'), 'ytdl://');
  browser.scripting.executeScript({
    target: { tabId: tabID },
    func: redirectMPV,
    args: [link, pausePlayback],
  });
}

function redirectMPV(redirectURL, pausePlayback) {
  window.location.href = redirectURL;
  if (pausePlayback) {
    const pageVideos = document.querySelectorAll('video');
    for (const video of pageVideos) {
      video.pause();
    }
  }
}