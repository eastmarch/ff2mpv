function ff2mpv(url) {
    var link = url.replace(new RegExp("^.*//"),"ytdl://")
    browser.tabs.executeScript({
        code: `window.location = "` + link + `";`
    });
}

browser.contextMenus.create({
    id: "ff2mpv",
    title: "Play in MPV",
    contexts: ["link", "frame"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "ff2mpv":
            /* These should be mutually exclusive, but,
               if they aren't, this is a reasonable priority.
            */
            url = info.linkUrl || info.frameUrl;
            if (url) ff2mpv(url);
            break;
    }
});

browser.browserAction.onClicked.addListener((tab) => {
    ff2mpv(tab.url);
});
