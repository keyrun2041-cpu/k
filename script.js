const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const langToggle = document.getElementById('langToggle');
let language = localStorage.getItem('siteLanguage') || 'en';

function setLanguage(lang){
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-ne]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langToggle.textContent = lang === 'en' ? 'नेपाली' : 'English';
  localStorage.setItem('siteLanguage', lang);
}
langToggle.addEventListener('click', () => setLanguage(language === 'en' ? 'ne' : 'en'));
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(language);
