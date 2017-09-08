// Check off specific todos by clicking
$("ul").on("click", "li", function() {
//Best way below
$(this).toggleClass("completed");

  /*Long way, below
  //if li is gray
  if ($(this).css("color") === "rgb(128, 128, 128)"){
    //turn it black
    $(this).css({
      color: "black",
      textDecoration: "none"
  });
  } //else
  else {
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
  });
}
*/
});

//click on x to delete todos

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
