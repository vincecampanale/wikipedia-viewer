function ViewerService($http){
  //TODO: add option for user to input how many results they would like (make gsrlimit into a variable)

  var API = 'https://crossorigin.me/https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  //var callback = '&callback=JSON_CALLBACK';

  function retrieve(search){
    return $http.get(API + search).then(function(response){
      return response;
    });
  }

  return {
    retrieve: retrieve
  };

}

angular
  .module('app')
  .factory('ViewerService', ViewerService);
