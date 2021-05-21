---
title: Prevent VirtualBox Guest Syncing Time with Host
date: 2019-01-26 07:58:53
tags:
  - VirtualBox
  - Ntp
  - Time
  - Sync
categories:
  - Windows OS
---

Recently i was creating a few different guest machines inside my VirtualBox host (Windows) and noticed an odd theme of APT not being able to update due to the resources obtained being from the future! (i am a time traveler). This usually screams out one thing.

**Check the system time!**

Upon checking my guest machines time it was in fact days behind where it should be, this meant that even with the VirtualBox guest tools installed AND the "Hardware clock in UTC" option selected under Motherboard, the guest was still not getting the right time.

This also meant that the local ntp daemon was not syncing externally as it was purely relying on the host sync to be correct.

Luckily the the Virtualbox user manual, of all things, does contain a solution under the Disabling the Guest Additions time synchronization heading:

Once installed and started, the VirtualBox Guest Additions will try to synchronize the guest time with the host time. This can be prevented by forbidding the guest service from reading the host clock:

```
VBoxManage setextradata "VM name" "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" 1
```

To run the above command open CMD.exe as Administrator.

Navigate to the VirtualBox folder on your machine

```
cd C:\Program Files\Oracle\VirtualBox
```

Then enter the command as seen above (replacing VM name with the name of the virtual machine you wish to effect).

The guest will now not sync with the host and should have the right time/date set by the NTP daemon (as long as you have the right Region/Location set in Settings).
