---
layout: blog
title: Docker Everything List
date: 2019-11-13 09:16:46
tags:
- Docker
- Automation
- List
category:
- Virtualization
---
# Docker Everything

All of the projects i work on these i automatically create a Dockerfile to build a reliable and reusable image i can run locally to test or deploy to a prod kube cluster or docker host to run permanenetly and this got me thinking... can i run my day to day tools and systems in Docker?

The answer is almost always yes! Therfore below is my list of tools and services i use daily/randomly That’s  are one liners to get going in a container.

If you know of some handy tools/services not listed here let me know!

## Security
### [Kali Environment](https://gitlab.com/medoix/kali-linux-docker)
All Tools Installed
```
docker run -t -i registry.gitlab.com/medoix/kali-linux-docker:latest /bin/bash
```
No Tools Installed
```
docker run -t -i kalilinux/kali-linux-docker /bin/bash
```
### [Reconnoitre](https://github.com/codingo/Reconnoitre)
Build
```
git clone https://github.com/codingo/Reconnoitre.git
cd Reconnoitre
docker build -t reconnoitre .
```
For Help
```
docker run reconnoitre run --rm -h
```
Full Scan Example
```
docker run reconnoitre run --rm -v /local/output/path:/outputdir -t 192.168.1.1-252 -o /outputdir --pingsweep --dns --snmp --services --hostnames --virtualhosts
```

### [cspparse](https://github.com/vortexau/cspparse)
Build
```
git clone https://github.com/lc/cspparse
cd cspparse
docker build -t cspparse .
```
Scan Domain
```
docker run cspparse --rm <full domain to scan including protocol>
```


## Databases
### [MongoDB](https://hub.docker.com/_/mongo/)
```
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:latest
```

### [MySQL](https://hub.docker.com/_/mysql/)
```
docker run -d -p 3306:3306 --name=mysql1 -d mysql/mysql-server:latest
    docker logs mysql1
    docker logs mysql1 2>&1 | grep GENERATED
    docker exec -it mysql1 mysql -uroot -p
    ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
```

## Misc
### [Genact](https://github.com/svenstaro/genact) - Want to look busy?
```
For Help
docker run -it --rm svenstaro/genact -h

Weblog Tail Module
docker run -it --rm svenstaro/genact -m weblog
```
