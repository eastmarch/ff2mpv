ff2mpv (for Windows)
======

This is a Firefox addon that makes it easier to stream videos in MPV.

Clicking the icon in your toolbar will make MPV attempt to play the current URL.

If you want to play a specific link on a page, right-click it and select the "Play in MPV" context menu.

The extension can also be activated by the *Ctrl+Shift+Space* shortcut.

## Requirements
1. [Add-on for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ff2mpv-for-windows/). If you're on Linux or Mac, check out the [original version](https://github.com/woodruffw/ff2mpv).

## Configuration
A native client is not needed. All this extension does is call MPV via the **ytdl://** protocol, which is natively supported. The path to the MPV executable must be added to the registry, though. This can be done by one of the methods below.

### Method #1 (Beginner / Windows 11)
1. Open the Windows Terminal.
2. Install **[mpv.net](https://github.com/mpvnet-player/mpv.net)** using the package manager: \
`winget install mpv.net`
3. Install **[yt-dlp](https://github.com/yt-dlp/yt-dlp#release-files)**: \
`winget install yt-dlp.yt-dlp`
4. Go to YouTube and try it on a video.
5. Select *Always allow this extension to open **ytdl** links*.

### Method #2 (Advanced / .bat)
1. Download and extract **[mpv for Windows](https://mpv.io/installation/)** to your destination folder.
3. Download the **[yt-dlp](https://github.com/yt-dlp/yt-dlp#release-files)** executable and put it inside the MPV folder.
4. Get the **[ytdlProtocol.bat](https://github.com/eastmarch/ff2mpv/archive/master.zip)** file from this repository.
5. Move it to the folder where MPV is located (important!).
6. And run the script a single time. No need for administrator permissions.

### Method #3 (Advanced / .reg)
1. Make sure **mpv** and **yt-dlp** are stored in the same folder.
2. Get the **[ytdlProtocol.reg](https://github.com/eastmarch/ff2mpv/archive/master.zip)** file from this repository.
4. Open it with a text editor.
5. Change the path to the MPV executable inside the file to reflect your installation.
6. Double-click it on file explorer to merge the changes to the registry.

## Thanks
To @Daktyl198 for the contribution and for getting the protocol added to mpv.net: \
https://github.com/mpvnet-player/mpv.net/issues/341

## License

The source code in this repository is licensed under the MIT license.

The icons in this repository are licensed by the MPV team under GNU LGPL, version 2.1.
