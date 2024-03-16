// navbar dropdown menu
const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('dropdown-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});