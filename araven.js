// custom.js – testovací script
$(function() {
  console.log("Custom JS funguje!");
});

// test presunu
$(function () {
  var DESKTOP = 992; // breakpoint Disco
  var $menu    = $('.main-navigation, .navigation, .menu-primary').first();   // hlavní menu
  var $hdrTop  = $('.site-header .header-top, .site-header .top, header .header-top').first(); // řada s logem a hledáním
  var $search  = $('.site-header .search, .site-header .search-form').first();
  var $logo    = $('.site-header .logo').first();

  // Bezpečnostní kontrola
  if (!$menu.length || !$hdrTop.length || !$logo.length) return;

  // Vytvoříme cílový container pro menu v top řadě (jen jednou)
  if (!$hdrTop.find('.header-inline').length){
    var $inline = $('<div class="header-inline"></div>');
    // vložíme mezi logo a vyhledávání
    if ($search.length){
      $inline.insertBefore($search);
    } else {
      $inline.appendTo($hdrTop);
    }
  }

  var $inlineTarget = $hdrTop.find('.header-inline').first();

  function placeMenu(){
    var w = window.innerWidth || document.documentElement.clientWidth;
    if (w >= DESKTOP){
      // Přesuň menu do top řady
      if ($menu.parent()[0] !== $inlineTarget[0]) {
        $menu.appendTo($inlineTarget);
        $('body').addClass('menu-inline-enabled');
      }
    } else {
      // Vrať menu zpět pod header (Disco obvykle používá .header-bottom)
      var $bottom = $('.site-header .header-bottom, header .header-bottom, .navigation-holder').first();
      if ($bottom.length && $menu.parent()[0] !== $bottom[0]) {
        $menu.appendTo($bottom);
        $('body').removeClass('menu-inline-enabled');
      }
    }
  }

  // první umístění + na resize
  placeMenu();
  $(window).on('resize', _.throttle ? _.throttle(placeMenu, 150) : placeMenu); // pokud je dostupný lodash z doplňků; jinak se prostě volá bez throttle
});

