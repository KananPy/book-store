$(document).ready(function () {
    $(".container_book").slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrow: true,
      prevArrow: `  <div class="slick-prev">
                      <img src="../assents/images/prevArrow.svg" alt="" class="prev">
                    </div>`,
      nextArrow: `  <div class="slick-next">
                       <img src="../assents/images/nextArrow.svg" alt="" class="next">
                    </div>`,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });
