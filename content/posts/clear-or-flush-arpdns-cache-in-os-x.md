---
title: Clear or Flush ARP/DNS Cache in OSX
date: 2011-08-11 10:57:13
tags:
  - OSX
  - Cache
  - ARP
  - Apple
  - Network
categories:
  - Linux OS
---
To clear the address resolution protocol cache, simply enter the following command in the terminal.
```bash
sudo arp -a -d
```
To clear the domain name system cache, simply enter the following command in the terminal.
```bash
dscacheutil -flushcache
```
