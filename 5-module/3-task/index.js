function initCarousel() {
  let position = 0;
  let caruselLine = document.querySelector('[class="carousel__inner"]');
  let caruselArrowRight = document.querySelector('[class="carousel__arrow carousel__arrow_right"]');
  let caruselArrowLeft = document.querySelector('[class="carousel__arrow carousel__arrow_left"]');
  let caruselImage = document.querySelectorAll('div.carousel__slide');
  let caruselImageNumber = caruselImage.length;
  let caruselImageWidth = document.querySelector('[class="carousel__slide"]').offsetWidth;
  
  checkArrow (position);

  caruselArrowRight.addEventListener("click", function() {
    
    let imagesLeft = caruselImageNumber - (Math.abs(position) + caruselImageWidth)/ caruselImageWidth;
    position -= imagesLeft >= 1 ? caruselImageWidth : imagesLeft * caruselImageWidth;
    
    caruselLine.style.transform = `translateX(${position}px)`;
    checkArrow ();
  });  

  caruselArrowLeft.addEventListener("click", function() {
    
    let imagesLeft = Math.abs(position) / caruselImageWidth;
    position += imagesLeft >= 1 ? caruselImageWidth : imagesLeft * caruselImageWidth;
    
    caruselLine.style.transform = `translateX(${position}px)`;
    checkArrow ();    
  });

  function checkArrow () {
    if (position <= -(caruselImageNumber - 1) * caruselImageWidth) {
      caruselArrowRight.style.display = 'none';
    } else {caruselArrowRight.style.display = '';}
    if (position === 0) {
      caruselArrowLeft.style.display = 'none';
    } else {caruselArrowLeft.style.display = '';}
  }
}