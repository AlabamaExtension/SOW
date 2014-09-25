angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlantTodayCtrl', function($scope, $rootScope, $ionicPlatform, $http, $location, $ionicSlideBoxDelegate, localStorageService, Vegetables, Garden) {
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

   // $scope.region = angular.fromJson(region);
      var myRegion = angular.fromJson(localStorageService.get("region")) || [];
      //console.log(myRegion)
      console.log(myRegion.zone)

      var a = new Date ()
      var b = a.getMonth() + ""+ a.getDate();
      
      Date.prototype.getDOY = function() {
      var onejan = new Date(this.getFullYear(),0,1);
      return Math.ceil((this - onejan) / 86400000);
      }

      var today = new Date();
      var daynum = today.getDOY();
      //console.log(daynum)

      console.log(myRegion.zone.substring(0,1))

     

      $rootScope.vegList= Vegetables.today();

      var todayItems = []

      
      
      if (myRegion.state == "FL") {

          var veggies = Vegetables.florida()
          var vegArray = Vegetables.florida();
      }
      else if (myRegion.state == "AL"){
        var veggies = Vegetables.today()
        var vegArray = Vegetables.today();

      }
      


      
      //console.log(vegArray)
      var lengthEmptyArray = vegArray.length; 

     for (var i = 0; i < lengthEmptyArray; i++){
         spring = 151;
             

        switch(myRegion.zone.substring(0,1)) {
        case 'n':
            if(daynum < spring) {
             
              var firstday = veggies[i].Regions.North.SpringFirst;
              var lastday = veggies[i].Regions.North.SpringLast;

              }
            else {
              var firstday= veggies[i].Regions.North.FallFirst;
              var lastday = veggies[i].Regions.North.FallLast;
            }
        break;
        case 'c':
            if(daynum < spring) {
              var firstday = veggies[i].Regions.Central.SpringFirst;
              var lastday = veggies[i].Regions.Central.SpringLast;
            }
            else {
              var firstday= veggies[i].Regions.Central.FallFirst;
              var lastday = veggies[i].Regions.Central.FallLast;
            }
        break;
        case 's':
            if(daynum < spring) {
                var firstday = veggies[i].Regions.South.SpringFirst;
                var lastday = veggies[i].Regions.South.SpringLast;

            }
            else {
              var firstday= veggies[i].Regions.South.FallFirst;
              var lastday = veggies[i].Regions.South.FallLast;
            

            }
             // console.log("its fall yall")
               // var firstday = $rootScope.vegList.Regions.South.FallFirst;
                //var lastday = $rootScope.vegList.Regions.South.FallLast;
            
        break;
                       
          
          }

          if(firstday <= daynum && daynum <= lastday){
        
                todayItems.push(veggies[i])
                
                $scope.TodayItems = todayItems
            }
         
        }
         // console.log(firstday)

          //if(firstday <= daynum && daynum <= lastday){
        
            //}
        


     

      //console.log(firstday)


      /*switch(myRegion.zone.substring(0,1)) {
        case 'n':
            if(daynum < spring) {
                var firstday = term.Regions.North.SpringFirst;
                var lastday = term.Regions.North.SpringLast;
            }
            else {
                var firstday = term.Regions.North.FallFirst;
                var lastday = term.Regions.North.FallLast;
            }
        break;
        case 'c':
            if(daynum < spring) {
                var firstday = term.Regions.Central.SpringFirst;
                var lastday = term.Regions.Central.SpringLast;
            }
            else {
                var firstday = term.Regions.Central.FallFirst;
                var lastday = term.Regions.Central.FallLast;
            }
        break;
        case 's':
            if(daynum < spring) {
                var firstday = term.Regions.South.SpringFirst;
                var lastday = term.Regions.South.SpringLast;
            }
            else {
                var firstday = term.Regions.South.FallFirst;
                var lastday = term.Regions.South.FallLast;
            }
        break;
      }*/















      
      
      //alert(today)

    /* $scope.$on.testFilter = function(){
      if (myRegion.zone = "north") {
        $rootScope.vegList= Vegetables.today();
      }
      else{
        $rootScope.vegList = null;
      };}
      
    //navigator.geolocation.getCurrentPosition(function(position) {

       /* $rootScope.$apply(function() {
           $rootScope.vegList = Vegetables.getEligible($rootScope.lastFrost, $rootScope.nextFrost).sort();
         
        });*/
      //});
    });
  })

.controller('SearchCtrl', function($scope, $rootScope, $ionicPlatform, $http, $location, $ionicSlideBoxDelegate, Vegetables) {
  
})

//<<<<<<< HEAD
            .controller("ZipController", function($scope) {
                $scope.zip = {};
				
				
				
				
				$scope.myForm.submitTheForm = function(item, event) {
       console.log("--> Submitting form");
       var dataObject = {
          name : $zip
          ,car  : $zip
       };

       var responsePromise = $http.post("/angularjs-examples/json-test-data.jsp", dataObject, {});
       responsePromise.success(function(dataFromServer, status, headers, config) {
          console.log(dataFromServer.title);
       });
        responsePromise.error(function(data, status, headers, config) {
          alert("Submitting form failed!");
       });
				}
				
				
				
				
				
				
				
				
				
				
            } )

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
//=======
.controller('BrowseCtrl', function($scope,  Vegetables) {  
  $scope.AllVegetables = Vegetables.today();
})
//>>>>>>> origin/master
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
 // window.localStorage['didTutorial'] = true;
  //window.localStorage['region']= angular.toJson($scope.state);
  region = ({'state': $scope.state['name'], 'zone': $scope.state['county'] })

  //window.localStorage['region'] = angular.toJson(region);
localStorageService.add("region", angular.toJson(region))
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
