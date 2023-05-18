'use strict';

// AJAX - Asynchronous Javascript and XML
// Response Format - XML and JSON
// CORS - Cross Origin Resource Sharing

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Selcting Elements
const container = document.querySelector('.countries');

// Functions
const generateCountryCardHTML = function (data, className) {
  const html = `
        <article class="country ${className && className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            )}</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            } (${Object.values(data.currencies)[0].symbol})</p>
          </div>
        </article>`;
  return html;
};

const renderCountry = function (data, className = '') {
  container.insertAdjacentHTML(
    'beforeend',
    generateCountryCardHTML(data, className)
  );
  container.style.opacity = 1;
};

// const getJSON = function (method, url) {
//   // Old Way of doing requests
//   const request = new XMLHttpRequest();
//   request.open(method, url);
//   request.send();
//   return request;
// };

// const getCountriesData = function (country) {
//   const request = getJSON(
//     'GET',
//     `https://restcountries.com/v3.1/name/${country}`
//   );
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // Render Country
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     const request2 = getJSON(
//       'GET',
//       `https://restcountries.com/v3.1/name/${neighbour}`
//     );

//     request2.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       renderCountry(data, 'neighbour');
//     });
//   });
// };

// getCountriesData('Portugal');
// getCountriesData('australia');
// getCountriesData('canada');

// setTimeout(() => {
//   console.log(`1 sec Passed`);
//   setTimeout(() => {
//     console.log(`2 sec Passed`);
//     setTimeout(() => {
//       console.log(`3 sec Passed`);
//       setTimeout(() => {
//         console.log(`4 sec Passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Fetch Method
const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country Not Found (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  // const request = fetch(`https://restcountries.com/v3.1/name/${country}`);
  // request
  //   .then(response => {
  //     if (!response.ok)
  //       throw new Error(`Country Not Found (${response.status})`);
  //     return response.json();
  //   })
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(result => {
      const [data] = result;
      renderCountry(data);

      const neighbour = data?.borders?.[0];
      if (!neighbour) throw new Error('No Neighbouring Country!');
      // return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
      return getJSON(`https://restcountries.com/v3.1/name/${neighbour}`);
    })
    // .then(response => {
    //   if (!response.ok)
    //     throw new Error(`Country Not Found (${response.status})`);
    //   return response.json();
    // })
    .then(result => {
      const [data] = result;
      renderCountry(data, 'neighbour');
    })
    .catch(err => console.error(`My Error : ${err.message}`));
};

getCountryData('portugal');
// getCountryData('canada');
// getCountryData('australia');

// const lotterPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Happening!!');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`YOU WIN!`);
//     } else {
//       reject(`You LOST`);
//     }
//   }, 3000);
// });

// lotterPromise
//   .then(response => console.log(response))
//   .catch(err => console.log(err))
//   .finally(() => {
//     console.log(`Lottery Ended`);
//   });

// Promise.resolve('Resolved Value').then(res => console.log(res));
// Promise.reject('Rejected Value').catch(err => console.log(err));

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`1 seconds Passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 Sec Passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 Sec Passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`4 Sec Passed`);
//     return wait(1);
//   });

// navigator.geolocation.getCurrentPosition(
//   function (pos) {
//     // console.log(pos);
//     const { latitude, longitude } = pos.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);
//   },
//   function () {
//     console.log(`Not Found`);
//   }
// );

const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

getPosition().then(pos => {
  const { latitude, longitude } = pos.coords;
  console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);
});
