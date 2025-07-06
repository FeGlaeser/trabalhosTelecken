// menuEditor.js

export function initializeMenuEditor() {
    document.getElementById('upload-imagem')?.addEventListener('change', handleTopImageUpload);
  }
  
  export function handleTopImageUpload(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imgElement = document.getElementById('imagem-topo');
      imgElement.src = event.target.result;
      imgElement.style.display = 'block';
    };
  
    if (e.target.files[0]) {
      if (!e.target.files[0].type.match('image.*')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
        return;
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  
  export function adicionarItem() {
    const texto = document.getElementById('novo-item-texto').value.trim();
    const imagemInput = document.getElementById('novo-item-imagem');
  
    if (texto === '') {
      alert('Por favor, digite um texto para o item do menu.');
      return;
    }
  
    const menu = document.getElementById('menu');
    if (menu.children.length >= 8) {
      alert('Número máximo de itens do menu atingido (8 itens).');
      return;
    }
  
    const item = document.createElement('div');
    item.className = 'menu-item';
  
    if (imagemInput.files[0]) {
      if (!imagemInput.files[0].type.match('image.*')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
        return;
      }
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.alt = texto;
        item.appendChild(img);
        adicionarTexto(item, texto);
        menu.appendChild(item);
        atualizarEstilo();
      };
      reader.readAsDataURL(imagemInput.files[0]);
    } else {
      adicionarTexto(item, texto);
      menu.appendChild(item);
      atualizarEstilo();
    }
  
    document.getElementById('novo-item-texto').value = '';
    document.getElementById('novo-item-imagem').value = '';
  }
  
  function adicionarTexto(item, texto) {
    const span = document.createElement('span');
    span.contentEditable = true;
    span.textContent = texto;
    span.setAttribute('role', 'textbox');
    item.appendChild(span);
  }
  
  export function removerUltimoItem() {
    const menu = document.getElementById('menu');
    if (menu.lastChild) {
      menu.removeChild(menu.lastChild);
    } else {
      alert('Não há itens para remover.');
    }
  }
  
  export function atualizarEstilo() {
    const menuBg = document.getElementById('menu-bg-color').value;
    const itemBg = document.getElementById('item-bg-color').value;
    const textColor = document.getElementById('text-color').value;
    const fontSize = document.getElementById('font-size').value + 'px';
    const gap = document.getElementById('gap').value + 'px';
    const borderRadius = document.getElementById('border-radius').value + 'px';
  
    const menu = document.getElementById('menu');
    menu.style.backgroundColor = menuBg;
    menu.style.gap = gap;
  
    const itens = menu.querySelectorAll('.menu-item');
    itens.forEach(item => {
      item.style.backgroundColor = itemBg;
      item.style.color = textColor;
      item.style.fontSize = fontSize;
      item.style.borderRadius = borderRadius;
    });
  }
  