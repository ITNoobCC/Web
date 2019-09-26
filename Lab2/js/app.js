window.onload = function() {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  btn.onclick = function() {
    if (txtArea.value != '') {

      var taskContent = txtArea.value;
      var containerToDo = document.getElementById('container-to-do');
      var newTask = document.createElement('div');
      newTask.classList.add('new', 'checkbox', 'view');
      containerToDo.append(newTask);
      var label = document.createElement('label');
      var check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      check.classList.add('task-checkbox', 'toggle');
      label.append(check);
      newTask.append(label);
      var text = document.createTextNode(taskContent);
      label.append(text);
      label.classList.add('task-label');
      var icon = document.createElement('i');
      icon.append('Delete');
      icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
      newTask.append(icon);
      txtArea.value = '';

      check.onclick = function() {
        if (!label.parentElement.classList.contains('deleted')) {
          label.classList.toggle('completed');
          label.parentElement.classList.toggle('completed');
        } else {
          label.classList.remove('completed');
          label.parentElement.classList.remove('completed');
          label.children[0].checked = false;
        }
      };

      icon.onclick = function(element) {
        if (!element.currentTarget.parentElement.classList.contains('deleted')) {
          element.currentTarget.parentElement.style.display = 'none';
        }

        element.currentTarget.parentElement.classList.add('deleted');
      };
    }
  };

  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function() {
    var massTaskList = document.querySelectorAll('.new');

    for (let items of massTaskList) {

      if (!items.classList.contains('deleted') && completeAll.checked) {
        items.classList.add('completed');
      } else {
        items.classList.remove('completed');
      }

      let taskLabel = items.children[0];
      let taskCheck = taskLabel.children[0];

      if (items.classList.contains('completed')) {
        taskLabel.classList.add('completed');
        taskCheck.checked = true;
      } else {
        taskLabel.classList.remove('completed');
        taskCheck.checked = false;
      }

      taskCheck.onclick = function(element) {
        completeAll.checked = false;

        if (element.target.parentElement.classList.contains('completed')) {
          element.target.parentElement.classList.remove('completed');
          element.target.parentElement.parentElement.classList.remove('completed');
        } else {
          element.target.parentElement.classList.add('completed');
          element.target.parentElement.parentElement.classList.add('completed');
        }
      };
    }
  };

  var filterShowAll = document.getElementById('filter-show-all');
  filterShowAll.onclick = function() {
    var massTaskList = document.querySelectorAll('.new');

    for (let items of massTaskList) {
      if (!items.classList.contains('deleted')) {
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    }
  };

  var filterShowCompleted = document.getElementById('filter-show-completed');
  filterShowCompleted.onclick = function() {
    var massTaskList = document.querySelectorAll('.new');

    for (let items of massTaskList) {
      if (!items.classList.contains('deleted') && items.classList.contains('completed')) {
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    }
  };

  var filterShowRemoved = document.getElementById('filter-show-removed');
  filterShowRemoved.onclick = function() {
    var massTaskList = document.querySelectorAll('.new');

    for (let items of massTaskList) {
      if (items.classList.contains('deleted')) {
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    }
  };
}
