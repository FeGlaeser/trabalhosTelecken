// apiMultiFetch.js

export function configurarAPIsParalelas() {
    const botao = document.getElementById('btn-fetch-multiplas-apis');
    if (botao) {
      botao.addEventListener('click', buscarMultiplasAPIs);
    }
  }
  
  async function buscarMultiplasAPIs() {
    const container = document.getElementById('multi-api-preview');
    container.innerHTML = 'Carregando...';
  
    try {
      const [user, post, planeta] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
        fetch('https://swapi.dev/api/planets/1/').then(r => r.json())
      ]);
  
      container.innerHTML = `
        <div class="api-card">
          <h4>Usuário: ${user.name}</h4>
          <p><strong>Email:</strong> ${user.email}</p>
        </div>
  
        <div class="api-card">
          <h4>Postagem: ${post.title}</h4>
          <p>${post.body}</p>
        </div>
  
        <div class="api-card">
          <h4>Planeta: ${planeta.name}</h4>
          <p><strong>Clima:</strong> ${planeta.climate}</p>
          <p><strong>População:</strong> ${planeta.population}</p>
        </div>
      `;
    } catch (error) {
      container.innerHTML = `<p class="erro">Erro ao buscar dados: ${error.message}</p>`;
    }
  }
  