$(document).ready(function() {
    $('.slider-container').each(function() {
      var container = $(this);
      var slides = container.find('.slide');
      var currentSlide = 0;

      slides.eq(currentSlide).show();

      function nextSlide() {
        slides.eq(currentSlide).hide();
        currentSlide++;

        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }

        slides.eq(currentSlide).show();
      }

      setInterval(nextSlide, 5000);
    });
  });

  function changeProductImage(image) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = image.src;

    var carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(function(item) {
      item.classList.remove('selected');
    });
    image.parentNode.classList.add('selected');
  }