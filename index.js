const check = document.querySelector('#modo-noturno');
const element = document.querySelector('body');

check.addEventListener('click', () => {
    const mode = check.checked ? 'dark' : 'light';
    element.setAttribute("data-bs-theme",mode)
});