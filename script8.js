'use strict';
// DOM
// Document, elements, text, nodes

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// Selecting Elements
// console.log(document.querySelector('#heading-1'));

// const el = document.querySelector('.container');
// console.log(el.querySelector('h2'));

// console.log([...document.querySelectorAll('.section')]);

// console.log(document.getElementById('heading-1'));

// console.log(document.getElementsByTagName('button'));

// console.log(document.getElementsByClassName('section'));

// Inserting Elements in HTML

// const container = document.querySelector('#container');

// const h3 = document.createElement('h3');
// h3.classList.add('heading-3');
// // // h3.textContent = 'Heading 3'
// h3.innerHTML = 'Heading <i> 3 </i>';
// // console.log(h3);

// // container.insertAdjacentElement('afterend', h3);
// // container.prepend(h3)
// container.append(h3);
// // container.append('Testing...')
// // container.after(h3)
// // container.before(h3)

// document.querySelector('.heading-3').addEventListener('click', function () {
//   // h3.remove();
//   //   h3.parentElement.removeChild(h3);
// });

// document.querySelector('h1').innerHTML = "Hello Js";

// document.body.style.backgroundColor = 'red';
// console.log(document.querySelector('h1').style.color);

// console.log(document.querySelector('.container').style.backgroundColor);

// console.log(getComputedStyle(document.querySelector('.container')).backgroundColor);
// console.log(getComputedStyle(document.querySelector('.container')).height);

// console.log(document.querySelector('img').src);
// console.log(document.querySelector('img').abhishek);

// console.log(document.querySelector('img').getAttribute('src'));
// console.log(document.querySelector('img').getAttribute('abhishek'));
// console.log(document.querySelector('img').setAttribute('alt', "Image"));

// console.log(document.querySelector('img').dataset.edit);
// console.log(document.querySelector('img').dataset.version);

// console.log(document.querySelector('img').classList.add('a'));
// console.log(document.querySelector('img').classList.remove('a'));
// console.log(document.querySelector('img').classList.toggle('a'));
// console.log(document.querySelector('img').classList.contains('a'));

// const section1 = document.querySelector('#section--1');
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const s1coord = section1.getBoundingClientRect();

//   //   console.log(s1coord);
//   // console.log(section1.getBoundingClientRect());

//   // console.log(document.documentElement.clientHeight);
//   // console.log(document.documentElement.clientWidth);

//   // console.log(window.pageXOffset);
//   // console.log(window.pageYOffset);

//   //   window.scrollTo(
//   //     s1coord.left + window.pageXOffset,
//   //     s1coord.top + window.pageYOffset
//   //   );

//   //   window.scrollTo({
//   //     left: s1coord.left + window.pageXOffset,
//   //     top: s1coord.top + window.pageYOffset,
//   //     behavior: 'smooth',
//   //   });

// //   section1.scrollIntoView({
// //     behavior: 'smooth',
// //     // block: 'center',
// //     inline: 'nearest',
// //   });
// });

// const btn = document.querySelector('button');

// const handleClick = () => {
//   console.log('Clicked!!');
//   btn.removeEventListener('click', handleClick);
// };

// btn.addEventListener('click', handleClick);

// setTimeout(() => btn.removeEventListener('click', handleClick), 3000);

// btn.onclick = function () {
//     console.log('Clicked!!');
// }

// document.querySelector('input').addEventListener('input', function () {
//   console.log(this.value);
// });

// Event Delegation

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');

// first.addEventListener('click', function () {
//   alert('1');
// });

// second.addEventListener('click', function () {
//   alert('2');
// });

// third.addEventListener('click', function () {
//   alert('3');
// });

// fourth.addEventListener('click', function (e) {
//   alert('4');

//   // e.stopPropagation()
// });

// document.body.addEventListener('click', function (e) {
//     console.log(e.target.dataset.id);
//     // console.log(e.currentTarget);
// })

// Dom Traversing
// console.log(document.querySelector('h1'));

// const div = document.querySelector('div');

// console.log(div.childNodes);
// console.log(div.children);
// console.log(div.lastElementChild);

// console.log(div.parentNode);
// console.log(div.parentElement);

// console.log(document.querySelector('span').closest('body'));

// console.log(document.querySelector('span').nextElementSibling);
// console.log(document.querySelector('span').previousElementSibling);

// console.log(new String('Abhishek'));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const rgbColorGenerator = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(rgbColorGenerator());
