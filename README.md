ff2mpv (for Windows)
======

This is a Firefox addon that makes it easier to stream videos in the MPV player.\
Clicking the icon in your toolbar will make MPV attempt to play the current URL.\
If you want to play a specific link on a page, right-click it and select the context menu.\
This extension can also be activated by the *Ctrl+Shift+Space* shortcut.

## Requirements
1. **[Add-on for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ff2mpv-for-windows/)**
    - If you're on Linux or Mac, check out the [original version](https://github.com/woodruffw/ff2mpv).
2. **[mpv for Windows](https://mpv.io/installation/)**
    - Download: [mpv-x86_64-windows-msvc.zip](https://nightly.link/mpv-player/mpv/workflows/build/master/mpv-x86_64-pc-windows-msvc.zip)
    - Extract the zip file to your destination folder.
3. **[yt-dlp](https://github.com/yt-dlp/yt-dlp)**
    - Allows MPV to open videos directly from streaming sites.
    - Needs to be updated regularly.
    - Download: [yt-dlp.exe](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#recommended)
    - Put the executable inside the MPV folder.
    - Alternative install: `winget install yt-dlp.yt-dlp`
     
## Configuration
A native client is not needed. All this extension does is call MPV via the **ytdl://** protocol, which is natively supported. The path to the MPV executable must be added to the registry, though. This can be done by one of the methods below.

### Method #1
1. Make sure **mpv** and **yt-dlp** are installed / stored in the same folder.
2. Get the **[ytdlProtocol.bat](https://github.com/eastmarch/ff2mpv/archive/master.zip)** file from this repository.
3. Extract it to the folder where MPV is located (important!).
4. Run the script a single time. No need for administrator permissions.
5. Go to YouTube and try it on a video.
6. Select *Always allow this extension to open **ytdl** links*.

### Method #2
1. Make sure **mpv** and **yt-dlp** are installed / stored in the same folder.
2. Get the **[ytdlProtocol.reg](https://github.com/eastmarch/ff2mpv/archive/master.zip)** file from this repository.
4. Open it with a text editor.
5. Change the path to the MPV executable in the editor to reflect your installation.
6. Save, close and double-click it on file explorer to merge the changes to the registry.

## Thanks
To @Daktyl198 for the contribution.

## License

The source code in this repository is licensed under the MIT license.

The icons in this repository are licensed by the MPV team under GNU LGPL, version 2.1.
