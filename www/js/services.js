
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
/*****Utility Function*********
takes in a date and returns the number of days between that date and today*/

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
/* looking at days between first frost date (fall) and last frost day (spring) looking
in the future*/




angular.module('starter.services', [])

.service('Garden', function(Vegetables, localStorageService) {
  var garden = []; //<-- gargen array that is populated from local storage private array to garden ctrl
  
  return {
    addToGarden: function(id) {
      date = new Date();
      if(date.getUTCMonth() < 9) storeDate = 0 + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate();
      else storeDate =  (date.getUTCMonth() + 1) + '' + date.getUTCDate()
      garden.push({'id': id, 'added': storeDate});
      store = JSON.stringify(garden) + "";
      localStorageService.add("garden", angular.toJson(garden));
    }, /*adds id of vegetable to garden and stores date that you added it and saves 
    to local storage*/
    removeFromGarden: function(id) {
      tempArray = Array();
      for(i=0; i < garden.length; i++) {
        if(garden[i].id != id) tempArray.push(garden[i]);
      }
      garden = tempArray;
      localStorageService.add("garden", angular.toJson(garden));
    },/*remove id from garden array and resave to local storage*/

    inGarden: function(id) {
      for(i=0; i < garden.length; i++) {
        if(garden[i].id == id) return true;
      }
      return false;
    }, // checks to private garden array for id passed and returns boolean - decides if icon is shown in plant now ctrl
    checkReadyForHarvest: function() {
      tod = new Date();
      if(tod.getUTCMonth() < 9) today = 0 + '' + (tod.getUTCMonth() + 1) + '' + tod.getUTCDate();
      else today =  (tod.getUTCMonth() + 1) + '' + tod.getUTCDate();
      for(i = 0; i < garden.length; i++) {
       addedDate = garden[i].added;
       id = garden[i].id;
       friend = Vegetables.get(id);
      }
    }, // not finished but loop through garden and return vegetables that are ready for harvest. 
    get: function() {
      return garden;
    },// returns entire garden
    getById: function(id) {
      for(i=0; i < garden.length; i++) {
        if(garden[i].id == id) return garden[i];
      }
      return null;
    }, // returns array item that is selected. 
    updateGarden: function(newList) {
      garden = newList;
    }// shortcut update garden on app intial, 'risky because it wipes every thing' change name to startGarden
  }
})

/*
 * A simple example service that returns some data.
 */


.service('countyList', function(){

  var ALcounty = 
 [
  {
    "Name":"Autauga",
    "Value":"central"
  },
  {
    "Name":"Baldwin",
    "Value":"south"
  },
  {
    "Name":"Barbour",
    "Value":"central"
  },
  {
    "Name":"Bibb",
    "Value":"central"
  },
  {
    "Name":"Blount",
    "Value":"north"
  },
  {
    "Name":"Bullock",
    "Value":"central"
  },
  {
    "Name":"Butler",
    "Value":"central"
  },
  {
    "Name":"Calhoun",
    "Value":"north"
  },
  {
    "Name":"Chambers (north)",
    "Value":"north"
  },
  {
    "Name":"Chambers (south)",
    "Value":"central"
  },
  {
    "Name":"Cherokee",
    "Value":"north"
  },
  {
    "Name":"Chilton",
    "Value":"central"
  },
  {
    "Name":"Choctaw",
    "Value":"central"
  },
  {
    "Name":"Clarke (north)",
    "Value":"central"
  },
  {
    "Name":"Clarke (south)",
    "Value":"south"
  },
  {
    "Name":"Clay",
    "Value":"north"
  },
  {
    "Name":"Cleburne",
    "Value":"north"
  },
  {
    "Name":"Coffee (east)",
    "Value":"south"
  },
  {
    "Name":"Coffee (west)",
    "Value":"central"
  },
  {
    "Name":"Colbert",
    "Value":"north"
  },
  {
    "Name":"Conecuh (north & east)",
    "Value":"central"
  },
  {
    "Name":"Conecuh (south & west)",
    "Value":"south"
  },
  {
    "Name":"Coosa (north)",
    "Value":"north"
  },
  {
    "Name":"Coosa (south)",
    "Value":"central"
  },
  {
    "Name":"Covington (north)",
    "Value":"central"
  },
  {
    "Name":"Covington (south)",
    "Value":"south"
  },
  {
    "Name":"Crenshaw",
    "Value":"central"
  },
  {
    "Name":"Cullman",
    "Value":"north"
  },
  {
    "Name":"Dale (north)",
    "Value":"central"
  },
  {
    "Name":"Dale (south)",
    "Value":"south"
  },
  {
    "Name":"Dallas",
    "Value":"central"
  },
  {
    "Name":"DeKalb",
    "Value":"north"
  },
  {
    "Name":"Elmore",
    "Value":"central"
  },
  {
    "Name":"Escambia",
    "Value":"south"
  },
  {
    "Name":"Etowah",
    "Value":"north"
  },
  {
    "Name":"Fayette",
    "Value":"north"
  },
  {
    "Name":"Franklin",
    "Value":"north"
  },
  {
    "Name":"Geneva",
    "Value":"south"
  },
  {
    "Name":"Greene",
    "Value":"central"
  },
  {
    "Name":"Hale",
    "Value":"central"
  },
  {
    "Name":"Henry (east)",
    "Value":"south"
  },
  {
    "Name":"Henry (west)",
    "Value":"central"
  },
  {
    "Name":"Houston",
    "Value":"south"
  },
  {
    "Name":"Jackson",
    "Value":"north"
  },
  {
    "Name":"Jefferson (north)",
    "Value":"north"
  },
  {
    "Name":"Jefferson (south)",
    "Value":"south"
  },
  {
    "Name":"Lamar",
    "Value":"north"
  },
  {
    "Name":"Lauderdale",
    "Value":"north"
  },
  {
    "Name":"Lawrence",
    "Value":"north"
  },
  {
    "Name":"Lee",
    "Value":"central"
  },
  {
    "Name":"Limestone",
    "Value":"north"
  },
  {
    "Name":"Lowndes",
    "Value":"central"
  },
  {
    "Name":"Macon",
    "Value":"central"
  },
  {
    "Name":"Madison",
    "Value":"north"
  },
  {
    "Name":"Marengo",
    "Value":"central"
  },
  {
    "Name":"Marion",
    "Value":"north"
  },
  {
    "Name":"Marshal",
    "Value":"north"
  },
  {
    "Name":"Mobile",
    "Value":"south"
  },
  {
    "Name":"Monroe (north)",
    "Value":"central"
  },
  {
    "Name":"Monroe (south)",
    "Value":"south"
  },
  {
    "Name":"Montgomery",
    "Value":"central"
  },
  {
    "Name":"Morgan",
    "Value":"north"
  },
  {
    "Name":"Perry",
    "Value":"central"
  },
  {
    "Name":"Pike",
    "Value":"central"
  },
  {
    "Name":"Pickens (north)",
    "Value":"north"
  },
  {
    "Name":"Pickens (south)",
    "Value":"central"
  },
  {
    "Name":"Randolph",
    "Value":"north"
  },
  {
    "Name":"Russell",
    "Value":"central"
  },
  {
    "Name":"Shelby",
    "Value":"central"
  },
  {
    "Name":"St Clair",
    "Value":"north"
  },
  {
    "Name":"Sumter",
    "Value":"central"
  },
  {
    "Name":"Talladega (north)",
    "Value":"north"
  },
  {
    "Name":"Tallapoosa (south & west)",
    "Value":"north"
  },
  {
    "Name":"Tallapoosa (north & east)",
    "Value":"central"
  },
  {
    "Name":"Talladega (south)",
    "Value":"central"
  },
  {
    "Name":"Tuscaloosa (north)",
    "Value":"north"
  },
  {
    "Name":"Tuscaloosa (south)",
    "Value":"central"
  },
  {
    "Name":"Walker",
    "Value":"north"
  },
  {
    "Name":"Washington (north)",
    "Value":"central"
  },
  {
    "Name":"Washington (south)",
    "Value":"south"
  },
  {
    "Name":"Wilcox",
    "Value":"central"
  },
  {
    "Name":"Winston",
    "Value":"north"
  }
];
 var FLcounty = 
 [
  {
    "Name":"Santa Rosa",
    "Value":"central"
  },
  {
    "Name":"Bay",
    "Value":"south"
  },
  {
    "Name":"Taylor",
    "Value":"central"
  },
  {
    "Name":"Clay",
    "Value":"central"
  },
  {
    "Name":"Lee",
    "Value":"north"
  },
  {
    "Name":"Palm Beach",
    "Value":"central"
  },
  {
    "Name":"Miami - Dade",
    "Value":"central"
  }
  ];
return{

  alabama: function(){
    return ALcounty;
  },
  flordia: function(){
    return FLcounty;
  }
}



})
.service('Vegetables', function() {
  // Might use a resource here that returns a JSON array

     
    
  // Some fake testing data
  var vegetables = [

  {
      "Name": "Asparagus",
        "Id":"0",
      "image": "image1",
      "display": "card-image1",
      "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 90,
          "FallFirst": null,
          "FallLast": null
        },
        "Central": {
          "SpringFirst": 71,
          "SpringLast": 90,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 15,
          "SpringLast": 151,
          "FallFirst": null,
          "FallLast": null
        }
      },
      "Days to Harvest": "perennial (March - May)",
      "Plants per person":" 3 crowns",
      "Estimated Production in lbs":"1",
      "Spacing (inches)": "18 x 12",
      "Planting Depth (inches)": "8",
      "Varieties": "Jersey Giant, Jersey Knight, Jersey Supreme, Martha Washington, Purple Passion",
      
      "Special Notes": "One of the few perennial crops in the garden. For healthier plants, always start with crowns in early spring. Double dig rows or plant in raised beds to help promote healthy establishment. Do not harvest spears the first year. "
    },
    {
      "Name": "Snap Beans",
         "Id":"1",
      "image": "image2",
      "display": "card-image2",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 135,
          "FallFirst": 196,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": 91,
          "SpringLast": 120,
          "FallFirst": 213,
          "FallLast": 232
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 213,
          "FallLast": 273
        }
      },
        "Days to Harvest": "52 - 60",
        "Plants per person": " 1/2 ounce (seeds)",
        "Estimated Production in lbs":"12",
        "Spacing (inches)": "3 x 12",
        "Planting Depth (inches)": "3/4 - 1 1/2",
        "Varieties": "Atlantic, Bronco, Magnum, Pod, Squad, Roma II, Dade, Stringless Blue Lake, White Seeded, Kentucky Wonder",
      
        "Special Notes": "Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production (as legumes, bean plants fix their own nitrogen). Snap Beans, aka Green Beans, grow as pole or bush type varieties. Bush type beans are popular because they mature early (55 - 65 days). Make successive plantings at 2 - 3 week intervals.",
        
    },
    {
      "Name": "Lima Beans",
         "Id":"2",
      "image": "image3",
      "display": "card-image3",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 140,
          "FallFirst": 182,
          "FallLast": 212
        },
        "Central": {
          "SpringFirst": 96,
          "SpringLast": 125,
          "FallFirst": 201,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 213,
          "FallLast": 243
        }
      },
        "Days to Harvest": "68 - 88",
        "Plants per person": "2 ounces (seeds)",
        "Estimated Production in lbs":"10 (shelled)",
        "Spacing (inches)": "36 x 3-6",
        "Planting Depth (inches)": "1 - 1 3/4",
        "Varieties": "BrIdgeton, Dixie Butter Pea, Foodhook 242, Early Thorogreen, Speckled Dixie Butter Pea, Carolina Sieva, King of the Garden, Willow Leaf",
        "Special Notes": "Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production. Lima Beans, aka Butter Beans, grow as pole or bush type varieties. Lima beans will continue to produce during slightly hotter temperatures compared to Snap Beans."
    },
    {
      "Name": "Beets",
      "Id":"3",
      "image": "image4",
      "display": "card-image4",
      "Regions": {
        "North": {
          "SpringFirst": 60,
          "SpringLast": 90,
          "FallFirst": 213,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 90,
          "FallFirst": 212,
          "FallLast": 244
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 273
        }
      },
      "Days to Harvest": "49 - 75",
      "Plants per person": "less than 1/4 ounce (seeds)",
      "Estimated Production in lbs":"3 or more",
      "Spacing (inches)": "30 x 2",
      "Planting Depth (inches)": "1",
      "Varieties": "Detroit Dark Red, Red Ace, Ruby Queen",
     
      "Special Notes": "Both greens and roots are edible from Beets. Harvest greens when 6 inches tall."
    },
     
      {
      "Name": "Broccoli",
         "Id":"4",
      "image": "image37",
      "display": "card-image37",
      "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 74,
          "FallFirst": 182,
          "FallLast": 212
        },
        "Central": {
          "SpringFirst": 46,
          "SpringLast": 74,
          "FallFirst": 201,
          "FallLast": 227
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"60 - 75",
        "Plants per person":"3 plants",
        "Estimated Production in lbs":"7",
        "Spacing (inches)":"36 x 18",
        "Planting Depth (inches)":"plant level with the soil surface",
        "Varieties":"Green Commet, Packman, Mariner, Premium Crop",
        "Special Notes":"For the southern region, always use transplants. For the north and central regions, use transplants in spring and seeds in fall. When using transplants, plant level with the soil surface. Broccoli heads are a mass of flower buds. Harvest the heads before flowers open and show yellow. These are usually 3 - 6 inches across. Smaller heads will develop on sIdes after harvesting the central head. Use or freeze broccoli soon after harvest."
    },
     
     
     
    {
      "Name": "Brussels Sprouts",
         "Id":"5",
      "image": "image6",
      "display": "card-image6",
      "Regions": {
        "North": {
          "SpringFirst": null,  
          "SpringLast": null,
          "FallFirst": 213,
          "FallLast": 244
        },
        "Central": {
          "SpringFirst": 212,
          "SpringLast": 244,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 244,
          "SpringLast": 303,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest":"80 - 130",
        "Plants per person":"3 plants",
        "Estimated Production in lbs":"5",
        "Spacing (inches)":"36 x 18",
        "Planting Depth (inches)":"plant level with the soil surface",
        "Varieties":"Long Island Improved, Jade",
        "Special Notes":"Brussel Sprouts take 3 months or more to mature from seed. If planting in the southern region, use transplants. Begin removing sprouts from base of plant when they become firm. Continue harvesting upward as new sprouts develop. Be sure to leave large basal leaves as they are essential for growth."
    },
    {
      "Name": "Cabbage",
         "Id":"6",
      "image": "image7",
      "display": "card-image7",
      "Regions": {
        "North": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 196,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": 15,
          "SpringLast": 60,
          "FallFirst": 206,
          "FallLast": 244
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 31,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"80 - 130",
        "Plants per person":"3 plants",
        "Estimated Production in lbs":"11 (4 heads)",
        "Spacing (inches)":"36 x 18",
        "Planting Depth (inches)":"plant level with the soil surface",
        "Varieties":"Bravo, Cheers, Market Price, Cardinal, Red Dynasty",
        "Special Notes":"For southern region, always use transplants. For the north and central regions, use transplants in spring and seeds in fall. When using transplants, plant level with the soil surface. Plant spacing affects plant size, a minimum 12 inches apart is recommended. Cabbage can be stored in the refrigerator up to 2 months."
    },
    {
      "Name": "Cantaloupe (Muskmelon)",
         "Id":"7",
      "image": "image8",
      "display": "card-image8",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 135,
          "FallFirst": 166,
          "FallLast": 181
        },
        "Central": {
          "SpringFirst": 101,
          "SpringLast": 130,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest":"60 - 71",
        "Plants per person":"less than 1/4 ounce (seeds)",
        "Estimated Production in lbs":"20",
        "Spacing (inches)":"60 x 24",
        "Planting Depth (inches)":"1 - 1 1/4",
        "Varieties":"Ambrosia, Athena, Eclipse, Odyssey, Superstar, Honey Mix, Santa Fe",
        "Special Notes":"Cantaloupes grow best when direct seeded into a mounded hill. Hills should be 2 - 3 feet apart. AvoId overwatering as fruits mature. This reduces fruit sugar content. Harvest cantaloupes at half slip start (when half of the stem has separated from the fruit)."
    },
    {
      "Name": "Carrots",
         "Id":"8",
      "image": "image9",
      "display": "card-image9",
      "Regions": {
        "North": {
          "SpringFirst": 41,
          "SpringLast": 101,
          "FallFirst": 201,
          "FallLast": 264
        },
        "Central": {
          "SpringFirst": 41,
          "SpringLast": 91,
          "FallFirst": 213,
          "FallLast": 264
        },
        "South": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 213,
          "FallLast": 303
        }
      },
        "Days to Harvest":"60 - 70",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"7",
        "Spacing (inches)":"30 x 1-2",
        "Planting Depth (inches)":"1/4",
        "Varieties":"Cheyenne, Choctaw, Danvers 126, Top Notch",
       
        "Special Notes":"Double dig rows to loosen soil and prevent compaction, or plant in raised beds. Broadcast seeds in a wIde bed or planting row. Carrot seeds sprout slowly; be sure to keep soil moist until sprouts are seen. Once sprouts are an inch tall or more, thin to 2 inch spacing. Consistent moisture is important for root development. Fluctuations in moisture can cause cracking and root rot."
    },
    {
      "Name": "Cauliflower",
     "Id":"9",
      "image": "image10",
      "display": "card-image10",
      "Regions": {
        "North": {
          "SpringFirst": 1,
          "SpringLast": 46,
          "FallFirst": 206,
          "FallLast": 222
        },
        "Central": {
          "SpringFirst": 1,
          "SpringLast": 46,
          "FallFirst": 206,
          "FallLast": 222
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"50 - 90",
        "Plants per person":"2",
        "Estimated Production in lbs":"5 (3 heads)",
        "Spacing (inches)":"36 x 12",
        "Planting Depth (inches)":"plant level with the soil surface",
        "Varieties":"Early Snowball, Snow Crown, White Passion",
        "Special Notes":"For southern region, always use transplants. For the north and central regions, use transplants in spring and seeds in fall. Cauliflower is one of the more particular vegetables in the home garden. It requires cool but frost free temperatures (45F - 65F). Cauliflower grows best as a fall crop in Alabama."
    },
    {
      "Name": "Celery",
        "Id":"10",
      "image": "image11",
      "display": "card-image11",
      "Regions": {
        "North": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": null,
          "FallLast": null
        },
        "Central": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 90,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest":"115 - 125",
        "Plants per person":"7 plants",
        "Estimated Production in lbs":"3 (2 stalks)",
        "Spacing (inches)":"18 x 24 ",
        "Planting Depth (inches)":"plant level with soil line",
        "Varieties":"Tall Utah 52 - 70, Pascal",
        "Special Notes":"Look for early maturing varieties. Because celery requires longer than 3 months to mature, it does not preform well in Alabama's hot summers and short falls."
    },
    {
      "Name": "Chinese Cabbage",
        "Id":"11",
      "image": "image12",
      "display": "card-image12",
      "Regions": {
        "North": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 213,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 213,
          "FallLast": 227
        },
        "South": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 244,
          "FallLast": 273
        }
      },
        "Days to Harvest":"55-62",
        "Plants per person":"3 plants",
        "Estimated Production in lbs":"11 (4 heads)",
        "Spacing (inches)":"36 x 12",
        "Planting Depth (inches)":"1/2",
        "Varieties":"China Flash, Jade Pagoda, Kasumi,  Monument, Orange Queen, Pak Choi-Lei Choi, Shinki, Shori 60,    Summertime II, Yuki",
        
        "Special Notes":"Chinese Cabbage grows as two types, the Pekinensis or Chinensis groups. The Pekinensis group includes broadleaf compact heading varieties. The Chinensis groups are non heading and more open. Bok Choy is in the Chinesis group. Harvest heads after the first mild frost in the fall."
    },
    
    {
    "Name": "Collards",
    "Id":"12",
    "image": "image13",
    "display": "card-image13",
      "Regions": {
        "North": {
          "SpringFirst": 41,
          "SpringLast": 85,
          "FallFirst": 217,
          "FallLast": 258
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 80,
          "FallFirst": 227,
          "FallLast": 259
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"70 - 80",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"2",
        "Spacing (inches)":"36 x 12 - 18",
        "Planting Depth (inches)":"1/2",
        "Varieties":"Blue Max, Carolina, Champion, Flash, Georgia Southern, Top Bunch, Vates",
        
        "Special Notes":"When harvesting, remove one or more leaves from each plant but never harvest more than 1/3 of a single plant at a time. Greens are usually ready for harvest 2 months after planting. A small amount of sIde dress fertilizer after first harvest increases productivity. Collards are especially nutritious, supplying important amounts of your daily vitamins."
    
    },
    {
    "Name": "Sweet Corn",
    "Id":"13",
    "image": "image14",
    "display": "card-image14",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 201
        },
        "Central": {
          "SpringFirst": 80,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 181
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest":"63 - 90",
        "Plants per person":"1/2 ounce seed",
        "Estimated Production in lbs":"6 (kernels) (20 ears)",
        "Spacing (inches)":"36 x 15",
        "Planting Depth (inches)":"1",
        "Varieties":"Quick Silver (w), Summer Sweet 7311 (w), Sweet Ice (w), Ice Queen (w), Silverado (w), Snowbell (w), Snow White (w), Even Sweeter (w), Pegasus (w), Silver King (w), Silver Queen (w), Dazzle (bi), Big Time (bi), Summer Sweet 8102 (bi), Sweet Chorus (bi), Sweet G90, Sweet Rhythm (bi)",
        
        "Special Notes":"Plant on or within a few days after the last frost of the season. Plant Sweet Corn in a block rather than a row, this will ensure good pollination. Harvest in early morning when temperature is still cool, this helps maintain high sugar content."
    },
    {
      "Name": "Cucumbers",
        "Id":"14",
      "image": "image15",
      "display": "card-image15",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 191
        },
        "Central": {
          "SpringFirst": 106,
          "SpringLast": 135,
          "FallFirst": 182,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 182,
          "FallLast": 243
        }
      },
        "Days to Harvest":"40 - 50",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"7",
        "Spacing (inches)":"60 x 24",
        "Planting Depth (inches)":"3/4",
        "Varieties":"Calypso (p), Carolina (p), Dasher II, Daytona, General Lee, Poinsett 76, Victory",
        
        "Special Notes":"There are two types of Cucumbers: slicers and picklers. Only a few plants are needed to supply an adequate amount for the family. Poor pollination results in misshapen and lack of fruits. This is often the case during rainy weather and high temperatures. If insecticIdes are needed, be sure to apply in late afternoon to protect pollinators. Harvest when fruit is 3 - 9 inches long."
    },
    {
      "Name": "Eggplant",
        "Id":"15",
      "image": "image16",
      "display": "card-image16",
      "Regions": {
        "North": {
          "SpringFirst": 121,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 191
        },
        "Central": {
          "SpringFirst": 100,
          "SpringLast": 135,
          "FallFirst": 182,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 182,
          "FallLast": 243
        }
      },
        "Days to Harvest":"43 - 55",
        "Plants per person":"1 plant",
        "Estimated Production in lbs":"4 (3 fruits)",
        "Spacing (inches)":"36 x 24",
        "Planting Depth (inches)":"",
        "Varieties":"Classic, Epic, Santana, Caper, Ghost Buster, Echiban, Rossalita, Hansel, Gretel",
        
        "Special Notes":"Very sensitive to cold soil temperatures. Set transplants (home grown or bought) in garden 2 weeks after last frost of the season. Apply a small amount of fertilizer around each plant after first fruit set. Fruit left on the plant too long, that matures during high temperatures, or in drought conditions often tastes bitter."
    },
    {
      "Name": "Kale",
        "Id":"16",
      "image": "image17",
      "display": "card-image17",
      "Regions": {
        "North": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 227,
          "FallLast": 259
        },
        "Central": {
          "SpringFirst": 41,
          "SpringLast": 69,
          "FallFirst": 227,
          "FallLast": 259
        },
        "South": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"70 - 80",
        "Plants per person":"2 plants",
        "Estimated Production in lbs":"1",
        "Spacing (inches)":"36 x 10",
        "Planting Depth (inches)":"1/2",
        "Varieties":"Blue RIdge, Blue Vates, Dwarf Siberian",
       
        "Special Notes":"Harvest outer leaves as they become 8 - 10 inches long. Harvest leaves from the outsIde in; new leaves will grow from the center. Never harvest more than 1/3 of the plant at one time. "
    },
    {
      "Name": "Kohlrabi",
    "Id":"17",
      "image": "image18",
      "display": "card-image18",
      "Regions": {
        "North": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 196,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": 15,
          "SpringLast": 60,
          "FallFirst": 206,
          "FallLast": 244
        },
        "South": {
          "SpringFirst": 32,
          "SpringLast": 90,
          "FallFirst": 227,
          "FallLast": 273
        }
      },
        "Days to Harvest":"49 - 85",
        "Plants per person":"6 plants",
        "Estimated Production in lbs":"2",
        "Spacing (inches)":"3 - 6 x 12 - 24",
        "Planting Depth (inches)":"1/2",
        "Varieties":"Early Purple Vienna, Early White Vienna, Eder, Grand Duke, Kolibri, Korist, Kossak, Purple, Danube, Triumph, White Danube, Winner",
        
        "Special Notes":"Like Cabbage, Kohlrabi tolerates some frost. Harvest when small for milder flavor and more tender texture. Harvest can begin when the youngest stems are about 1 inch in diameter."
    },
    {
      "Name": "Lettuce",
        "Id":"18",
        "image": "image19",
        "display": "card-image19",
      "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 74,
          "FallFirst": 227,
          "FallLast": 244
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 227,
          "FallLast": 244
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"45 - 65",
        "Plants per person":"5",
        "Estimated Production in lbs":"6 (5 heads)",
        "Spacing (inches)":"30 x 12",
        "Planting Depth (inches)":"1/8 - 1/2",
        "Varieties":"New Red Fire, Red Prize, Red Sails, Red Salad, Salad Bowl, Sierra, Slobolt, Tango, Buttercrunch, Ermosa, Esmeralda, Harmony, Optimal",
       
        "Special Notes":"One of the easiest cool season vegetables to grow. However, it is damaged in freezing temperatures. Lettuce can be planted on the shady sIde of taller crops to extend the season. Make successive plantings every 3 - 4 weeks to increase yields. "
    },
    {
    "Name": "Mustard",
    "Id":"19",
    "image": "image20",
    "display": "card-image20",
      "Regions": {
        "North": {
          "SpringFirst": 32,
          "SpringLast": 90,
          "FallFirst": 227,
          "FallLast": 258
        },
        "Central": {
          "SpringFirst": 15,
          "SpringLast": 74,
          "FallFirst": 227,
          "FallLast": 274
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"55 - 65",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"1",
        "Spacing (inches)":"30 x 2",
        "Planting Depth (inches)":"1/4",
        "Varieties":"FlorIda Broad Leaf, Green Boy, Green Wave, Red Giant, Savannah, Southern Giant Curled, Tendergreen",
       
        "Special Notes":"Harvest outer leaves when 6 - 8 inches long. Harvest leaves from the outsIde in, new leaves will grow from the center. Never harvest more than 1/3 of the plant at one time. Flavor will become bitter with increase in temperatures."
    },
    {
    "Name": "Okra",
    "Id":"20",
    "image": "image21",
    "display": "card-image21",
      "Regions": {
        "North": {
          "SpringFirst": 121,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 191
        },
        "Central": {
          "SpringFirst": 100,
          "SpringLast": 151,
          "FallFirst": 252,
          "FallLast": 181
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 181
        }
      },
        "Days to Harvest":"45 - 55",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"3",
        "Spacing (inches)":"36 x 12",
        "Planting Depth (inches)":"3/4 - 1",
        "Varieties":"Annie Oakley II, Baby Bubba, Burgundy, Cajun Delight, Clemson Spineless, Emerald, Lee, North and South, Spike, White Velvet",
       
        "Special Notes":"Okra is a warm season crop that prefers warm soils. Delay seeding until 3 - 4 weeks after last frost of the season. Each variety offers different pod size, shape, and color. For good germination, soak seeds in warm water for 6 hours prior to planting. Harvest pods when 2 - 4 inches long."
    },
    {
    "Name": "Onions",
    "Id":"21",
    "image": "image22",
    "display": "card-image22",
      "Regions": {
        "North": {
          "SpringFirst": 60,
          "SpringLast": 90,
          "FallFirst": 244,
          "FallLast": 303
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 74,
          "FallFirst": 259,
          "FallLast": 288
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"110-120",
        "Plants per person":"30 plants",
        "Estimated Production in lbs":"3",
        "Spacing (inches)":"30 x 2 - 4",
        "Planting Depth (inches)":"1/4 - 1",
        "Varieties":"Granex 33 (bulb), Savannah Sweet (bulb), Texas Grano 1015Y (bulb), Beltsville Bunching, Evergreen Bunching, Ishikura Long, Parade",
        
        "Special Notes":"Onions give a good return from the space invested. 2 - 4 rows of green onions per bed maximize yields. Large bulbing onions should be spaced a minimum of two inches apart. Bulbing onions are harvested when the stems weaken and fall over."
    },
     {
    "Name": "Sweet Peas",
    "Id":"22",
    "image": "image23",
    "display": "card-image23",
      "Regions": {
        "North": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": null,
          "FallLast": null
        },
        "Central": {
          "SpringFirst": 20,
          "SpringLast": 60,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": null,
          "FallLast": null
        }
      },
         "Days to Harvest":"50 - 70",
        "Plants per person":"4 ounces (seed)",
         "Estimated Production in lbs":"5",
        "Spacing (inches)":"36 x 1-3",
         "Planting Depth (inches)":"2",
        "Varieties":"Dual, Knight, Green Arrow, Oregon Sugar Pod II, Sugar Bon, Sugar Snap",
        
        "Special Notes":"Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production. Peas produce best when planted early spring or late summer. High temperatures cause flowers to drop. Sweet peas can be eaten in the pod or shelled. Pick early while still tender."
    },
    {
    "Name": "Southern Peas",
    "Id":"23",
    "image": "image24",
    "display": "card-image24",
      "Regions": {
        "North": {
          "SpringFirst": 111,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 200
        },
        "Central": {
          "SpringFirst": 100,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 181
        }
      },
        "Days to Harvest":"60 - 70",
        "Plants per person":"4 plants",
        "Estimated Production in lbs":"5",
        "Spacing (inches)":"42 x 4 - 6",
        "Planting Depth (inches)":"1 1/2 ",
        "Varieties":"Bettergro (be), California (be), Magnolia (be), Queen Anne (be), Coronet (pe), Pinkeye Purple Hull BVR, Quick Pick (pe), Texas Cream 12, White Acre BVR, Hercules (crd), Mississippi Purple (crd), Mississippi Silver (crd), Zipper Cream (crd)",
       
        "Special Notes":"Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production. Southern peas should be planted after all danger of frost has passed. It's important to maintain uniform soil moisture during bloom and pod maturity."
    },
    {
    "Name": "Peppers",
    "Id":"24",
    "image": "image25",
    "display": "card-image25",
      "Regions": {
        "North": {
          "SpringFirst": 121,
          "SpringLast": 151,
          "FallFirst": 201,
          "FallLast": 212
        },
        "Central": {
          "SpringFirst": 91,
          "SpringLast": 121,
          "FallFirst": 182,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 181,
          "FallLast": 243
        }
      },
        "Days to Harvest":"63-77 for Bells; 55-65 others",
        "Plants per person":"2 plants",
        "Estimated Production in lbs":"3",
        "Spacing (inches)":"36 x 24",
        "Planting Depth (inches)":"",
        "Varieties":"Capistrano (bell), Boynton Bell, x3R Camelot (bell), King Arthur (bell), Orobell (yel), Cubanelle, Banana Supreme, Habanero, Mitla (hot) Super Cayenne (hot)",
        
        "Special Notes":"Peppers can be found in a variety of sizes, shapes, colors, and heat levels. Although peppers are a diverse group, growing requirements are the same. Transplants (home grown or bought) are often more successful than direct seeding. Delay seeding until 2 weeks after last frost of the season."
    },
    {
    "Name": "White Potatoes",
    "Id":"25",
    "image": "image26",
    "display": "card-image26",
      "Regions": {
        "North": {
          "SpringFirst": 41,
          "SpringLast": 90,
          "FallFirst": 201,
          "FallLast": 217
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 69,
          "FallFirst": 196,
          "FallLast": 227
        },
        "South": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 213,
          "FallLast": 273
        }
      },
        "Days to Harvest":"100 - 110",
        "Plants per person":"2 pounds (seed potatoes)",
        "Estimated Production in lbs":"18",
        "Spacing (inches)":"36 x 12",
        "Planting Depth (inches)":"4 - 6",
        "Varieties":"Atlantic, Dark Red Norland, La Rouge, Red LaSoda",
        
        "Special Notes":"Highest yields result in years with cool temperatures and adequate moisture throughout the growing season. Potatoes require a large amount of fertilizer for production. Each seed tuber must have at least 1 bud or eye to grow a healthy plant. Gradually add soil each week until mound is 6 or more inches higher than above the original soil line. Potatoes are ready to harvest 90 - 120 days after planting."
    },
    {
    "Name": "Sweet Potatoes",
    "Id":"26",
    "image": "image27",
    "display": "card-image27",
      "Regions": {
        "North": {
          "SpringFirst": 111,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 191
        },
        "Central": {
          "SpringFirst": 111,
          "SpringLast": 181,
          "FallFirst": 152,
          "FallLast": 166
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 151,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest":"110 - 120",
        "Plants per person":"6 plants",
        "Estimated Production in lbs":"3",
        "Spacing (inches)":"42 x 12",
        "Planting Depth (inches)":"4 - 6",
        "Varieties":"Beauregard, Hernández, Jewel, O'Henry",
        
        "Special Notes":"Sweet potatoes need a long growing season. They are planted from slips or transplants, and should be 12 inches apart. A second planting of sweet potatoes can be made from vine cuttings. An 8 - 10 inch cutting can be stuck directly into moist soil. Harvest before the first killing frost."
    },
    {
    "Name": "Pumpkins",
    "Id":"27",
    "image": "image28",
    "display": "card-image28",
      "Regions": {
        "North": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 166,
          "FallLast": 212
        },
        "Central": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 166,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 171,
          "FallLast": 213
        }
      },
        "Days to Harvest":"80 - 120",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"7",
        "Spacing (inches)":"36 x 60",
        "Planting Depth (inches)":"1",
        "Varieties":"Munchkin, Field Trip, Spookie, Cotton Candy (white skinned), Lumina (white skinned), Appalachian, Aspen, Magic Wand, Merlin, Big Max, Gold Rush, Atlantic Giant, Prize Winner",
        
        "Special Notes":"Pumpkin vines can grow 8 feet or more requiring lots of space. They are one of the few vegetables that thrive under the shade of tall plants like corn. These recommended dates are for an October harvest."
    },
    {
    "Name": "Radishes",
    "Id":"28",
    "image": "image29",
    "display": "card-image29",
      "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 101,
          "FallFirst": 232,
          "FallLast": 278
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 91,
          "FallFirst": 244,
          "FallLast": 303
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 90,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"20 - 40",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"3",
        "Spacing (inches)":"24 x 1",
        "Planting Depth (inches)":"1/2",
        "Varieties":"Cherry Belle, Early Scarlet Globe, Champion, Sparkler, White Icicle, April Cross, Everest",
        
        "Special Notes":"ConsIdered one of the easiest vegetables to grow. They perform best with cool weather and plenty of moisture. Many varieties are ready for the table as soon as 25 days after seeding. Make successive plantings at 1 - 2 intervals to ensure a successful harvest. Hot weather and over maturity can lead to a spicy, bitter taste."
    },
    {
    "Name": "Spinach",
    "Id":"29",
    "image": "image30",
    "display": "card-image30",
    "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 74,
          "FallFirst": 258,
          "FallLast": 273
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 259,
          "FallLast": 293
        },
        "South": {
          "SpringFirst": 32,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"36 - 48",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"3",
        "Spacing (inches)":"30 x 2 - 3",
        "Planting Depth (inches)":"3/8 - 1/2",
        "Varieties":"Bloomsdale Long Standing, HybrId #7, HybrId Chesapeake, Melody, Tyee",
       
        "Special Notes":"Spinach is a quick maturing cool season crop with high nutritional value. Some varities will mature in just 40 days after seeding. Harvest spinach by pulling the whole plant or by removing the outer leaves as with lettuce and kale."
    },
    {
    "Name": "Summer Squash",
    "Id":"30",
    "image": "image31",
    "display": "card-image31",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 135,
          "FallFirst": 182,
          "FallLast": 201
        },
        "Central": {
          "SpringFirst": 91,
          "SpringLast": 120,
          "FallFirst": 213,
          "FallLast": 227
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 213,
          "FallLast": 273
        }
      },
        "Days to Harvest":"35 - 42",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"7 (15-30 fruits)",
        "Spacing (inches)":"36 x 15",
        "Planting Depth (inches)":"1 - 1 1/2",
        "Varieties":"Destiny III, Dixie, Medallion, Supersett, Conqueror, Goldbar, Jaguar, Spineless Beauty (z), Tigress (z), Patty Green Tint, Peter Pan, Scallopini (s)",
        
        "Special Notes":" Only a few plants are needed to supply an adequate amount for the family. Summer squash should be harvested while skin is tender, usualy 4 - 6 inches long. Most summer squash varieties will produce their first crop at 6 - 8 weeks after seeding. Poor pollination results in misshapen and lack of fruits. This is often the case during rainy weather and high temperatures. If insecticIdes are needed, be sure to apply in late afternoon to protect pollinators. "
    },
    {
      "Name": "Winter Squash",
    "Id":"31",
      "image": "image32",
      "display": "card-image32",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 135,
          "FallFirst": 182,
          "FallLast": 213
        },
        "Central": {
          "SpringFirst": 91,
          "SpringLast": 120,
          "FallFirst": 182,
          "FallLast": 213
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 213,
          "FallLast": 273
        }
      },
        "Days to Harvest":"90 - 120",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"5 (1 - 3 fruits)",
        "Spacing (inches)":"60 x 36",
        "Planting Depth (inches)":"1 - 2",
        "Varieties":"Celebration (a), Table Queen (a), Tay Belle PM (a), Butternut Supreme, Butternut Waltham, Early Butternut, Golden Hubbard, Baby Blue Hubbard, Hubbard Delite, Vegetable Spaghetti, Green Striped Cushaw",
        
        "Special Notes":"Only a few plants are needed to supply an adequate amount for the family. Winter squash should be harvested while skin is thick and hardened. Poor pollination results in misshapen and lack of fruits. This is often the case during rainy weather and high temperatures. If insecticIdes are needed, be sure to apply in late afternoon to protect pollinators."
    },
    {
    "Name": "Strawberries",
    "Id":"32",
    "image": "image33",
    "display": "card-image33",
    "Regions": {
        "North": {
          "SpringFirst": null,  
          "SpringLast": null,
          "FallFirst": 243,
          "FallLast": 273
        },
        "Central": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 273,
          "FallLast": 303
        },
        "South": {
          "SpringFirst": null,
          "SpringLast": null,
          "FallFirst": 273,
          "FallLast": 335
        }
      },
        "Days to Harvest":"90 - 100",
        "Plants per person":"3 - 5",
        "Spacing (inches)":"12 x 12",
        "Planting Depth (inches)":"plant slightly above soil line.",
        "Varieties":"Chandler, Camarosa, Cardinal, Earliglow",
       
        "Special Notes":"Keep beds clean of weeds and ensure consistent soil moisture. "
    },
     {
      "Name": "Swiss Chard",
    "Id":"33",
      "image": "image38",
      "display": "card-image38",
      "Regions": {
        "North": {
          "SpringFirst": 15,
          "SpringLast": 90,
          "FallFirst": null,
          "FallLast": null
        },
        "Central": {
          "SpringFirst": 15,
          "SpringLast": 74,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 31,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest": "40 - 50",
        "Plants per person": "less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"3",
        "Spacing (inches)": "6 x 18",
        "Planting Depth (inches)": "1/2",
        "Varieties": "Bright Lights, Red (Rainbow), Burgundy, Rhubarb, Ruby, White (Rainbow), Fordhook, Lucullus, Winter King",
        
        "Special Notes": "Harvest a few whole plants when 6 - 8 inches tall; this thins the crop. For subsequent harvest, wait until leaves are 8 - 10 inches long. Harvest leaves from the outsIde in; new leaves will grow from the center."
    },
    {
      "Name": "Tomatoes",
    "Id":"34",
      "image": "image34",
      "display": "card-image34",
      "Regions": {
        "North": {
          "SpringFirst": 121,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 191
        },
        "Central": {
          "SpringFirst": 96,
          "SpringLast": 120,
          "FallFirst": 152,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 182,
          "FallLast": 212
        }
      },
        "Days to Harvest": "55 - 90",
        "Plants per person": "3 plants",
        "Estimated Production in lbs":"20",
        "Spacing (inches)": "60 x 24-36",
        "Planting Depth (inches)": "1 1/2",
        "Varieties": "Cherry Grande, Santa Claus (grape), Sweet 100 (grape), Amelia VR, Celebrity, Sun Leaper, Bella Rosa, Green Zebra, Cherokee Purple",
        
        "Special Notes": "Set transplants (home grown or bought) in garden 2 weeks after last frost of the season. Consistent soil moisture is critical; this reduces blossom end rot and improves overall plant health. Tomatoes are one of the most disease-prone plants in the vegetable garden. Choose disease resistant varieties whenever possible."
    },
    {
      "Name": "Turnips",
    "Id":"35",
      "image": "image35",
      "display": "card-image35",
      "Regions": {
        "North": {
          "SpringFirst": 41,
          "SpringLast": 101,
          "FallFirst": 232,
          "FallLast": 264
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 69,
          "FallFirst": 213,
          "FallLast": 274
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 90,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"40 - 55",
        "Plants per person":"less than 1/4 ounce (seed)",
        "Estimated Production in lbs":"4",
        "Spacing (inches)":"30 x 2",
        "Planting Depth (inches)":"1/4 - 1/2",
        "Varieties":"Alamo, All Top, Just Right, Purple Top White Globe, Seven Top, Shogun, Top Star, Southern Green, White Egg, White Lady",
        
        "Special Notes":"Turnip leaves and roots are edible. Some varieties are grown just for their leaves while others just for their roots. For milder flavor, harvest when roots are 2 to 2 1/2 inches in diameter. Turnips can survive a light frost if protected."
    },
    {
      "Name": "Watermelons",
    "Id":"36",
      "image": "image36",
      "display": "card-image36",
      "Regions": {
        "North": {
          "SpringFirst": 111,
          "SpringLast": 151,
          "FallFirst": 152,
          "FallLast": 171
        },
        "Central": {
          "SpringFirst": 91,
          "SpringLast": 120,
          "FallFirst": 166,
          "FallLast": 181
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 182,
          "FallLast": 212
        }
      },
    "Days to Harvest":"70 - 90",
    "Plants per person":"2 plants",
    "Estimated Production in lbs":"8 (1 - 3 fruits)",
    "Spacing (inches)":"96 x 96",
    "Planting Depth (inches)":"1 1/2",
    "Varieties":"AU Producer, Crimson Sweet, Jubilee II, Fiesta, Jubilation, Mardi Gras, Stars N' Stripes, Gold Strike (y)",
    
    "Special Notes":"Watermelons should be seeded after danger of frost had passed. Most varieties are ready for harvest at 75 - 90 days after seeding. Watermelons are ready to harvest when undersIde begins to turn yellow in color. Another hint for harvest is to notice when the fruit tendril appears brown and shriveled."
    }
  
    ];
     var florida = [

  {
      "Name": "Asparagus",
        "Id":"0",
      "image": "image1",
      "display": "card-image1",
      "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 90,
          "FallFirst": null,
          "FallLast": null
        },
        "Central": {
          "SpringFirst": 71,
          "SpringLast": 90,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 15,
          "SpringLast": 151,
          "FallFirst": null,
          "FallLast": null
        }
      },
      "Days to Harvest": "perennial (March - May)",
      "Plants per person":" 3 crowns",
      "Estimated Production in lbs":"1",
      "Spacing (inches)": "18 x 12",
      "Planting Depth (inches)": "8",
      "Varieties": "Jersey Giant, Jersey Knight, Jersey Supreme, Martha Washington, Purple Passion",
      
      "Special Notes": "One of the few perennial crops in the garden. For healthier plants, always start with crowns in early spring. Double dig rows or plant in raised beds to help promote healthy establishment. Do not harvest spears the first year. "
    },
    {
      "Name": "Snap Beans",
         "Id":"1",
      "image": "image2",
      "display": "card-image2",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 135,
          "FallFirst": 196,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": 91,
          "SpringLast": 120,
          "FallFirst": 213,
          "FallLast": 232
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 213,
          "FallLast": 273
        }
      },
        "Days to Harvest": "52 - 60",
        "Plants per person": " 1/2 ounce (seeds)",
        "Estimated Production in lbs":"12",
        "Spacing (inches)": "3 x 12",
        "Planting Depth (inches)": "3/4 - 1 1/2",
        "Varieties": "Atlantic, Bronco, Magnum, Pod, Squad, Roma II, Dade, Stringless Blue Lake, White Seeded, Kentucky Wonder",
      
        "Special Notes": "Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production (as legumes, bean plants fix their own nitrogen). Snap Beans, aka Green Beans, grow as pole or bush type varieties. Bush type beans are popular because they mature early (55 - 65 days). Make successive plantings at 2 - 3 week intervals.",
        
    },
    {
      "Name": "Lima Beans",
         "Id":"2",
      "image": "image3",
      "display": "card-image3",
      "Regions": {
        "North": {
          "SpringFirst": 106,
          "SpringLast": 140,
          "FallFirst": 182,
          "FallLast": 212
        },
        "Central": {
          "SpringFirst": 96,
          "SpringLast": 125,
          "FallFirst": 201,
          "FallLast": 212
        },
        "South": {
          "SpringFirst": 60,
          "SpringLast": 121,
          "FallFirst": 213,
          "FallLast": 243
        }
      },
        "Days to Harvest": "68 - 88",
        "Plants per person": "2 ounces (seeds)",
        "Estimated Production in lbs":"10 (shelled)",
        "Spacing (inches)": "36 x 3-6",
        "Planting Depth (inches)": "1 - 1 3/4",
        "Varieties": "BrIdgeton, Dixie Butter Pea, Foodhook 242, Early Thorogreen, Speckled Dixie Butter Pea, Carolina Sieva, King of the Garden, Willow Leaf",
        "Special Notes": "Use 1/3 of the nitrogen as compared to other crops; too much nitrogen will stop production. Lima Beans, aka Butter Beans, grow as pole or bush type varieties. Lima beans will continue to produce during slightly hotter temperatures compared to Snap Beans."
    },
    {
      "Name": "Beets",
      "Id":"3",
      "image": "image4",
      "display": "card-image4",
      "Regions": {
        "North": {
          "SpringFirst": 60,
          "SpringLast": 90,
          "FallFirst": 213,
          "FallLast": 227
        },
        "Central": {
          "SpringFirst": 32,
          "SpringLast": 90,
          "FallFirst": 212,
          "FallLast": 244
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 273
        }
      },
      "Days to Harvest": "49 - 75",
      "Plants per person": "less than 1/4 ounce (seeds)",
      "Estimated Production in lbs":"3 or more",
      "Spacing (inches)": "30 x 2",
      "Planting Depth (inches)": "1",
      "Varieties": "Detroit Dark Red, Red Ace, Ruby Queen",
     
      "Special Notes": "Both greens and roots are edible from Beets. Harvest greens when 6 inches tall."
    },
     
      {
      "Name": "Broccoli",
         "Id":"4",
      "image": "image37",
      "display": "card-image37",
      "Regions": {
        "North": {
          "SpringFirst": 46,
          "SpringLast": 74,
          "FallFirst": 182,
          "FallLast": 212
        },
        "Central": {
          "SpringFirst": 46,
          "SpringLast": 74,
          "FallFirst": 201,
          "FallLast": 227
        },
        "South": {
          "SpringFirst": 1,
          "SpringLast": 60,
          "FallFirst": 244,
          "FallLast": 303
        }
      },
        "Days to Harvest":"60 - 75",
        "Plants per person":"3 plants",
        "Estimated Production in lbs":"7",
        "Spacing (inches)":"36 x 18",
        "Planting Depth (inches)":"plant level with the soil surface",
        "Varieties":"Green Commet, Packman, Mariner, Premium Crop",
        "Special Notes":"For the southern region, always use transplants. For the north and central regions, use transplants in spring and seeds in fall. When using transplants, plant level with the soil surface. Broccoli heads are a mass of flower buds. Harvest the heads before flowers open and show yellow. These are usually 3 - 6 inches across. Smaller heads will develop on sIdes after harvesting the central head. Use or freeze broccoli soon after harvest."
    },
     
     
     
    {
      "Name": "Brussels Sprouts",
         "Id":"5",
      "image": "image6",
      "display": "card-image6",
      "Regions": {
        "North": {
          "SpringFirst": null,  
          "SpringLast": null,
          "FallFirst": 213,
          "FallLast": 244
        },
        "Central": {
          "SpringFirst": 212,
          "SpringLast": 244,
          "FallFirst": null,
          "FallLast": null
        },
        "South": {
          "SpringFirst": 244,
          "SpringLast": 303,
          "FallFirst": null,
          "FallLast": null
        }
      },
        "Days to Harvest":"80 - 130",
        "Plants per person":"3 plants",
        "Estimated Production in lbs":"5",
        "Spacing (inches)":"36 x 18",
        "Planting Depth (inches)":"plant level with the soil surface",
        "Varieties":"Long Island Improved, Jade",
        "Special Notes":"Brussel Sprouts take 3 months or more to mature from seed. If planting in the southern region, use transplants. Begin removing sprouts from base of plant when they become firm. Continue harvesting upward as new sprouts develop. Be sure to leave large basal leaves as they are essential for growth."
    }];
    
    return {

    getEligible: function(lastFrost, nextFrost) {
              //alert('t');
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
    florida: function(){
      return florida;
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


