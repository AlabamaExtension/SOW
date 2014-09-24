function daysBetweenDateAndToday(date) {
  monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  month = date.substring(0,2);
  day = date.substring(2,4);
  month = parseInt(month);
  daysInMonths = 0;
  for(i = 0; i < month - 1; i++) {
    daysInMonths += monthArray[i];
  }
  numDaysDate = daysInMonths + parseInt(day);
  var today = new Date;
  var thisDay = today.getDate();
  var thisMonth = today.getMonth()+1;
  daysInMonths = 0;
  for(i = 0; i < thisMonth - 1; i++) {
    daysInMonths += monthArray[i];
  }
  numDaysToday = daysInMonths + thisDay;
  return numDaysToday - numDaysDate;
}

function daysBetweenNextDateAndToday(date) {
  monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  month = date.substring(0,2);
  day = date.substring(2,4);
  month = parseInt(month);
  daysInMonths = 0;
  for(i = 0; i < month - 1; i++) {
    daysInMonths += monthArray[i];
  }
  //NUMBER OF DAYS IN THE YEAR TO THIS DATE
  numDaysDate = daysInMonths + parseInt(day);



  var today = new Date;
  var thisDay = today.getDate();
  var thisMonth = today.getMonth()+1;
  daysInMonths = 0;
  //NEED TO COUNT NUMBER OF DAYS LEFT IN YEAR PLUS PREVIOUS NUMBER
  for(i = 11; i > thisMonth - 1; i--) {
    daysInMonths += monthArray[i];
  }
  numDaysToday = daysInMonths - thisDay;
  return numDaysToday + numDaysDate;
}


angular.module('starter.services', [])

.service('Garden', function(Vegetables, localStorageService) {
  var garden = [];

  return {
    addToGarden: function(id) {
      date = new Date();
      if(date.getUTCMonth() < 9) storeDate = 0 + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate();
      else storeDate =  (date.getUTCMonth() + 1) + '' + date.getUTCDate()
      garden.push({'id': id, 'added': storeDate});
      store = JSON.stringify(garden) + "";
      localStorageService.add("garden", angular.toJson(garden));
    },
    removeFromGarden: function(id) {
      tempArray = Array();
      for(i=0; i < garden.length; i++) {
        if(garden[i].id != id) tempArray.push(garden[i]);
      }
      garden = tempArray;
      localStorageService.add("garden", angular.toJson(garden));
    },
    inGarden: function(id) {
      for(i=0; i < garden.length; i++) {
        if(garden[i].id == id) return true;
      }
      return false;
    },
    checkReadyForHarvest: function() {
      tod = new Date();
      if(tod.getUTCMonth() < 9) today = 0 + '' + (tod.getUTCMonth() + 1) + '' + tod.getUTCDate();
      else today =  (tod.getUTCMonth() + 1) + '' + tod.getUTCDate();
      for(i = 0; i < garden.length; i++) {
       addedDate = garden[i].added;
       id = garden[i].id;
       friend = Vegetables.get(id);
      }
    },
    get: function() {
      return garden;
    },
    getById: function(id) {
      for(i=0; i < garden.length; i++) {
        if(garden[i].id == id) return garden[i];
      }
      return null;
    },
    updateGarden: function(newList) {
      garden = newList;
    }
  }
})

/**
 * A simple example service that returns some data.
 */



.service('Vegetables', function() {
  // Might use a resource here that returns a JSON array

     
    
  // Some fake testing data
  var vegetables = [
  {
        "Name": "Asparagus",
        "Id":"0",
        "image": "image1",
        "display": "card-image1",
        "afterFrost": "14",
        "range": "30",
        "beforeFrost": "false",
        "DaystoHarvest": "40 - 50",
        "Plantsperperson":" 3 crowns",
        "EstimatedProductioninlbs":"1",
        "Spacing": "18 x 12",
        "PlantingDepth": "8",
        "Varieties": "Jersey Giant, Jersey Knight, Jersey Supreme, Martha Washington, Purple Passion",
        "SpecialNotes": "One of the few perennial crops in the garden. For healthier plants, always start with crowns in early spring. Double dig rows or plant in raised beds to help promote healthy establishment. Do not harvest spears the first year. ",
        "inGarden": "false"   
   },

   {
        "Name": "Snap Beans",
        "Id":"1",
        "image": "image2",
        "display": "card-image2",
        "afterFrost": "7",
        "range": "30",
        "beforeFrost": "false",
      
        "DaystoHarvest": "52 - 60",
        "Plantsperperson": " 1/2 ounce (seeds)",
        "EstimatedProductioninlbs":"12",
        "Spacing": "3 x 12",
        "PlantingDepth": "3/4 - 1 1/2",
        "Varieties": "Atlantic, Bronco, Magnum, Pod, Squad, Roma II, Dade, Stringless Blue Lake, White Seeded, Kentucky Wonder",
      
        "SpecialNotes": "Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production (as legumes, bean plants fix their own nitrogen). Snap Beans, aka Green Beans, grow as pole or bush type varieties. Bush type beans are popular because they mature early (55 - 65 days). Make successive plantings at 2 - 3 week intervals.",
        "inGarden": "false"   
    },
    {
          "Name": "Lima Beans",
          "Id":"2",
          "image": "image3",
          "display": "card-image3",
          "afterFrost": "7",
          "range": "30",
          "beforeFrost": "false",
          "DaystoHarvest": "68 - 88",
          "Plantsperperson": "2 ounces (seeds)",
          "EstimatedProductioninlbs":"10 (shelled)",
          "Spacing": "36 x 3-6",
          "PlantingDepth": "1 - 1 3/4",
          "Varieties": "Bridgeton, Dixie Butter Pea, Foodhook 242, Early Thorogreen, Speckled Dixie Butter Pea, Carolina Sieva, King of the Garden, Willow Leaf",
          "SpecialNotes": "Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production. Lima Beans, aka Butter Beans, grow as pole or bush type varieties. Lima beans will continue to produce during slightly hotter temperatures compared to Snap Beans.",
          "inGarden": "false"   
    },
       
    {
          "Name": "Tomatoes",
          "Id":"3",
          "image": "image34",
          "display": "card-image34",
          "afterFrost": "7",
          "range": "1000",
          "beforeFrost": "false",
          "DaystoHarvest": "60 - 70",
          "Plantsperperson":" 3 crowns",
          "EstimatedProductioninlbs":"1",
          "Spacing": "18 x 12",
          "PlantingDepth": "8",
          "Varieties": "Jersey Giant, Jersey Knight, Jersey Supreme, Martha Washington, Purple Passion",
          "SpecialNotes": "One of the few perennial crops in the garden. For healthier plants, always start with crowns in early spring. Double dig rows or plant in raised beds to help promote healthy establishment. Do not harvest spears the first year. ",
          "inGarden": "false"   
    }
    ];
    
    return {

    getEligible: function(lastFrost, nextFrost) {
              alert('t');
      daysSinceLastFrost = daysBetweenDateAndToday(lastFrost);
      daysUntilNextFrost = daysBetweenDateAndToday(nextFrost);
      daysUntilNextLastFrost = daysBetweenNextDateAndToday(lastFrost);
      eligible = new Array();
      for(i = 0; i < vegetables.length; i++) {
        daysToHarvestArray = vegetables[i].DaystoHarvest.split(" - ");
        //CHECK WITH TYLER ON THIS LOGIC
        if(vegetables[i].beforeFrost != "false" 
            && parseInt(vegetables[i].beforeFrost) >= daysUntilNextFrost
            && daysUntilNextLastFrost > daystoHarvestArray[1]) {
          eligible.push(vegetables[i]);
        } else if(vegetables[i].afterFrost != "false"
            && parseInt(vegetables[i]).afterFrost <= daysSinceLastFrost
            && daysUntilNextFrost > daysToHarvestArray[1]) {
          eligible.push(vegetables[i]);
        }
      }
      return eligible;
    },

    today: function() {
        
      return vegetables;
        
        },
   
    get: function(friendId) {
      // Simple index lookup
      return vegetables[friendId];
    },

    getHarvestDate: function(planted, id) {
      plant = vegetables[id];
      startHarvest = new Date();
      endHarvest = new Date();
      daystoHarvest = plant.DaystoHarvest;
      daystoHarvestArray = daystoHarvest.split(" - ");
      startHarvest.setDate(planted.getDate() + parseInt(daystoHarvestArray[0]));
      endHarvest.setDate(planted.getDate() + parseInt(daystoHarvestArray[1]));
      return startHarvest.toDateString().slice(3, -5) + " - " + endHarvest.toDateString().slice(3, -5);
    },

    updateVegetablesInGarden: function(garden) {
      for(i = 0; i < vegetables.length; i++) {
        for(j = 0; j < garden.length; j++) {
          if(vegetables[i].Id == garden[j].id) vegetables[i].inGarden = true;
        }
      }
    }
  }
});


