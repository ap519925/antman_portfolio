---
title: My English Name Web App
publishDate: 2022-03-04 00:00:00
img: /assets/portfolio/myengname.webp
img_alt: myengname.com web app
description: |
  Designed and developed a web app that gives international students english names
tags:
  - Design
  - Dev
  - Language
  - PHP
  - MySQL
---
##### <div><center><a class="highlight-eng highlight" href="http://www.bearishbulls.net"> MyEngName.com</a></center></div>
#### Project Overview
I designed and developed a web app that uses JS and PHP to take user information such as: name, DOB, country of interest & traits in order to give them an english name

##### Project Scope:
 - Used CSS3 & HTML5 to design this web app
 - used PHP/JS to create form that takes user info and returns an english name based on what they hav entered

<div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-2">
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/portfolio/myengname.webp" alt="myengname modal lightbox image1" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/portfolio/myengname2.webp" alt="myengname modal lightbox image2" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
</div>
<div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/portfolio/myengnamemobile.webp" alt="myengname modal lightbox image3" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/myengname9.webp" alt="myengname modal lightbox image3" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
  <div class="w-full rounded hover:opacity-50">
    <img src="/assets/app_screens/myengname7.webp" alt="myengname modal lightbox image3" style="width:100%;cursor:pointer" onclick="onClick(this)">
  </div>
</div>


<div id="modal01" class="lightbox-modal" onclick="this.style.display='none'">
  <span class="lightbox-button lightbox-hover-red lightbox-xlarge lightbox-display-topright">&times;</span>
  <div class="lightbox-modal-content lightbox-animate-zoom wide-modal">
    <img id="img01" style="width:100%">
  </div>
</div>

<script>
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
</script>