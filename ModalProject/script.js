'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

const btnsOpen = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpen.length; i++) {
  //   btnsOpen[i].addEventListener('click', function () {
  //     // modal.style.display = 'block'
  //     // modal.style.background = 'red'
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
  btnsOpen[i].addEventListener('click', openModal);
}

// btnClose.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  // if(e.key === 'Escape') {
  //     if(!modal.classList.contains('hidden')) closeModal();
  // }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
