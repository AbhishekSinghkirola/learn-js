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
