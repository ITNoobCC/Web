window.onload = function() {
  var blackWhite = document.getElementById('black-white');
  blackWhite.onclick = function() {
    if (blackWhite.checked == true) {
      var darkTopic = document.getElementById('calendar');
      darkTopic.classList.remove("dark-topic");
    } else {
      var darkTopic = document.getElementById('calendar');
      darkTopic.classList.toggle("dark-topic");
    }
  };
};
