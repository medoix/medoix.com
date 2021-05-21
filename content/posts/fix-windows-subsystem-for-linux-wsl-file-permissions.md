---
title: Fix Windows Subsystem for Linux (WSL) File Permissions
date: 2021-01-05 11:55:02
tags:
    - Windows
    - Linux
    - WSL
    - Permissions
categories:
    - Linux OS
    - Windows OS
---

Windows 10 and WSL (windows Subsystem Linux) is very useful when wanting to run linux type tasks on your Windows 10 machine instead of booting up a dedicated Linux Virtual Machine for example. One downside is that Windows 10 WSL does a terrible job at emulating Linux permissions when it mounts the directories stored locally on the Windows filesystem.

There are two fixes we can do here to make this much nicer...

# Fix WSL Mount Permissions

## What it does?
You can read the “official” Microsoft documentation on their Dev Blog but here is my explanation line-by-line:

    The automount section changes the settings for drives that are automounted under /mnt
    The enabled key is probably unnecessary but it explicitly turns on automounting (default is true)
    The options key is a bit more interesting:
    metadata turns on a mostly parallel of file permission metadata that allows WSL file permissions changes to be persisted. It partially affects the underlying Windows permissions; for more details see the Dev Blog link above.
    umask value masks out (i.e. unsets) the group and others write bit for both files and directories
    fmask value masks out the group and others execute bit for just files

Files should now show up with a comfortable permission setting of 0644 and directories with 0755 if they’re mounted under /mnt.

## The Fix
Add this section to your WSL instance’s /etc/wsl.conf (the file probably does not exist, just create it):

```bash
[automount]
enabled = true
options = "metadata,umask=22,fmask=11"
```

# Fix Default Permissions

Newly created files and directories in the “real” Linux directory structure also get a bad set of default permissions: 0666 for files and 0777 for directories. This is controlled by the umask value which defaults to 0000 in WSL. There is a decently long bug report about this issue but the fix is easy enough. Add to your ~/.profile:

```bash
# Note: Bash on Windows does not currently apply umask properly.
if [[ "$(umask)" = "0000" ]]; then
  umask 0022
fi
```

Similar to the umask setting that we used in our /etc/wsl.conf the value of 0022 masks out the group and others write bit for both files and directories.