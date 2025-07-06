# 🧩 Gerador de Páginas HTML Dinâmicas

Este projeto é um editor visual para criação de páginas HTML dinâmicas com suporte a múltiplas seções e integração com APIs públicas.

## 🔧 Tecnologias
- HTML5 + CSS3
- JavaScript (ES6 Modules)
- APIs públicas com `fetch` e `Promise.all`

## 📦 Funcionalidades

- Editor modular com import/export
- Adição dinâmica de cabeçalho, menu, galeria, formulário e rodapé
- Integração com API interativa (Star Wars)
- Consulta de múltiplas APIs simultaneamente
- Exportação e salvamento do HTML gerado
- Responsividade básica
- Validação compatível com [W3C Validator](https://validator.w3.org/)

## 🧪 APIs Utilizadas

- [SWAPI](https://swapi.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [SWAPI Planets](https://swapi.dev/api/planets/)
- [FIPE API](https://deividfortuna.github.io/fipe/) (pode ser integrada opcionalmente)

## 📂 Estrutura

projeto/
├── index.html
├── index.css
├── editor.css
├── preview.css
├── CNAME.txt (opcional para GitHub Pages custom domain)
├── js/
│ ├── main.js
│ ├── headerEditor.js
│ ├── menuEditor.js
│ ├── galleryEditor.js
│ ├── formEditor.js
│ ├── footerEditor.js
│ ├── exportador.js
│ ├── apiInterativa.js
│ ├── apiMultiFetch.js
├── assets/
│ └── pencil.png
└── README.md

## 🚀 Como Executar

1. Clone o repositório ou abra via GitHub Pages.
2. Edite a página com os controles fornecidos.
3. Exporte o HTML usando os botões de exportação.

## 📌 Autor e Avaliação

- Este trabalho faz parte da disciplina de JavaScript - Trabalho 2
- Prazo de entrega: **06 de julho**
- Correções: **07 a 08 de julho**
