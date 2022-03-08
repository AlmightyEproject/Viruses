var app = angular.module('Virus', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
    .when('/History',{
     templateUrl:'views/history.html'
   })
   .when('/Origin',{  
    templateUrl:'views/origin.html'
  })
  .when('/Characteristics',{
    templateUrl:'views/characteristics.html'
  })
  .when('/ROI',{
    templateUrl:'views/ROI.html'
  })
  .when('/MedicalScience',{
    templateUrl:'views/MedicalScience.html'
  })
  .when('/MaterialsScience',{
    templateUrl:'views/MaterialsScience.html'
  })
  .when('/ArtificialVirus',{
    templateUrl:'views/ArtificialVirus.html'
  })
  .when('/Virus-WaterEcosystem',{
    templateUrl:'views/Virus-WaterEcosystem.html'
  })
  .when('/Virus-Evolution',{
    templateUrl:'views/Virus-Evolution.html'
  })
  .when('/Virus-Human',{
    templateUrl:'views/Virus-Human.html'
  })
  
  .when('/Prevent',{
    templateUrl:'views/Prevent.html'
  })
  
  .when('/BiologicalWeapons',{
    templateUrl:'views/BiologicalWeapons.html'
  })

  .when('/Replication',{
    templateUrl:'views/replication.html'
  })
  .when('/Classify',{
    templateUrl:'views/classify.html'
  })
  .when('/Epidemiology',{
    templateUrl:'views/epidemiology.html'
  })
  .when('/Cancer',{
    templateUrl:'views/cancer.html'
  })
  .when('/DM',{
    templateUrl:'views/DM.html'
  })

  
  
  .when('/Adeno',{
    templateUrl:'views/Adeno.html'
  }) 
.when('/Aichi',{
    templateUrl:'views/Aichi.html'
  }) 
.when('/Australian',{
    templateUrl:'views/Australian.html'
  }) 
.when('/Barmah',{
    templateUrl:'views/Barmah.html'
  }) 
.when('/Bunya',{
    templateUrl:'views/Bunya.html'
  }) 
.when('/Corona',{
    templateUrl:'views/Corona.html'
  }) 
.when('/Cowpox',{
    templateUrl:'views/Cowpox.html'
  }) 
.when('/Coxsackie',{
    templateUrl:'views/Coxsackie.html'
  }) 
.when('/Dhori',{
    templateUrl:'views/Dhori.html'
  }) 
.when('/Duvenhage',{
    templateUrl:'views/Duvenhage.html'
  }) 
  .when('/Mers',{
    templateUrl:'views/Mers.html'
  }) 
.when('/Ebola',{
    templateUrl:'views/Ebola.html'
  }) 
.when('/Echo',{
    templateUrl:'views/Echo.html'
  }) 
.when('/GB',{
    templateUrl:'views/GB.html'
  }) 
.when('/Hantaan',{
    templateUrl:'views/Hantaan.html'
  }) 
  .when('/Rhabdo',{
    templateUrl:'views/Rhabdo.html'
  }) 
  
.when('/Herpes',{
    templateUrl:'views/Herpes.html'
  }) 
.when('/HIV',{
    templateUrl:'views/HIV.html'
  }) 
.when('/Influenza',{
    templateUrl:'views/Influenza.html'
  }) 
.when('/Isfahan',{
    templateUrl:'views/Isfahan.html'
  }) 
.when('/JC-polyoma',{
    templateUrl:'views/JC-polyoma.html'
  }) 
.when('/Junin-arena',{
    templateUrl:'views/Junin-arena.html'
  }) 
.when('/Kunjin',{
    templateUrl:'views/Kunjin.html'
  }) 
.when('/KI-Polyoma',{
    templateUrl:'views/KI-Polyoma.html'
  }) 
.when('/Langat',{
    templateUrl:'views/Langat.html'
  }) 
.when('/Lassa',{
    templateUrl:'views/Lassa.html'
  }) 
.when('/Machupo',{
    templateUrl:'views/Machupo.html'
  }) 
.when('/Mayaro',{
    templateUrl:'views/Mayaro.html'
  }) 
.when('/Measles',{
    templateUrl:'views/Measles.html'
  }) 
.when('/Nipah',{
    templateUrl:'views/Nipah.html'
  }) 
.when('/Norwalk',{
    templateUrl:'views/Norwalk.html'
  }) 
.when('/Orf',{
    templateUrl:'views/Orf.html'
  }) 
.when('/Oropouche',{
    templateUrl:'views/Oropouche.html'
  }) 
.when('/Pichinde',{
    templateUrl:'views/Pichinde.html'
  }) 
.when('/Polio',{
    templateUrl:'views/Polio.html'
  }) 
.when('/Puumala',{
    templateUrl:'views/Puumala.html'
  }) 
.when('/Rabies',{
    templateUrl:'views/Rabies.html'
  }) 
.when('/Rosa',{
    templateUrl:'views/Rosa.html'
  }) 
.when('/Rubella',{
    templateUrl:'views/Rubella.html'
  }) 
.when('/Sapporo',{
    templateUrl:'views/Sapporo.html'
  }) 
.when('/Seoul',{
    templateUrl:'views/Seoul.html'
  }) 
.when('/Sindbis',{
    templateUrl:'views/Sindbis.html'
  }) 
.when('/Variola',{
    templateUrl:'views/Variola.html'
  }) 
.when('/Vaccinia',{
    templateUrl:'views/Vaccinia.html'
  }) 
.when('/Venezuelan',{
    templateUrl:'views/Venezuelan.html'
  }) 
.when('/Epidemic',{
    templateUrl:'views/Epidemic.html'
  }) 
  .when('/Zika',{
    templateUrl:'views/Zika.html'
  }) 
.otherwise({
     redirectTo:'/History'
   })
})

