window.onload = function() {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  btn.onclick = function() {
    if (txtArea.value !== '') {

      var taskContent = txtArea.value;
      var containerToDo = document.getElementById('container-to-do');
      var newTask = document.createElement('div');
      newTask.classList.add('new-task', 'checkbox', 'view');
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
      icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-task');
      newTask.append(icon);
      txtArea.value = '';

      check.onclick = function() {
        if (!label.parentElement.classList.contains('deletedTask')) {
          label.classList.toggle('completedTask');
          label.parentElement.classList.toggle('completedTask');
        } else {
          label.classList.remove('completedTask');
          label.parentElement.classList.remove('completedTask');
          label.children[0].checked = false;
        }
      };

      icon.onclick = function(element) {
        if (!element.currentTarget.parentElement.classList.contains('deletedTask')) {
          element.currentTarget.parentElement.style.display = 'none';
        }

        element.currentTarget.parentElement.classList.add('deletedTask');
      };
    }
  };

  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function() {
    var massTaskList = document.querySelectorAll('.new-task');

    for (let items of massTaskList) {

      if (!items.classList.contains('deletedTask') && completeAll.checked) {
        items.classList.add('completedTask');
      } else {
        items.classList.remove('completedTask');
      }

      let taskLabel = items.children[0];
      let taskCheck = taskLabel.children[0];

      if (items.classList.contains('completedTask')) {
        taskLabel.classList.add('completedTask');
        taskCheck.checked = true;
      } else {
        taskLabel.classList.remove('completedTask');
        taskCheck.checked = false;
      }

      taskCheck.onclick = function(element) {
        completeAll.checked = false;

        if (element.target.parentElement.classList.contains('completedTask')) {
          element.target.parentElement.classList.remove('completedTask');
          element.target.parentElement.parentElement.classList.remove('completedTask');
        } else {
          element.target.parentElement.classList.add('completedTask');
          element.target.parentElement.parentElement.classList.add('completedTask');
        }
      };
    }
  };

  var filterShowAll = document.getElementById('filter-show-all');
  filterShowAll.onclick = function() {
    var massTaskList = document.querySelectorAll('.new-task');

    for (let items of massTaskList) {
      if (!items.classList.contains('deletedTask')) {
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    }
  };

  var filterShowCompleted = document.getElementById('filter-show-completed');
  filterShowCompleted.onclick = function() {
    var massTaskList = document.querySelectorAll('.new-task');

    for (let items of massTaskList) {
      if (!items.classList.contains('deletedTask') && items.classList.contains('completedTask')) {
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    }
  };

  var filterShowRemoved = document.getElementById('filter-show-removed');
  filterShowRemoved.onclick = function() {
    var massTaskList = document.querySelectorAll('.new-task');

    for (let items of massTaskList) {
      if (items.classList.contains('deletedTask')) {
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    }
  };
}
