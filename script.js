// Smooth scroll for navigation buttons
$(document).ready(function () {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    const target = this.hash;
    $("html, body").animate(
      { scrollTop: $(target).offset().top },
      800
    );
  });
});
