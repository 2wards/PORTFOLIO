// explore.js
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');

  const active = document.getElementById(sectionId);
  if (active) {
    active.style.display = 'block';

    // Delay scroll to ensure rendering is complete
    setTimeout(() => {
      active.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  // Optional: hide sidebar on small screens after click
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('active');
  }
}

window.onload = () => {
  document.getElementById('intro-popup').style.display = 'flex';
};

function closeIntro() {
  document.getElementById('intro-popup').style.display = 'none';
  showSection('projects'); // Default section
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}


