function saveSelection() {
  var dropdown = document.getElementById("selectCity");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  localStorage.setItem("selectedOption", selectedOption);
}
window.onload = function() {
  var dropdown = document.getElementById("selectCity");
  var selectedOption = localStorage.getItem("selectedOption");
  if (selectedOption) {
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === selectedOption) {
        dropdown.selectedIndex = i;
        break;
      }
    }
  }
}
