define(['knockout', 'ace/ace'], function(ko, ace){
  ko.bindingHandlers.ace = {
    init: function(element, valueAccessor, allBindings) {
      var editor = ace.edit(element);

      var value = ko.unwrap(valueAccessor());
      var options = allBindings.has('aceOptions') ? allBindings.get('aceOptions') : {};
      editor.setValue(value);

      if (options.mode) {
        editor.getSession().setMode(options.mode);
      }
    },
    update: function(element, valueAccessor) {

    }
  }
});
