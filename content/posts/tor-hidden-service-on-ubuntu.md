---
title: Tor Hidden Service on Ubuntu
date: 2012-01-28 20:45:23
tags:
  - SMTP
  - SSH
  - Tor
  - Linux
  - Ubuntu
categories:
  - Linux OS
---
**NOTE:** This article does not explain how to setup apache or any other services apart from the tor application for hidden_service.

I have recently been migrating all of my browsing, email and communications etc through the [Tor Network](http://torproject.org "Tor Project").

One of the cool features of the onion router is the ability to setup what is referred to as a hidden service. This is just what it sounds like, a domain (16characters.onion) randomly generated and completely anonymous through the Tor network can be configured to point to a local service port. (Apache, SSH, SMTP etc)

To do this on my Ubuntu server all i had to do was the following...
```bash
sudo apt-get update
sudo apt-get install tor
```

Now that tor is installed we can create the hidden_service folder.
```bash
sudo mkdir /var/lib/tor/hidden_service
sudo chown debian-tor:debian-tor /var/lib/tor/hidden_service
```

This folder is where the private_key and hostname files will be created and stored.

We now want to add our hidden_service to our torrc file (tor config file).
```bash
sudo nano /etc/tor/torrc
```

And un-comment the following lines (remove the # from the start of each line)
```bash
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 127.0.0.1:80
```

The above two lines tell tor where to store the files as mentioned above and also what service you want to map to. In my case port 80 (Apache Web Server) and it is running on the local server (127.0.0.1)

CTRL+X to quit nano and hit Y to save the file.

Now we want to reboot the tor service so it can pick up the new settings and generate our hostname.
```bash
sudo /etc/init.d/tor restart
```

Tor will restart and the private_key and hostname files will be generated in the folder as above. You can now open your hostname file to retrieve your 16character.onion domain name and put it to good use.
