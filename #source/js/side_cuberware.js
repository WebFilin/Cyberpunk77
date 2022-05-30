// получаем все кнопки и вешаем на них клик черезх преобразавание в массив
let itemsImplant = Array.from(document.querySelectorAll(".items__body"));
itemsImplant.forEach((item) => item.addEventListener("click", showMenu));

// получаем все элементы к которым нжно прибавить класс, получаем массив для дальнейшеей удобной работы по номерам
let InfoImplant = Array.from(document.querySelectorAll(".cyber__info"));

// функция навешивания элементов передаем параметр цели (target) в функцию
function showMenu(eventObject) {

   // перебираем полученный массив для навешивания класса, удаляем класс со всех элементов массива
   Array.from(InfoImplant).forEach(item => {
      item.classList.remove('js-add-triger__implants')
   })

   if (itemsImplant[0].contains(eventObject.target)) {
      InfoImplant[0].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[1].contains(eventObject.target)) {
      InfoImplant[1].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[2].contains(eventObject.target)) {
      InfoImplant[2].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[3].contains(eventObject.target)) {
      InfoImplant[3].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[4].contains(eventObject.target)) {
      InfoImplant[4].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[5].contains(eventObject.target)) {
      InfoImplant[5].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[6].contains(eventObject.target)) {
      InfoImplant[6].classList.add("js-add-triger__implants");
   }

   else if (itemsImplant[7].contains(eventObject.target)) {
      InfoImplant[7].classList.add("js-add-triger__implants");
   }

}

