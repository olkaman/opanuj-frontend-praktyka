import { ZodError } from 'zod';
import { FormDataType, TravelFormSchema } from './form-schema';

const form = document.querySelector('#flight-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  validate(formValues as FormDataType);
});

function validate(values: FormDataType) {
  try {
    TravelFormSchema.parse(values);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log('zoood', e);
      renderErrors(e);
    }
  }
}

function renderErrors(e: ZodError) {
  const errorsContainer = document.querySelector('#errors');
  e.errors.forEach((error) => {
    const errorText = document.createElement('li');
    errorText.textContent = error.message;
    errorsContainer?.appendChild(errorText);
  });
}
