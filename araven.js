/presune menu
$(function(){
  // vybere header-bottom a přesuneme jeho obsah za logo
  var $bottomContent = $("#header .header-bottom .container").children();
  var $logo = $("#header .header-top .site-name");

  if ($bottomContent.length && $logo.length){
    $bottomContent.insertAfter($logo); 
    $("#header .header-bottom").remove(); // odstraní prázdný wrapper
  }
});
