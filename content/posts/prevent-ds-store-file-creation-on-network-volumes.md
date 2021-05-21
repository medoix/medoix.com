---
title: Prevent .DS_Store File Creation on Network Volumes
date: 2011-08-13 07:25:18
tags:
  - AFP
  - NFS
  - Apple
  - OSX
  - Network
categories:
  - Apple OSX
---
[This KnowledgeBase article](http://docs.info.apple.com/article.html?artnum=301711) explains how to prevent OS X from creating new **.DS_Store** files when opening folders on remote volumes mounted using SMB/CIFS, AFP, NFS, and WebDAV. The creation of **.DS_Store** files (and more so, **._AppleDouble** files which are not covered in this hint) is frequently the source of complaints against Mac users, who often leave a trail of these files scattered throughout the filesystem when "visiting" a Windows computer. Even with this hint in place, the .DS_Store files will continue to be created on local volumes (which is a good thing).

To prevent the creation of these files, open the Terminal and type:
```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```
It may be necessary to log out and back in, or even to restart the computer (which is what the article states), for the change to take effect.

**Note:** Most of the settings controlled by data in .DS_Store files are "cosmetic" in nature -- for example, Finder window position, view style, icon position, etc. However, .DS_Store files in OS X also store Finder "comments" so in this sense, disabling .DS_Store files may result in loss of data.
