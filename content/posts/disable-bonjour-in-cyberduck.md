---
title: Disable Bonjour in Cyberduck
date: 2015-08-06 12:32:01
tags:
  - Bonjour
  - Growl
  - Cyberduck
  - SFTP
  - OSX
  - Apple
categories:
  - Apple OSX
---

I used Cyberduck on Mac OS X for quite a lot of tasks including talking to S3 buckets or even SFTP'ing into my Linux servers.

Every time I load up Cyberduck, I get flooded with Bonjour Growl notifications. Since I never use Bonjour with Cyberduck, I figured it’s acceptable to disable it. It’s a simple Terminal command, like so many other things are in the Mac world. To disable Bonjour, fire up Terminal and execute this command:

``` bash
defaults write ch.sudo.cyberduck rendezvous.enable false
```

If you want to re-enable Bonjour, do the same command but change false to true.
