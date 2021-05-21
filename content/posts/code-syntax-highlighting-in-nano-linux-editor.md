---
title: Code Syntax Highlighting in Nano (Linux Editor)
date: 2011-08-08 18:58:20
tags:
  - Nano
  - XML
  - Linux
  - Programming
  - Terminal
categories:
  - Linux OS
---
Today i was looking for a way to enable extended code syntax highlighting in the linux text editor nano, out of the box nano comes with limited functionality to do this. I will tell you how to download the needed files and add them to the nano configuration and you will be looking at much prettier code in no time.

**Firstly we need the syntax files:** [DOWNLOAD HERE](nano-supplement.tar)

**Secondly we need to extract the contents and move to the correct location:**
```bash
tar -xvf nano-supplement.tar
sudo chown root:root *nanorc
sudo mv *nanorc /usr/share/nano
```

**Thirdly the nanorc file needs to be modified to reference the new syntax files we just extracted and moved:**
Open the nanorc file for editing
```bash
sudo nano /etc/nanorc
```

Insert below lines at end of the nanorc file
```bash
## Config Files (.ini)
include "/usr/share/nano/ini.nanorc"
## Xorg.conf
include "/usr/share/nano/xorg.nanorc"
## CSS
include "/usr/share/nano/css.nanorc"
## XML
include "/usr/share/nano/xml.nanorc"
## Generic .conf
include "/usr/share/nano/conf.nanorc"
## PHP
include "/usr/share/nano/php.nanorc"
```
All done.

You should now be able to open PHP, CSS & XML files for example and see the new colours.
