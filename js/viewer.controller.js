function ViewerController(ViewerService){
  var ctrl = this;
  ctrl.fullResponse = [];
  ctrl.search = '';
  ctrl.pages= '';
  ctrl.pageIds = [];

  ctrl.articles = [];


  ctrl.getPages = function(){
    ViewerService
      .retrieve(ctrl.search)
      .then(function(response){
        ctrl.fullResponse = response.data;
        ctrl.pages = ctrl.fullResponse.query.pages;
        ctrl.pageIds = Object.keys(ctrl.pages);

        angular.forEach(ctrl.pages, function(value, key){
          ctrl.articles.push({
            pageid: key,
            title: value.title,
            extract: value.extract
          });
        });

      });
  }
}

angular
  .module('app')
  .controller('ViewerController', ViewerController);
