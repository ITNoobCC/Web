window.onload = function() {
  var blackWhite = document.getElementById('blackWhite');
  let head = document.head, link = document.createElement('link');
  link.rel = 'stylesheet';

  blackWhite.onclick = function() {
    if (blackWhite.checked == true)
    {
        link.href = 'css/style.css';
        head.appendChild(link);
    }
    else
    {
        link.href = 'css/whiteStyle.css';
        head.appendChild(link);
    }
  };

}