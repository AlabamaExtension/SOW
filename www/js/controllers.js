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
    //navigator.geolocation.getCurrentPosition(function(position) {

        $rootScope.$apply(function() {
           $rootScope.vegList = Vegetables.getEligible($rootScope.lastFrost, $rootScope.nextFrost).sort();
         
        });
      //});
    });
  })

.controller('SearchCtrl', function($scope, $rootScope, $ionicPlatform, $http, $location, $ionicSlideBoxDelegate, Vegetables) {
  
})

.controller('BrowseCtrl', function($scope,  Vegetables) {  
  $scope.AllVegetables = Vegetables.today();
})
.controller('MarketCtrl', function($scope, $http, $ionicPopup) {  

	$http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=36832').success(function(data1){
		$scope.Results = data1.results;
		console.log($scope.Results);
	$scope.moreInfo = function(id){
		$scope.id = data1.results[id].id	
		$http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + $scope.id +'').success(function(data2){
				if (data2.marketdetails.Schedule.trim()){
					data2.marketdetails.Schedule = data2.marketdetails.Schedule.replace("<br>", " ");
					data2.marketdetails.Schedule = data2.marketdetails.Schedule.replace("<br>", " ");
					data2.marketdetails.Schedule = data2.marketdetails.Schedule.replace("<br>", " ");
				}
			console.log(data2)
			$scope.ResultsDetail = data2;
			$scope.title = data1.results[id].marketname
			var marketTitle= data1.results[id].marketname.substr(data1.results[id].marketname.indexOf(" ") + 1);
			if (data2.marketdetails.Schedule.trim()){
			var alertPopup = $ionicPopup.alert({
     		title: marketTitle,
    		template: data2.marketdetails.Address + '<br><br>Schedule: ' + data2.marketdetails.Schedule + '<br><br>Products: ' + data2.marketdetails.Products + '<br><br>' + '<a href="' + data2.marketdetails.GoogleLink + '">Directions</a>'
			});
			}
			else{
			var alertPopup = $ionicPopup.alert({
     		title: marketTitle,
    		template: data2.marketdetails.Address + '<br><br>' + '<a href="' + data2.marketdetails.GoogleLink + '">Directions</a>'
			});
			}
				}
			)
}});
	})
.controller('RegionCtrl', function($scope,   Vegetables, countyList, localStorageService) {  

      $scope.showSelect = "false";
      $scope.state = {
          'name': '',
          'county':''
      }

      //$scope.Counties = countyList.alabama();
        $scope.Albtn = function(){
          $scope.Counties = countyList.alabama();
          $scope.showSelect = "true";
          $scope.state = {
            'name': 'AL',
            'county':''
          }
      }

      $scope.Flbtn = function(){
      $scope.Counties = countyList.flordia();
      $scope.showSelect = "true";
        $scope.state = {
     'name': 'FL',
    'county':''
  }
}
$scope.Olbtn = function(){
  $scope.showSelect = "false"
  alert("Today you can plant is currently available for Alabama and Flordia  some features may be disabled. ");
}

$scope.mysettings

var region = []

  localStorageService
  $scope.Counties = countyList.alabama();
  $scope.FLCounties = countyList.flordia();

$scope.saveRegion = function(){
  window.localStorage.clear()
  window.localStorage['didTutorial'] = true;
  //window.localStorage['region']= angular.toJson($scope.state);
  region = ({'state': $scope.state['name'], 'zone': $scope.state['county'] })

  window.localStorage['region'] = angular.toJson(region);

}
$scope.removeRegion = function(){
  window.localStorage.clear()
}
$scope.alertRegion = function(){
  //alert(window.localStorage['didTutorial'])
  //alert($scope.state['county']);
  alert(region);
  console.log(region);
  console.log('test')
}

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
