const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

window.addEventListener('click', (event) => {
  if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
    siteNav.classList.remove('open');
    navToggle.textContent = 'Menu';
  }
});
