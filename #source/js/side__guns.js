// получаем все кнопки и вешаем на них клик черезх преобразавание в массив
let itemsGuns = Array.from(document.querySelectorAll(".items__guns"));
itemsGuns.forEach((item) => item.addEventListener("click", showMenu));
let infoGunsTypes = document.querySelector(".all__info-guns")

// получаем все элементы к которым нжно прибавить класс, получаем массив для дальнейшеей удобной работы по номерам
let InfoGuns = Array.from(document.querySelectorAll(".info__guns"));

// функция навешивания элементов передаем параметр цели (target) в функцию
function showMenu(eventObject) {

   // перебираем полученный массив для навешивания класса, удаляем класс со всех элементов массива

   InfoGuns.forEach(item => {
      item.classList.remove('js-add-triger__info-guns');
   })

   // Скрываем стартовое меню с общим описанием
   infoGunsTypes.classList.remove("js-add-all__info-guns");

   if (itemsGuns[0].contains(eventObject.target)) {
      InfoGuns[0].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[1].contains(eventObject.target)) {
      InfoGuns[1].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[2].contains(eventObject.target)) {
      InfoGuns[2].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[3].contains(eventObject.target)) {
      InfoGuns[3].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[4].contains(eventObject.target)) {
      InfoGuns[4].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[5].contains(eventObject.target)) {
      InfoGuns[5].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[6].contains(eventObject.target)) {
      InfoGuns[6].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[7].contains(eventObject.target)) {
      InfoGuns[7].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[8].contains(eventObject.target)) {
      InfoGuns[8].classList.add("js-add-triger__info-guns");
   }

   else if (itemsGuns[9].contains(eventObject.target)) {
      InfoGuns[9].classList.add("js-add-triger__info-guns");
   }

}

