tutorial.TutorialViewModel = function () {
  var self = this;

  // observables
  self.pages = ko.observableArray([new tutorial.TutorialPage()]);
  self.currentPage = ko.observable();
};
