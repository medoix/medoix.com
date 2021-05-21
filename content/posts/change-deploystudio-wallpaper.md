---
title: Change DeployStudio Wallpaper
date: 2011-09-02 09:40:53
tags:
  - Pre-Environment
  - DeployStudio
  - OSX
  - Apple
categories:
  - Apple OSX
---
I have been doing quite a bit of Mac OS X Image work lately and have found DeployStudio to be THE best FREE and easy to customise solution for doing this.

One thing i wanted to do was change the default wallpaper for the DeployStudioRuntime.nbi that is created and used as a windows Pre Environment equivalent.

I achieved this by going into the DeployStudioRuntime.nbi folder located on the server at:

```bash
/Library/NetBoot/NetBootSP0
```

I then mounted the 'DeployStudioRuntime.sparseimage' file and then navigated to the bellow folder inside the image and replaced the file 'DefaultDesktop.jpg' with my custom wallpaper.

```bash
/System/Library/CoreServices
```

I made sure the image i created was a high res image to make it look nicer.
