function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");
  if (sidebar.style.right === "-250px") {
    sidebar.style.right = "0";
    overlay.style.display = "block"; // Show overlay
  } else {
    sidebar.style.right = "-250px";
    overlay.style.display = "none"; // Hide overlay
  }
}
