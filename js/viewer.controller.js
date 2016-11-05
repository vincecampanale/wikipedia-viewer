function ViewerController(ViewerService){
  var ctrl = this;
  ctrl.results = [];
  ctrl.search = '';

  ctrl.getPages = function(){
    ViewerService
      .retrieve(ctrl.search)
      .then(function(response){
        ctrl.results = response;
      });
  }
}

angular
  .module('app')
  .controller('ViewerController', ViewerController);
