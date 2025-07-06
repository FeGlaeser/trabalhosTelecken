// apiInterativa.js

export function configurarAPIInterativa() {
    const btn = document.getElementById('btn-api-interativa');
    if (btn) {
      btn.addEventListener('click', buscarInfo);
    }
  }
  
  async function buscarInfo() {
    const input = document.getElementById('input-api-interativa');
    const valor = input?.value.trim();
    const output = document.getElementById('api-interativa-preview');
  
    if (!valor) {
      alert('Digite um valor para consultar.');
      return;
    }
  
    output.innerHTML = 'Carregando...';
    try {
      const res = await fetch(`https://swapi.dev/api/people/${valor}/`);
      if (!res.ok) throw new Error('Não encontrado ou erro na API');
  
      const data = await res.json();
      output.innerHTML = `
        <div class="api-card">
          <h4>${data.name}</h4>
          <p><strong>Altura:</strong> ${data.height} cm</p>
          <p><strong>Peso:</strong> ${data.mass} kg</p>
          <p><strong>Cor dos olhos:</strong> ${data.eye_color}</p>
        </div>
      `;
    } catch (err) {
      output.innerHTML = `<p class="erro">Erro: ${err.message}</p>`;
    }
  }
  