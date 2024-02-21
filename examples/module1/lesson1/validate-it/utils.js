import { clearedMessage, messageInValid, messageValid } from './constants.js';

export const setMessage = (isValid) => {
  const message = document.getElementById('result');

  return isValid
    ? (message.innerHTML = messageValid)
    : (message.innerHTML = messageInValid);
};

export const clearMessage = () => {
  const message = document.getElementById('result');
  return (message.innerHTML = clearedMessage);
};

export const setSpecialMessage = (customMessage) => {
  const message = document.getElementById('result');
  return (message.innerHTML = customMessage);
};
