tutorial.TutorialPage = function (data) {
  var self = this;

  // observables
  self.name = ko.observable(data ? data.name : '');
  self.instructions = ko.observableArray(data ? data.instructions : []);
  self.markUp = ko.observable(data ? data.markUp : '');
  self.script = ko.observable(data ? data.script : '');
};
