// formEditor.js

export function initializeFormEditor() {
    document.getElementById('form-title')?.addEventListener('input', () => {
      const title = document.getElementById('form-title').value || 'Título do Formulário';
      document.getElementById('form-preview-title').textContent = title;
    });
  }
  
  export function adicionarCampo() {
    const tipo = document.getElementById('field-type').value;
    const labelText = document.getElementById('field-label').value.trim();
  
    if (labelText === '') {
      alert('Por favor, digite um label para o campo.');
      return;
    }
  
    const formFields = document.getElementById('form-fields');
    if (formFields.children.length >= 10) {
      alert('Número máximo de campos atingido (10 campos).');
      return;
    }
  
    const fieldWrapper = document.createElement('div');
    fieldWrapper.className = 'form-item';
  
    const label = document.createElement('label');
    label.textContent = labelText || tipo;
    label.contentEditable = true;
    label.setAttribute('role', 'textbox');
  
    let input;
    if (tipo === 'select') {
      input = document.createElement('select');
      ['Opção 1', 'Opção 2'].forEach(op => {
        const option = document.createElement('option');
        option.textContent = op;
        input.appendChild(option);
      });
    } else if (tipo === 'radio') {
      const radioGroup = document.createElement('div');
      radioGroup.className = 'radio-group';
      for (let i = 1; i <= 2; i++) {
        const wrapper = document.createElement('div');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radio-' + Math.random().toString(36).substr(2, 5);
        radio.id = radio.name + '-' + i;
        const radioLabel = document.createElement('label');
        radioLabel.textContent = `Opção ${i}`;
        radioLabel.htmlFor = radio.id;
        radioLabel.contentEditable = true;
        radioLabel.setAttribute('role', 'textbox');
        wrapper.appendChild(radio);
        wrapper.appendChild(radioLabel);
        radioGroup.appendChild(wrapper);
      }
      input = radioGroup;
    } else {
      input = document.createElement('input');
      input.type = tipo;
      input.placeholder = `Digite ${labelText.toLowerCase()}`;
    }
  
    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
    formFields.appendChild(fieldWrapper);
    atualizarEstiloFormulario();
  }
  
  export function removerUltimoCampo() {
    const formFields = document.getElementById('form-fields');
    if (formFields.lastChild) {
      formFields.removeChild(formFields.lastChild);
    } else {
      alert('Não há campos para remover.');
    }
  }
  
  export function atualizarEstiloFormulario() {
    const bg = document.getElementById('form-bg').value;
    const border = document.getElementById('form-border').value;
    const textColor = document.getElementById('form-text').value;
    const radius = document.getElementById('form-radius').value + 'px';
    const fontSize = document.getElementById('form-font').value + 'px';
  
    const formPreview = document.getElementById('form-preview');
    formPreview.style.backgroundColor = bg;
    formPreview.style.border = `1px solid ${border}`;
    formPreview.style.borderRadius = radius;
    formPreview.style.color = textColor;
    formPreview.style.fontSize = fontSize;
  
    const items = formPreview.querySelectorAll('.form-item');
    items.forEach(item => item.style.marginBottom = '15px');
  
    const labels = formPreview.querySelectorAll('label');
    labels.forEach(label => {
      label.style.display = 'block';
      label.style.marginBottom = '8px';
      label.style.fontWeight = '500';
    });
  
    const inputs = formPreview.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.style.padding = '8px 12px';
      input.style.border = `1px solid ${border}`;
      input.style.borderRadius = radius;
      input.style.width = '100%';
      input.style.fontSize = fontSize;
    });
  }
  