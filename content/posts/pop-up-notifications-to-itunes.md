---
title: Pop-Up Notifications to iTunes
date: 2011-11-24 09:59:56
tags:
  - Notifications
  - iTunes
  - Apple
  - OSX
  - Music
categories:
  - Apple OSX
---
Mac: Usually, if you want to find out what’s playing in iTunes, you either need to right-click the icon or open it.

Macworld found a method that only requires a little work in Terminal to enable a small pop-up on your dock showing the currently-playing track.The process is simple, but only works in OS X Lion.

First, boot up Terminal in your Utilities folder on a Mac, then, type:
```bash
defaults write com.apple.dock itunes-notifications -bool TRUE;killall Dock
```
Now, when you’re playing a track a small pop-up will show in your dock for a few seconds with information on the currently-playing track. If you decide you don’t like it, disabling it is simple. Back in Terminal, type:
```bash
defaults delete com.apple.dock itunes-notifications
```
For ways to customise the pop-up, hit up the post linked below.
