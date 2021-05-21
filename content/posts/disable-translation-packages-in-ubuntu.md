---
title: Disable Translation Packages in Ubuntu
date: 2012-01-22 07:40:59
tags:
  - Languages
  - Ubuntu
  - Linux
categories:
  - Linux OS
---

To disable downloading translations, create a file named /etc/apt/apt.conf.d/99translations & put the following in it:
```bash
Acquire::Languages "none";
```
You may also need to remove existing translation files in /var/lib/apt/lists/
I personally just empty the lists folder and do an apt-get update
