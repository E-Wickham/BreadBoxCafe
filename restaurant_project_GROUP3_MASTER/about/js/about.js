window.onload = function() {

    // image array for slideshow
    var slideImages = [];

    // adding images to array
    slideImages[0] = '../images/basketbread.jpg';
    slideImages[1] = '../images/bread2.jpg';
    slideImages[2] = '../images/loaf.jpg';

    var i = 0;
    var slideTime = 3000;

    // slideshow function
    function slideshowGo() {
        document.slideshow.src = slideImages[i];

        if(i < slideImages.length - 1){
            i++;
        } else {
            i = 0;
        }// end if

        setTimeout(slideshowGo, slideTime);
    } // end of function

    // call function
    slideshowGo();

} // end onload