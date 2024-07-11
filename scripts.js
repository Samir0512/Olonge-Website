document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  menuToggle.addEventListener('change', function () {
    if (this.checked) {
      sidebar.classList.add('active');
      overlay.style.display = 'block';
    } else {
      sidebar.classList.remove('active');
      overlay.style.display = 'none';
    }
  });

  overlay.addEventListener('click', function () {
    sidebar.classList.remove('active');
    menuToggle.checked = false;
    overlay.style.display = 'none';
  });
});

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('menu-toggle').checked = false;
  document.getElementById('overlay').style.display = 'none';
}
