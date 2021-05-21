---
title: Make Sudo Sessions Last Longer in Linux
date: 2013-08-30 08:52:16
tags:
  - Linux
  - Server
  - SSH
  - Terminal
categories:
  - Linux OS
---
![Linux Sudo Extention Example](original11.jpg "Sudo Extention Commands")

When you run **sudo** in Ubuntu, your administrative privileges last for 15 minutes by default so you don't have to type in your password with every command. If that is too long or short for your tastes, you can change it with a simple tweak.

Run the following command in a Terminal:
```bash
sudo visudo
```
Scroll down to the line that looks like this:
```bash
Defaults        env_reset
```
and change it to this:
```bash
Defaults        env_reset,timestamp_timeout=30
```
Change **30** to the time, in minutes, that you want it to wait before it times out. You can also change it to **0** if you want a password prompt every time you run **sudo**, or **-1** if you never want a password prompt (though we don't recommend this).

Press Ctrl+X to finish editing, Y to save changes, and Enter to exit if you're on Ubuntu. Other Linux distros may have different commands depending on the default editor.
