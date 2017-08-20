

routerApp.config(function($stateProvider, $urlRouterProvider) {
    

    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('first', {
            url: '/home',
            templateUrl: 'first.html'
        })
        
        // nested list with custom controller
      
          .state('second',{
        url:'second',
        templateUrl:'second.html'
        })
          .state('third',{
        url:'second',
        templateUrl:'third.html'
        })  .state('fourth',{
            url:'second',
            templateUrl:'fourth.html'
            })
          .state('fifth',{
        url:'second',
        templateUrl:'fifth.html'
        })
     
      
        
});

