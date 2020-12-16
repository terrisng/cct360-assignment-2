// JavaScript Document

//ICCIT description tool tip START
$(document).ready(function(){
  $('[data-toggle="ICCIT-Description"]').tooltip();   
});
//ICCIT description tool tip END

//Resume download button  tool tip START
$(document).ready(function(){
  $('[data-toggle="Resume-download-button-placeholder"]').tooltip();   
});
//Resume download button tool tip END

//UofT website tool tip START
$(document).ready(function(){
  $('[data-toggle="UofT"]').tooltip();   
});
//UofT website tool tip END

//Sheridan college website tool tip START
$(document).ready(function(){
  $('[data-toggle="Sheridan-college"]').tooltip();   
});
//Sheridan college website tool tip END

//Bayview-SS website tool tip START
$(document).ready(function(){
  $('[data-toggle="Bayview-SS"]').tooltip();   
});
//Bayview-SS website tool tip END

//HKCCCU-LA website tool tip START
$(document).ready(function(){
  $('[data-toggle="HKCCCU-LA"]').tooltip();   
});
//HKCCCU-LA website tool tip END

//SJACPS website tool tip START
$(document).ready(function(){
  $('[data-toggle="SJACPS"]').tooltip();   
});
//SJACPS website tool tip END

//Contact Page Upload File START
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
//Contact Page Upload File END

//Featured photos slideshow START
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("featured-photos-slideshow-mySlides");
  var dots = document.getElementsByClassName("featured-photos-slideshow-container-gallery-thumb");
  var captionText = document.getElementById("featured-photos-slideshow-caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" featured-photos-slideshow-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " featured-photos-slideshow-active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
  
//Featured photos slideshow End

//Image grid START
var modal = document.getElementById('image-grid-myModal');
var photos = document.getElementsByClassName('image-grid-myImages');
var photosModal = document.getElementById("image-grid-photos");
var captionText = document.getElementById("image-grid-caption");

for (var i = 0; i < photos.length; i++) {
  var img = photos[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    photosModal.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("image-grid-close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
//Image grid END
