var slideIndex = 0;
var timeout = 5000;
var timeoutHandle;
autoSlide();

function prevClicked() {
    clearTimeout(timeoutHandle);
    plusSlides(-1);
    timeoutHandle = setTimeout(autoSlide, timeout);
}

function nextClicked() {
    clearTimeout(timeoutHandle);
    plusSlides(1);
    timeoutHandle = setTimeout(autoSlide, timeout);
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    clearTimeout(timeoutHandle);
    showSlides((slideIndex = n));
    timeoutHandle = setTimeout(autoSlide, timeout);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" selected", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " selected";
}

function autoSlide() {
    plusSlides(1);
    timeoutHandle = setTimeout(autoSlide, timeout);
}
