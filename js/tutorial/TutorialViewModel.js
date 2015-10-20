tutorial.TutorialViewModel = function (options) {
  var self = this;

  // observables
  self.pages = ko.observableArray(ko.utils.arrayMap(options.data.pages, function (page) {
    return new tutorial.TutorialPage(page);
  }));
  self.currentPage = ko.observable();
  self.output = ko.observable();

  // functions
  self.runCode = function () {
    var markUp = self.currentPage().markUp();
    var script = self.currentPage().script();

    var result = "dummy result";

    self.output(result);
  };
};
