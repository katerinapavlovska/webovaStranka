
function showLeftNavBar() {
  var navBar = (document.getElementById('sidebar-left'));
  navBar.style.width = "380px";
  var overlay = (document.getElementById('overlay-page'));
  overlay.style.display = "block";

}

function closeLeftNavBar() {
  var navBar = (document.getElementById('sidebar-left'));
  navBar.style.width = "0px";
  var overlay = (document.getElementById('overlay-page'));
  overlay.style.display = "none";

}
