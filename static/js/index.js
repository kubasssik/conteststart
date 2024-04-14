
document.querySelector('.burger-btn').addEventListener('click', toggleMenu);
function toggleMenu() {
    for (let i = 0; i < this.children.length; i++) this.children[i].classList.toggle('active')  
    document.querySelector('.burger-nav').classList.toggle('active');
  }








//POPUP
// Получаем ссылку на кнопку
var open_popup = document.getElementById('open_popup');
var open_popup_mobile = document.getElementById('open_popup_mobile');
// Получаем ссылку на всплывающее окно
var popup = document.getElementById('myPopup');
// Получаем ссылку на кнопку закрытия
var span = document.getElementsByClassName('close')[0];

// Когда пользователь нажимает на кнопку закрытия, скрываем всплывающее окно
span.onclick = function() {
  popup.style.display = 'none';
}
// Когда пользователь нажимает за пределами всплывающего окна, скрываем его
window.onclick = function(event) {
  if (event.target == popup) popup.style.display = 'none';
}
// Функция для отображения всплывающего окна
function showPopup() { 
  popup.style.display = 'block';
}
//открываем окно
open_popup.onclick = showPopup;
open_popup_mobile.onclick = showPopup;