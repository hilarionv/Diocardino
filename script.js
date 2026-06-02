
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.splide').forEach(slider => {
    new Splide(slider, {
      perPage: 3,
      gap: '20px',
      arrows: true,
      pagination: false,

      breakpoints: {
        1024: { perPage: 2 },
        600: { perPage: 1 }
      }
    }).mount();
  });

});
