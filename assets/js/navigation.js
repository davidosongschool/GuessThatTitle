$(".menu-button").click(function () {
  // Display nav (will add slide)
  $(".contain-menu").toggle("slidedown");
});

$(".go-home").click(function () {
  console.log("home nav clicked");
  $(".displayvar").addClass("d-none");
  $(".contain-menu").toggle("slidedown");
  $(".page-body").removeClass("d-none");
});

$(".play-game").click(function () {
  console.log("Start the game");
});

$(".learn-more").click(function () {
$(".displayvar").addClass("d-none");
  $(".contain-menu").toggle("slidedown");
  $(".contain-about-us").removeClass("d-none");
});

$(".how-to").click(function () {
  $(".displayvar").addClass("d-none");
  $(".contain-menu").toggle("slidedown");
  $(".contain-how-to").removeClass("d-none");
});

$(".how-to-btn").click(function(){
$(".displayvar").addClass("d-none");
$(".contain-how-to").removeClass("d-none");
});




