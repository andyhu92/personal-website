app.controller('reviewController',['$scope',function($scope){
        $scope.reviews = reviewsCollection;
        $scope.review={};
   
        $scope.addReview = function(){
        	if(reviewForm.$invalid){alert("Please fill out all fields");}
                var d = new Date();
                $scope.review.time = d.getTime();
                
        	$scope.reviews.push(this.review);
        	$scope.review={};
        };
}]);

var reviewsCollection=[{author: "Timcook@apple.com", body: "Good job!",time:"Jun 11, 2015 10:02:57 AM"},{author: "panda@animal.com", body: "U got Bamboo??",time:"Jun 11, 2015 10:02:57 AM"}];