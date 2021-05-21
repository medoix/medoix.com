---
title: Change MySQL Database Location
date: 2012-02-19 06:49:32
tags:
  - HDD
  - MySQL
  - Database
  - Linux
  - Apparmor
categories:
  - Linux OS
---
So considering that i am using a 8GB USB Stick as my OS HDD it tends to get full easily and i need to clean stuff up or move things around. This happened recently with my fairly large databases.
Also because of read/write cycles are high i couldn't imagine this would be good for my flash drive HDD and therefore decided to move it!

Stop MySQL
```bash
/etc/init.d/mysql stop
```
Move existing data directory (which is located in _/var/lib/mysql_) to new dir _/usr/new_datadir_
```bash
mv /var/lib/mysql /usr/new_datadir
```
Create symlink from new dir to old one
```bash
ln -s /usr/new_datadir /var/lib/mysql
```
Don't change _/etc/mysql/my.cnf_

Ubuntu uses some security software called **AppArmor** that specifies the areas of your filesystem applications that are allowed to access. Unless you modify the AppArmor profile for MySQL, you'll never be able to restart MySQL with the new datadir location.

In the terminal, enter the command
```bash
vim /etc/apparmor.d/usr.sbin.mysqld
```
Duplicate the lines beginning with _/var/lib/mysql_ and replace duplicated strings with _/usr/new_datadir_

In my case it was:
```bash
/var/lib/mysql/ r,
/var/lib/mysql/** rwk,
#
/usr/new_datadir r,
/usr/new_datadir** rwk,
```
Restart the AppArmor profiles
```bash
/etc/init.d/apparmor restart
```
Restart MySQL
```bash
/etc/init.d/mysql restart
```
MySQL should now start without any errors, have fun!
