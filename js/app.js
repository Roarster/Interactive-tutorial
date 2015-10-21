requirejs.config({
    baseUrl: 'js/lib',
    paths: {
      app: '../app'
    }
});

require(['jquery', 'knockout', 'app/TutorialViewModel'], function($, ko, TutorialViewModel) {
  var data = {
    pages: [
      {name: 'Page1', instructions: ['instructions 1.1', 'instructions 1.2'], markUp: 'markUp 1', script: 'script 1'},
      {name: 'Page2', instructions: ['instructions 2'], markUp: 'markUp 2', script: 'script 2'},
      {name: 'Page3', instructions: ['instructions 3'], markUp: 'markUp 3', script: 'script 3'}]
  };
  var viewModel = new TutorialViewModel({
    data: data
  });

  ko.applyBindings(viewModel, $('#id-view')[0]);
});
