$(function(){
  var $nav = $("#header .header-bottom").children();
  var $top = $("#header .header-top");

  // Přesune navigaci do header-top (na 2. místo za logo)
  $nav.insertAfter($top.find(".logo"));

  // Odstraní prázdný header-bottom
  $("#header .header-bottom").remove();
});
