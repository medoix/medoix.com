---
title: Enable VNC/Management on OSX by SSH
date: 2011-11-24 09:56:32
tags:
  - SSH
  - VNC
  - OSX
  - Apple
categories:
  - Apple OSX
---
I had the VNC based remote access feature of OS X enabled on 10.7 but somehow it got switched off. I fiddled around a bit and figured out how to enable remote access from a remote SSH shell. Note that these instructions will lead to manual configuration and you will not be able to enable/disabled the services from the System Preferences anymore.  In my case I used this to get in when I needed to but latter switched it back off and used the System Preferences setting.

To manual switch on remote access from the terminal:
```bash
ssh username@mac_ip_address
cd /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources
sudo ./kickstart -activate -configure -access -on -privs -all -restart -agent
```
To switch this override back off and thus allow the System Preferences to manage screen sharing again run the following. (This will disconnect any active sessions and require physical access to re-enable it.)

```bash
sudo ./kickstart -activate -restart -agent
```
