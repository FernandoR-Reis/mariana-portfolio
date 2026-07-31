const root = document.documentElement;
const body = document.body;
const themeButton = document.getElementById('themeToggle');
const menuButton = document.getElementById('menuBtn');
const mobilePanel = document.getElementById('mobilePanel');
const menuIcon = document.getElementById('menuIcon');

const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
};

setTheme('dark');

themeButton?.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
});

const setMenuState = (isOpen) => {
  mobilePanel?.classList.toggle('open', isOpen);
  body.classList.toggle('menu-open', isOpen);
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuIcon?.setAttribute('href', isOpen ? '#ic-x' : '#ic-menu');
};

menuButton?.addEventListener('click', () => {
  const isOpen = !mobilePanel?.classList.contains('open');
  setMenuState(Boolean(isOpen));
});

mobilePanel?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    setMenuState(false);
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${(index % 6) * 45}ms`;
  observer.observe(element);
});
