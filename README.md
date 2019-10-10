ff2mpv (for Windows)
======

This is a Firefox addon for playing URLs in MPV.

Clicking the little icon in your toolbar will make MPV attempt to play the current URL.

If you want to play a specific URL on a page, right click it and click the "Play in MPV"
context button.

The extension can also be activated by the *Ctrl+Shift+V* shortcut.

## Requirements

1. [Add-on for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ff2mpv-for-windows). If you're on Linux or Mac, check out the [original version](https://github.com/woodruffw/ff2mpv).
2. *[mpv for Windows](https://mpv.srsfckn.biz)*.
3. *[youtube-dl](https://ytdl-org.github.io/youtube-dl)* executable needs to be in the same folder as mpv.

## Usage
A native client is not needed. All this extension does is to call MPV via the **ytdl://** protocol, which is natively supported. The path to the MPV executable must be added to the registry, though. This can be done by one of the two methods:

### Method 1
1. Download the [ytdlProtocol.bat](https://github.com/eastmarch/ff2mpv/archive/master.zip) file.
2. Move it to the folder where MPV is located (important!).
3. And run the script a single time. No need for administrator permissions.

### Method 2
1. Download the [ytdlProtocol.reg](https://github.com/eastmarch/ff2mpv/archive/master.zip) file.
2. Open it with a text editor.
3. Change the path to the MPV executable inside the file to reflect your installation.
3. Double-click it on file explorer to merge the changes to the registry.

## License

The source code in this repository is licensed under the MIT license.

The icons in this repository are licensed by the MPV team under GNU LGPL, version 2.1.
