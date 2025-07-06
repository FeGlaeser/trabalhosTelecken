// main.js - Ponto de entrada do editor

import { initializeHeaderEditor } from './headerEditor.js';
import { initializeMenuEditor } from './menuEditor.js';
import { initializeGalleryEditor } from './galleryEditor.js';
import { initializeFormEditor } from './formEditor.js';
import { initializeFooterEditor } from './footerEditor.js';
import { mostrarCodigo, salvarCodigo, recuperarCodigo, limparStorage } from './exportador.js';
import { configurarAPIInterativa } from './apiInterativa.js';
import { configurarAPIsParalelas } from './apiMultiFetch.js';

// Quando o DOM estiver pronto, inicializar todos os módulos
document.addEventListener('DOMContentLoaded', () => {
  initializeHeaderEditor();
  initializeMenuEditor();
  initializeGalleryEditor();
  initializeFormEditor();
  initializeFooterEditor();

  configurarAPIInterativa();
  configurarAPIsParalelas();

  // Botões de exportação
  document.getElementById('btn-mostrar-codigo')?.addEventListener('click', mostrarCodigo);
  document.getElementById('btn-salvar')?.addEventListener('click', salvarCodigo);
  document.getElementById('btn-recuperar')?.addEventListener('click', recuperarCodigo);
  document.getElementById('btn-limpar')?.addEventListener('click', limparStorage);
});
