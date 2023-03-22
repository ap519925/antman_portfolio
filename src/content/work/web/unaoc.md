---
title: UNAOC App and Website
publishDate: 2022-12-01 00:00:00
img: /assets/unaocapp.webp
img_alt: UNAOC App Screenshot
description: |
  Developed & designed custom WordPress themes, Plugins & a native mobile app for UNAOCs 8th global forum
tags:
  - Dev
  - Design
  - Backend
---

##### <div><center><a class="highlight highlight-unaoc" href="https://8thglobalforum.unaoc.org/">UNAOC Global Forum Website</a></center></div>
#### Project Overview
I was hired on as a Web Development & Design Consultant in order to develop/design a WordPress website + native mobile application for UNAOC's 8th global forum, it was a great experience that I really enjoyed.

##### Project Scope:
 - Developed custom WordPress themes & Plugins using: PHP, JS, HTML5, CSS3, & SASS for UNAOC's 8th global forum
 - Designed & assisted in development of a native mobile application for UNAOC’s 8th global forum
 - Used the Adobe Creative Suite to design 8th Global Forum promo material for both print and digital usage



<div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/unaocapp1.webp" alt="myengname modal lightbox image1" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/unaocmenuapp.webp" alt="myengname modal lightbox image2" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/unaocapp3.webp" alt="myengname modal lightbox image3" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/unaocdoc.webp" alt="myengname modal lightbox image4" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/unaoc_alt_app.webp" alt="myengname modal lightbox image5" style="width:100%;cursor:pointer"onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
   <img src="/assets/app_screens/unaocappmedia.webp" alt="myengname modal lightbox image6" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
</div>
<div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-1">
  <div class="w-full rounded hover:opacity-50">
   <img src="/assets/app_screens/unaocweb.webp" alt="myengname modal lightbox image7" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
</div>


<div id="modal01" class="lightbox-modal" onclick="this.style.display='none'">
  <span class="lightbox-button lightbox-hover-red lightbox-xlarge lightbox-display-topright">&times;</span>
  <div class="lightbox-modal-content lightbox-animate-zoom">
    <img id="img01" style="width:100%">
  </div>
</div>


<script>
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
</script>