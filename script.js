"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотели?');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько его оцените?', '');

  // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  //   personalMovieDB.movies[a] = b;
  // } else {
  //   i--;
  // }

  (a != null && b != null && a != '' && b != '' && a.length < 50) ?
  personalMovieDB.movies[a] = b: i--;
}

if (personalMovieDB.count < 10) {
  console.log("Очень мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Нормально фильмов");
} else if (personalMovieDB.count > 30) {
  console.log("Много фильмов");
} else {
  console.log("Ошибка");
}

console.log(personalMovieDB);