angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlantTodayCtrl', function($scope, $rootScope, $ionicPlatform, $http, $location, $ionicSlideBoxDelegate, Vegetables, Garden) {
   $scope.addOrRemoveFromGarden = function(id) {
    if(Garden.inGarden(id)) {
      Garden.removeFromGarden(id);
    } else {
      Garden.addToGarden(id);
    }
      $scope.garden = Garden.get();
  };

  $ionicPlatform.ready(function() {
    $scope.go = function(url) {
      $location.path(url);
    };
      $rootScope.vegList= Vegetables.today();
    navigator.geolocation.getCurrentPosition(function(position) {

        $rootScope.$apply(function() {
          $rootScope.testLat = position.coords.latitude;
          $rootScope.testLng = position.coords.longitude;
          $http.get('http://farmsense-prod.apigee.net/v1/frostdates/stations/?lat='+$rootScope.testLat+'&lon='+$rootScope.testLng+'').success(function(data){
            $scope.results = data.id;
            var ID = data[0].id;
            $http.get('http://farmsense-prod.apigee.net/v1/frostdates/probabilities/?station='+ID+'&season=1').success(function(dataStation) {
              $rootScope.lastFrost = dataStation[0].prob_50;
            });
            $http.get('http://farmsense-prod.apigee.net/v1/frostdates/probabilities/?station='+ID+'&season=2').success(function(dataStation) {
              $rootScope.nextFrost = dataStation[0].prob_50;

              $rootScope.vegList = Vegetables.getEligible($rootScope.lastFrost, $rootScope.nextFrost).sort();
              //if($rootScope.lastFrost) 
              //else $rootScope.vegList = $rootScope.nextFrost.sort();
            });
          });
        });
      });
    });
  })

.controller('SearchCtrl', function($scope, $rootScope, $ionicPlatform, $http, $location, $ionicSlideBoxDelegate, Vegetables) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $rootScope.$apply(function() {
      $rootScope.testLat = position.coords.latitude;
      $rootScope.testLng = position.coords.longitude;
      $http.get('http://farmsense-prod.apigee.net/v1/frostdates/stations/?lat='+$rootScope.testLat+'&lon='+$rootScope.testLng+'').success(function(data){
        $scope.results = data.id;
        $scope.locate = data[0].name;
        var ID = data[0].id;
        $http.get('http://farmsense-prod.apigee.net/v1/frostdates/probabilities/?station='+ID+'&season=1').success(function(dataStation) {
         $scope.HWLastFrost = dataStation[0].prob_50;
        });
        $http.get('http://farmsense-prod.apigee.net/v1/frostdates/probabilities/?station='+ID+'&season=2').success(function(dataStation) {
          $scope.HWFirstFrost = dataStation[0].prob_50;
        });
      });
    });
  });
})

.controller('BrowseCtrl', function($scope,  Vegetables) {  
  $scope.AllVegetables = Vegetables.today();
})
.controller('RegionCtrl', function($scope, $ionicPopover,  Vegetables, countyList, localStorageService) {  

 
  $scope.showSelect = "false";
  $scope.state = {
    'name': 'AL',
    'county':'lee'
  }
  $scope.Counties = countyList.alabama();
$scope.Albtn = function(){
  $scope.Counties = countyList.alabama();
  $scope.showSelect = "true";
}
$scope.Flbtn = function(){
   $scope.Counties = countyList.flordia();
    $scope.showSelect = "true";
}
$scope.Olbtn = function(){
  $scope.showSelect = "false"
  alert("Today you can plant is currently available for Alabama and Flordia  some features may be disabled. ");
}



  localStorageService
  $scope.Counties = countyList.alabama();
  $scope.FLCounties = countyList.flordia();


    $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };



})

.controller('PlantCtrl', function($scope, $stateParams, Vegetables, Garden) {
  $scope.addOrRemoveFromGarden = function(id) {
    if(Garden.inGarden(id)) {
      Garden.removeFromGarden(id);
    } else {
      Garden.addToGarden(id);
    }
      $scope.garden = Garden.get();
  };
  $scope.vegetable = Vegetables.get($stateParams.vegetableId);
  $scope.garden = Garden.get();
})

.controller('GardenCtrl', function($scope, Vegetables, Garden) {    
  $scope.AllVegetables = Vegetables.today();

  $scope.getRawPlantedDate = function(id) {
  	gardenInfo = Garden.getById(id);
  	monthPlanted = gardenInfo.added.substring(0, 2);
  	dayPlanted = gardenInfo.added.substring(2, 4);
  	date = new Date();
  	date.setUTCMonth(monthPlanted - 1);
  	date.setUTCDate(dayPlanted);
  	return date;
  }

  $scope.getPlantedDate = function(id) {
  	date = $scope.getRawPlantedDate(id);
  	return date.toDateString().slice(3, -5);
  };

  $scope.getHarvestDate = function(id) {
  	planted = $scope.getRawPlantedDate(id);
  	return Vegetables.getHarvestDate(planted, id);
  }
});
