var app=angular.module("campingApp",["ngRoute"]);app.config(["$locationProvider","$routeProvider",function(o,e){o.hashPrefix(""),e.when("/home",{templateUrl:"../modules/components/home/app.component.home.html",controller:"MainController",controllerAs:"mainCtrl"}).otherwise({redirectTo:"/home"})}]),app.controller("MainController",["$scope",function(o){this.bannerArray=function(o){for(var e=[],n=1;n<=o;n++){var t="../assets/images/banner"+n+".jpg";e.push({url:t})}return e}(10)}]),app.controller("HeaderController",["$scope",function(o){setTimeout(function(){$("#slider3").responsiveSlides({auto:!0,pager:!0,nav:!1,speed:500,namespace:"callbacks",before:function(){$(".events").append("<li>before event fired.</li>")},after:function(){$(".events").append("<li>after event fired.</li>")}}),$(".scroll").click(function(o){o.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},1e3)})},1)}]),app.component("homeComponent",{templateUrl:"modules/components/home/app.component.home.html"}),app.component("aboutComponent",{templateUrl:"modules/components/about/app.component.about.html"}),app.component("portfolioComponent",{templateUrl:"modules/components/portfolio/app.component.portfolio.html"}),app.component("headerComponent",{templateUrl:"modules/components/header/app.component.header.html",controller:"HeaderController",controllerAs:"headerCtrl"}),app.component("serviceComponent",{templateUrl:"modules/components/services/app.component.services.html"}),app.component("teamComponent",{templateUrl:"modules/components/team/app.component.team.html"}),app.component("footerComponent",{templateUrl:"modules/components/footer/app.component.footer.html"}),app.component("blogComponent",{templateUrl:"modules/components/blog/app.component.blog.html"}),app.component("packagesComponent",{templateUrl:"modules/components/packages/app.component.packages.html"}),app.component("contactComponent",{templateUrl:"modules/components/contact/app.component.contact.html"});