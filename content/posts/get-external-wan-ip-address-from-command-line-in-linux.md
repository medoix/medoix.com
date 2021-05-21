---
title: Get External (WAN) IP Address from Command Line in Linux
date: 2012-02-03 18:14:56
tags:
  - IP
  - URL
  - Linux
  - Terminal
  - DNS
categories:
  - Linux OS
---
Many services and applications require you to know your external (WAN) IP address. There are plenty of web sites that allow you to do this, but here are a couple of simple ways to do this from the command line in Linux.

The first method uses the [cURL](http://curl.haxx.se/ "cURL") utility, which is basically a command-line utility for retrieving data using URL syntax. In Ubuntu or Debian, you can install cURL from the repositories using the command:

```bash
sudo apt-get install curl
```

After installing cURL, just run this command to get your external IP address:

```bash
curl ifconfig.me/ip
```

You can replace ifconfig.me with other service hostnames/URLs, such as:
whatismyip.org
icanhazip.com
tnx.nl/ip
myip.dnsomatic.com
ip.appspot.com
checkip.dyndns.org:8245
whatismyip.com
jsonip.com

The second method is really a variation on the one above and uses the wget command. You can use the same hostnames/URLs as above with this command:

```bash
wget -qO- ifconfig.me/ip
```

Have fun! And let me know your tips for this in the comments.
