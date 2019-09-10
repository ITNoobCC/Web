document.querySelector("#column").oninput = function() {
  let val = this.value.trim();
  let columnItems = document.querySelectorAll(".column");
  columnItems.forEach(function(element) {
    if (val !== "" && element.innerText.search(val) === -1) {
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
    }
  });
};
