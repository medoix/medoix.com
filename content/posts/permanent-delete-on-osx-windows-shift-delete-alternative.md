---
title: Permanent Delete on OSX (Windows Shift + Delete Alternative)
date: 2013-07-16 09:54:40
tags:
  - Shell
  - Script
  - Preferences
  - Apple
  - OSX
categories:
  - Apple OSX
---
Create an Automator service or application to facilitate executing the `rm` shell command, which will permanently delete files or folders and skip the trash.

For example, start with creating a new Service in **Automator.app**.

* Select `files or folders` as input, you probably also want to limit the availability of this service to the Finder app.

![Automator service input](fYhEV1.png)

* Optionally, but highly recommended, first add an `Ask for Confirmation` step to the workflow.

![Confirmation step](RQ6Kk1.png)

* Finally, add the `Run Shell Script` step to the workflow. Make sure to pass input `as arguments`. Then you can put in the following script:

```bash
for f in "$@"
do
    rm -rf "$f"
done
```
![Input shell script](jX6JP1.png)

You can also add a `-P` parameter to `rm` for additional security while deleting. For an extra nicety, you can add some audible feedback by adding the following command at the end of the shell script:
```bash
afplay "/System/Library/Components/CoreAudio.component/Contents/SharedSupport/SystemSounds/finder/empty trash.aif"
```
Save your service, and it should be ready to use in Finder from the Services menu in the menu bar. You can also configure a keyboard shortcut to your service in the Keyboard preference pane of System Preferences.

![Services menu](P76SF1.png)

![Service in action](AmTn61.png)

Instead of creating a service, you could similarly create an application in Automator, which you can pin in the Dock so you can drag files to it.
