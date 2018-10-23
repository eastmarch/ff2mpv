ff2mpv (for Windows)
======

This is a Firefox addon for playing URLs in MPV.

Clicking the little icon in your toolbar will make MPV attempt to play the current URL.

If you want to play a specific URL on a page, right click it and click the "Play in MPV"
context button.

## Usage

**REQUIREMENTS**: *[youtube-dl](https://github.com/rg3/youtube-dl)* needs to be on the same folder as mpv.

1. Change the path to the MPV executable in *add-ytb-protocol.reg* to reflect your installation. Then add YTB protocol to the registry. 

2. Copy the "portable_config' folder the same place where MPV is. It contains a lua script that makes MPV handle URL's prefixed with "ytb://".

PS: same registry changes and lua script can be used with the Chrome extension "web2mpv".

## License

The source code in this repository is licensed under the MIT license.

The icons in this repository are licensed by the MPV team under GNU LGPL, version 2.1.
