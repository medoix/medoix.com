---
title: Code Syntax Highlighting in VI (Linux Editor)
date: 2011-08-12 13:53:05
tags:
  - VI
  - Highlighting
  - Linux
  - Terminal
  - Programming
categories:
  - Linux OS
---
I recently wrote about how to [enable syntax highlighting in the linux editor NANO](http://medoix.com/2011/08/08/code-syntax-highlighting-in-nano-linux-editor).

Below i will explain how to enable such features in VI, as they are built in it is much easier.

**Move to your home directory and create/open the settings file:**
```bash
cd
vi .vimrc
```
**Enable syntax highlighting:**
```bash
syntax on
```
**Save using:**
```bash
:wq!
```
You will now have syntax highlighting enabled when using vi/vim as your editor of choice.
