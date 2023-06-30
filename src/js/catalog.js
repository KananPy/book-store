$(document).ready(function () {
  $(".container_book").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
    adaptiveHeight: true,
    prevArrow: `  <div class="slick-prev">
                      <img src="../assents/images/prevArrow.svg" alt="" class="prev">
                    </div>`,
    nextArrow: `  <div class="slick-next">
                       <img src="../assents/images/nextArrow.svg" alt="" class="next">
                    </div>`,
                    responsive: [
                      {
                          breakpoint: 1526,
                          settings: {
                              slidesToShow: 4,
                              slidesToScroll: 1,
                              arrows: true,
                          }
                      },
                      {
                          breakpoint: 1221,
                          settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              arrows: true,
                          }
                      },
                      {
                          breakpoint: 1095,
                          settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              arrows: true,
                          }
                      },
                      {
                          breakpoint: 763,
                          settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              arrows: false,
                          }
                      },
                      {
                          breakpoint: 480,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              arrows: false,
                          }
                      }
                  ]
              
  });
});

let booksection = document.querySelector("#bookpagesection");
let catalogsection = document.querySelector("#catalogpagesection");
let readbutton = document.querySelector("#readmojs");

readbutton.addEventListener("click", function () {
  catalogsection.style.display = "none";
  booksection.style.display = "block";
});
