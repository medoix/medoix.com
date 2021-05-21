---
title: Remove Old Kernels in Ubuntu
date: 2012-11-05 15:33:34
tags:
  - Linux
  - Kernel
  - Cleanup
  - Ubuntu
  - Kernel
categories:
  - Linux OS
---
To get started, open Terminal. When it opens, run the commands below to view your current running kernel.
```bash
uname -r
```
![Step 1](Yd1k8tebSA1.png "Step 1")

Next, take notes of your current kernel. **DO NOT REMOVE THIS!**

![Step 2](hkHg33NuHR1.png "Step 2")

Next, type the command below to view / list all installed kernels on your system.
```bash
dpkg --list | grep linux-image
```
![Step 3](DSgaRhehgD1.png "Step 3")

Next, find all the kernels that which number are lower than your current kernel. When you know which kernel to remove, continue below to remove it.

![Step 4](zuyz-IjeiN1.png "Step 4")

Finally, run the commands below to remove the kernel you selected.
```bash
sudo apt-get purge linux-image-x.x.x.x-generic
```
![Step 5](pDMnq919zd1.jpg "Step 5")

When you’re done, run the commands below to update grub2
```bash
sudo update-grub2
```
![Step 6](qdBjAMhyDX1.png "Step 6")

That’s all.
