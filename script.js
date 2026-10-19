
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.body;

function terapkanTema(terang) {
  bodyHalaman.classList.toggle('light-mode', terang);
  btnTema.textContent = terang ? '🌙 Mode Gelap' : '☀ Mode Terang';
}


let temaTersimpan = null;
try {
  temaTersimpan = localStorage.getItem('tema');
} catch (err) {}
terapkanTema(temaTersimpan === 'terang');

btnTema.addEventListener('click', function () {
  const terang = !bodyHalaman.classList.contains('light-mode');
  terapkanTema(terang);
  try {
    localStorage.setItem('tema', terang ? 'terang' : 'gelap');
  } catch (err) {}
});


const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

function bukaModal() {
  elemenModal.classList.add('show');
  elemenModal.setAttribute('aria-hidden', 'false');
  btnTutupModal.focus();
}

function tutupModal() {
  elemenModal.classList.remove('show');
  elemenModal.setAttribute('aria-hidden', 'true');
  btnBukaModal.focus();
}

btnBukaModal.addEventListener('click', function (event) {
  event.preventDefault(); 
  bukaModal();
});

btnTutupModal.addEventListener('click', tutupModal);


elemenModal.addEventListener('click', function (event) {
  if (event.target === elemenModal) tutupModal();
});


document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && elemenModal.classList.contains('show')) {
    tutupModal();
  }
});


const btnSalinEmail = document.querySelector('#btnSalinEmail');
const emailKontak = 'kursiibra08@gmail.com';
let timerSalin;

btnSalinEmail.addEventListener('click', async function () {
  try {
    await navigator.clipboard.writeText(emailKontak);
  } catch (err) {
    
    const temp = document.createElement('textarea');
    temp.value = emailKontak;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
  }
  btnSalinEmail.textContent = 'Tersalin!';
  clearTimeout(timerSalin);
  timerSalin = setTimeout(function () {
    btnSalinEmail.textContent = 'Salin Email';
  }, 1500);
});