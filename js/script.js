$(document).ready(function(){
  $(".card").click(function(){
    $(".card").hide();
    $(".cardp").toggle();
    $(".cardp").show();
  })

})
$(".cardp").click(function(){
  $(".card").hide();
  $(".cardp").toggle();
  $(".card").show();
})