window.onload = function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTop = headerHeight;
  };
  


const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const links = dropDownMenu.querySelectorAll('a');

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

for (const link of links) {
  link.onclick = function() {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  };
}





const audio01 = new Audio();
audio01.src = "./.sound/gatinhomiando01.mp3";

const audio02 = new Audio();
audio02.src = "./.sound/gatinhomiando02.mp3";

const audio03 = new Audio();
audio03.src = "./.sound/gatinhomiando03.mp3";