// exportador.js

export function mostrarCodigo() {
    const htmlFinal = gerarHTMLCompleto();
    document.getElementById('codigo-html').value = htmlFinal;
  }
  
  export function salvarCodigo() {
    const htmlFinal = gerarHTMLCompleto();
    try {
      localStorage.setItem('codigoHTML', htmlFinal);
      alert('Código HTML salvo com sucesso!');
    } catch (e) {
      alert('Erro ao salvar código: ' + (e.message || e));
    }
  }
  
  export function recuperarCodigo() {
    const salvo = localStorage.getItem('codigoHTML');
    if (salvo) {
      document.getElementById('codigo-html').value = salvo;
    } else {
      alert('Nenhum código salvo encontrado.');
    }
  }
  
  export function limparStorage() {
    if (confirm('Tem certeza que deseja limpar os dados salvos?')) {
      localStorage.clear();
      alert('LocalStorage limpo com sucesso.');
    }
  }
  
  function gerarHTMLCompleto() {
    const previewContent = document.querySelector('#preview').innerHTML;
  
    const cabecalho = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Gerada</title>
    <style>${extrairCSS()}</style>
  </head>
  <body>
  `;
  
    const rodape = `</body>\n</html>`;
    return cabecalho + processarImagens(previewContent) + rodape;
  }
  
  function extrairCSS() {
    return `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: Arial, sans-serif; line-height: 1.6; }
      /* Outros estilos podem ser adicionados aqui. */
    `;
  }
  
  function processarImagens(content) {
    return content;
  }
  