ff2mpv (for Windows)
======

This is a Firefox addon for playing URLs in MPV.

Clicking the little icon in your toolbar will make MPV attempt to play the current URL.

If you want to play a specific URL on a page, right click it and click the "Play in MPV"
context button.

## Usage

**REQUIREMENTS**: No external helper is needed. Except for *[youtube-dl](https://github.com/rg3/youtube-dl)* being on the same folder as mpv.

1. Add YTB protocol to the registry (*add-ytb-protocol.reg*). It will redirect the URL to MPV. Full path to the MPV executable must be replaced in the ".reg" file to reflect your installation.

2. Copy the "portable_config' folder the same place where MPV is. It contains a lua script that makes MPV handle the YTB protocol and extract the URL.

PS: same reg file and lua script can be used with the Chrome extension "web2mpv".

## License

The source code in this repository is licensed under the MIT license.

The icons in this repository are licensed by the MPV team under GNU LGPL, version 2.1.
