---
title: Stop OS X Terminal SSH Timeout
date: 2012-02-24 07:57:54
tags:
  - Linux
  - Timeout
  - SSH
  - Terminal
  - Apple
categories:
  - Apple OSX
---
There are three ways to do this using the ServerAliveInterval to send data along every few seconds. Replace the "10" with the number of seconds between pings.

From least to most global:

1\. Add the option on the command line:
```bash
ssh -o ServerAliveInterval=10 keepsdroppingme.com
```

2\. Add the option to your personal ssh config by creating/editing ~/.ssh/config:
```bash
# This is ~/.ssh/config
# For all hosts
ServerAliveInterval 10
# For a selection of hosts
Host keepsdroppingme.com alsokeepsdroppingme.com
  ServerAliveInterval 10
```

3\. Add the option to the system-wide ssh config by editing /etc/ssh_config. (Syntax the same as above.)
