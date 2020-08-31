$(".menu-trigger,  .close-btn").click(function () {
  $(this).toggleClass("open").addClass("animated slideInLeft");
  $(".menu-nav").fadeToggle("500").addClass("animated slideInRight");
});
