const body = document.querySelector('body');
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener("click", () => {
    const bodyCheck = body.classList.contains('dark');
    bodyCheck ? body.className = '' : body.className = "dark";
})