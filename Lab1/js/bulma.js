//The following code is based off a toggle menu by @Bradcomp
//source: https:gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
});

document.querySelector('#card').oninput = function () {
  let val = this.value.trim();
  let cardItems = document.querySelectorAll('.card');
  if (val != '') {
    cardItems.forEach(function (element) {
      if (element.innerText.search(val) == -1) {
        element.classList.add('hide');
      } else {
        element.classList.remove('hide');
      }
    });
  } else {
    cardItems.forEach(function (element) {
      element.classList.remove('hide');
    });
  }
}