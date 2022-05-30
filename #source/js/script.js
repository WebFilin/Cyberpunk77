const cube3D = document.querySelector("._3dbox");
const scene = document.querySelector(".wraper");

let sideLeft = document.querySelector("._3dface__left");
let sideRight = document.querySelector("._3dface__right");

//Синхронизация поворота стрелок и навигации
let sideRotate = 0;

// Кнопки управления поворотом
let allBtn = Array.from(document.querySelectorAll(".buttom"));

window.requestAnimationFrame(() => {
   window.requestAnimationFrame(() => {
      allBtn[0].addEventListener("click", () => animoFlip(1, 0, 0, sideRotate = sideRotate - 90));
      allBtn[1].addEventListener("click", () => animoFlip(1, 0, 0, sideRotate = sideRotate + 90));
      allBtn[2].addEventListener("click", () => animoFlip(0, 1, 0, sideRotate = sideRotate + 90));
      allBtn[3].addEventListener("click", () => animoFlip(0, 1, 0, sideRotate = sideRotate - 90));
   })
})

// Чистим горизонтальную сторону при поворотах
function clearSideHor() {
   sideRight.classList.remove("js-animo_SizeHor");
   sideLeft.classList.remove("js-animo_SizeHor");
}

// Увелечения горизонтальной стороны 
function zoomSideHor(flip) {
   clearSideHor(flip);
   if (flip == -90) {
      sideRight.classList.add("js-animo_SizeHor");
   }
   else if (flip == 90) {
      sideLeft.classList.add("js-animo_SizeHor");
   }
}

// функции поворота куба через переменные css
function animoFlip(x, y, z, flip) {

   cube3D.style.setProperty('--flipZoom', 0.5);
   scene.classList.add("js-add-perspectiv");

   cube3D.style.setProperty('--flipX', +x);
   cube3D.style.setProperty('--flipY', +y);
   cube3D.style.setProperty('--flipZ', +z);
   cube3D.style.setProperty('--flipDeg', +flip + 'deg');

   cube3D.addEventListener("transitionend", () => {
      window.requestAnimationFrame(() => {
         window.requestAnimationFrame(() => {
            cube3D.style.setProperty('--flipZoom', 1);
            scene.classList.remove("js-add-perspectiv");
            zoomSideHor(flip);
         })
      })
   })
   //Синхронизация кнопок управления и навигационного блока
   sideRotate = flip;

   changeMapNavSegmVert(x, y, z, flip);
   bottomHidden(x, y, z, flip);
   clearSideHor(flip);
   animoStartGuns(x, y, z, flip);
   animoStartCyber(x, y, z, flip);
   animoStartCars(x, y, z, flip);
}


// Скрытие кнопок управления при повороте по разным сторонам
function bottomHidden(x, y, z, flip) {

   if (flip == 0 && x == 0 && y == 1) {
      allBtn[0].style.visibility = "visible";
      allBtn[1].style.visibility = "visible";
      allBtn[2].style.visibility = "visible";
      allBtn[3].style.visibility = "visible";
   }

   else if (flip == 0 && x == 1 && y == 0) {
      allBtn[0].style.visibility = "visible";
      allBtn[1].style.visibility = "visible";
      allBtn[2].style.visibility = "visible";
      allBtn[3].style.visibility = "visible";
   }

   else if (flip == 90 && x == 1 && y == 0) {
      allBtn[0].style.visibility = "visible";
      allBtn[1].style.visibility = "hidden";
      allBtn[2].style.visibility = "hidden";
      allBtn[3].style.visibility = "hidden";
   }

   else if (flip == -90 && x == 1 && y == 0) {
      allBtn[0].style.visibility = "visible";
      allBtn[1].style.visibility = "visible";
      allBtn[2].style.visibility = "hidden";
      allBtn[3].style.visibility = "hidden";
   }

   else if (flip == -180 && x == 1 && y == 0) {
      allBtn[0].style.visibility = "hidden";
      allBtn[1].style.visibility = "visible";
      allBtn[2].style.visibility = "hidden";
      allBtn[3].style.visibility = "hidden";
   }

   else if (flip == 90 && x == 0 && y == 1) {
      allBtn[0].style.visibility = "hidden";
      allBtn[1].style.visibility = "hidden";
      allBtn[2].style.visibility = "hidden";
      allBtn[3].style.visibility = "visible";
   }

   else if (flip == -90 && x == 0 && y == 1) {
      allBtn[0].style.visibility = "hidden";
      allBtn[1].style.visibility = "hidden";
      allBtn[2].style.visibility = "visible";
      allBtn[3].style.visibility = "hidden";
   }
}

// Перезапуск анимаций

function animoStartGuns(x, y, z, flip) {

   let allInfoGuns = document.querySelector(".all__info-guns");
   let ItemsGuns = document.querySelector(".content__items-guns");
   let displInfoGuns = Array.from(document.querySelectorAll(".info__guns"))


   if (flip == 90 && x == 1 && y == 0) {
      allInfoGuns.classList.add("js-add-all__info-guns");
      ItemsGuns.classList.add("js-add-items-guns");
   }

   else if (flip !== 90) {
      allInfoGuns.classList.remove("js-add-all__info-guns");
      ItemsGuns.classList.remove("js-add-items-guns");
      displInfoGuns.forEach(item => {
         item.classList.remove('js-add-triger__info-guns');
      })
   }

   else if (y == 1) {
      allInfoGuns.classList.remove("js-add-all__info-guns");
      ItemsGuns.classList.remove("js-add-items-guns");
      displInfoGuns.forEach(item => {
         item.classList.remove('js-add-triger__info-guns');
      })
   }

}

function animoStartCyber(x, y, z, flip) {
   let cyberware = document.querySelector(".body__cyberware");

   let implantAll = Array.from(document.querySelectorAll(".cyber__info "))

   if (flip == -180 && x == 1) {

      setTimeout(() => {
         cyberware.classList.add("js-add-cyberware");
      }, 1500)
   }

   else if (flip !== -180) {
      cyberware.classList.remove("js-add-cyberware");
      implantAll.forEach(item => {
         item.classList.remove('js-add-triger__implants');
      })
   }
}

function animoStartCars(x, y, z, flip) {
   let cars = document.querySelector(".title-cars");
   if (flip == 90 && y == 1) {

      cube3D.addEventListener("transitionend", () => {
         window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
               cars.classList.add("js-add-cars__title");

            })
         })
      })
   }

   else if (flip !== 90) {
      cars.classList.remove("js-add-cars__title");
   }
}