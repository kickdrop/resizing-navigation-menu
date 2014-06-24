$(document).on("scroll", function() {
  if ($(document).scrollTop() > 120) {
    $("nav").addClass("small");
  } else {
    $("nav").removeClass("small");
  }
});