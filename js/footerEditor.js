// footerEditor.js

export function initializeFooterEditor() {
    document.getElementById('rodape-texto')?.addEventListener('input', () => {
      const texto = document.getElementById('rodape-texto').value || 'Texto do rodapé';
      document.getElementById('rodape-preview').textContent = texto;
    });
  }
  
  export function atualizarRodape() {
    const fonte = document.getElementById('rodape-fonte').value + 'px';
    const corFonte = document.getElementById('rodape-cor-fonte').value;
    const bg = document.getElementById('rodape-bg').value;
    const align = document.getElementById('rodape-align').value;
  
    const rodapePreview = document.getElementById('rodape-preview');
    rodapePreview.style.fontSize = fonte;
    rodapePreview.style.color = corFonte;
    rodapePreview.style.backgroundColor = bg;
    rodapePreview.style.textAlign = align;
  }
  