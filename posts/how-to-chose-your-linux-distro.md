---
title: How to chose your Linux distributution
metaDescription: >-
  This blog post will guide on how to choose your linux distribution from best
  linus distros to the best one for use case.
author: Ismail Boussekine
date: 2024-09-13T21:50:34.975Z
tags:
  - Linux
category:
  - Tech
lastmod: 2024-09-14T02:19:44.142Z
duration: 8 min
---
+ [What is a Linux distribution ?](#what-is-a-linux-distribution-)
+ [Best Linux Distribution](#best-linux-distribution)
  + [1. Arch Linux (i use Arch btw)](#1-arch-linux-i-use-arch-btw)
  + [2. Void](#2-void)
  + [3. NixOS](#3-nixos)
  + [4. Debian](#4-debian)
  + [5. Gentoo](#5-gentoo)
  + [6. Fedora](#6-fedora)
  + [7. Linux Mint](#7-linux-mint)
  + [8. OpenSUSE](#8-opensuse)
  + [9. Ubuntu](#9-ubuntu)
+ [What To Choose Depending On Your Use Case](#what-to-choose-depending-on-your-use-case)


<!-- Content -->

---

Linux is an open source and free operating system that was developed in the 90's by both Linus Torvalds who designed the kernel (Linux) and Richard Stallman who developed the base suite of programs that the kernel needs (GNU), To compose the operating system that we know "GNU/Linux", "Linux" for abbreviation, Stallman won't be happy.

---

**Notes**:

  - I tried to avoid any linux distribution forks like : PopOS!, Kubuntu, MX Linux and all that crap because they are literally copy of their main distro with a DE and some predefined themes and wallpapers, which is not the main focus of this blog post (not the case with Linux Mint and Ubuntu you'll see why.)
   
  - This list is from my point of view and my experience with each one of them (I'll mention when i have'nt used a certain distro)

---

# What is a Linux distribution ?

A linux distribution is a set of pre-installed programs and settings on top of the kernel, To satisfy certain needs and requirements for the end user or for the server (as linux is widely used in running servers), Varying from distribution that focuses more on simplicity, ease of use, security, reliability and more, They all share the same Kernel and GNU programs (or at least most of them), But they deffer when it comes to to the package manager (Apt, Pacman...), init system (systemD, runnit, OpenRC..) and the way and where the system writes the config files.

---

# Best Linux Distribution

## 1. Arch Linux (i use Arch btw)
![Arch Linux With I3](/images/i3-arch-rice.png)


 Arch linux is the best linux distro I've tried, I'm running it now as my daily driver for a year and a half, It was first created in 2002 by Judd Vinet, It is a standalone distro meaning it is not forked from another linux distro, what is best good about this distro is its minimal approach and simplicity it follows DYI (do it yourself) and K.I.S.S. philosophy (Keep It Simple Stupid), By minimal we mean that it does'nt ship any unnecessary software which makes it less bloated,
 With its rolling release model it provides the latest and greatest of softwares, which also means that you can use any ISO image to install the distro and by the time of update you'll have the same version as me (who installed it long ago), so it does'nt follow a fixed release cycle like Debian or any other distros. 


Arch linux uses Pacman package manger which one of the best package managers if not the best, It contains a large number of built packages (binaries), And if you added the AUR (using Yay) (which is another arch linux repository that is ran by community) the total packages become more than 80,000+ package!. Pacman is really fast and simple to use which does'nt need so much configuration to start using it, here are some of its commands

```sh
pacman -S #to install a package 
pacman -Rns #to delete a package with its config files 
pacman -Ss #to search for a package in the main repo
pacman -Syu #to update the system, S for sync y for refresh and u for update 
```

It may seem complicated but you'll get used to it (coughs* you wont, you'll end up creating +20 aliases) but this is the only downside of the package manager.

You can download and install Arch linux via the net installer provided in the official website.

### Cons:
  - **SystemD**: SystemD is a software suite that provides a bunch of system components for Linux, meaning that you have one softwares which controls your whole system, Specially the init system. There is actually nothing wrong with systemD, in fact many distros uses it (most of them actually), but, if Arch linux philosophy is to provide a minimal and fast system out of the box systemD does'nt help with that, people also argue that SystemD is against the Unix philosophy that says that "Do one thing and do it right" which systemD clearly does'nt follow that approach. However for new linux users that may not mean a lot.
  
  - **Overwhelming Installing Process**: Arch linux is by far the most overwhelming linux distro to install, Not saying it's hard, But you are gonna have to follow the manual and install inside of the black TTY (which makes new users scared), I remember it took me 48h to install it using broken usb that unmounts each time i touch it, and imagine :).
   
  - **Updates** : Updates in Arch linux are really fast to be shipped to the end user, which sometimes may cause the system not to boot because of some stupid grub update, which eventually will make you pray every god out there while reading an article someone wrote in 2006 to fix the issue, for me i've never faced that, and I pray I never face it.
  - **You Do Everything Yourself**

### Pros:
  - **Arch Wiki & AUR**
  - **Full Control**
  - **Minimal**
  - **Customizable**
  - **You Will Understand The System**
  - **You Do Everything Yourself**
## 2. Void

## 3. NixOS

## 4. Debian
Debian is one of the most popular linux distributions out there, its been since 1993 which make it one the first ever linux distros along with Slackware, It is know for its high stability and reliability due to its "Fixed Release" version cycle which means it only gets updated every period (usually more than 6 months), In this case Debian gets updated every two years, but there is version called Debian Sid that is a rolling release (meaning it gets the packages updates as soon as they are released and ships them to the end users).

 Debian uses the package manager APT (Advanced package tool) to manage their packages, which is known to be fast, versatile, and stable (other linux distros also use it as we will see. (Forks)) 
some of the commands we mention:
``` sh
apt update #to fetch updated packages from the main repo
apt upgrade #to upgrade your fetched packages
apt install <name-of-package> # to install a certain package
```
It is really easy and human readable (coughs* pacman).


**Debian** is available for download on the main website, you can choose between the GUI installer (with GNOME or KDE Plasma) or with net installer (lightweight).

### Pros:
  - **Large community**: Debian by far has the largest community, so it will be easy to find solutions for problems you face. 
  
  - **Tremendous Stability**: Debian is known for its high stability and security because it gets the updates every two years, except for security vulnerabilities thats get resolved as soon as they appear.
  
  - **High compatibility**: Whether it is a software and hardware, you always get the best experience, because one: debian allows proprietary software (some distros don't by default) so if have Nvidia graphic card you won't have any problems although Nvidia have closed source drivers.
  
  - **Just Works**: This is famous term in the linux community to describe a software that does its job and nothing more, Debian just works because it is ready out-of-the-box with all tools and programs you need (if yiu install via the graphical installer (GNOME or KDE)), So you really don't configure anything by your self.
### Cons:
  - **Old packages**: This is by far the most caveat of using debian, as we said Debian ships old packages to keep the system stable but that come at the cost of the packages being old, meaning that by the end of your current update cycle you probably end up using a 2 years-old package, So you won't get the greatest and latest, that being said there is Debian Sid that ships with newer package versions, but in cost of system stability
  - **For servers**: Although Debian is famous, But Servers gets the biggest market share of Debian, and that is understandable because users don't like running very old packages on there daily driver system.

## 5. Gentoo

## 6. Fedora

## 7. Linux Mint

## 8. OpenSUSE

## 9. Ubuntu

# What To Choose Depending On Your Use Case

<!-- END -->
