BookMeAGame.factory('SearchFactory' , function($http){
	
	var factory = {};
	
	factory.SearchPlayGrounds = function(game_type, location)
	{
		 return	$http({
				url: '/api/search', 
				method: "GET",
				params: {location : location, game_type : game_type}
			 }); 
	}
	return factory;
});