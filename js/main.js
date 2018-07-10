/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('HAApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl", activetab: 'home' })
    .when("/home", { templateUrl: "partials/home.html", controller: "PageCtrl", activetab: 'home' })
    // Pages
    .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl", activetab: 'about' })
    .when("/infrastructure", { templateUrl: "partials/infrastructure.html", controller: "PageCtrl", activetab: 'infrastructure' })
    .when("/msangle", { templateUrl: "partials/msangle.html", controller: "PageCtrl", activetab: 'products' })
    .when("/mspipe", { templateUrl: "partials/mspipe.html", controller: "PageCtrl", activetab: 'products' })
    .when("/squarepipe", { templateUrl: "partials/squarepipe.html", controller: "PageCtrl", activetab: 'products' })
    .when("/mscoil", { templateUrl: "partials/mscoil.html", controller: "PageCtrl", activetab: 'products' })
    // Blog
    .when("/quality", { templateUrl: "partials/quality.html", controller: "PageCtrl", activetab: 'quality' })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl", activetab: 'contact' })
    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl", activetab: 'home' });
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $route) {
  $(".activetab").removeClass('activetab');
  $("#" + $route.current.activetab).addClass('activetab');

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      900: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  });
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });
  $("#menu-line").remove();

  $("#cssmenu").prepend("<div id='menu-line'></div>");

  var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

  $("#cssmenu > ul > li").each(function () {
    if ($(this).hasClass('active')) {
      activeElement = $(this);
      foundActive = true;
    }
  });

  if (foundActive === false) {
    activeElement = $("#cssmenu > ul > li").first();
  }

  defaultWidth = lineWidth = activeElement.width();

  defaultPosition = linePosition = activeElement.position().left;

  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);

  $("#cssmenu > ul > li").hover(function () {
    activeElement = $(this);
    lineWidth = activeElement.width();
    linePosition = activeElement.position().left;
    menuLine.css("width", lineWidth);
    menuLine.css("left", linePosition);
  },
    function () {
      menuLine.css("left", defaultPosition);
      menuLine.css("width", defaultWidth);
    });
});