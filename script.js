function showForm() {
    const form = document.getElementById('purchaseForm');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}
function toggleDescription(id) {
    const desc = document.getElementById(id);
    desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
}
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
}
