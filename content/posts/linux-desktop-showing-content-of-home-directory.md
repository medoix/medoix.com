---
title: Linux Desktop Showing Content of Home Directory
date: 2019-01-26 08:22:24
tags:
  - Linux
  - Desktop
  - XDG
categories:
  - Linux OS
---

Ever had that awkward moment where you login to your Linux desktop and there are a LOT of files on the desktop that you are not sure about (even DOT files).

This usually means something has gone haywire with your configuration and the desktop is now set to a different folder (different than the default /home/user/Desktop folder).

This happened to me and i believe it was because i deleted my Desktop folder (don't ask) and it seems that XDG just took it upon itself to set its new location to my home (~/) directory and therefore i was seeing dot files and all the different folders associated.

To fix this you need to open up the user-dirs.conf and adjust the location for Desktop.

```
sudo nano ~/.config/user-dirs.dirs
```

Look for the line titled **XDG_DESKTOP_DIR** and adjust accordingly.

```
Broken
XDG_DESKTOP_DIR="$HOME"

Fixed
XDG_DESKTOP_DIR="$HOME/Desktop"
```

You may need to logout and back in again for the change to take effect but this will now be fixed.
