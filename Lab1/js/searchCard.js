document.querySelector('#card').oninput = function () {
  let val = this.value.trim();
  let cardItems = document.querySelectorAll('.card');
  cardItems.forEach(function (element) {
    if ((val !== '') && (element.innerText.search(val) === -1)) {
      element.classList.add('hide');
    } else {
      element.classList.remove('hide');
    }
  });
}