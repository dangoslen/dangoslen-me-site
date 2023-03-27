#!/bin/bash

NAME=$1
TITLE=$2

cat <<EOF > ./content/blog/$NAME.md
---
path: /$NAME
date: $(date +"%Y-%m-%dT%H:%M:%S")
title: $TITLE
description: 
keywords:
  - keyword
tags:
  - tag
image: "../assets/natalie-pedigo-wJK9eTiEZHY-unsplash.jpeg" 
---

<center>

Photo

<i> 
    
Credit

</i>


</center>

# Write stuff

EOF