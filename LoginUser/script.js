'use strict';

const data = [
  {
    id: 1,
    username: 'Abhishek',
    pass: 111,
    course: 'PHP',
    desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam',
  },
  {
    id: 2,
    username: 'Ram',
    pass: 222,
    course: 'Js',
  },
  {
    id: 3,
    username: 'Ramesh',
    pass: 333,
    course: 'React',
    desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam',
  },
];

const btn = document.querySelector('.btn');
const container = document.getElementById('container');

btn.addEventListener('click', function () {
  let username = document.querySelector('input[name=username]');
  let pass = document.querySelector('input[name=pass]');

  const res = data.find(function (value) {
    return value.username === username.value && value.pass === +pass.value;
  });

  username.value = '';
  pass.value = '';

  if (res) {
    let html = `
        <div class="card">
        <h1>${res.username}</h1>
        <p>
          ${res.desc}
        </p>
        <small>${res.course}</small>
      </div>
    `;

    container.innerHTML = html;
  } else {
    alert(`${username} not Found`);
  }
});

const states = ['Delhi', 'Chennai', 'Mumbai', 'Agra', 'Lucknow', 'Patna'];
