---
title: PBCopy From SSH to Local OSX
date: 2014-11-27 11:43:14
tags:
  - Linux
  - Apple
  - OSX
  - Programming
  - SSH
categories:
  - Apple OSX
---
I have been wondering for a long time how i could copy large config files or any file for that matter from nano/vi inside an SSH session to my local clipboard (OSX). As you can imagine copying one section at a time from your favourite text editor has long been a pain in the rear end.

The trick uses netcat (nc) to pipe text over an SSH connection to a local listener that passes it to pbcopy. The below should work on both Linux/Unix servers as well as OS X servers.

# Local Machine Configuration

The quickest way to "networkify" pbcopy is to run the following snippet in a dedicated terminal tab:
```bash
while (true); do nc -l 2224 | pbcopy; done
```
We just asked bash to launch netcat (nc), repeatedly wait for incoming connections on localhost:2224, and pipe any data received into pbcopy.

Now locally, the following two are equivalent:
```bash
echo "This text gets sent to clipboard" | pbcopy
```
```bash
echo "This text gets sent to clipboard" | nc localhost 2224
```
Exposing our daemon to machines we SSH to.

For security reasons, our "pbcopy daemon" only allows connections from localhost. But the goal is to allow you to pipe text to your local clipboard from a server you've SSHd into. This is done via SSH's reverse tunnel forwarding feature:

SSH in to remote-server as usual, except -R asks that remote's port 2224 is forwarded to your laptop's localhost:2224
```bash
ssh user@remote-server.com -R 2224:localhost:2224
```
If you'd prefer to enable reverse tunneling of port 2224 all your future outgoing SSH connections, the following adds the appropriate line to ~/.ssh/config:
```bash
echo "RemoteForward 2224 localhost:2224" &gt;&gt; ~/.ssh/config
```
Having established the SSH reverse tunnel, you can now do the following from the remote server:
```bash
cat large-file.txt | nc -q0 localhost 2224
```
**-q0** is required for GNU's version of netcat to exit on eof; the osx version does it by default
If the remote server is missing nc, either run sudo apt-get install netcat -y or use telnet instead:
```bash
cat large-file.txt | telnet localhost 2224
```
Enjoy your newly-supercharged clipboard!

### Getting Fancier

If your laptop is running linux, replacing pbcopy with xcopy should work:
```bash
while (true); do nc -l 2224 | xcopy; done
```
For a more verbose version of our "pbcopy daemon" that prints what's being sent to the clipboard, try this:
```bash
while (true); do echo "Waiting..." ; nc -l 2224 | pbcopy; echo "Copied: "; pbpaste | sed 's/^/ /'; done
```
To automatically start the "pbcopy daemon" on boot, you should use launchd.

# Remote Machine/Server Configuration

When it comes time to create the shell script on the remote machine, create one called /usr/local/bin/rpbcopy with the contents below:
```bash
#!/bin/bash

unamestr=`uname`
if [[ "$unamestr" == 'Linux' ]]; then
  echo -e "Linux SSH: Copying to Clipboard."
  cat | nc -q0 localhost 2224
elif [[ "$unamestr" == 'FreeBSD' ]]; then
  [ -n "$SSH_CLIENT" ] &amp;&amp; SESSION_TYPE="remote"
  if [[ $SESSION_TYPE == "remote" ]]; then
    echo -e "OS X SSH: Copying to Clipboard."
    cat | nc -c localhost 2224
  else
    echo -e "OS X Local: Copying to Clipboard."
    cat | pbcopy
  fi
fi
```
Make it executable (chmod a+x /usr/local/bin/rpbcopy). Then, in your remote ~/.bash_profile, add the line:
```bash
alias pbcopy="/usr/local/bin/rpbcopy"
```
That will create the pbcopy on Linux/Unix or replace the default pbcopy command on OS X with the script above, which checks whether you’re in an SSH session and runs nc or the original pbcopy accordingly.

Instead of the if statement in the shell script, you could also check for the SSH session (using the same check for $SSH_CLIENT) in your .bash_profile and only alias pbcopy if you’re logged in remotely. Your choice.

Now, when you’re logged in on the remote Linux/OS X system over SSH, you can type cat filename|pbcopy or pipe the output of a command to pbcopy and it will show up on your local clipboard. It’s the same result you’d expect if you were just working in Terminal locally, so it requires no change of habits. Handy stuff.
