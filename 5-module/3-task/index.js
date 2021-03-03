function initCarousel() {
  let caruselLine = document.querySelector('[class="carousel__inner"]');
  let caruselArrowRight = document.querySelector('[class="carousel__arrow carousel__arrow_right"]');
  let caruselArrowLeft = document.querySelector('[class="carousel__arrow carousel__arrow_left"]');
  let caruselImageNumber = document.querySelectorAll('div.carousel__slide').length;
  let caruselImageWidth = document.querySelector('[class="carousel__slide"]').offsetWidth;
  let computedtransformStyle = getComputedStyle(caruselLine)
  console.log (caruselLine);  
  console.log (caruselArrowRight);
  console.log (caruselImageNumber);
  console.log (caruselImageWidth);
  console.log (computedtransformStyle.offsetWidth); 


  caruselArrowRight.addEventListener("click", function() {
    
    
    //for (let i = 1; i < (caruselImageNumber + 1); i++) {
      caruselLine.style.transform = 'translateX(-300%)';

    //}
    
    //if (caruselLine.scrollLeft == 0) {
      //carouselArrowRight.style.display = 'none';
   //}
  });

  caruselArrowLeft.addEventListener("click", function() {
    caruselLine.style.transform = 'translateX(100%)';
    if (caruselLine.scrollLeft == caruselImageWidth) {
      carouselArrowLeft.style.display = 'none';
    }
  });
}

