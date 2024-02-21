import { clearMessage, setMessage, setSpecialMessage } from './utils.js';
import { rangeAndIfEvenValidation } from './validationRules.js';
import { emptyMessage } from './constants.js';

function validator() {
  const input = document.getElementById('input');
  const validationButton = document.getElementById('validation');
  const clearButton = document.getElementById('clearing');

  if (!validationButton || !input || !clearButton)
    throw new Error('No element found!');

  validationButton.addEventListener('click', () => {
    const numberValue = Number(input.value);

    if (input.value !== '') {
      setMessage(rangeAndIfEvenValidation(numberValue, 0, 100));
    } else {
      setSpecialMessage(emptyMessage);
    }
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    clearMessage();
  });
}

validator();
