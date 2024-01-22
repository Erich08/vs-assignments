const colors = ['red', 'blue', 'green'];

//Changed 'onclick' to 'click.'
document.getElementById('add').addEventListener('click', function (e) {
  const subItem = createSubItem(e);
  document.getElementById('list').appendChild(subItem);
});

//Line 13 added 'document.createElement // document. was missing. //Line 12 added 'colors.length' length was originally missing.
function createDropDown() {
  const dropDown = document.createElement('select');
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement('option');
    option.innerHTML = colors[i];
    option.value = colors[i];
    dropDown.append(option);
  }

  //Line 21 added 'parentElement' and '.style.backgroundColor' //Also changed 'onchange' to 'change.'
  dropDown.addEventListener('change', function (e) {
    e.target.parentElement.style.backgroundColor = e.target.value;
  });
  return dropDown;
}

function createSubItem(e) {
  const subItem = document.createElement('div');
  var subItemValue = document.getElementById('input');
  subItem.textContent = subItemValue.value;
  subItemValue.value = '';
  const dropDown = createDropDown();
  subItem.appendChild(dropDown);
  subItem.setAttribute('class', 'subItem');
  return subItem;
}
