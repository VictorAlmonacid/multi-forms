const addBtn = document.getElementById('add-form');
const container = document.getElementById('forms-container');
const template = document.getElementById('form-template');

let formCount = 0;

function addForm() {
  const clone = template.content.cloneNode(true);
  formCount++;

  const idInput = clone.querySelector('input[name="id[]"]');
  const nameInput = clone.querySelector('input[name="nombre[]"]');

  const id = `id-${formCount}`;
  const name = `nombre-${formCount}`;

  idInput.id = id;
  nameInput.id = name;

  const [idLabel, nameLabel] = clone.querySelectorAll('label');
  idLabel.htmlFor = id;
  nameLabel.htmlFor = name;

  clone.querySelector('.remove').addEventListener('click', function () {
    this.closest('.form-card').remove();
  });

  container.appendChild(clone);
}

addBtn.addEventListener('click', addForm);


