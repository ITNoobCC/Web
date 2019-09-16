$(document).ready(function () {
  var btn = $('#btn');
  // btn.prop("disabled", true);
  var textarea = $('#textarea');

  btn.click(function () {
    addTask();
    textarea.val('');
  });

  function addTask() {
    var taskContent = textarea.val();
    var containerToDo = $('#container-to-do');
    var newTask = $('<div>');
    newTask.addClass('new');
    newTask.addClass('checkbox');
    containerToDo.append(newTask);
    var label = $('<label>');
    var check = $('<input>');
    check.attr('type', 'checkbox');
    label.append(check);
    newTask.append(label);
    var text = $(document.createTextNode(taskContent));
    label.append(text);
    var icon = $('<i>');
    icon.addClass('glyphicon glyphicon-trash icon');
    newTask.append(icon);

    textarea.val('')

    check.click(function () {
      labeledTask();
    });

    function labeledTask() {
      label.toggleClass('labeled');
    }
  }
});