tutorial.TutorialPage = function (data) {
  var self = this;

  // observables
  self.name = ko.observable(data ? data.name : '');
};
