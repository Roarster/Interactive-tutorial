define(['knockout'], function(ko) {
  return function TutorialPage (data) {
    var self = this;

    // observables
    self.name = ko.observable(data ? data.name : '');
    self.instructions = ko.observableArray(data ? data.instructions : []);
    self.markUp = ko.observable(data ? data.markUp : '');
    self.script = ko.observable(data ? data.script : '');
    var instructionIndex = ko.observable(0);

    // computeds
    self.canMoveToNextInstruction = ko.computed(function () {
      if (!self.instructions()) {
        return false;
      }
      return instructionIndex() + 1 < self.instructions().length;
    });

    self.canMoveToPreviousInstruction = ko.computed(function () {
      if (!self.instructions()) {
        return false;
      }
      return instructionIndex() > 0;
    });

    self.selectedInstruction = ko.computed(function () {
      if (self.instructions() && instructionIndex() >= 0 && instructionIndex() < self.instructions().length) {
        return self.instructions()[instructionIndex()];
      }
      return null;
    });

    // functions
    self.moveToPreviousInstruction = function () {
      instructionIndex(Math.max(0, instructionIndex() - 1));
    };

    self.moveToNextInstruction = function () {
      instructionIndex(Math.min(self.instructions().length - 1, instructionIndex() + 1));
    };
  };
});
