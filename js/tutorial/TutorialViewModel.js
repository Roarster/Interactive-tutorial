tutorial.TutorialViewModel = function (options) {
  var self = this;

  // observables
  self.pages = ko.observableArray(ko.utils.arrayMap(options.data.pages, function (page) {
    return new tutorial.TutorialPage(page);
  }));
  self.currentPage = ko.observable();
};
