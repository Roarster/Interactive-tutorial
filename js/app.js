requirejs.config({
    baseUrl: 'js/lib',
    paths: {
      app: '../app',
      ace: './ace/'
    }
});

require(['jquery', 'knockout', 'app/TutorialViewModel'], function($, ko, TutorialViewModel) {
  var data = {
    pages: [
      {name: 'Tutorial: Introduction', instructions: ['instructions 1.1', 'instructions 1.2'],
      markUp: '<p>First name: <strong>todo</strong></p><p>Last name: <strong>todo</strong></p>',
      script: 'function AppViewModel() {this.firstName = "Bert";this.lastName = "Bertington";}ko.applyBindings(new AppViewModel());'},
      {name: 'Page2', instructions: ['instructions 2'], markUp: 'markUp 2', script: 'script 2'},
      {name: 'Page3', instructions: ['instructions 3'], markUp: 'markUp 3', script: 'script 3'}]
  };
  var viewModel = new TutorialViewModel({
    data: data
  });

  ko.applyBindings(viewModel, $('#id-view')[0]);
});
