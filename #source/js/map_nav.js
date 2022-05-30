//Стили навигационного сегмента
let colorSegment = "#337ab7";
let opaciSegment = "0.8";

let btnNav = Array.from(document.querySelectorAll(".nav-btn"));
let mapNav = Array.from(document.querySelectorAll(".segment"));
let mapThumb = Array.from(document.querySelectorAll(".thumb"));

//Стартовый сегмент на карте - положение фронт
mapNav[2].style.backgroundColor = colorSegment;
mapNav[2].style.opacity = opaciSegment;

// Навигационное меню - кнопашки
btnNav[0].addEventListener("click", () => BtnNavFlip(0, 1, 0, 90)); //Cars
btnNav[1].addEventListener("click", () => BtnNavFlip(1, 0, 0, 0)); //Sity
btnNav[2].addEventListener("click", () => BtnNavFlip(1, 0, 0, -180)); //cybervare
btnNav[3].addEventListener("click", () => BtnNavFlip(1, 0, 0, -90)); //person
btnNav[4].addEventListener("click", () => BtnNavFlip(1, 0, 0, 90)); //guns
btnNav[5].addEventListener("click", () => BtnNavFlip(0, 1, 0, -90)); //gangs

// Функции для порота и получения параметров вертикаль
function BtnNavFlip(x, y, z, flip) {
  animoFlip(x, y, z, flip);
}

//Функции переноса сегмента карты в зависимости от положения граней куба

mapThumb[1].style.visibility = "visible";
mapNav[2].style.backgroundColor = colorSegment;
mapNav[2].style.opacity = opaciSegment;

function changeMapNavSegmVert(x, y, z, flip) {
  clearColorSegment();

  if (flip == 0 && x == 1 && y == 0) {
    mapThumb[1].style.visibility = "visible";
    mapNav[2].style.backgroundColor = colorSegment;
    mapNav[2].style.opacity = opaciSegment;
  }

  if (flip == 0 && x == 0 && y == 1) {
    mapThumb[1].style.visibility = "visible";
    mapNav[2].style.backgroundColor = colorSegment;
    mapNav[2].style.opacity = opaciSegment;
  }

  if (flip == 90 && x == 0 && y == 1) {
    mapThumb[0].style.visibility = "visible";
    mapNav[0].style.backgroundColor = colorSegment;
    mapNav[0].style.opacity = opaciSegment;
  }

  if (flip == -90 && x == 0 && y == 1) {
    mapThumb[5].style.visibility = "visible";
    mapNav[3].style.backgroundColor = colorSegment;
    mapNav[3].style.opacity = opaciSegment;
  }

  if (flip == -180 && x == 1 && y == 0) {
    mapThumb[2].style.visibility = "visible";
    mapNav[5].style.backgroundColor = colorSegment;
    mapNav[5].style.opacity = opaciSegment;
  }

  if (flip == -90 && x == 1 && y == 0) {
    mapThumb[3].style.visibility = "visible";
    mapNav[1].style.backgroundColor = colorSegment;
    mapNav[1].style.opacity = opaciSegment;
  }

  if (flip == 90 && x == 1 && y == 0) {
    mapThumb[4].style.visibility = "visible";
    mapNav[4].style.backgroundColor = colorSegment;
    mapNav[4].style.opacity = opaciSegment;
  }
}

//Удаляем предыдущие положение сегмента карты
function clearColorSegment() {
  mapNav.forEach((map) => {
    map.style.backgroundColor = "";
    map.style.opacity = "";
  });
  mapThumb.forEach((thomb) => {
    thomb.style.visibility = "";
  });
}
