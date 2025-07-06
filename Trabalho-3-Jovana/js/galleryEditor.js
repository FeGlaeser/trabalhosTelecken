// galleryEditor.js

export function initializeGalleryEditor() {
    // Inicialização futura se necessário
  }
  
  export function adicionarCard() {
    const inputImg = document.getElementById('imagem-card');
    const inputTexto = document.getElementById('texto-card').value.trim();
  
    if (inputTexto === '') {
      alert('Por favor, digite uma descrição para o card.');
      return;
    }
  
    const galeria = document.getElementById('galeria');
    if (galeria.children.length >= 12) {
      alert('Número máximo de cards atingido (12 cards).');
      return;
    }
  
    const card = document.createElement('div');
    card.className = 'card';
  
    if (inputImg.files[0]) {
      if (!inputImg.files[0].type.match('image.*')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
        return;
      }
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.alt = inputTexto;
        card.appendChild(img);
        adicionarDescricao(card, inputTexto);
        galeria.appendChild(card);
        atualizarEstiloCards();
      };
      reader.readAsDataURL(inputImg.files[0]);
    } else {
      adicionarDescricao(card, inputTexto);
      galeria.appendChild(card);
      atualizarEstiloCards();
    }
  
    inputImg.value = '';
    document.getElementById('texto-card').value = '';
  }
  
  function adicionarDescricao(card, texto) {
    const p = document.createElement('p');
    p.textContent = texto;
    p.contentEditable = true;
    p.setAttribute('role', 'textbox');
    card.appendChild(p);
  }
  
  export function removerUltimoCard() {
    const galeria = document.getElementById('galeria');
    if (galeria.lastChild) {
      galeria.removeChild(galeria.lastChild);
    } else {
      alert('Não há cards para remover.');
    }
  }
  
  export function atualizarEstiloCards() {
    const bg = document.getElementById('card-bg-color').value;
    const textColor = document.getElementById('card-text-color').value;
    const fontSize = document.getElementById('card-font-size').value + 'px';
    const radius = document.getElementById('card-border-radius').value + 'px';
    const gap = document.getElementById('card-gap').value + 'px';
  
    const galeria = document.getElementById('galeria');
    galeria.style.gap = gap;
  
    const cards = galeria.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.backgroundColor = bg;
      card.style.color = textColor;
      card.style.fontSize = fontSize;
      card.style.borderRadius = radius;
    });
  }
  