"use strict";


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотели?');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотели?');
    }
  },
  ememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Очень мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Нормально фильмов");
    } else if (personalMovieDB.count > 30) {
      console.log("Много фильмов");
    } else {
      console.log("Ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGernes: function () {
    // запрос списка фильмов , проверка корректности ввода и занесение в массив каждого отдельного ответа
    // for (let i = 0; i < 3; i++) {
    //   let genre = prompt(`Какие жанры предпочитаете? № ${i+1}`, '');
    //   if (genre === '' || genre == null) {
    //     console.log('Вы ввелинекорректные данные');
    //     i--;
    //   } else {
    //     personalMovieDB.genres[i] = genre;
    //   }
    // }

    // запрос списка фильмов через запятую , раделение строки на составляющие и внесение в массив

    for (let i = 0; i < 1; i++) {
      let genres = prompt(`Какие жанры предпочитаете? Введите через пробел`).toUpperCase();

      if (genres === '' || genres == null) {
        console.log('Вы ввелинекорректные данные');
        i--;
      } else {
        personalMovieDB.genres = genres.split(' ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ваш жанр #${i + 1} - это ${item}`);
    });
  }
};