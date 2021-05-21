---
title: Make Password Asterisks Visible in your Mac or Linux Terminal
date: 2013-08-30 08:41:53
tags:
  - Apple
  - Linux
  - OSX
  - Server
  - SSH
  - Terminal
categories:
  - Linux OS
---
![Linux Show Password Example](original.jpg "Default Password View")

When you run a command with **sudo** in Linux, the terminal prompts you to type in your password and doesn't give you any visual feedback. Here's a quick tweak that'll bring back those familiar asterisks (*) when you type in your password.

I'm a fast typer, so when I mess up my password, I have to start over from scratch. With asterisks, it's a lot easier—and seeing as no one's looking over my shoulder in my home office, it doesn't matter how obscured my password is.

To bring back those asterisks run the following command in a Terminal:
```bash
sudo visudo
```
Scroll down to the line that looks like this:
```bash
Defaults        env_reset
```
and change it to this:
```bash
Defaults        env_reset,pwfeedback
```
Press Ctrl+X to finish editing, Y to save changes, and Enter to exit if you're on Ubuntu. Other Linux distros may have different commands depending on the default editor. Mac users, for example, use vi, and will have to type **:wq!** and press Enter to exit.

Now, when you run a command with sudo, you should get visual feedback when you type in your password. This should work in all versions of Ubuntu after version 10.04, as well as many other versions of Linux. We also tested it on a Mac running OS X 10.9 Mavericks. Check out the link below for more ways to tweak how sudo works.
