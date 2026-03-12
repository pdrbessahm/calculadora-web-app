const btn = document.getElementById('theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
    root.classList.add('light');
    btn.textContent = '🌙';
}

btn.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    btn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});