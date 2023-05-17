'use strict';

// AJAX - Asynchronous Javascript and XML
// Response Format - XML and JSON
// CORS - Cross Origin Resource Sharing

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Selcting Elements
const container = document.querySelector('.countries');

// Functions
const generateCountryCardHTML = function (data) {
  const html = `
        <article class="country">
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

const renderCountry = function (data) {
  container.insertAdjacentHTML('beforeend', generateCountryCardHTML(data));
  container.style.opacity = 1;
};

const getCountriesData = function (country) {
  // Old Way of doing requests
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // console.log(request.responseText);
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render Country
    renderCountry(data);
  });
};

getCountriesData('Portugal');
getCountriesData('australia');
getCountriesData('canada');
