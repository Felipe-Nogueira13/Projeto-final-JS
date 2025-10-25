
document.getElementById('year').textContent = new Date().getFullYear();


const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
e.preventDefault();
msg.style.color = '#9aa6b2';
msg.textContent = 'Enviando...';

setTimeout(() => {
msg.style.color = '#00d4ff';
msg.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
form.reset();
}, 1000);
});


document.getElementById('primary-cta').addEventListener('click', e => {
e.preventDefault();
document.querySelector('#contato').scrollIntoView({behavior: 'smooth'});
});