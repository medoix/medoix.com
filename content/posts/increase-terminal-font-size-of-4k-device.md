---
title: Increase Terminal Size Font of 4k Device
date: 2021-04-17 15:46:43
tags:
  - Linux
  - Font
  - 4k
  - DPI
categories:
  - Linux
---
When booting a new Linux install on a 4k HiDPI screen the terminal font size becomes so small that it is near impossible to read.

In order to increase the font size i found this neat little setting that does just that, now you can read your terminal before you `startx`.

Edit `/etc/vconsole.conf` and add/replace with the following to get larger font on the next boot.

```bash
FONT=latarcyrheb-sun32
```