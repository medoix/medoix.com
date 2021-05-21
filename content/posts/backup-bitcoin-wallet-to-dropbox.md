---
title: Backup Bitcoin Wallet to Dropbox
date: 2012-01-28 07:20:54
tags:
  - Dropbox
  - Bitcoin
  - Apple
  - OSX
categories:
  - Crypto
---
So i have my Bitcoin application running and as the latest version now supports wallet encryption i have this turned on with a long password.

I was looking for a way to backup my wallet in case i need to format my machine or things go south.

First quit the Bitcoin application and then move the wallet.dat file from the Bitcoin folder located at "~/Library/Application Support/Bitcoin" and put it in your Dropbox folder as below.

```bash
mkdir -p ~/Dropbox/Bitcoin
mv ~/Library/Application Support/Bitcoin/wallet.dat ~/Dropbox/Bitcoin
```

Secondly i now needed to create a link from the location that the Bitcoin application looks at to where the wallet file now resides.

```bash
ln -s ~/Dropbox/Bitcoin/wallet.dat ~/Library/Application Support/Bitcoin/wallet.dat
```

Now start the Bitcoin application and your address's should all be there and correct.
