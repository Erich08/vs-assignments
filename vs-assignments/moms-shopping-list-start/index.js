'use strict';

const form = document.addItem;
const itemList = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addListItem();
  form.title.value = '';
});

//Creates required elements for the list.
function addListItem() {
  const listItem = document.createElement('li');
  const div = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const saveBtn = document.createElement('button');
  const editInput = document.createElement('input');

  saveBtn.hidden = true;

  //Appends li to unordered list
  itemList.append(listItem);

  //Appends the div with the value of the input on form to the li
  div.textContent = form.title.value;
  listItem.append(div);

  //Appends edit/delete/save buttons to li
  editBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';
  saveBtn.textContent = 'Save';
  editBtn.classList.add('edit');
  deleteBtn.classList.add('delete');
  saveBtn.classList.add('save');

  listItem.append(editBtn, saveBtn, deleteBtn);

  //Edit functionality
  editBtn.addEventListener('click', () => {
    const divText = div.textContent;
    console.log(divText);
    editInput.setAttribute('name', 'testName');
    editInput.setAttribute('type', 'text');
    div.textContent = '';
    editInput.value = divText;
    div.append(editInput);
    editBtn.hidden = true;
    saveBtn.hidden = false;
  });

  //   Save functionality
  saveBtn.addEventListener('click', () => {
    editBtn.hidden = false;
    saveBtn.hidden = true;
    editInput.hidden = true;
    div.append(editInput.value);
  });

  //Delete functionality
  deleteBtn.addEventListener('click', () => {
    div.parentElement.remove();
  });
}
