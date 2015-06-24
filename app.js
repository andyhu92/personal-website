var app = angular.module("NavShow",['ngRoute','luegg.directives']).config(function($routeProvider){
  $routeProvider.when('/gallery',{
    templateUrl: 'gallery/index.html'
  }).when('/resume',{
    templateUrl: 'resume/index.html'
}).when('/about',{
    templateUrl: 'about/index.html'
}).when('/game',{
    templateUrl: 'game/index.html'
}).when('/',{
	templateUrl: 'review/index.html'
})
  .otherwise({
redirectTo: "review/index.html"
});
});          
     
