---
title: The Pottery Place
publishDate: 2020-03-04 00:00:00
img: /assets/portfolio/cake.webp
img_alt: myengname.com web app
description: |
  Designed WP website for a family-run pottery studio
tags:
  - Design
  - Dev
  - WordPress
  - Pottery
  - Family Business
---
##### <div><center><a class="highlight-pp highlight" href="http://www.thepotteryplace.com">The Pottery Place</a></center></div>
#### Project Overview
My family owns a paint your own pottery studio in Albany NY called The Pottery Place. Back when they had just recently purchased the studio I was tasked with redesigning the website

##### Project Scope:
 - Used CSS3 & HTML5
 - Used WordPress 
 - Obtained Web Hosting

<div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-1">
    <div class="w-full rounded hover:opacity-50">
        <img src="/assets/portfolio/potteryplace2.webp" alt="myengname modal lightbox image1" style="width:100%;cursor:pointer" onclick="onClick(this)">
    </div>
    <div class="w-full rounded hover:opacity-50">
        <img src="/assets/portfolio/potteryplace4.webp" alt="myengname modal lightbox image2" style="width:100%;cursor:pointer" onclick="onClick(this)">
    </div>
    <div class="w-full rounded hover:opacity-50">
        <img src="/assets/portfolio/potteryplace6.webp" alt="myengname modal lightbox image3" style="width:100%;cursor:pointer" onclick="onClick(this)">
    </div>
    <div class="w-full rounded hover:opacity-50">
        <img src="/assets/portfolio/potteryplace8.webp" alt="myengname modal lightbox image3" style="width:100%;cursor:pointer" onclick="onClick(this)">
    </div>
</div>

<div id="modal01" class="lightbox-modal" onclick="this.style.display='none'">
  <span class="lightbox-button lightbox-hover-red lightbox-xlarge lightbox-display-topright">&times;</span>
  <div class="lightbox-modal-content lightbox-animate-zoom wide-modal">
    <img id="img01" style="width:100%">
  </div>
</div>
</div>

<script>
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
</script>