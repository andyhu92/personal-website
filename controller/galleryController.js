var galleryCollection = [{src:"../img/digital1.jpg", comment:"One-Piece Perona Sanji"},
{src:"../img/digital2.jpg", comment:"Tokyo-Ghoul Touka V1"},
{src:"../img/digital3.jpg", comment:"Western Dragon"},
{src:"../img/digital4.jpg", comment:"One-Piece Child Nami"},
{src:"../img/digital5.jpg", comment:"Tokyo-Ghoul Touka V2"},
{src:"../img/digital6.jpg", comment:"Thunder Dragon"},
{src:"../img/digital7.jpg", comment:"One-Piece Nami"},
{src:"../img/digital8.jpg", comment:"Digimon"},
{src:"../img/digital9.jpg", comment:"One-Piece Child Hancock"},
];
app.controller('galleryController',['$scope',function($scope){
	$scope.gallery = galleryCollection;
}]);