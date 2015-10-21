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

      // register event handlers
      editor.getSession().on('change', function(e) {
        var value = valueAccessor();
        value(editor.getValue());
      });
    },
    update: function(element, valueAccessor) {

    }
  }
});
