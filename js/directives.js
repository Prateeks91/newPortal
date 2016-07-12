angular.module('portalApp')
.directive('portalHeader',function()
   {
	
		  return {
			     restrict: 'E',  
			     templateUrl: 'partials/header.html',
			     scope:{},
			     link:function(scope,el,attr){
			    	 
			     },
			     controller:'headerController'  
			    };
		
	  
})
.directive('portalFooter',function()
   {
	
		  return {
			     restrict: 'E',  
			     templateUrl: 'partials/footer.html',
			     scope:{},
			     link:function(scope,el,attr){
			    	 
			     },
			     controller:'footerController'
			       
			    };
		
	  
})

.directive('portalHeaderMobile',function()
   {
	
		  return {
			     restrict: 'E',  
			     templateUrl: 'partials/mobileHeader.html',
			     scope:{},
			     link:function(scope,el,attr){
			    	 
			     },
			     controller:'footerController'
			       
			    };
		
	  
})
.directive('portalFooterMobile',function()
   {
	
		  return {
			     restrict: 'E',  
			     templateUrl: 'partials/mobileFooter.html',
			     scope:{},
			     link:function(scope,el,attr){
			    	 
			     },
			     controller:'footerController'
			       
			    };
		
	  
})
