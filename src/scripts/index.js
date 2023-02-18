import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import jsonData from '../DATA.json';

// fetch JSON
const restaurants = jsonData.restaurants;
let dataList = '';

restaurants.forEach(function(restaurant) {
  const { pictureId, name, city, rating, description } = restaurant;
  dataList +=`
    <article class="card-item">
      <img class="card-item__image" src="${pictureId}" alt="${name}" title="${name}">
      <div class="card-item__body">
        <p class="card-item__rating" tabindex="0">&#11088 ${rating}/5 Reviews <span class="card-item__city">&#128205 Kota ${city}</span></p>
        <h3 class="card-item__title"><a href="#">${name}</a></h3>
        <p class="card-item__description">${description.substring(0, 140)}...<a class="card-item__link">Read More</a></p>
      </div>
    </article>`;
});

document.querySelector('#card-list').innerHTML = dataList;

// Hamburger menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});
