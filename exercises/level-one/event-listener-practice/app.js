let square = document.getElementById('square');

square.addEventListener('mouseover', (blue) => {
  square.style.backgroundColor = 'blue';
});

square.addEventListener('mousedown', (red) => {
  square.style.backgroundColor = 'red';
});

square.addEventListener('mouseup', (yellow) => {
  square.style.backgroundColor = 'yellow';
});

square.addEventListener('dblclick', (green) => {
  square.style.backgroundColor = 'green';
});

document.body.addEventListener('wheel', (orange) => {
  square.style.backgroundColor = 'orange';
});
