$(document).ready(function() {
  $(document).foundation();
  $('#hero-banner').slick({
    arrows: false,
    dots: true,
    infinite: true,
    initialSlide: 1,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('#video-title-wrapper').slick({
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });

  function handleNavToggle(e) {
    $('#nav-toggle-container').toggleClass('open');
    $('#nav-links').toggleClass('open');
  }

  $('#nav-toggle-container').click(handleNavToggle);
});