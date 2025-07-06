// headerEditor.js

let selectedMenuItem = null;

export function initializeHeaderEditor() {
  document.getElementById('btn-add-logo')?.addEventListener('click', addHeaderLogo);
  document.getElementById('btn-add-item')?.addEventListener('click', addMenuItem);
  document.getElementById('btn-change-style-item')?.addEventListener('click', applyStyleToSelectedItem);

  const menuList = document.getElementById('list-items-header-preview');
  menuList?.addEventListener('click', handleMenuListClick);
}

function addHeaderLogo() {
  const logoInput = document.getElementById('input-logo');
  const logoPreview = document.getElementById('logo-header-preview');
  const file = logoInput.files[0];

  if (!file || !file.type.match('image.*')) {
    alert('Por favor, selecione um arquivo de imagem válido.');
    return;
  }

  const tempUrl = URL.createObjectURL(file);
  logoPreview.src = tempUrl;
  logoPreview.alt = 'Logo da Empresa';

  logoPreview.onload = () => {
    URL.revokeObjectURL(tempUrl);
    logoPreview.style.display = 'block';
  };
}

function addMenuItem() {
  const inputField = document.getElementById('text-item');
  const inputText = inputField.value.trim();

  if (inputText === '') {
    alert('Por favor, digite um texto para o item do menu.');
    return;
  }

  const menuList = document.getElementById('list-items-header-preview');
  if (menuList.children.length >= 6) {
    alert('Número máximo de itens do menu atingido (6 itens).');
    return;
  }

  const newItem = createMenuItemElement(inputText);
  menuList.appendChild(newItem);
  inputField.value = '';
}

function createMenuItemElement(text) {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.tabIndex = 0;

  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  paragraph.contentEditable = true;
  paragraph.setAttribute('role', 'textbox');

  let originalText = text;
  paragraph.addEventListener('focus', () => {
    originalText = paragraph.textContent;
    if (selectedMenuItem) selectedMenuItem.classList.remove('selected');
    selectedMenuItem = listItem;
    selectedMenuItem.classList.add('selected');
  });

  paragraph.addEventListener('blur', () => {
    if (paragraph.textContent.trim() === '') {
      paragraph.textContent = originalText;
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '×';
  deleteButton.className = 'close-btn';
  deleteButton.title = 'Remover item';

  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.title = 'Editar item';
  const editIcon = document.createElement('img');
  editIcon.src = './assets/pencil.png';
  editIcon.className = 'icon-edit-btn';
  editIcon.alt = 'Ícone de edição';
  editButton.appendChild(editIcon);

  listItem.appendChild(paragraph);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  return listItem;
}

function handleMenuListClick(event) {
  const target = event.target;
  if (target.classList.contains('close-btn')) {
    const item = target.parentElement;
    if (selectedMenuItem === item) selectedMenuItem = null;
    item.remove();
  } else if (target.tagName === 'P') {
    if (selectedMenuItem) selectedMenuItem.classList.remove('selected');
    selectedMenuItem = target.parentElement;
    selectedMenuItem.classList.add('selected');
  }
}

function applyStyleToSelectedItem() {
  if (!selectedMenuItem) {
    alert('Por favor, selecione um item do menu para aplicar o estilo.');
    return;
  }

  const fontColor = document.getElementById('color-item').value;
  const backgroundColor = document.getElementById('bg-item').value;
  const borderColor = document.getElementById('border-color-item').value;
  const borderRadius = document.getElementById('border-radius-item').value;
  const fontSize = document.getElementById('font-size-item').value;

  selectedMenuItem.style.color = fontColor;
  selectedMenuItem.style.backgroundColor = backgroundColor;
  selectedMenuItem.style.border = `1px solid ${borderColor}`;
  selectedMenuItem.style.borderRadius = `${borderRadius}px`;
  selectedMenuItem.style.fontSize = `${fontSize}px`;
  selectedMenuItem.style.padding = '8px 12px';
}