//Header creation/appending/styling
const header = document.getElementById('header');
const h1 = document.createElement('h1');
const messages = document.querySelector('.messages');
const clearBtn = document.getElementById('clear-button');
const themeChange = document.getElementById('theme-drop-down');
const leftConvo = document.getElementsByClassName('left');
const rightConvo = document.getElementsByClassName('right');

h1.classList.add('header');
h1.textContent = 'JavaScript Made This!';
header.append(h1);

//Span for name/paragraph
let para = document.createElement('p');

para.innerHTML +=
  "<span class='name'>Erich </span> <span>wrote the JavaScript</span>";
header.append(para);
para.style.textAlign = 'center';

//Event listener for clear button
clearBtn.addEventListener('click', (clearText) => {
  messages.textContent = '';
});

//Theme color change
themeChange.addEventListener('change', (changeTheme) => {
  if (themeChange.value === 'theme-two') {
    for (let i = 0; i < leftConvo.length; i++) {
      Object.values(leftConvo)[i].style.backgroundColor = 'red';
      Object.values(rightConvo)[i].style.backgroundColor = 'black';
      Object.values(rightConvo)[i].style.color = 'white';
    }
  } else {
    for (let i = 0; i < leftConvo.length; i++) {
      Object.values(leftConvo)[i].style.backgroundColor = 'burlywood';
      Object.values(rightConvo)[i].style.backgroundColor = 'lightblue';
      Object.values(rightConvo)[i].style.color = 'black';
    }
  }
});
