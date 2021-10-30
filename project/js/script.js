/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

// create variable to store custom database of values
const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

// ----------------------
// #1
// ----------------------
// select html element to manipulate them & store in variable
// ......................
const adv = document.querySelectorAll(".promo__adv img");

// remove each advertising elements
// ......................
// adv.forEach(function(item) {
//     item.remove();
// });

// OR remove with ARROW syntax
// ......................
adv.forEach((item) => {
  item.remove();
});

// ----------------------
// #2
// ----------------------
// select html elements
const poster = document.querySelector(".promo__bg");

const genre = poster.querySelector(".promo__genre");

// change text content
genre.textContent = "драма";

// ----------------------
// #3
// ----------------------
// NOTE: we have already selected & stored current html element 'poster'

// apply style
poster.style.backgroundImage = 'url("img/bg.jpg")';

// ----------------------
// #4
// ----------------------
// select html element & store in variable
// ......................
// const movieList = document.querySelectorAll('.promo__interactive-list');

const movieList = document.querySelector(".promo__interactive-list");

// remove old content list
movieList.innerHTML = "";

// sorting elements by alphabet
movieDB.movies.sort();

// ----------------------
// #5
// ----------------------
// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

// т.о. наши элементы сформируются динамически, по нумерации и по алфавиту

// NOTE: this operator += for example 'a += 1' is equal to 'a = a + 1'

// NOTE: 'innerHTML' также позволяет и получить значение т.е. контент
