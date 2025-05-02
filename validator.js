 function validateInput(input) {
    const type = input.dataset.type;
    const value = input.value.trim();
    const fieldName = input.dataset.name || 'Este campo';
  
    if (!type) return null;
  
    if (!value) {
      return `El campo ${fieldName} es obligatorio.`;
    }
  
    try {
      if (type === 'string') {
        const min = parseInt(input.dataset.minlength || 0);
        const max = parseInt(input.dataset.maxlength || Infinity);
        if (value.length < min || value.length > max) {
          throw new Error();
        }
      }
  
      if (type === 'number') {
        const number = parseFloat(value);
        const min = parseFloat(input.dataset.min || -Infinity);
        const max = parseFloat(input.dataset.max || Infinity);
        if (isNaN(number) || number < min || number > max) {
          throw new Error();
        }
      }
  
      if (type === 'bool') {
        if (value !== 'true' && value !== 'false') {
          throw new Error();
        }
      }
  
      if (type === 'double') {
        const number = parseFloat(value);
        if (isNaN(number)) {
          throw new Error();
        }
      }
  
      return null; 
  
    } catch (e) {
      return `El campo ${fieldName} no es válido.`;
    }
  }

  function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) errorDiv.textContent = message;
    input.classList.add('invalid');
  }
  
  function clearError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) errorDiv.textContent = '';
    input.classList.remove('invalid');
  }