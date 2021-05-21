---
title: Mac OSX Sudo With Fingerprint
date: 2017-11-27 12:14:58
tags:
  - Apple
  - Security
  - Fingerprint
  - Sudo
categories:
  - Apple OSX
---
Have a shiny new Macbook Pro with touch bar?
Sick and tired of typing your local password each time you wanrt to sudo anythiong within the terminal?

Well boy do i have an awesome solution for you!

Open up terminal and edit the following file (this will be the last time you need to enter your password for sudo)

```bash
sudo nano /etc/pam.d/sudo
```

Add the following at the top of the file

```bash
auth       sufficient     pam_tid.so
```

Save and close the file and restart the terminal.

Now whenever you SUDO anything you will be prompted to use your fingerprint!
