var slideIndex2 = 0;
var timeout2 = 5000;
var timeoutHandle2;
autoSlide2();

function prevClicked2() {
    clearTimeout(timeoutHandle2);
    plusSlides2(-1);
    timeoutHandle2 = setTimeout(autoSlide2, timeout2);
}

function nextClicked2() {
    clearTimeout(timeoutHandle2);
    plusSlides2(1);
    timeoutHandle2 = setTimeout(autoSlide2, timeout2);
}

function plusSlides2(n) {
    showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
    clearTimeout(timeoutHandle2);
    showSlides2((slideIndex2 = n));
    timeoutHandle2 = setTimeout(autoSlide2, timeout2);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides2.length;
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" selected", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " selected";
}

function autoSlide2() {
    plusSlides2(1);
    timeoutHandle2 = setTimeout(autoSlide2, timeout2);
}
