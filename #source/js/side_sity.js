// Скрипт для работы на стороне sity

// вызов полосы заголовка на стороне sity
let title = document.querySelector(".strip__sity ");
setTimeout(() => {
   title.classList.add("js-activ__title-sity");
}, 1000);

// Работаем со значками на стороне Sity

// получаем все кнопки и вешаем на них клик черезх преобразавание в массив
let itemsSity = Array.from(document.querySelectorAll(".items"));
itemsSity.forEach((item) => item.addEventListener("click", showMenu));

// получаем все элементы к которым нжно прибавить класс, получаем массив для дальнейшеей удобной работы по номерам
let menuChange = Array.from(document.querySelectorAll(".menu"));

// функция навешивания элементов передаем параметр цели (target) в функцию
function showMenu(eventObject) {

   title.classList.remove("js-activ__title-sity");

   // перебираем полученный массив для навешивания класса, удаляем класс со всех элементов массива
   Array.from(menuChange).forEach(item => {
      item.classList.remove('js-add-triger__menu')
   })

   // Активируем классом определнный по номеру элемент для вывода (в данном случае блок меню) свойство таргет обеспечивает определение нужного элемента при клике
   if (itemsSity[0].contains(eventObject.target)) {
      menuChange[0].classList.add("js-add-triger__menu");
   }

   else if (itemsSity[1].contains(eventObject.target)) {
      menuChange[1].classList.add("js-add-triger__menu");
   }

   else if (itemsSity[2].contains(eventObject.target)) {
      menuChange[2].classList.add("js-add-triger__menu");
   }

   else if (itemsSity[3].contains(eventObject.target)) {
      menuChange[3].classList.add("js-add-triger__menu");
   }

   else if (itemsSity[4].contains(eventObject.target)) {
      menuChange[4].classList.add("js-add-triger__menu");
   }

   else if (itemsSity[5].contains(eventObject.target)) {
      menuChange[5].classList.add("js-add-triger__menu");
   }

   else if (itemsSity[6].contains(eventObject.target)) {
      menuChange[6].classList.add("js-add-triger__menu");
   }

}


